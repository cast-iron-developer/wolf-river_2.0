export function header() {
  const header = document.querySelector(".main-header");
  const menu_icon = document.querySelector(".menu-icon");
  const menu_btn = document.querySelector("#menu-btn")
  const nav_links = document.querySelectorAll(".nav-link a")
  const body = document.querySelector('body');

  menu_icon.addEventListener('click', (e) => {
    if(!body.classList.contains('no-scroll')){
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  });

  nav_links.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (menu_btn.checked === true){
        console.log('is checked')
        menu_btn.checked = false;
      }
      if (body.classList.contains('no-scroll')){
        body.classList.remove('no-scroll');
      }
    })
  })

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    if (scrollPos > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })
}