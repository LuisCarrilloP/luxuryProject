const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
  navlinks.classList.toggle('mobile-menu')
})

let lastScrollTop
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', function(){
  let scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop
  if (scrollTop > lastScrollTop){
    navbar.style.top = '-80px'
  }else{
    navbar.style.top = '0'
  }
  lastScrollTop = scrollTop
})