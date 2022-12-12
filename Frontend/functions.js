let splashScreen = () => {
  setTimeout(() => {
    window.location.href = "../Frontend/signin.html";
  }, 2300);
};

document.getElementById("search_icon").onclick = function () {
  this.src = "logos/searchfill.png";
  document.getElementById("home_icon").src = "logos/home.png";
  document.getElementById("add_icon").src = "logos/add.png";
  document.getElementById("messenger_icon").src = "logos/messenger.png";
  document.getElementById("explore_icon").src = "logos/explore.png";
  document.getElementById("acc_icon").src = "logos/account.png";
};
document.getElementById("home_icon").onclick = function () {
  this.src = "logos/homefill.png";
  document.getElementById("search_icon").src = "logos/search.png";
  document.getElementById("add_icon").src = "logos/add.png";
  document.getElementById("messenger_icon").src = "logos/messenger.png";
  document.getElementById("explore_icon").src = "logos/explore.png";
  document.getElementById("acc_icon").src = "logos/account.png";
};
document.getElementById("add_icon").onclick = function () {
  this.src = "logos/addfill.png";
  document.getElementById("search_icon").src = "logos/search.png";
  document.getElementById("home_icon").src = "logos/home.png";
  document.getElementById("messenger_icon").src = "logos/messenger.png";
  document.getElementById("explore_icon").src = "logos/explore.png";
  document.getElementById("acc_icon").src = "logos/account.png";
};
document.getElementById("messenger_icon").onclick = function () {
  this.src = "logos/messengerfill.png";
  document.getElementById("search_icon").src = "logos/search.png";
  document.getElementById("add_icon").src = "logos/add.png";
  document.getElementById("home_icon").src = "logos/home.png";
  document.getElementById("explore_icon").src = "logos/explore.png";
  document.getElementById("acc_icon").src = "logos/account.png";
};
document.getElementById("explore_icon").onclick = function () {
  this.src = "logos/explorefill.png";
  document.getElementById("search_icon").src = "logos/search.png";
  document.getElementById("add_icon").src = "logos/add.png";
  document.getElementById("messenger_icon").src = "logos/messenger.png";
  document.getElementById("home_icon").src = "logos/home.png";
  document.getElementById("acc_icon").src = "logos/account.png";
};
document.getElementById("acc_icon").onclick = function () {
  this.src = "logos/accountfill.png";
  document.getElementById("search_icon").src = "logos/search.png";
  document.getElementById("add_icon").src = "logos/add.png";
  document.getElementById("messenger_icon").src = "logos/messenger.png";
  document.getElementById("home_icon").src = "logos/home.png";
  document.getElementById("explore_icon").src = "logos/explore.png";
};
