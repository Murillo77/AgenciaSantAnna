/**
 * Lenis smooth scroll, UI chrome, micro-interactions.
 */
(function () {
  var header = document.querySelector("[data-header]");
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var drawer = document.querySelector("[data-mobile-drawer]");
  var closeDrawerEls = document.querySelectorAll("[data-close-drawer]");
  var yearEl = document.querySelector("[data-year]");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Header scroll state */
  function onScrollDir() {
    if (!header) return;
    var y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle("is-scrolled", y > 24);
  }
  window.addEventListener("scroll", onScrollDir, { passive: true });
  onScrollDir();

  /* Mobile drawer */
  function setDrawer(open) {
    if (!drawer || !menuBtn) return;
    drawer.hidden = !open;
    drawer.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") !== "true";
      setDrawer(open);
    });
    closeDrawerEls.forEach(function (a) {
      a.addEventListener("click", function () {
        setDrawer(false);
      });
    });
    drawer.addEventListener("click", function (e) {
      if (e.target === drawer) setDrawer(false);
    });
  }

  /* Card tilt (subtle) */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      var max = 7;
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(880px) rotateY(" +
          px * max +
          "deg) rotateX(" +
          -py * max +
          "deg) translateY(-4px)";
      });
      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* Lenis + ScrollTrigger — rAF uses high‑resolution clock for correct deltas */
  var LenisCtor = window.Lenis;
  if (LenisCtor && typeof ScrollTrigger !== "undefined") {
    var lenis = new LenisCtor({
      duration: 1.15,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function rafLite(time) {
      lenis.raf(time);
      requestAnimationFrame(rafLite);
    }
    requestAnimationFrame(rafLite);

    function closeDrawerFromNav() {
      if (!drawer || !menuBtn) return;
      drawer.hidden = true;
      drawer.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      var href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      anchor.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        var hh = header ? header.getBoundingClientRect().height + 12 : 80;
        lenis.scrollTo(target, { offset: -hh });
        closeDrawerFromNav();
      });
    });

    window.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  }
})();

