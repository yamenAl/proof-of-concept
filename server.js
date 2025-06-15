
import express from 'express'
import { Liquid } from 'liquidjs'

const app = express()


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



// collect 6 unique roles from API
  while (rolesSet.size < 6) {
    const roleResponse = await fetch(apiRole);

    const json = await roleResponse.json()
    if (json && json.role) {
      rolesSet.add(json.role)
    }
  }

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
      roleObject: { roleSpecificData }
    })
  } catch (err) {
    console.error(err)
    res.status(500).send('Error loading role data')
  }
})

// Start server
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Server running at http://localhost:${app.get('port')}/`)
})

