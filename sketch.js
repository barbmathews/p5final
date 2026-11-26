
// fill(random(myColors))
// for (let i = 0; i < 10; i++){
//     rect(random(0, width), random(0, height), random(30))
// }

// if (mouseIsPressed === true){
//     fill(0) 
// } else{
//     fill(225)
// }
// noFill()
// stroke(random(myColors))
// strokeWeight(random(5), random(1), random(3))
// square(mouseX, mouseY, 50)
// fill("#fb5607")
// ellipse(300, 200, 150, 200)
// fill("#8338ec")
// triangle(200, 250, 80, 300, 360, 250)
// text("rectangle", 750, 550)
// fill("#ffbe0b")
// rect(650, 600, 600, 100)
// fill("#3a86ff")
// ellipse(675, 650, 400, 100, 6)



// let textureImage;

// const cols = 40;
// const rows = 38;
// let cellW;
// let cellH;


// async function setup() {
//   pixelDensity(1);             
//   const canvas = createCanvas(1152, 792);
//   // createCanvas(5100, 3300);

//   canvas.parent("sketch");
//   cellW = width / cols;
//   cellH = height / rows;

//   p5grain.setup();              
//   textureImage = await loadImage('assets/SPpaceTexture.png');

//   background('rgb(15, 5, 93)');
  
//   noLoop();             // static piece: render once
// }


// function draw() {
//   textureOverlay(textureImage, {
//     width: 1152,        // size of one texture tile in px (SVG gets scaled to this)
//     height: 792,
//     mode: BLEND,        // try MULTIPLY, OVERLAY, SOFT_LIGHT for different looks
//     // mode: BLEND, 
//     reflect: false      // true mirrors tiles to hide seams
//   });

//   textureOverlay(textureImage, {
//     width: 1152,        // size of one texture tile in px (SVG gets scaled to this)
//     height: 792,
//     mode: MULTIPLY,        // try MULTIPLY, OVERLAY, SOFT_LIGHT for different looks
//     // mode: BLEND, 
//     reflect: true      // true mirrors tiles to hide seams
//   });
//   noStroke()
//   fill("#3e7a13")
//   arc(150, 410, 880, 85, 0, PI)
//   fill("#fb5607")
//   ellipse(200, 380, 380, 350)
//   fill("#3a86ff")
//   ellipse(896, 260, 80, 70)
//   // fill("#88f739")
//   // arc(50, 50, 80, 40, 0, PI + HALF_PI)
//   fill("#88f739")
//   arc(150, 410, 880, 35, 0, PI)
//   fill("#ddd014")
//   ellipse(806, 280, 20, 20)
//   fill("#974eeb")
//   ellipse(736, 290, 13, 13)

//   // fill('#fa8a56b3')
//   // rect(335, 265, 30, 30)
//   // fill('#c74205c0')
//   // rect(335, 235, 30, 30)
//   // fill('#3a1597')
//   // rect(365, 265, 30, 30)




//   // stroke("#369d97")
//   // strokeWeight(0.5)
//   // noStroke()
//   // fill("rgba(194, 187, 80, 0.99)")
//   // rotate(QUARTER_PI/90)
//   // translate(500, 480)
//   // beginShape()
//   // for (let j = 0; j < 30; j+=5){
//   //   vertex(sin(j * 0.89)*10, j)
//   // }
//   // endShape()
//   // pop()

//   // fill("#140b75")
//   // // rotate (QUARTER_PI)
//   // arc(500, 570, 1470, 1285, 792, HALF_PI)

//   noStroke();

//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       const posX = x * cellW;
//       const posY = y * cellH;
//       const hovering = mouseX >= posX && mouseX < posX + cellW &&
//         mouseY >= posY && mouseY < posY + cellH;

//       fill(hovering ? color("#edda2fa8") : color("#05adc332"));
//       rect(posX, posY, cellW - 1, cellH - 1);
//     }
//   }



