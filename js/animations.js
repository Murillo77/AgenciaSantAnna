/**
 * GSAP — hero entrance, scroll reveals, staggers, micro-interactions on CTAs.
 */
(function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.defaults({ ease: "power3.out" });

  if (!reduced) {
    var heroTl = gsap.timeline({ delay: 0.12, defaults: { duration: 0.85 } });

    if (document.querySelector("[data-animate='hero-logo']")) {
      heroTl.from(
        "[data-animate='hero-logo']",
        { opacity: 0, y: 20, scale: 0.97, duration: 0.75, ease: "power3.out" },
        0
      );
    }

    heroTl
      .from("[data-animate='hero-eyebrow']", { y: 18, opacity: 0, duration: 0.65 }, 0.05)
      .from(
        "[data-animate='hero-title']",
        {
          y: 44,
          opacity: 0,
          rotateX: 5,
          transformOrigin: "50% 100%",
          duration: 1.05,
          ease: "power4.out",
        },
        0.12
      )
      .from("[data-animate='hero-lead']", { y: 26, opacity: 0, duration: 0.78 }, 0.22)
      .from("[data-animate='hero-cta'] > *", { y: 20, opacity: 0, stagger: 0.11, duration: 0.68 }, 0.32);

    gsap.utils.toArray("[data-reveal]").forEach(function (el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          toggleActions: "play none none none",
        },
        y: 22,
        opacity: 0,
        duration: 0.82,
        ease: "power3.out",
      });
    });

    function staggerBlocks(selector, childSel, start) {
      var parents = gsap.utils.toArray(selector);
      parents.forEach(function (p) {
        var kids = p.querySelectorAll(childSel);
        if (!kids.length) return;
        gsap.from(kids, {
          scrollTrigger: { trigger: p, start: start || "top 80%" },
          y: 28,
          opacity: 0,
          stagger: 0.14,
          duration: 0.78,
          ease: "power3.out",
        });
      });
    }

    staggerBlocks("[data-stagger]", ".project-card");
    staggerBlocks("[data-stagger-cards]", ".service-card");
    staggerBlocks("[data-stagger-niches]", ".niche-card", "top 82%");
    staggerBlocks("[data-stagger-portfolio]", ".portfolio-card");

    gsap.from("[data-process] .step", {
      scrollTrigger: { trigger: "[data-process]", start: "top 76%" },
      x: -20,
      opacity: 0,
      stagger: 0.16,
      duration: 0.78,
      ease: "power3.out",
    });

    gsap.from("[data-reveal-cta]", {
      scrollTrigger: { trigger: ".cta", start: "top 78%" },
      y: 22,
      opacity: 0,
      stagger: 0.12,
      duration: 0.78,
      ease: "power3.out",
    });

    gsap.from("[data-cta-bg]", {
      scrollTrigger: { trigger: ".cta", start: "top 88%" },
      scale: 0.96,
      opacity: 0.7,
      duration: 1.15,
      ease: "power2.out",
    });

    setupCredibilityStats();
    initMicroInteractions();
  }

  function setupCredibilityStats() {
    var stats = gsap.utils.toArray("[data-animate='hero-metrics'] .metric");
    if (!stats.length) return;

    gsap.from(stats, {
      scrollTrigger: {
        trigger: "[data-animate='hero-metrics']",
        start: "top 86%",
        once: true,
      },
      y: 24,
      opacity: 0,
      stagger: 0.12,
      duration: 0.72,
      ease: "power3.out",
    });

    var countEls = gsap.utils.toArray("[data-count-to]");
    countEls.forEach(function (el) {
      var target = Number(el.getAttribute("data-count-to") || 0);
      if (!target) return;
      var prefix = el.getAttribute("data-prefix") || "";
      var suffix = el.getAttribute("data-suffix") || "";
      var state = { value: 0 };

      gsap.to(state, {
        value: target,
        duration: 1.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-animate='hero-metrics']",
          start: "top 86%",
          once: true,
        },
        onUpdate: function () {
          el.textContent = prefix + Math.round(state.value) + suffix;
        },
        onComplete: function () {
          el.textContent = prefix + target + suffix;
        },
      });
    });

    var fixed = document.querySelector(".metric__value--fixed");
    if (fixed) {
      gsap.fromTo(
        fixed,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.25,
          scrollTrigger: {
            trigger: "[data-animate='hero-metrics']",
            start: "top 86%",
            once: true,
          },
        }
      );
    }
  }

  function initMicroInteractions() {
    gsap.utils.toArray(".btn").forEach(function (btn) {
      btn.addEventListener("mouseenter", function () {
        gsap.to(btn, { scale: 1.04, duration: 0.35, ease: "power2.out", overwrite: "auto" });
      });
      btn.addEventListener("mouseleave", function () {
        gsap.to(btn, { scale: 1, duration: 0.45, ease: "power3.out", overwrite: "auto" });
      });
      btn.addEventListener("mousedown", function () {
        gsap.to(btn, { scale: 0.98, duration: 0.1, ease: "power2.in", overwrite: "auto" });
      });
      btn.addEventListener("mouseup", function () {
        gsap.to(btn, { scale: 1.04, duration: 0.22, ease: "power2.out", overwrite: "auto" });
      });
    });

    gsap.utils.toArray(".nav__link").forEach(function (link) {
      link.addEventListener("mouseenter", function () {
        gsap.to(link, { y: -2, duration: 0.22, ease: "power2.out", overwrite: "auto" });
      });
      link.addEventListener("mouseleave", function () {
        gsap.to(link, { y: 0, duration: 0.32, ease: "power3.out", overwrite: "auto" });
      });
    });

    gsap.utils.toArray(".mobile-drawer__link").forEach(function (link) {
      link.addEventListener("mouseenter", function () {
        gsap.to(link, { x: 6, duration: 0.28, ease: "power2.out", overwrite: "auto" });
      });
      link.addEventListener("mouseleave", function () {
        gsap.to(link, { x: 0, duration: 0.35, ease: "power3.out", overwrite: "auto" });
      });
    });

    var toggle = document.querySelector("[data-menu-toggle]");
    if (toggle) {
      toggle.addEventListener("mouseenter", function () {
        gsap.to(toggle, { scale: 1.06, duration: 0.25, ease: "power2.out", overwrite: "auto" });
      });
      toggle.addEventListener("mouseleave", function () {
        gsap.to(toggle, { scale: 1, duration: 0.35, ease: "power3.out", overwrite: "auto" });
      });
    }
  }

  ScrollTrigger.refresh();
})();
