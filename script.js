window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}

function redirectToDetails(detailsPage) {
  window.location.href = detailsPage;
}

document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector("h1");
  h1.innerHTML = h1.textContent.split("").map(letter => {
      return letter === " " ? `<span class="space" data-title=" "></span>` : `<span data-title="${letter}">${letter}</span>`;
  }).join("");
});

document.addEventListener('DOMContentLoaded', function () {
  // Select the "Work with Me" buttons
  const workWithMeButtons = document.querySelectorAll('.red_btn');
  const popup = document.getElementById('contactFormPopup');
  const closeBtn = document.querySelector('.close-btn');

  // Attach event listener to each button
  workWithMeButtons.forEach(button => {
      button.addEventListener('click', function () {
          popup.style.display = 'block'; // Show the popup
      });
  });

  // Close button event listener
  closeBtn.addEventListener('click', function () {
      popup.style.display = 'none'; // Hide the popup
  });

  // Close the popup when clicking outside the popup-content
  window.addEventListener('click', function (e) {
      if (e.target === popup) {
          popup.style.display = 'none';
      }
  });
});



const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.addEventListener('scroll', function() {
  const myworkSection = document.getElementById('mywork');
  const homepageSection = document.getElementById('home');
  
  // Get the position of the mywork section relative to the viewport
  const myworkPosition = myworkSection.getBoundingClientRect();
  
  // If the top of mywork section is within the viewport, add the visible class
  if (myworkPosition.top <= window.innerHeight && myworkPosition.bottom >= 0) {
      myworkSection.classList.add('visible');
      homepageSection.style.zIndex = '5'; // Move the homepage behind mywork
  } else {
      myworkSection.classList.remove('visible');
      homepageSection.style.zIndex = '10'; // Ensure homepage comes back on top when scrolling up
  }
});

document.getElementById("downloadBtn").addEventListener("click", function() {
  // Trigger the hidden download link click event
  document.getElementById("downloadLink").click();
});