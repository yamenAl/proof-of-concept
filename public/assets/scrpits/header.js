 document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.querySelector('.menu-toggle');
      const close = document.querySelector('.menu-close');
      const menu = document.querySelector('.side-menu');
      const body = document.body;

      toggle.addEventListener('click', () => {
        menu.classList.add('open');
        body.classList.add('menu-open');
      });

      close.addEventListener('click', () => {
        menu.classList.remove('open');
        body.classList.remove('menu-open');
      });
    });