const menuButton = document.getElementById("menu-btn");
const mobileMenu = document.querySelector("aside");

let menuOpen = false;

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  if (menuOpen) {
    menuButton.src = "./images/menu.png";
    menuOpen = false;
  } else {
    menuButton.src = "./images/close.png";
    menuOpen = true;
  }
});

const registrationForm = document.querySelector(".hero_form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorExists = registrationForm.querySelector(".error");

  if (errorExists) {
    return;
  }

  const user = {
    name: registrationForm.name.value,
    surname: registrationForm.surname.value,
    email: registrationForm.email.value,
    password: registrationForm.password.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("რეგისტრაცია წარმატებით განხორციელდა");
});
