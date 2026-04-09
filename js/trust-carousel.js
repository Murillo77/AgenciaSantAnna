/**
 * Carrossel estilo catálogo — card atual completo + ~40–45% do próximo.
 * Suporta várias instâncias ([data-trust-carousel-root]); cada uma com track interno.
 */
(function () {
  function initCarousel(root) {
  var track = root.querySelector("[data-trust-carousel]");
  if (!track) return;

  var viewport = root.querySelector(".trust-carousel__viewport");
  var slides = track.querySelectorAll(".trust-carousel__slide");
  var btnPrev = root.querySelector("[data-trust-prev]");
  var btnNext = root.querySelector("[data-trust-next]");
  var dotsRoot = root.querySelector("[data-trust-dots]");
  var progressFill = root.querySelector("[data-trust-progress]");
  var progressBar = root.querySelector("[data-trust-progressbar]");

  if (!viewport || slides.length === 0) return;

  /** Fração do próximo card visível (0.4–0.5); viewport ≈ W + gap + PEEK * W */
  var PEEK = 0.45;
  var index = 0;
  var touchStartX = 0;
  var touchMoved = false;

  root.setAttribute("tabindex", "0");

  function gapPx() {
    var g = window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap;
    var n = parseFloat(String(g).split(" ")[0], 10);
    return isNaN(n) ? 20 : n;
  }

  function setSlideWidths() {
    var V = viewport.getBoundingClientRect().width;
    var g = gapPx();
    var w = Math.max(240, (V - g) / (1 + PEEK));
    slides.forEach(function (slide) {
      slide.style.flex = "0 0 " + w + "px";
    });
  }

  function stepPx() {
    var first = slides[0];
    if (!first) return 0;
    return first.getBoundingClientRect().width + gapPx();
  }

  function maxIndex() {
    return Math.max(0, slides.length - 1);
  }

  function clampIndex() {
    index = Math.min(Math.max(0, index), maxIndex());
  }

  function buildDots() {
    if (!dotsRoot) return;
    dotsRoot.innerHTML = "";
    var total = slides.length;
    for (var i = 0; i < total; i++) {
      (function (idx) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "trust-carousel__dot" + (idx === 0 ? " is-active" : "");
        b.setAttribute("aria-label", "Ir para o item " + (idx + 1) + " de " + total);
        b.setAttribute("aria-current", idx === 0 ? "true" : "false");
        b.addEventListener("click", function () {
          index = idx;
          update();
        });
        dotsRoot.appendChild(b);
      })(i);
    }
  }

  function updateDots() {
    if (!dotsRoot) return;
    var dots = dotsRoot.querySelectorAll(".trust-carousel__dot");
    dots.forEach(function (d, i) {
      var on = i === index;
      d.classList.toggle("is-active", on);
      d.setAttribute("aria-current", on ? "true" : "false");
    });
  }

  function updateProgress() {
    var total = slides.length;
    var pct = total ? ((index + 1) / total) * 100 : 0;
    if (progressFill) {
      progressFill.style.width = pct + "%";
    }
    if (progressBar) {
      progressBar.setAttribute("aria-valuenow", String(index + 1));
      progressBar.setAttribute("aria-valuemax", String(total));
    }
  }

  function update() {
    setSlideWidths();
    clampIndex();
    var step = stepPx();
    var x = -index * step;
    var maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth);
    x = Math.max(-maxScroll, Math.min(0, x));

    track.style.transform = "translate3d(" + x + "px,0,0)";

    if (btnPrev) {
      btnPrev.disabled = index <= 0;
      btnPrev.setAttribute("aria-disabled", index <= 0 ? "true" : "false");
    }
    if (btnNext) {
      var last = index >= maxIndex();
      btnNext.disabled = last;
      btnNext.setAttribute("aria-disabled", last ? "true" : "false");
    }

    updateDots();
    updateProgress();
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", function () {
      index -= 1;
      update();
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", function () {
      index += 1;
      update();
    });
  }

  root.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      index -= 1;
      update();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      index += 1;
      update();
    }
  });

  viewport.addEventListener(
    "touchstart",
    function (e) {
      if (!e.touches || !e.touches[0]) return;
      touchStartX = e.touches[0].clientX;
      touchMoved = false;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchmove",
    function (e) {
      if (!e.touches || !e.touches[0]) return;
      if (Math.abs(e.touches[0].clientX - touchStartX) > 12) touchMoved = true;
    },
    { passive: true }
  );

  viewport.addEventListener("touchend", function (e) {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (!touchMoved || Math.abs(dx) < 56) return;
    if (dx < 0) {
      index += 1;
    } else {
      index -= 1;
    }
    update();
  });

  buildDots();

  if (typeof ResizeObserver !== "undefined") {
    var ro = new ResizeObserver(function () {
      update();
    });
    ro.observe(viewport);
    ro.observe(track);
  }

  window.addEventListener("load", update);
  window.addEventListener("resize", update);

  update();
  }

  document.querySelectorAll("[data-trust-carousel-root]").forEach(initCarousel);
})();
