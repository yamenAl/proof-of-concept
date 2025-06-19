// Only run if browser supports fetch and DOMParser
if ('fetch' in window && 'DOMParser' in window) {
  // Wait until the page is fully loaded
  document.addEventListener("DOMContentLoaded", async () => {
    const roleList = document.getElementById("role-list");

    try {
      // Fetch role data from the API
      const response = await fetch("/api/roles");
      const json = await response.json();

      // Loop through the roles and add them to the list
      json.forEach(role => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `/${role.toLowerCase()}`;
        a.textContent = role;
        li.appendChild(a);
        roleList.appendChild(li);
      });
    } catch (error) {
      // Show message if something went wrong
      console.error("Failed to load roles:", error);
      roleList.innerHTML = "<li>Failed to load roles.</li>";
    }
  });
}
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
