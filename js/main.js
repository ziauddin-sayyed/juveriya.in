/* Juveriya Interiors — main.js (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---------- Sticky header ---------- */
  var header = document.querySelector(".site-header");
  var mark = header ? header.querySelector(".brand__logo") : null;
  var word = header ? header.querySelector(".brand__wordmark") : null;
  var MARK_DARK = "svg/logo-icon-dark.svg";       /* transparent header over dark hero */
  var MARK = "svg/logo-icon.svg";                 /* solid white header after scroll */
  var WORD_DARK = "svg/logo-wordmark-dark.svg";
  var WORD = "svg/logo-wordmark.svg";
  function setSrc(el, want) {
    if (el && el.getAttribute("src") !== want) el.setAttribute("src", want);
  }
  function onScroll() {
    if (!header) return;
    var solid = window.scrollY > 24;
    header.classList.toggle("is-solid", solid);
    setSrc(mark, solid ? MARK : MARK_DARK);
    setSrc(word, solid ? WORD : WORD_DARK);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Hero background rotator (15 site photos, crossfade) ---------- */
  (function initHeroRotator() {
    var bg = document.querySelector(".hero__bg");
    if (!bg) return;
    var imgs = Array.prototype.slice.call(bg.querySelectorAll("img"));
    if (imgs.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var current = 0, next = 1;
    function load(i) {
      var im = imgs[i];
      if (im && im.getAttribute("data-src") && !im.getAttribute("src")) {
        im.setAttribute("src", im.getAttribute("data-src"));
      }
    }
    load(1); // have frame 2 ready before the first rotation
    setInterval(function () {
      if (document.hidden) return;
      load(next);
      var show = imgs[next];
      function activate() {
        imgs[current].classList.remove("is-active");
        show.classList.add("is-active");
        current = next;
        next = (next + 1) % imgs.length;
        load(next); // preload the frame after next while this one shows
      }
      if (show.complete && show.naturalWidth > 0) activate();
      else {
        show.onload = activate;
        show.onerror = function () { next = (next + 1) % imgs.length; };
      }
    }, 2600);
  })();

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
  var sections = document.querySelectorAll(".pf-section");
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
        sections.forEach(function (sec) {
          var visible = sec.querySelectorAll('.portfolio-item:not(.is-hidden)').length;
          sec.classList.toggle("is-hidden", visible === 0);
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

  /* ---------- Before / After + Scope photo viewer ----------
     Clicking a photo opens it full-size; prev/next scroll through the
     photos of that same group (project panel, pair/trio card or strip). */
  (function initBaViewer() {
    var all = Array.prototype.slice.call(document.querySelectorAll(".ba-zoom"));
    var box = document.getElementById("ba-lightbox");
    if (!box || !all.length) return;
    var img = document.getElementById("ba-lb-img");
    var title = document.getElementById("ba-lb-title");
    var desc = document.getElementById("ba-lb-desc");
    var count = document.getElementById("ba-lb-count");
    var view = all, idx = 0, last = null;
    function show(i) {
      idx = (i + view.length) % view.length;
      var shot = view[idx];
      var im = shot.querySelector("img");
      img.src = im.src;
      img.alt = im.alt;
      title.textContent = shot.getAttribute("data-ba-t") || "";
      desc.textContent = shot.getAttribute("data-ba-c") || "";
      count.textContent = "Photo " + (idx + 1) + " of " + view.length;
    }
    function open(shot) {
      var panel = shot.closest("[data-panel]");
      view = panel ? Array.prototype.slice.call(panel.querySelectorAll(".ba-zoom"))
                   : all.filter(function (b) { return !b.closest("[data-panel]"); });
      last = document.activeElement;
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      show(view.indexOf(shot));
      box.querySelector(".lightbox__close").focus();
    }
    function close() {
      if (!box.classList.contains("is-open")) return;
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (last && last.focus) last.focus();
    }
    all.forEach(function (shot) {
      shot.addEventListener("click", function () { open(shot); });
    });
    box.querySelector(".lightbox__close").addEventListener("click", close);
    box.querySelector(".lightbox__prev").addEventListener("click", function () { show(idx - 1); });
    box.querySelector(".lightbox__next").addEventListener("click", function () { show(idx + 1); });
    box.querySelector(".lightbox__backdrop").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
    });
    var startX = null;
    box.addEventListener("touchstart", function (e) {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) show(idx + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
  })();

  /* ---------- Scope site tabs + photo strips ---------- */
  (function initScopeTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-site]"));
    if (!tabs.length) return;
    var panels = Array.prototype.slice.call(document.querySelectorAll("[data-panel]"));
    function select(btn) {
      tabs.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      panels.forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== btn.getAttribute("data-site"); });
    }
    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () { select(btn); });
    });
    select(tabs[0]); // start on the first site; both panels stay visible without JS
    document.querySelectorAll(".site-panel").forEach(function (panel) {
      var strip = panel.querySelector(".scope-strip");
      if (!strip) return;
      panel.querySelectorAll("[data-strip-prev],[data-strip-next]").forEach(function (arrow) {
        arrow.addEventListener("click", function () {
          var dir = arrow.hasAttribute("data-strip-prev") ? -1 : 1;
          strip.scrollBy({ left: dir * Math.max(strip.clientWidth * 0.8, 200), behavior: "smooth" });
        });
      });
    });
  })();

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
      var addr = "info@juveriya.com";
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
