/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * TrackRunny website - Personal website for myself                          *
 * Copyright (C) 2020 TrackRunny                                             *
 *                                                                           *
 * This program is free software: you can redistribute it and/or modify      *
 * it under the terms of the GNU General Public License as published by      *
 * the Free Software Foundation, either version 3 of the License, or         *
 * (at your option) any later version.                                       *
 *                                                                           *
 * This program is distributed in the hope that it will be useful,           *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of            *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the             *
 * GNU General Public License for more details.                              *
 *                                                                           *
 * You should have received a copy of the GNU General Public License         *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function () {
    $('.section-loader').fadeToggle();
  }, 850);

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        const target = $el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
        });
      }
    }
  });

/*
// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("menu").style.display = "block";
  } else {
    document.getElementById("menu").style.display = "none";
  }
}
*/

// Copy donation info to user's clipboard
function copyDonationToClipboard(element) {
  const copyText = document.getElementById(element);

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  alert("Successfully Copied!");
}

// temp solution to dark mode yeet
function darkMode() {
  $("body").css("background-color", "#121212");
  $("body").css("color", "#ffffff");
  $(".main-content").css("background-color", "#121212");
  $(".hero-menu-desktop").css("background-color", "#34113fff");
  $(".hero-menu-desktop a").css("color", "#ffffff");
  $(".section-dark").css("background-color", "#121212");
  $(".main-content").css("color", "#ffffff");
  $(".main-content level title p").css("color", "#ffffff");
  $("p").css("color", "#ffffff");
  $("#dark-mode").css("visibility", "hidden");
  $("#dark-mode").css("max-width", "0");
  $("#dark-mode").css("display", "none");
  $("#dark-mode").css("margin", "0");
  $("#dark-mode").css("padding", "0");

}

function lightMode() {
  location.reload()
}

function deleteNoti() {
  $(".notification").css("visibility", "hidden");
  $(".notification").css("display", "none");
}
