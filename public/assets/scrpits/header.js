// Create a list of roles
const rolesObject = ["Controller", "Mechanic", "Grower", "Salesman", "Orderer", "Boss"];

// Get the <ul> element where the roles will be added
const roleList = document.getElementById("role-list");

// Loop through each role and add it as a list item with a link
rolesObject.forEach(role => {
  const li = document.createElement("li"); // create list item
  const a = document.createElement("a");   // create anchor link

  a.href = `/${role.toLowerCase()}`;       // set the URL based on role
  a.textContent = role;                    // set the link text

  li.appendChild(a);                       // put link inside list item
  roleList.appendChild(li);                // add list item to the list
});


// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the toggle button, menu, and close button
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.menu-close');

  // Open the menu when the toggle is clicked
  toggle.addEventListener('click', () => {
    menu.classList.add('open');
  });

  // Close the menu when the close button is clicked
  close.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});
