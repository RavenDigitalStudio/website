const menu = document.querySelector(".menu");
//console.log(menu.children);
console.log(window.location.pathname.split("/")[1]);

switch (window.location.pathname.split("/")[1]) {
  case "about.html": {
    menu.children[0].children[0].style.color = "#F7ECA8";
    break;
  }
  case "campDetails.html": {
    menu.children[1].children[0].style.color = "#F7ECA8";
    break;
  }
  case "registration.html": {
    menu.children[2].children[0].style.color = "#F7ECA8";
    break;
  }
  case "counselorApplication.html": {
    menu.children[3].children[0].style.color = "#F7ECA8";
    break;
  }
  case "scholarshipApplication.html": {
    menu.children[4].children[0].style.color = "#F7ECA8";
    break;
  }
  case "contact.html": {
    menu.children[5].children[0].style.color = "#F7ECA8";
    break;
  }
}

const hamMenuContainer = document.querySelector(".ham-menu-container");
const hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
  hamMenuContainer.classList.toggle("show");
});
