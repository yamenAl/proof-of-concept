
import express from 'express'
import { Liquid } from 'liquidjs'

const app = express()


// Utility to check if person/role is in favorites
function isFavorite(personName, role) {
  return favorites.some(f => f.name === personName && f.role === role)
}

app.get('/favicon.ico', (req, res) => res.status(204).end())


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Set up Liquid view engine
const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('views', './views')
app.set('view engine', 'liquid')


const apiRole = "https://fdnd-fresk-api.netlify.app/get-role";

// Doe een fetch naar de data die je nodig hebt


app.get('/', async (req, res) => {
  const rolesSet = new Set()
  const rolesList = Array.from(rolesSet)

 // updata data for the 6 unique roles from API
  let seenRoles = req.query.seen ? req.query.seen.split(',') : []

  let newRole = null
  let attempts = 0
  while (attempts < 6) {
    const roleResponse = await fetch(apiRole);

    const data = await roleResponse.json()
    if (!seenRoles.includes(data.role)) {
      newRole = data.role
      break
    }
    attempts++
  }

  if (newRole) seenRoles.push(newRole)

  res.render('index', { 
    rolesList,
    roles: seenRoles })
})


// Dynamic role route
app.get('/:role', async (req, res) => {
  const role = req.params.role.toLowerCase()
  const apiUrl = `https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${encodeURIComponent(role)}`
  
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const commonData = data.commonData
    const roleSpecificData = data.roleSpecificData

    // Render a role specific page 
    res.render(role, {
      roleName: role,
      commonData,
      roleSpecificData,
      favorites
    })
  } catch (err) {
    console.error(err)
    res.status(500).send('Error loading role data')
  }
})


app.get('/partials/:role/roleSpecificData', async (req, res) => {
  const role = req.params.role
  const apiUrl = `https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${encodeURIComponent(role)}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  res.render('partials/product-catalogs.liquid', {
    products: data.roleSpecificData.productCatalogs
  })
})



// Temporary in-memory store for favorite roles
const favorites = []

app.post('/favorites', async (req, res) => {
  const { role, personName } = req.body

  const apiUrl = `https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${encodeURIComponent(role)}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  const existing = favorites.find(f => f.name === personName && f.role === role)

  if (existing) {
    favorites.splice(favorites.indexOf(existing), 1)
  } else {
    favorites.push({
      name: personName,
      role: role,
      data: {
        commonData: data.commonData,
        roleSpecificData: data.roleSpecificData
      }
    })
  }

  res.redirect('/favorites')
})

app.get('/favorites/view/:role/:name', async function (req, res) {
  const role = req.params.role.toLowerCase()
  const nameSlug = req.params.name.toLowerCase()

  const normalize = str => str.trim().toLowerCase().replace(/ +/g, ' ')

  // Find the matching favorite based on role and slugged name
  const matchedFavorite = favorites.find(fav =>
    fav.role.toLowerCase() === role &&
    normalize(fav.name).includes(nameSlug.replace(/-/g, ' '))
  )

  if (!matchedFavorite) {
    return res.status(404).send('This person is not in your favorites.')
  }

  const targetName = normalize(matchedFavorite.name)
  const apiUrl = `https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${encodeURIComponent(role)}`
  const maxAttempts = 5000
  let matchFound = null

  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()

      const apiName = normalize(data.commonData.displayName)
      console.log(`Attempt ${i + 1}: got ${apiName}, looking for ${targetName}`)

      if (apiName === targetName) {
        matchFound = data
        break
      }
    } catch (error) {
      console.error(' Error fetching data:', error)
      break
    }
  }

  if (!matchFound) {
    return res.status(404).send('Could not find this person after several tries.')
  }

  res.render(role, {
    roleName: role,
    commonData: matchFound.commonData,
    roleSpecificData: matchFound.roleSpecificData,
    isFavorite: true
  })
})







// Start server
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Server running at http://localhost:${app.get('port')}/`)
})

