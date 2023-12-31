const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form-container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
});

formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
  formContainer.classList.remove("active");
});
document.querySelector('.menu-item a').addEventListener('click', (event) => {
  event.preventDefault();
  const solutionsSection = document.querySelector('#solutions');
  solutionsSection.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.r-item a').addEventListener('click', (event) => {
  event.preventDefault();
  const resource = document.querySelector('#resources');
  resource.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.about-item a').addEventListener('click', (event) => {
  event.preventDefault();
  const resource = document.querySelector('#about-us');
  resource.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.l-item a').addEventListener('click', (event) => {
  event.preventDefault();
  const resource = document.querySelector('#l-us');
  resource.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.l-item a').addEventListener('click', (event) => {
  event.preventDefault();
  const resource = document.querySelector('#leaderboard');
  resource.scrollIntoView({ behavior: 'smooth' });
});