//   textureOverlay(textureImage, {
//     width: 1152,        // size of one texture tile in px (SVG gets scaled to this)
//     height: 792,
//     mode: OVERLAY,        // try MULTIPLY, OVERLAY, SOFT_LIGHT for different looks
//     // mode: BLEND, 
//     reflect: false      // true mirrors tiles to hide seams
//   });

//   fill('rgba(37, 15, 206, 0.52)')
//   rect(5, 5, 30, 30)
//   fill('rgba(76, 60, 200, 0.57)')
//   rect(35, 5, 30, 30)
//   fill('rgba(125, 60, 200, 0.48)')
//   rect(5, 35, 30, 30)
//   fill('rgba(66, 3, 138, 0.57)')
//   rect(35, 35, 30, 30)
//   fill('rgba(53, 24, 42, 0.72)')
//   rect(35, 35, 30, 30)
//   fill('rgba(100, 48, 15, 0.74)')
//   rect(35, 65, 30, 30)

//   fill('rgba(32, 16, 157, 0.59)')
//   rect(1120, 760, 30, 30)
//   fill('rgba(54, 37, 183, 0.56)')
//   rect(1090, 730, 30, 30)
//   fill('rgba(97, 86, 176, 0.55)')
//   rect(1120, 730, 30, 30)
//   fill('rgba(133, 129, 163, 0.57)')
//   rect(1120, 700, 30, 30)
//   fill('rgba(27, 6, 182, 0.7)')
//   rect(1060, 700, 30, 30)
//   fill('rgba(92, 72, 245, 0.87)')
//   rect(1060, 670, 30, 30)
//   fill('rgba(168, 72, 8, 0.87)')
//   rect(1030, 670, 30, 30)
//   fill('rgba(97, 93, 132, 0.87)')
//   rect(1060, 730, 30, 30)
//   fill('rgba(85, 51, 142, 0.87)')
//   rect(1060, 760, 30, 30)
//   fill('rgba(89, 9, 227, 0.57)')
//   rect(1090, 760, 30, 30)
//   fill('rgb(12, 49, 162)')
//   rect(1030, 760, 30, 30)
//   fill('rgba(56, 19, 206, 0.87)')
//   rect(1030, 730, 30, 30)
//   fill('rgb(50, 4, 58)')
//   rect(1030, 700, 30, 30)
//   fill('rgb(42, 14, 127)')
//   rect(1000, 760, 30, 30)
//   fill('rgba(160, 148, 206, 0.78)')
//   rect(1000, 730, 30, 30)
//   fill('rgb(64, 34, 174)')
//   rect(1000, 700, 30, 30)
//   fill('rgba(4, 74, 67, 0.71)')
//   rect(970, 760, 30, 30)
//   fill('rgb(52, 53, 7)')
//   rect(970, 730, 30, 30)
//   fill('rgba(42, 8, 178, 0.93)')
//   rect(940, 760, 30, 30)

//   fill('#fa9f75d8')
//   rect(335, 265, 15, 15)
//   fill('#c74205c0')
//   rect(335, 250, 15, 15)
//   fill('#3a1597')
//   rect(350, 265, 15, 15)

// }

// fill(random(myColors))
// for (let i = 0; i < 10; i++){
//     rect(random(0, width), random(0, height), random(30))
// }

// if (mouseIsPressed === true){
//     fill(0) 
// } else{
//     fill(225)
// }
// noFill()
// stroke(random(myColors))
// strokeWeight(random(5), random(1), random(3))
// square(mouseX, mouseY, 50)
// fill("#fb5607")
// ellipse(300, 200, 150, 200)
// fill("#8338ec")
// triangle(200, 250, 80, 300, 360, 250)
// text("rectangle", 750, 550)
// fill("#ffbe0b")
// rect(650, 600, 600, 100)
// fill("#3a86ff")
// ellipse(675, 650, 400, 100, 6)



// let textureImage;

// const cols = 40;
// const rows = 38;
// let cellW;
// let cellH;


