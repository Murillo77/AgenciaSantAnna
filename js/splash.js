/**
 * Splash — preparação premium + logo voa para o header
 * Otimizado para evitar travadas (decode, GPU, init adiado)
 */
(function () {
  var splash = document.getElementById("splash");
  if (!splash) return;

  var SPLASH_DURATION = 4;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var logo = splash.querySelector(".splash__logo");
  var glow = splash.querySelector(".splash__glow");
  var messageEl = splash.querySelector("[data-splash-message]");
  var loader = splash.querySelector(".splash__loader");
  var bar = splash.querySelector(".splash__bar");
  var barFill = splash.querySelector("[data-splash-bar-fill]");
  var ringFill = splash.querySelector("[data-splash-ring]");
  var progressEl = splash.querySelector("[data-splash-progress]");
  var progressBar = splash.querySelector("[data-splash-progressbar]");
  var readyEl = splash.querySelector("[data-splash-ready]");
  var veil = splash.querySelector(".splash__veil");
  var targetLogo = document.querySelector(".site-brand__logo img");

  var RING_C = 2 * Math.PI * 52;
  var lastPct = -1;
  var flyMetrics = null;

  var MESSAGES = [
    { text: "Preparando sua experiência...", at: 0.5 },
    { text: "Carregando seu ambiente digital...", at: 1.1 },
    { text: "Otimizando a interface para o melhor desempenho...", at: 1.7 },
    { text: "Quase pronto...", at: 2.3 },
  ];

  var state = { progress: 0 };

  function nextFrame() {
    return new Promise(function (resolve) {
      requestAnimationFrame(function () {
        requestAnimationFrame(resolve);
      });
    });
  }

  function prewarmAssets() {
    var tasks = [];

    if (logo && logo.decode) {
      tasks.push(logo.decode().catch(function () {}));
    }
    if (targetLogo && targetLogo.decode) {
      tasks.push(targetLogo.decode().catch(function () {}));
    }

    return Promise.all(tasks).then(nextFrame);
  }

  function cacheFlyMetrics() {
    if (!logo || !targetLogo) return;
    var end = targetLogo.getBoundingClientRect();
    var start = logo.getBoundingClientRect();
    if (!end.width || !start.width) return;

    var startCx = start.left + start.width / 2;
    var startCy = start.top + start.height / 2;

    flyMetrics = {
      startCx: startCx,
      startCy: startCy,
      dx: end.left + end.width / 2 - startCx,
      dy: end.top + end.height / 2 - startCy,
      scale: end.width / start.width,
      startW: start.width,
    };
  }

  function finishSplash() {
    splash.classList.add("is-done");
    splash.setAttribute("aria-hidden", "true");
    splash.setAttribute("aria-busy", "false");
    document.body.classList.remove("is-splash-active");

    if (targetLogo) {
      targetLogo.style.opacity = "";
      targetLogo.style.visibility = "";
    }

    nextFrame().then(function () {
      splash.remove();
      window.dispatchEvent(new CustomEvent("splashcomplete"));
    });
  }

  function skipSplash() {
    setProgress(100);
    if (messageEl) messageEl.textContent = MESSAGES[MESSAGES.length - 1].text;
    if (targetLogo) {
      targetLogo.style.opacity = "";
      targetLogo.style.visibility = "";
    }
    finishSplash();
  }

  function setProgress(value) {
    var pct = Math.round(Math.max(0, Math.min(100, value)));
    if (pct === lastPct) return;
    lastPct = pct;
    state.progress = pct;
    if (progressEl) progressEl.textContent = String(pct);
    if (progressBar) progressBar.setAttribute("aria-valuenow", String(pct));
    if (ringFill) {
      ringFill.style.strokeDashoffset = String(RING_C - (pct / 100) * RING_C);
    }
    if (barFill) barFill.style.width = pct + "%";
  }

  function setMessage(text) {
    if (messageEl) messageEl.textContent = text;
  }

  function flyLogoToHeader(flyDur) {
    if (!logo || !targetLogo || !flyMetrics || typeof gsap === "undefined") return null;
    flyDur = flyDur || 0.65;

    var m = flyMetrics;
    logo.classList.add("is-flying");
    document.body.appendChild(logo);

    gsap.set(logo, {
      position: "fixed",
      left: m.startCx,
      top: m.startCy,
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      width: m.startW,
      height: "auto",
      margin: 0,
      zIndex: 10001,
      transformOrigin: "50% 50%",
      opacity: 1,
      scale: 1,
      force3D: true,
    });

    return gsap.to(logo, {
      x: m.dx,
      y: m.dy,
      scale: m.scale,
      duration: flyDur,
      ease: "power2.inOut",
      force3D: true,
      onComplete: function () {
        gsap.set(logo, { opacity: 0 });
        targetLogo.style.opacity = "1";
        targetLogo.style.visibility = "visible";
        requestAnimationFrame(function () {
          logo.remove();
        });
      },
    });
  }

  async function runExperience() {
    if (typeof gsap === "undefined") {
      skipSplash();
      return;
    }

    await prewarmAssets();

    var duration = reduced ? 1.2 : SPLASH_DURATION;
    var flyDur = reduced ? 0.4 : 0.65;
    var flyStart = duration - flyDur - 0.05;

    setProgress(0);
    if (ringFill) {
      ringFill.style.strokeDasharray = String(RING_C);
      ringFill.style.strokeDashoffset = String(RING_C);
    }

    if (readyEl) {
      readyEl.setAttribute("aria-hidden", "true");
      gsap.set(readyEl, { opacity: 0, y: 6 });
    }

    var tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.to(glow, { opacity: 1, duration: 0.4 }, 0);
    tl.to(logo, { opacity: 1, scale: 1, duration: 0.45, force3D: true }, 0);
    tl.to([loader, bar], { opacity: 1, y: 0, duration: 0.3, force3D: true }, 0.28);

    tl.to(
      state,
      {
        progress: 100,
        duration: duration * 0.58,
        ease: "power1.inOut",
        onUpdate: function () {
          setProgress(state.progress);
        },
      },
      0.42
    );

    MESSAGES.forEach(function (msg, i) {
      var t = reduced ? 0.2 + i * 0.18 : msg.at;
      var fadeIn = reduced ? 0.12 : 0.26;
      var fadeOut = reduced ? 0.1 : 0.2;
      var visibleUntil =
        i < MESSAGES.length - 1 ? (MESSAGES[i + 1].at || t + 0.55) - 0.08 : duration * 0.72;

      tl.call(setMessage, [msg.text], t);
      tl.fromTo(
        messageEl,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: fadeIn, force3D: true },
        t
      );

      if (i < MESSAGES.length - 1) {
        tl.to(messageEl, { opacity: 0, y: -6, duration: fadeOut, force3D: true }, visibleUntil);
      }
    });

    var readyAt = reduced ? duration * 0.65 : 2.88;
    tl.to(messageEl, { opacity: 0, duration: 0.18 }, readyAt - 0.05);
    tl.call(
      function () {
        if (readyEl) readyEl.setAttribute("aria-hidden", "false");
      },
      null,
      readyAt
    );
    tl.fromTo(readyEl, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.22, force3D: true }, readyAt);

    var exitAt = reduced ? duration * 0.78 : 3.12;
    tl.to([loader, bar, readyEl, glow], { opacity: 0, duration: 0.18 }, exitAt);

    if (veil) {
      tl.to(veil, { opacity: 0.4, duration: 0.35 }, exitAt);
    }

    tl.to(splash, { opacity: 0, duration: 0.4 }, exitAt + 0.04);

    tl.call(cacheFlyMetrics, null, flyStart - 0.12);
    tl.add(function () {
      flyLogoToHeader(flyDur);
    }, flyStart);

    tl.call(finishSplash, null, duration);
  }

  if (reduced) {
    window.setTimeout(skipSplash, 120);
    return;
  }

  runExperience().catch(function () {
    skipSplash();
  });
})();
