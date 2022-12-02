window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

/***** for pricing table (tabs | monthly & yearly) ******/
$(document).ready(function () {
  $("#monthly").click(function () {
    $(this).addClass("active");
    $("#yearly").removeClass("active");

    $(".monthlyPriceList").removeClass("d-none");
    $(".monthlyPriceList").addClass("fadeIn");
    $(".yearlyPriceList").addClass("d-none");

    $(".indicator").css("left", "2px");
  });

  $("#yearly").click(function () {
    $(this).addClass("active");
    $("#monthly").removeClass("active");

    $(".yearlyPriceList").removeClass("d-none");
    $(".yearlyPriceList").addClass("fadeIn");
    $(".monthlyPriceList").addClass("d-none");

    $(".indicator").css("left", "163px");
  });
});
/***** for pricing table (tabs | monthly & yearly) ******/
