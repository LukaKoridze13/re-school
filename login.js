const loginForm = document.querySelector(".login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.find((u) => u.email === email && u.password === password);

  if (!userExists) {
    loginForm.email.classList.add("invalid");
    loginForm.password.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "ელ.ფოსტა ან პაროლი არასწორია";
    loginForm.password.parentElement.appendChild(errorElement);
  } else {
    localStorage.setItem("currentUser", JSON.stringify(userExists));
    location.href = "index.html";
  }
});
