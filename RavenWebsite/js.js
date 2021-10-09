

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

// Dark / Light Mode 
const input = document.querySelectorAll('.tgl input');
const page = document.querySelectorAll('#page');

input.forEach(e => {
    
    e.addEventListener('change', updateValue);
})

function updateValue(e) {
    if(page[0].classList.contains("dark")) {
        page[0].classList.remove("dark");
    }
    else {
        page[0].classList.add("dark"); 
    }
    
 // console.log(page[0].classList);
}

});
