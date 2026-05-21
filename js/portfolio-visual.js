/**
 * Portfólio visual — abertura horizontal ligada ao scroll (mobile e desktop).
 * Inicia após a splash para evitar travadas no carregamento.
 */
(function () {
  function init() {
  var root = document.querySelector(".portfolio-visual");
  if (!root || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isMobile = window.matchMedia("(max-width: 1023px)").matches;
  var panels = root.querySelectorAll(".portfolio-panel");

  if (!panels.length) return;

  var clipFrom = "inset(6% 46% 6% 46% round " + (isMobile ? "12px" : "10px") + ")";
  var clipTo = "inset(0% 0% 0% 0% round " + (isMobile ? "12px" : "10px") + ")";
  var scrollEnd = isMobile ? "58%" : "30%";

  if (reduced) {
    panels.forEach(function (panel) {
      var media = panel.querySelector(".portfolio-panel__media");
      if (media) media.classList.add("is-opened");
    });
    window.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
    return;
  }

  panels.forEach(function (panel) {
    var media = panel.querySelector(".portfolio-panel__media");
    var shade = panel.querySelector(".portfolio-panel__shade");
    if (!media) return;

    var trigger = {
      trigger: panel,
      start: "top bottom",
      end: "top " + scrollEnd,
      scrub: 0.55,
      invalidateOnRefresh: true,
      onUpdate: function (self) {
        if (self.progress >= 0.98) {
          media.classList.add("is-opened");
        } else {
          media.classList.remove("is-opened");
        }
      },
    };

    gsap.fromTo(
      media,
      {
        clipPath: clipFrom,
        scaleX: 0.9,
        opacity: 0.4,
        transformOrigin: "50% 50%",
      },
      {
        clipPath: clipTo,
        scaleX: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: trigger,
      }
    );

    if (shade && !isMobile) {
      gsap.fromTo(
        shade,
        { opacity: 0.5 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: trigger,
        }
      );
    }
  });

  function refreshPortfolio() {
    ScrollTrigger.refresh();
  }

  window.addEventListener("load", refreshPortfolio);
  window.addEventListener("resize", refreshPortfolio);
  window.addEventListener("orientationchange", refreshPortfolio);
  }

  if (document.body.classList.contains("is-splash-active")) {
    window.addEventListener("splashcomplete", init, { once: true });
  } else {
    init();
  }
})();
