const menuButton = document.getElementById("menu-btn");
const mobileMenu = document.querySelector("aside");

let menuOpen = false;

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  if(menuOpen) {
    menuButton.src = './images/menu.png'
    menuOpen = false;
  }else{
    menuButton.src = './images/close.png'
    menuOpen = true;
  }
});
