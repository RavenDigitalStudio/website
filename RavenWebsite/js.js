

$(document).ready(function(){
const faders = document.querySelectorAll(".fade-in");
//$("#in").hide();
const options = {
    //rootMargin: "-150px",
    threshold: 0.7
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
$(".nav a").on("click", function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  $("html, body").animate({ scrollTop: $(href).offset().top }, 1500);
});


});