// async function setup() {
//   pixelDensity(1);             
//   const canvas = createCanvas(1152, 792);
//   // createCanvas(5100, 3300);

//   canvas.parent("sketch");
//   cellW = width / cols;
//   cellH = height / rows;

//   p5grain.setup();              
//   textureImage = await loadImage('assets/SPpaceTexture.png');

//   background('rgb(15, 5, 93)');
  
//   noLoop();             // static piece: render once
// }


// function draw() {
//   textureOverlay(textureImage, {
//     width: 1152,        // size of one texture tile in px (SVG gets scaled to this)
//     height: 792,
//     mode: BLEND,        // try MULTIPLY, OVERLAY, SOFT_LIGHT for different looks
//     // mode: BLEND, 
//     reflect: false      // true mirrors tiles to hide seams
//   });

//   textureOverlay(textureImage, {
//     width: 1152,        // size of one texture tile in px (SVG gets scaled to this)
//     height: 792,
//     mode: MULTIPLY,        // try MULTIPLY, OVERLAY, SOFT_LIGHT for different looks
//     // mode: BLEND, 
//     reflect: true      // true mirrors tiles to hide seams
//   });
//   noStroke()
//   fill("#3e7a13")
//   arc(150, 410, 880, 85, 0, PI)
//   fill("#fb5607")
//   ellipse(200, 380, 380, 350)
//   fill("#3a86ff")
//   ellipse(896, 260, 80, 70)
//   // fill("#88f739")
//   // arc(50, 50, 80, 40, 0, PI + HALF_PI)
//   fill("#88f739")
//   arc(150, 410, 880, 35, 0, PI)
//   fill("#ddd014")
//   ellipse(806, 280, 20, 20)
//   fill("#974eeb")
//   ellipse(736, 290, 13, 13)

//   // fill('#fa8a56b3')
//   // rect(335, 265, 30, 30)
//   // fill('#c74205c0')
//   // rect(335, 235, 30, 30)
//   // fill('#3a1597')
//   // rect(365, 265, 30, 30)




//   // stroke("#369d97")
//   // strokeWeight(0.5)
//   // noStroke()
//   // fill("rgba(194, 187, 80, 0.99)")
//   // rotate(QUARTER_PI/90)
//   // translate(500, 480)
//   // beginShape()
//   // for (let j = 0; j < 30; j+=5){
//   //   vertex(sin(j * 0.89)*10, j)
//   // }
//   // endShape()
//   // pop()

//   // fill("#140b75")
//   // // rotate (QUARTER_PI)
//   // arc(500, 570, 1470, 1285, 792, HALF_PI)

//   noStroke();

//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       const posX = x * cellW;
//       const posY = y * cellH;
//       const hovering = mouseX >= posX && mouseX < posX + cellW &&
//         mouseY >= posY && mouseY < posY + cellH;

//       fill(hovering ? color("#edda2fa8") : color("#05adc332"));
//       rect(posX, posY, cellW - 1, cellH - 1);
//     }
//   }



//   textureOverlay(textureImage, {
//     width: 1152,        // size of one texture tile in px (SVG gets scaled to this)
//     height: 792,
//     mode: OVERLAY,        // try MULTIPLY, OVERLAY, SOFT_LIGHT for different looks
//     // mode: BLEND, 
//     reflect: false      // true mirrors tiles to hide seams
//   });

//   fill('rgba(37, 15, 206, 0.52)')
//   rect(5, 5, 30, 30)
//   fill('rgba(76, 60, 200, 0.57)')
//   rect(35, 5, 30, 30)
//   fill('rgba(125, 60, 200, 0.48)')
//   rect(5, 35, 30, 30)
//   fill('rgba(66, 3, 138, 0.57)')
//   rect(35, 35, 30, 30)
//   fill('rgba(53, 24, 42, 0.72)')
//   rect(35, 35, 30, 30)
//   fill('rgba(100, 48, 15, 0.74)')
//   rect(35, 65, 30, 30)

