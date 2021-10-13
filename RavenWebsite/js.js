

$(document).ready(function(){
const faders = document.querySelectorAll(".fade-in");
//$("#in").hide();
const options = {
    //rootMargin: "-150px",
    threshold: 0.5
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appear"); // add class 
            appearOnScroll.unobserve(entry.target); // stop observing 
        }
        
      
});
}, options);

//observer.observe(secFour);
// console.log(secFour);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

/* allow for smooth slow scrolling */
// $(".nav a").on("click", function (e) {
//   // 1
//   e.preventDefault();
//   // 2
//   const href = $(this).attr("href");
//   // 3
//   $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
// });

//==================
// Dark / Light Mode
//==================


const page = document.querySelectorAll('#page');
const sec2 = document.querySelectorAll('#sec2');
const sec3 = document.querySelectorAll('#sec3');
const secCoders = document.querySelectorAll('.coders2');

const sec5 = document.querySelectorAll('#sec5');

const input2 = document.querySelectorAll('.tgl2 input');

input2.forEach(e => {
    
    e.addEventListener('change', updateValue);
})


function updateValue(e) {
    if(page[0].classList.contains("dark")) 
    {
        page[0].classList.remove("dark");
        page[0].classList.add("light");
        sec2[0].classList.add("light");
        sec2[0].classList.remove("dark"); 
        sec3[0].classList.add("light");
        sec3[0].classList.remove("dark");
        secCoders[0].classList.add("light");
        secCoders[0].classList.remove("dark");  
        sec5[0].classList.add("light");
        sec5[0].classList.remove("dark"); 

    }
    else {
        page[0].classList.add("dark");
        page[0].classList.remove("light");
        sec2[0].classList.add("dark");
        sec2[0].classList.remove("light"); 
        sec3[0].classList.add("dark");
        sec3[0].classList.remove("light"); 
        secCoders[0].classList.add("dark");
        secCoders[0].classList.remove("light");
        sec5[0].classList.add("dark");
        sec5[0].classList.remove("light"); 
    }
    
 // console.log(page[0].classList);
}



//======================================
// custom select element on contact form 

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);





});
