/**
 * Lenis smooth scroll, micro-interactions.
 */
(function () {
  var yearEl = document.querySelector("[data-year]");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
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

  /* Lenis + ScrollTrigger — após splash para não competir com a animação de entrada */
  function initLenis() {
  var LenisCtor = window.Lenis;
  if (LenisCtor && typeof ScrollTrigger !== "undefined") {
    var lenis = new LenisCtor({
      duration: 1.15,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      smoothWheel: true,
    });

    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    function rafLite(time) {
      lenis.raf(time);
      requestAnimationFrame(rafLite);
    }
    requestAnimationFrame(rafLite);

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      var href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      anchor.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        var brandName = document.querySelector(".site-brand__name");
        var offset = brandName
          ? -(brandName.getBoundingClientRect().bottom + 16)
          : 0;
        lenis.scrollTo(target, { offset: offset });
      });
    });

    function refreshScroll() {
      requestAnimationFrame(function () {
        ScrollTrigger.refresh();
      });
    }

    window.addEventListener("load", refreshScroll);
    window.addEventListener("splashcomplete", refreshScroll, { once: true });
  }
  }

  if (document.body.classList.contains("is-splash-active")) {
    window.addEventListener("splashcomplete", initLenis, { once: true });
  } else {
    initLenis();
  }
})();