//   fill('rgba(32, 16, 157, 0.59)')
//   rect(1120, 760, 30, 30)
//   fill('rgba(54, 37, 183, 0.56)')
//   rect(1090, 730, 30, 30)
//   fill('rgba(97, 86, 176, 0.55)')
//   rect(1120, 730, 30, 30)
//   fill('rgba(133, 129, 163, 0.57)')
//   rect(1120, 700, 30, 30)
//   fill('rgba(27, 6, 182, 0.7)')
//   rect(1060, 700, 30, 30)
//   fill('rgba(92, 72, 245, 0.87)')
//   rect(1060, 670, 30, 30)
//   fill('rgba(168, 72, 8, 0.87)')
//   rect(1030, 670, 30, 30)
//   fill('rgba(97, 93, 132, 0.87)')
//   rect(1060, 730, 30, 30)
//   fill('rgba(85, 51, 142, 0.87)')
//   rect(1060, 760, 30, 30)
//   fill('rgba(89, 9, 227, 0.57)')
//   rect(1090, 760, 30, 30)
//   fill('rgb(12, 49, 162)')
//   rect(1030, 760, 30, 30)
//   fill('rgba(56, 19, 206, 0.87)')
//   rect(1030, 730, 30, 30)
//   fill('rgb(50, 4, 58)')
//   rect(1030, 700, 30, 30)
//   fill('rgb(42, 14, 127)')
//   rect(1000, 760, 30, 30)
//   fill('rgba(160, 148, 206, 0.78)')
//   rect(1000, 730, 30, 30)
//   fill('rgb(64, 34, 174)')
//   rect(1000, 700, 30, 30)
//   fill('rgba(4, 74, 67, 0.71)')
//   rect(970, 760, 30, 30)
//   fill('rgb(52, 53, 7)')
//   rect(970, 730, 30, 30)
//   fill('rgba(42, 8, 178, 0.93)')
//   rect(940, 760, 30, 30)

//   fill('#fa9f75d8')
//   rect(335, 265, 15, 15)
//   fill('#c74205c0')
//   rect(335, 250, 15, 15)
//   fill('#3a1597')
//   rect(350, 265, 15, 15)

// }

let textureImage;
let base;       // cached snapshot of the static art under the grid
let topLayer;   // cached corner squares (transparent), drawn last
let textureDataURL;

const cols = 40;
const rows = 38;
let cellW, cellH;

// --- trail settings ---
const TRAIL_RADIUS = 1.5;   // in cells; 0 = only the hovered cell
const FADE_MS = 250;        // time constant of the fade (bigger = longer trail)
const CUTOFF = 0.01;        // below this a cell counts as "off"

const intensity = new Float32Array(cols * rows);
let idleColor, hoverColor;
let ready = false;

async function setup() {
  pixelDensity(1);
  const canvas = createCanvas(1152, 792);
  canvas.parent("sketch");
  cellW = width / cols;
  cellH = height / rows;

  p5grain.setup();
  textureImage = await loadImage('assets/SPpaceTexture.png');

  idleColor = color("#05adc332");
  hoverColor = color("#edda2fa8");

  renderBase();
  base = get();            // snapshot the finished background art
  buildTopLayer();
  ready = true;

  noLoop();                // sleeps until the mouse moves
  redraw();
}

async function getTextureDataURL() {
  if (textureDataURL) return textureDataURL;
  const blob = await (await fetch('assets/SPpaceTexture.png')).blob();
  textureDataURL = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(blob);
  });
  return textureDataURL;
}

// "#fa9f75d8" / "rgba(...)" / p5 color -> separate fill + opacity (works in more editors)
function fillAttr(c) {
  const col = color(c);
  return `fill="rgb(${round(red(col))},${round(green(col))},${round(blue(col))})" ` +
         `fill-opacity="${(alpha(col) / 255).toFixed(3)}"`;
}

