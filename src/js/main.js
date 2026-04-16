(function () {
  "use strict";

  // --- Navbar scroll effect ---
  function handleNavScroll() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // --- Mobile menu ---
  function setupHamburger() {
    var hamburger = document.getElementById("hamburger");
    var navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  // --- Scroll animations ---
  function setupScrollAnimations() {
    var elements = document.querySelectorAll(
      ".service-card, .contact-item, .gallery-item"
    );

    elements.forEach(function (el) {
      el.classList.add("fade-in");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Email obfuscation ---
  function deobfuscateEmails() {
    document.querySelectorAll(".obf-email").forEach(function (el) {
      var encoded = el.getAttribute("data-e");
      if (!encoded) return;
      var email = atob(encoded);
      el.href = "mailto:" + email;
      if (el.textContent.indexOf("[at]") !== -1) {
        el.textContent = email;
      }
    });
  }

  // --- Gallery Lightbox ---
  function setupLightbox() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxCaption = document.getElementById("lightboxCaption");
    var items = document.querySelectorAll(".gallery-item");
    var currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      var item = items[index];
      var img = item.querySelector("img");
      var caption = item.getAttribute("data-caption") || "";

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption;
      lightbox.classList.add("active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("active");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    function navigate(direction) {
      currentIndex =
        (currentIndex + direction + items.length) % items.length;
      openLightbox(currentIndex);
    }

    items.forEach(function (item, index) {
      item.addEventListener("click", function () {
        openLightbox(index);
      });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", function () {
      navigate(-1);
    });
    lightbox.querySelector(".lightbox-next").addEventListener("click", function () {
      navigate(1);
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    });
  }

  // --- Init ---
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", handleNavScroll, { passive: true });
    handleNavScroll();
    setupHamburger();
    setupScrollAnimations();
    deobfuscateEmails();
    setupLightbox();
  });
})();
