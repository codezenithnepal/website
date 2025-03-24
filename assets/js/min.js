//smooth scrolling behaviour for older browser
  document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#solutions-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });



  
// for number incresing animation of Statistics Section
document.addEventListener("DOMContentLoaded", () => {
  const statsContainer = document.querySelector(".stats-container");
  const counts = document.querySelectorAll(".count");

  // Function to animate numbers
  function animateNumbers() {
    counts.forEach((count) => {
      const target = +count.getAttribute("data-target");
      const duration = 2000; 
      const increment = target / (duration / 16); 
      let current = 0;

      function updateCount() {
        current += increment;
        if (current >= target) {
          count.textContent = target; 
        } else {
          count.textContent = Math.ceil(current);
          requestAnimationFrame(updateCount);
        }
      }

      updateCount();
    });
  }
  // Intersection Observer to trigger animation when visible
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.disconnect(); 
        }
      });
    },
    { threshold: 0.5 } 
  );

  observer.observe(statsContainer);
});
