document.addEventListener("DOMContentLoaded", function() {
  const languageSelector = document.getElementById("language-selector");
  let currentLanguage = "en"; // Default language is English

  // Function to switch language
  function switchLanguage(language) {
      document.querySelectorAll("[data-en]").forEach(element => {
          element.textContent = element.getAttribute(`data-${language}`);
      });
      currentLanguage = language;
      languageSelector.textContent = language.toUpperCase(); // Update the selector text
  }

  // Event listener for language selector click
  languageSelector.addEventListener("click", function() {
      const newLanguage = currentLanguage === "en" ? "fr" : "en";
      switchLanguage(newLanguage);
  });
});

// JavaScript to load footer content
document.addEventListener("DOMContentLoaded", function() {
  fetch("footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer-container").innerHTML = data;
      })
      .catch(error => console.log("Error loading footer:", error));
});


/* JavaScript to load header content
document.addEventListener("DOMContentLoaded", function() {
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("header-container").innerHTML = data;
      })
      .catch(error => console.log("Error loading header:", error));
});
*/




// JavaScript to load header content and set active link
document.addEventListener("DOMContentLoaded", function() {
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("header-container").innerHTML = data;

          // Highlight the active link based on the current URL
          const navLinks = document.querySelectorAll("nav a");
          navLinks.forEach(link => {
              if (link.href === window.location.href) {
                  link.classList.add("active");
              }
          });

          /* Mobile menu toggle functionality
          const menuIcon = document.createElement("div");
          menuIcon.classList.add("menu-icon");
          menuIcon.innerHTML = "☰";
          document.querySelector(".container").appendChild(menuIcon);

          menuIcon.addEventListener("click", function() {
              document.querySelector("header").classList.toggle("nav-active");
          });*/
      })
      .catch(error => console.log("Error loading header:", error));
});

$(document).ready(function() {
    $('.hamburger').click(function() {
        $('nav').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('nav').show();
            $('.mobile-menu').hide();
        }
    });

    // Show mobile menu on smaller screens
    if ($(window).width() <= 768) {
        $('nav').hide();
        $('.mobile-menu').show();
    }
});