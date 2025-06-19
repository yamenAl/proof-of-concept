document.addEventListener('DOMContentLoaded', () => {
  const skeleton = document.getElementById('index-skeleton');
  const content = document.querySelector('.main-content');

  function showContent() {
    skeleton.classList.add('hidden');
    content.classList.remove('hidden');
  }

  fetch('/roles.json') // Or your actual data URL
    .then(res => res.json())
    .then(() => showContent())
    .catch(err => {
      console.warn('Error loading roles:', err);
      showContent(); // Don’t leave the user stuck
    });
});