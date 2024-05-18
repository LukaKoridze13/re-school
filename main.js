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

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = users.find((u) => u.email === user.email);
  if (emailExists) {
    registrationForm.email.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "ელ.ფოსტა უკვე გამოყენებულია";
    registrationForm.email.parentElement.appendChild(errorElement);

  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
  }
});

const isLoggedIn = JSON.parse(localStorage.getItem("currentUser"));
if(isLoggedIn){
  document.querySelector("#login_btn").innerText = isLoggedIn.name + " " + isLoggedIn.surname;
}
