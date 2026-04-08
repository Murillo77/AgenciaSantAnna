/**
 * Hero background: subtle particle network (Three.js r128 UMD).
 * Attached to #hero-canvas-wrap
 */
(function () {
  var wrap = document.getElementById("hero-canvas-wrap");
  if (!wrap || typeof THREE === "undefined") return;

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  wrap.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
  camera.position.z = 10;

  var COUNT = 72;
  var RANGE_X = 18;
  var RANGE_Y = 10;
  var RANGE_Z = 6;
  var CONNECT_DIST = 2.35;

  var positions = new Float32Array(COUNT * 3);
  var velocities = new Float32Array(COUNT * 3);
  var iMax = COUNT * 3;
  var i;

  for (i = 0; i < iMax; i += 3) {
    positions[i] = (Math.random() - 0.5) * RANGE_X;
    positions[i + 1] = (Math.random() - 0.5) * RANGE_Y;
    positions[i + 2] = (Math.random() - 0.5) * RANGE_Z;
    velocities[i] = (Math.random() - 0.5) * 0.012;
    velocities[i + 1] = (Math.random() - 0.5) * 0.01;
    velocities[i + 2] = (Math.random() - 0.5) * 0.008;
  }

  var geomPoints = new THREE.BufferGeometry();
  geomPoints.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  var matPoints = new THREE.PointsMaterial({
    color: 0xb8e6ff,
    size: 0.045,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    sizeAttenuation: true,
  });
  var points = new THREE.Points(geomPoints, matPoints);
  scene.add(points);

  var lineGeom = new THREE.BufferGeometry();
  var maxSegments = COUNT * COUNT;
  var linePositions = new Float32Array(maxSegments * 6);
  lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  var lineMat = new THREE.LineBasicMaterial({
    color: 0x7dd3fc,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  });
  var lines = new THREE.LineSegments(lineGeom, lineMat);
  scene.add(lines);

  var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  var hero = wrap.closest(".hero");

  function onMove(e) {
    if (!hero) return;
    var rect = hero.getBoundingClientRect();
    var nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    var ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouse.tx = nx * 0.35;
    mouse.ty = -ny * 0.25;
  }

  function onLeave() {
    mouse.tx = 0;
    mouse.ty = 0;
  }

  if (hero) {
    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
  }

  function resize() {
    var w = wrap.clientWidth || 1;
    var h = wrap.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener("resize", resize);

  function wrapValue(val, limit) {
    if (val > limit) return -limit;
    if (val < -limit) return limit;
    return val;
  }

  var frame = 0;
  function tick() {
    frame += 1;
    var posAttr = geomPoints.attributes.position;
    var arr = posAttr.array;

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    for (i = 0; i < iMax; i += 3) {
      arr[i] += velocities[i];
      arr[i + 1] += velocities[i + 1];
      arr[i + 2] += velocities[i + 2];
      arr[i] = wrapValue(arr[i], RANGE_X * 0.5);
      arr[i + 1] = wrapValue(arr[i + 1], RANGE_Y * 0.5);
      arr[i + 2] = wrapValue(arr[i + 2], RANGE_Z * 0.5);
    }
    posAttr.needsUpdate = true;

    var seg = 0;
    var j;
    var dx;
    var dy;
    var dz;
    var d;
    for (i = 0; i < COUNT; i++) {
      var ix = i * 3;
      for (j = i + 1; j < COUNT; j++) {
        var jx = j * 3;
        dx = arr[ix] - arr[jx];
        dy = arr[ix + 1] - arr[jx + 1];
        dz = arr[ix + 2] - arr[jx + 2];
        d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < CONNECT_DIST) {
          var lp = seg * 6;
          linePositions[lp] = arr[ix];
          linePositions[lp + 1] = arr[ix + 1];
          linePositions[lp + 2] = arr[ix + 2];
          linePositions[lp + 3] = arr[jx];
          linePositions[lp + 4] = arr[jx + 1];
          linePositions[lp + 5] = arr[jx + 2];
          seg += 1;
          if (seg * 6 >= linePositions.length) break;
        }
      }
      if (seg * 6 >= linePositions.length) break;
    }

    lineGeom.setDrawRange(0, seg * 2);
    var lineAttr = lineGeom.attributes.position;
    lineAttr.needsUpdate = true;

    if (frame % 2 === 0) {
      lineMat.opacity = 0.09 + Math.sin(frame * 0.01) * 0.035;
    }

    camera.position.x = mouse.x * 0.6;
    camera.position.y = mouse.y * 0.45;
    camera.lookAt(mouse.x * 0.15, mouse.y * 0.12, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