async function exportFullSVG() {
  const tex = await getTextureDataURL();

  // Same shapes as drawShapes(). Update both if you change one.
  const arc = (cx, cy, w, h) =>
    `<path d="M ${cx - w / 2} ${cy} A ${w / 2} ${h / 2} 0 0 0 ${cx + w / 2} ${cy} Z"`;
  const ell = (cx, cy, w, h) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${w / 2}" ry="${h / 2}"`;
  const shapes = [
    arc(150, 410, 880, 85) + ` fill="#3e7a13"/>`,
    ell(200, 380, 380, 350) + ` fill="#fb5607"/>`,
    ell(896, 260, 80, 70) + ` fill="#3a86ff"/>`,
    arc(150, 410, 880, 35) + ` fill="#88f739"/>`,
    ell(806, 280, 20, 20) + ` fill="#ddd014"/>`,
    ell(736, 290, 13, 13) + ` fill="#974eeb"/>`,
  ].join('\n');

  let grid = '';
  const gridFill = fillAttr(idleColor);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid += `<rect x="${(x * cellW).toFixed(2)}" y="${(y * cellH).toFixed(2)}" ` +
              `width="${(cellW - 1).toFixed(2)}" height="${(cellH - 1).toFixed(2)}" ${gridFill}/>\n`;
    }
  }

  const squares = SQUARES.map(([c, x, y, s]) =>
    `<rect x="${x}" y="${y}" width="${s}" height="${s}" ${fillAttr(c)}/>`).join('\n');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <image id="tex" href="${tex}" width="${width}" height="${height}" preserveAspectRatio="none"/>
  </defs>
  <rect width="100%" height="100%" fill="rgb(15,5,93)"/>
  <use href="#tex"/>
  <use href="#tex" style="mix-blend-mode:multiply"/>
  <g id="shapes">
  ${shapes}
  </g>
  <g id="grid">
  ${grid}</g>
  <use href="#tex" style="mix-blend-mode:overlay"/>
  <g id="squares">
  ${squares}
  </g>
  </svg>`;

  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  a.download = 'artwork_full.svg';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function draw() {
  if (!ready) return;

  // 1. Update trail: stamp the cell under the mouse, decay everything else
  stampMouse();
  const decay = exp(-deltaTime / FADE_MS);
  let anyActive = false;
  for (let i = 0; i < intensity.length; i++) {
    intensity[i] *= decay;
    if (intensity[i] < CUTOFF) intensity[i] = 0;
    else anyActive = true;
  }

  // 2. Composite: base art -> grid -> texture overlay -> corner squares
  image(base, 0, 0);

  noStroke();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const v = intensity[x + y * cols];
      fill(v === 0 ? idleColor : lerpColor(idleColor, hoverColor, v));
      rect(x * cellW, y * cellH, cellW - 1, cellH - 1);
    }
  }

  // Cheap per-frame OVERLAY: one blended image() instead of re-running textureOverlay()
  blendMode(OVERLAY);
  image(textureImage, 0, 0, width, height);
  blendMode(BLEND);

  image(topLayer, 0, 0);

  // 3. Go back to sleep once the trail has fully faded and the mouse is outside
  if (!anyActive && !mouseInside()) noLoop();
}

function mouseMoved() {
  loop();   // wake up; draw() will stamp the new cell
}

function mouseInside() {
  return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
}

// Set intensity around the cell under the mouse, with a soft falloff
function stampMouse() {
  if (!mouseInside()) return;
  const cx = floor(mouseX / cellW);
  const cy = floor(mouseY / cellH);
  const r = ceil(TRAIL_RADIUS);
  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      const x = cx + dx, y = cy + dy;
      if (x < 0 || x >= cols || y < 0 || y >= rows) continue;
      const d = sqrt(dx * dx + dy * dy);
      if (d > TRAIL_RADIUS) continue;
      const v = 1 - d / (TRAIL_RADIUS + 1);
      const i = x + y * cols;
      intensity[i] = max(intensity[i], v);
    }
  }
}

// ---------- static art (runs once) ----------

function renderBase() {
  background('rgb(15, 5, 93)');
  textureOverlay(textureImage, { width: 1152, height: 792, mode: BLEND, reflect: false });
  textureOverlay(textureImage, { width: 1152, height: 792, mode: MULTIPLY, reflect: true });

  drawShapes();
}

// Shared by the canvas and the SVG export (pass a p5.Graphics or leave as global)
function drawShapes(g = window) {
  g.noStroke();
  g.fill("#3e7a13"); g.arc(150, 410, 880, 85, 0, PI);
  g.fill("#fb5607"); g.ellipse(200, 380, 380, 350);
  g.fill("#3a86ff"); g.ellipse(896, 260, 80, 70);
  g.fill("#88f739"); g.arc(150, 410, 880, 35, 0, PI);
  g.fill("#ddd014"); g.ellipse(806, 280, 20, 20);
  g.fill("#974eeb"); g.ellipse(736, 290, 13, 13);
}

// [color, x, y, size] in draw order
const SQUARES = [
  ['rgba(37, 15, 206, 0.52)', 5, 5, 30],
  ['rgba(76, 60, 200, 0.57)', 35, 5, 30],
  ['rgba(125, 60, 200, 0.48)', 5, 35, 30],
  ['rgba(66, 3, 138, 0.57)', 35, 35, 30],
  ['rgba(53, 24, 42, 0.72)', 35, 35, 30],
  ['rgba(100, 48, 15, 0.74)', 35, 65, 30],

  ['rgba(32, 16, 157, 0.59)', 1120, 760, 30],
  ['rgba(54, 37, 183, 0.56)', 1090, 730, 30],
  ['rgba(97, 86, 176, 0.55)', 1120, 730, 30],
  ['rgba(133, 129, 163, 0.57)', 1120, 700, 30],
  ['rgba(27, 6, 182, 0.7)', 1060, 700, 30],
  ['rgba(92, 72, 245, 0.87)', 1060, 670, 30],
  ['rgba(168, 72, 8, 0.87)', 1030, 670, 30],
  ['rgba(97, 93, 132, 0.87)', 1060, 730, 30],
  ['rgba(85, 51, 142, 0.87)', 1060, 760, 30],
  ['rgba(89, 9, 227, 0.57)', 1090, 760, 30],
  ['rgb(12, 49, 162)', 1030, 760, 30],
  ['rgba(56, 19, 206, 0.87)', 1030, 730, 30],
  ['rgb(50, 4, 58)', 1030, 700, 30],
  ['rgb(42, 14, 127)', 1000, 760, 30],
  ['rgba(160, 148, 206, 0.78)', 1000, 730, 30],
  ['rgb(64, 34, 174)', 1000, 700, 30],
  ['rgba(4, 74, 67, 0.71)', 970, 760, 30],
  ['rgb(52, 53, 7)', 970, 730, 30],
  ['rgba(42, 8, 178, 0.93)', 940, 760, 30],

  ['#fa9f75d8', 335, 265, 15],
  ['#c74205c0', 335, 250, 15],
  ['#3a1597', 350, 265, 15],
];

function buildTopLayer() {
  topLayer = createGraphics(width, height);
  topLayer.pixelDensity(1);
  drawSquares(topLayer);
}

function drawSquares(g = window) {
  g.noStroke();
  for (const [c, x, y, s] of SQUARES) {
    g.fill(c);
    g.rect(x, y, s, s);
  }
}

// ---------- SVG export (p5 2.4+, press "s") ----------

function exportSVG() {
  const record = buildShape(() => {
    background('rgb(15, 5, 93)');
    drawShapes();
    drawSquares();
  });
  saveSVG(record, 'artwork.svg');
}

function keyPressed() {
  if (key === 's') exportSVG();       // shapes + squares only (buildShape)
  if (key === 'e') exportFullSVG();   // shapes + grid + texture + squares
}
