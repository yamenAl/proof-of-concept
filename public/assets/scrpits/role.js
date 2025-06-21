// Ask the user if they're sure before removing a favorite
function confirmFavoriteAction(isFavorite) {
  if (isFavorite) {
    return confirm("Are you sure you want to remove this favorite?");
  } else {
    return true; // No warning if you're adding a favorite
  }
}

// Run this after the page loads
document.addEventListener("DOMContentLoaded", () => {

  // This function makes a carousel work
  function setupCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector); // find the carousel
    if (!carousel) return; // stop if it doesn't exist

    const slides = carousel.querySelectorAll(".slide");        // get all slides
    const nextButtons = carousel.querySelectorAll(".next-btn"); // get all next buttons
    let current = 0; // start from the first slide

    // Show only one slide at a time
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index); // hide others
      });
    }

    // When next button is clicked, go to the next slide
    nextButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        current = (current + 1) % slides.length; // loop back to start
        showSlide(current);
      });
    });

    showSlide(current); // Show the first slide
  }

  // Set up carousels if they exist
  setupCarousel(".product-carousel");
  setupCarousel(".sales-carousel");
});



//loading & sccess state
 document.querySelectorAll('.button-row-center form').forEach(form => {
    form.addEventListener('submit', e => {
      const button = form.querySelector('button');

      // Add loading state
      button.disabled = true;
      const originalText = button.textContent;
      button.textContent = 'Saving...';

      // Show popup
      const popup = document.querySelector('.popup');
      popup.textContent = originalText.includes('Remove') 
        ? 'Removed from favorites' 
        : 'Added to favorites';
      popup.classList.add('show');

      // After delay, reset button (simulate success state)
      setTimeout(() => {
        popup.classList.remove('show');
        button.disabled = false;
        button.textContent = originalText;
      }, 2000);
    });
  });