  const track = document.querySelector('.dot-track');
  const dots = document.querySelectorAll('.dot');
  let index = 0;

  function updateSlide() {
    const slideWidth = track.clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      index = parseInt(dot.getAttribute('data-index'));
      updateSlide();
    });
  });

  // Swipe left/right
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  track.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50 && index > 0) index--;
    else if (diff < -50 && index < dots.length - 1) index++;
    updateSlide();
  });

  updateSlide(); 
  
  document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.parentElement
      section.classList.toggle('active')
    })
  })

