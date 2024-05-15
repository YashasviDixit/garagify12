//MAIN BLACK SCREEN//
window.onload = function() {
  // Hide the black screen and display the content after a delay
  setTimeout(function() {
      document.getElementById('black-screen').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 2000);
};

//SERVICES ANIMATION//
document.addEventListener("DOMContentLoaded", function() { // Intersection Observer for Services
  var serviceItems = document.querySelectorAll('.service-item');

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

  serviceItems.forEach(function(item) {
      observer.observe(item);
  });
});

//About//
window.addEventListener('load', function() {
    var aboutContainer = document.querySelector('.about-container'); // Select the container of the "About Us" section

    // Add a class to trigger the animation
    aboutContainer.classList.add('fade-in-from-left');
});




//FEATURES ANIMATION//
document.addEventListener("DOMContentLoaded", function() { // Intersection Observer for Features
  var featureItems = document.querySelectorAll('.feature');

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry, index) {
          if (entry.isIntersecting) {
              setTimeout(function() {
                  entry.target.classList.add('show');
              }, index * 200); // Adjust the delay (in milliseconds) between each item appearance
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

  featureItems.forEach(function(item) {
      observer.observe(item);
  });
});
