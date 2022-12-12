const splash = document.querySelector(".splash");
const signin = document.querySelector(".signin");

let splashScreen = () => {
  signin.classList.add("display-none");
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2300);
  setTimeout(() => {
    signin.classList.add("display");
  }, 2300);
};
