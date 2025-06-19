# Flesk Digtal?
The past few weeks I worked on Flesk, a learning platform where you can explore six different roles: Controller, Mechanic, Grower, Salesman, Orderer, and Boss. The main goal was to build a working platform with dynamic pages, favorites, and client-side + server-side data handling using modern frontend and backend tools.

[Live link to the project.](https://proof-of-concept-shoo.onrender.com/)

# What is Flesk Digtal?
Flesk is an educational prototype built with Node.js, Express, LiquidJS, and vanilla JavaScript. It connects to a public API to load people in different roles, and allows the user to view, favorite, and revisit them.
<ul><li>
 View a homepage with role cards
</li>
<li>Click on each role to see a detail page</li>
<li>Navigate easily on mobile and desktop</li>
<li>Add or remove people as favorites</li>
<li>Navigate easily on mobile and desktop</li>
</ul>

# Project Goal
Create an interactive platform with role pages and user information. Allow users to mark favorites and navigate easily. Combine frontend and backend logic using real APIs.




## Inhoudsopgave

  * [Description](#description)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)


## Description

### Homepage

- Lists 6 roles fetched dynamically from the Fresk API.
- Roles are displayed as clickable cards.
- Includes a skeleton loader while data is loading.
- Mobile-friendly navigation menu and responsive layout.

### Role Detail Page

- Dynamically generated per role (e.g. `/salesman`, `/grower`).
- Shows general info (`commonData`) and specific data (`roleSpecificData`) from the API.
- Includes a button to "Add to Favorites" or "Remove".

### Favorites Page

- Stores favorite people in memory using POST requests.
- Lists favorites with role, name, and image.
- Allows removal with confirmation popup.

### Error Page

- Custom 404 page styled with SVG and buttons.
- Shows when visiting a route that doesn’t exist.

---


<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->


## Homepage (Roles Overview)

#### 1 & 2 – Functional & Reliable
- Roles are dynamically fetched via the `/api/roles` endpoint.
- Roles list is rendered client-side with `<li>` and `<a>` inside `<section>`in the header.
- Skeleton loading is shown while fetching.
## Router 
  https://github.com/yamenAl/proof-of-concept/blob/a18d6e7bb6d87442ce9d3c49f49c5e1fe23c6b6a/server.js#L33-L58

#### 3 – Usable
- Built mobile-first using flexbox.
- Navigation is accessible (keyboard/tab focus).
- Hamburger menu opens and closes smoothly.


#### 4 – Pleasurable
- Smooth hover animation on role cards.
- Nice visually in both dark/light mode.


https://github.com/user-attachments/assets/28ca2fb8-d087-4f2c-8b8f-5b21281fa371

---


### 👤 Role Detail Page (`/:role`)

#### 1 & 2 – Functional & Reliable
- Data fetched from the Fresk API using `fetch()`.
- Rendered with Liquid templates: `commonData` & `roleSpecificData`.
https://github.com/yamenAl/proof-of-concept/blob/a18d6e7bb6d87442ce9d3c49f49c5e1fe23c6b6a/server.js#L62-L84
#### 3 – Usable
- Fully responsive layout using media queries.
- Content is accessible on both small and large screens.
- Supports tab navigation.

#### 4 – Pleasurable
- Smooth content reveal transitions.
-  Smooth hover animation.
-  Dots and scroll effect.
  

https://github.com/user-attachments/assets/5921ff6e-79da-4198-8fc6-4ef2572da248


---

### Favorites Page (`/favorites`)

#### 1 & 2 – Functional & Reliable
- Favorites stored in memory.
- Add/remove done via `POST` form.
- Server-side rendering for reliable display.

https://github.com/yamenAl/proof-of-concept/blob/a18d6e7bb6d87442ce9d3c49f49c5e1fe23c6b6a/server.js#L101-L127

#### 3 – Usable
- Accessible buttons with confirmation before removing.
- Responsive card layout.

#### 4 – Pleasurable
- Visual feedback on action (highlight, hover).
- Layout consistent with homepage cards.


https://github.com/user-attachments/assets/882ed537-f7bc-441c-aee3-47cf52c6e051


---

## Routes and Data

-- `GET /`  
Loads the homepage and shows `index.liquid`.  
- Fetches 6 unique roles from the Fresk API.  
- Renders them server-side with Liquid templates.

-- `GET /:role`  
Loads a specific role page (e.g., `/mechanic`).  
- Fetches role-specific content from the Fresk API.  
- Data includes `commonData` and `roleSpecificData`.  
- Renders with the corresponding `:role.liquid` template.

-- `GET /favorites`  
Displays a list of favorite users.  
- Uses an in-memory array to show saved favorites.  
- Shows name, role, and avatar with remove button.

-- `POST /favorites`  
Adds or removes a person from the favorites list.  
- Checks if the person already exists.  
- If yes, removes; if no, adds them using their name and role.  
- Uses data from the Fresk API for display.

-- `GET /favorites/view/:role/:name`  
Loads a detailed page for a specific favorite.  
- Compares the name with API responses until match is found.  
- Renders the detail view using the same Liquid layout as role pages.

-- `GET /api/roles`  
Returns an array of available roles.  
- Used in client-side JavaScript to dynamically build the menu.  
- Allows for interactive role loading without a page refresh.

-- 404 error 
- Shows a custom error page (`error.liquid`) if no route matches.



## Gebruik
xpress.js – backend & routing

LiquidJS – template engine

Node-fetch – fetch API data

JavaScript – DOM, client-side fetching

CSS – responsive styles & dark mode



## Kenmerken

## Code Standards

### -- HTML / Liquid
-- Use semantic HTML elements like `<section>`, `<main>`, `<ul>`, etc.  
-- Render dynamic data using Liquid syntax: `{{ variable }}`  
-- Add `alt` text for all images to ensure accessibility  

### -- CSS
-- Write mobile-first styles using `@media` queries  
-- Use `--custom-properties` for color, spacing, and other variables  
-- Follow consistent class naming using kebab-case or BEM (e.g., `.role-button`, `.theme--dark`)  

### -- JavaScript
-- Always use `const` or `let` ( no `var`)  
-- Fetch external data using `fetch()` with `.then()` or `async/await`  
-- Wrap all logic in `document.addEventListener('DOMContentLoaded', () => { ... })`  


## Installatie
## Installation

To run this project locally, make sure you have **Node.js** installed.

-- Open the project in your code editor  
-- Install the required packages:

```bash
npm install
```

-- Start the server:

```bash
npm start
```

-- Open the project in your browser:  
[http://localhost:8000](http://localhost:8000)

## Bronnen

-- LiquidJS documentation: [https://liquidjs.com](https://liquidjs.com)  
-- Express.js docs: [https://expressjs.com](https://expressjs.com)  
-- MDN Web Docs (HTML, CSS, JavaScript): [https://developer.mozilla.org](https://developer.mozilla.org)  
-- CSS Tricks: [https://css-tricks.com](https://css-tricks.com)  

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
