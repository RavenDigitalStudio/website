const menu = document.querySelector(".menu");
//console.log(menu.children);
console.log(window.location.pathname.split("/")[2]);

switch (window.location.pathname.split("/")[2]) {
  case "about.html": {
    menu.children[0].children[0].style.color = "#F7ECA8";
    break;
  }
  case "campdetails": {
    menu.children[1].children[0].style.color = "#F7ECA8";
    break;
  }
  case "registration.html": {
    menu.children[2].children[0].style.color = "#F7ECA8";
    break;
  }
  case "counselorapplication": {
    menu.children[3].children[0].style.color = "#F7ECA8";
    break;
  }
  case "scholarshipapplication": {
    menu.children[4].children[0].style.color = "#F7ECA8";
    break;
  }
  case "contact.html": {
    menu.children[5].children[0].style.color = "#F7ECA8";
    break;
  }
}
