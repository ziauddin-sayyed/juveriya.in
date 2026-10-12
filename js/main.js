/* Juveriya Interior Decorator — main.js (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---------- Sticky header ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  function closeNav() {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var scrim = document.querySelector(".nav-scrim");
  if (scrim) scrim.addEventListener("click", closeNav);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav();
      closeLightbox();
    }
  });
  if (navList) {
    navList.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
  }

  /* ---------- Scroll reveal (respects prefers-reduced-motion) ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Services carousel (OwlCarousel2, progressive enhancement) ---------- */
  (function initCarousel() {
    var el = document.getElementById("services-carousel");
    if (!el) return;
    var hasOwl = window.jQuery && window.jQuery.fn && window.jQuery.fn.owlCarousel;
    if (!hasOwl) return; // CSS grid fallback already applies
    var $el = window.jQuery(el);
    var noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $el.owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: true,
      smartSpeed: 700,
      autoplay: !noMotion,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      navText: ['<span aria-hidden="true">‹</span>', '<span aria-hidden="true">›</span>'],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1100: { items: 3 },
        1400: { items: 4 }
      }
    });
    $el.find(".owl-prev").attr("aria-label", "Previous services");
    $el.find(".owl-next").attr("aria-label", "Next services");
  })();

  /* ---------- Client logo carousel (rotating strip, OwlCarousel2) ---------- */
  (function initClientsCarousel() {
    var el = document.getElementById("clients-carousel");
    if (!el) return;
    var hasOwl = window.jQuery && window.jQuery.fn && window.jQuery.fn.owlCarousel;
    if (!hasOwl) return; // static list fallback
    var $el = window.jQuery(el);
    var noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $el.owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      smartSpeed: 700,
      autoplay: !noMotion,
      autoplayTimeout: 2400,
      autoplayHoverPause: true,
      navText: ['<span aria-hidden="true">‹</span>', '<span aria-hidden="true">›</span>'],
      responsive: {
        0: { items: 2 },
        480: { items: 3 },
        768: { items: 4 },
        1100: { items: 5 },
        1400: { items: 6 }
      }
    });
    $el.find(".owl-prev").attr("aria-label", "Previous client logos");
    $el.find(".owl-next").attr("aria-label", "Next client logos");
  })();

  /* ---------- Portfolio filter ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var items = document.querySelectorAll(".portfolio-item");
  if (filterBtns.length && items.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        var cat = btn.getAttribute("data-filter");
        items.forEach(function (item) {
          var show = cat === "all" || item.getAttribute("data-category") === cat;
          if (show) {
            item.classList.remove("is-hidden");
            // retrigger fade-in
            item.classList.add("is-fading");
            requestAnimationFrame(function () {
              requestAnimationFrame(function () { item.classList.remove("is-fading"); });
            });
          } else {
            item.classList.add("is-hidden");
          }
        });
      });
    });
  }

  /* ---------- Lightbox (keyboard + swipe + focus return) ---------- */
  var lightbox = document.getElementById("lightbox");
  var lbImg = lightbox ? lightbox.querySelector(".lightbox__figure img") : null;
  var lbTitle = lightbox ? document.getElementById("lightbox-title") : null;
  var lbDesc = lightbox ? document.getElementById("lightbox-desc") : null;
  var lbCount = lightbox ? document.getElementById("lightbox-count") : null;
  var visibleItems = [];
  var currentIndex = 0;
  var lastFocused = null;

  function refreshVisible() {
    visibleItems = Array.prototype.filter.call(items, function (it) {
      return !it.classList.contains("is-hidden");
    });
  }
  function showAt(i) {
    if (!visibleItems.length) return;
    currentIndex = (i + visibleItems.length) % visibleItems.length;
    var btn = visibleItems[currentIndex].querySelector("button");
    var img = btn.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbTitle.textContent = btn.getAttribute("data-title") || "";
    lbDesc.textContent = btn.getAttribute("data-desc") || "";
    lbCount.textContent = "Image " + (currentIndex + 1) + " of " + visibleItems.length;
  }
  function openLightbox(item) {
    if (!lightbox) return;
    refreshVisible();
    var idx = visibleItems.indexOf(item);
    lastFocused = document.activeElement;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    showAt(idx < 0 ? 0 : idx);
    lightbox.querySelector(".lightbox__close").focus();
  }
  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }
  if (lightbox && items.length) {
    items.forEach(function (item) {
      var btn = item.querySelector("button");
      if (btn) btn.addEventListener("click", function () { openLightbox(item); });
    });
    lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox__prev").addEventListener("click", function () { showAt(currentIndex - 1); });
    lightbox.querySelector(".lightbox__next").addEventListener("click", function () { showAt(currentIndex + 1); });
    lightbox.querySelector(".lightbox__backdrop").addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "ArrowRight") showAt(currentIndex + 1);
      if (e.key === "ArrowLeft") showAt(currentIndex - 1);
    });
    // swipe support
    var startX = null;
    lightbox.addEventListener("touchstart", function (e) {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) showAt(currentIndex + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("quote-form");
  if (form) {
    var success = document.getElementById("form-success");
    function setInvalid(field, invalid) {
      field.setAttribute("data-invalid", invalid ? "true" : "false");
      var input = field.querySelector("input, select, textarea");
      if (input) input.setAttribute("aria-invalid", invalid ? "true" : "false");
    }
    ["name", "phone", "email", "type", "message"].forEach(function (id) {
      var input = document.getElementById(id);
      if (input) input.addEventListener("input", function () {
        setInvalid(input.closest(".field"), false);
      });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      function check(id, valid) {
        var input = document.getElementById(id);
        var field = input.closest(".field");
        setInvalid(field, !valid);
        if (!valid) ok = false;
      }
      var name = document.getElementById("name").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var email = document.getElementById("email").value.trim();
      var type = document.getElementById("type").value;
      var message = document.getElementById("message").value.trim();
      check("name", name.length >= 2);
      check("phone", /^[+\d][\d\s-]{7,15}$/.test(phone));
      check("email", email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      check("type", type !== "");
      check("message", message.length >= 10);
      if (!ok) {
        var firstBad = form.querySelector('.field[data-invalid="true"] input, .field[data-invalid="true"] select, .field[data-invalid="true"] textarea');
        if (firstBad) firstBad.focus();
        return;
      }
      /* No backend (static site): hand the enquiry to the visitor's mail app,
         pre-filled and URL-encoded. Fallbacks: copy button + direct links. */
      var addr = "juveriyainterior@yahoo.com";
      var typeEl = document.getElementById("type");
      var typeText = typeEl.options[typeEl.selectedIndex].text;
      var subject = "Website enquiry — " + typeText + " — " + name;
      var body = "Name: " + name + "\n"
        + "Phone: " + phone + "\n"
        + "Email: " + (email === "" ? "-" : email) + "\n"
        + "Service: " + typeText + "\n"
        + "Sent from: " + window.location.href + "\n"
        + "Date: " + new Date().toLocaleString("en-IN") + "\n\n"
        + "Message:\n" + message;
      lastEnquiry = "Subject: " + subject + "\n\n" + body;
      window.location.href = "mailto:" + addr
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);
      success.classList.add("is-visible");
      success.setAttribute("tabindex", "-1");
      success.focus();
      form.reset();
    });

    /* Copy fallback for visitors without a configured mail app */
    var lastEnquiry = "";
    var copyBtn = document.getElementById("copy-enquiry");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var status = document.getElementById("copy-status");
        function say(msg) { if (status) status.textContent = msg; }
        if (!lastEnquiry) { say("Nothing to copy yet."); return; }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastEnquiry).then(
            function () { say("Copied ✓"); },
            function () { say("Copy failed — select the text manually."); }
          );
        } else {
          say("Copying isn't supported here — select the text manually.");
        }
      });
    }
  }
})();
