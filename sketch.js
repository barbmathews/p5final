
const TEXTURE_PATH = 'assets/SPpaceTexture.png';
const BG_COLOR = 'rgb(15, 5, 93)';


const PRINT_WIDTH_IN = 16;  

const cols = 40;
const rows = 38;
let cellW, cellH;


const TRAIL_RADIUS = 1.5;   
const FADE_MS = 250;        
const CUTOFF = 0.01;        
const intensity = new Float32Array(cols * rows);


const ORB_R = 120;          
const ORB_FOLLOW_MS = 220;  
const ORB_REACH = Infinity; 
const ORB_STOPS = [
  [0,    [251, 86, 7],   0.9],
  [0.55, [131, 56, 236], 0.35],
  [1,    [131, 56, 236], 0],
];
let orbX = 250, orbY = 325; 

const BG_GRAD_FROM = [15, 5, 93];     
const BG_GRAD_TO = [251, 86, 7];      
const BG_GRAD_ALPHA = 0.8;            
                                      
const BG_GRAD_MODE = 'source-over';   
                                      
const BG_GRAD_FOLLOW_MS = 450;        
const BG_GRAD_SHIFT = 0.35;           
let gradX = 900, gradY = 600;         


const DITHER_ENABLED = false;
const DITHER_SIZE = 8;
const DITHER_SCROLL_HEIGHT = 1200;
const DITHER_NOISE_STEP = 0.5;
const DITHER_COLOR_THRESHOLD = 50;
const DITHER_THRESHOLD = 127;
const DITHER_DEPTH = 0.3;
let ditherZ = 0;
let ditherGray;            


const SHAPES = [
  ['arc', 150, 410, 880, 85,  '#3e7a13'],
  ['ell', 200, 380, 380, 350, '#fb5607'],
  ['ell', 896, 260, 80,  70,  '#3a86ff'],
  ['arc', 150, 410, 880, 35,  '#88f739'],
  ['ell', 806, 280, 20,  20,  '#ddd014'],
  ['ell', 710, 280, 13,  13,  '#974eeb'],
  // ['ell', 646, 265, 15,  25,  '#3cca8a90'],
  // ['ell', 646, 265, 35,  5,  '#329cca96'],
  ['ell', 990, 890, 780, 550, '#3e1983'],
  
];



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


const STAR_R_INNER = 3;
const STAR_R_OUTER = 7;
const STAR_POINTS = 5;
const STARS = [
  ['#a5b30d98', 520, 270, 100],
  ['#eb58eb7f', 720, 470, 90],
  ['#10a4cd81', 990, 170, 80],
];


let textureImage, bgBack, shapesLayer, topLayer, textureDataURL;
let idleColor, hoverColor;
let ready = false;


async function setup() {
  pixelDensity(1);
  const canvas = createCanvas(1152, 792);
  canvas.parent('sketch');
  cellW = width / cols;
  cellH = height / rows;

  p5grain.setup();
  textureImage = await loadImage(TEXTURE_PATH);

  idleColor = color('#05adc332');
  hoverColor = color('#edda2fa8');

  renderBase();
  bgBack = get();          
  buildShapesLayer();      
  buildTopLayer();

  if (DITHER_ENABLED) {
    ditherGray = textureImage.get();
    ditherGray.resize(width, 0);
    ditherGray.filter(GRAY);
  }

  ready = true;
  noLoop();                 
  redraw();
}



function draw() {
  if (!ready) return;

  
  stampMouse();
  const decay = exp(-deltaTime / FADE_MS);
  let anyActive = false;
  for (let i = 0; i < intensity.length; i++) {
    intensity[i] *= decay;
    if (intensity[i] < CUTOFF) intensity[i] = 0;
    else anyActive = true;
  }

  
  if (updateOrb()) anyActive = true;


  if (updateBgGradient()) anyActive = true;


  image(bgBack, 0, 0);
  drawBgGradient();
  image(shapesLayer, 0, 0);
  drawOrb();   

  noStroke();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(cellColor(intensity[x + y * cols]));
      rect(x * cellW, y * cellH, cellW - 1, cellH - 1);
    }
  }

  
  blendMode(OVERLAY);
  image(textureImage, 0, 0, width, height);
  blendMode(BLEND);

  for (const [c, x, y, div] of STARS) {
    push();
    fill(c);
    translate(x, y);
    rotate(frameCount / -div);
    star(0, 0, STAR_R_INNER, STAR_R_OUTER, STAR_POINTS);
    pop();
  }

  image(topLayer, 0, 0);

  if (DITHER_ENABLED) {
    drawDither();
    return; 
  }

 
  if (!anyActive && !mouseInside()) noLoop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function starSVGPoints(x, y, r1, r2, n, rot) {
  const step = (2 * Math.PI) / n;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = i * step + rot;
    pts.push(`${(x + Math.cos(a) * r2).toFixed(3)},${(y + Math.sin(a) * r2).toFixed(3)}`);
    pts.push(`${(x + Math.cos(a + step / 2) * r1).toFixed(3)},${(y + Math.sin(a + step / 2) * r1).toFixed(3)}`);
  }
  return pts.join(' ');
}

function cellColor(v) {
  return v === 0 ? idleColor : lerpColor(idleColor, hoverColor, v);
}


function mouseMoved() {
  loop();  
}

function mouseInside() {
  return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
}


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


function updateBgGradient() {
  if (!mouseInside()) return false;
  const dx = mouseX - gradX;
  const dy = mouseY - gradY;
  if (abs(dx) + abs(dy) < 0.5) return false;

  const k = 1 - exp(-deltaTime / BG_GRAD_FOLLOW_MS);
  gradX += dx * k;
  gradY += dy * k;
  return true;
}


function bgGradientLine() {
  const cx = width / 2, cy = height / 2;
  let dx = gradX - cx, dy = gradY - cy;
  const m = Math.hypot(dx, dy);
  if (m < 1) { dx = 1; dy = 0; } else { dx /= m; dy /= m; }

  const mx = lerp(cx, gradX, BG_GRAD_SHIFT);
  const my = lerp(cy, gradY, BG_GRAD_SHIFT);
  const half = Math.hypot(width, height) / 2;
  return {
    x1: mx - dx * half, y1: my - dy * half,   
    x2: mx + dx * half, y2: my + dy * half,   
  };
}

function drawBgGradient() {
  const { x1, y1, x2, y2 } = bgGradientLine();
  const ctx = drawingContext;
  const g = ctx.createLinearGradient(x1, y1, x2, y2);
  g.addColorStop(0, `rgb(${BG_GRAD_FROM.join(',')})`);
  g.addColorStop(1, `rgb(${BG_GRAD_TO.join(',')})`);
  ctx.save();
  ctx.globalAlpha = BG_GRAD_ALPHA;
  ctx.globalCompositeOperation = BG_GRAD_MODE;
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}


function updateOrb() {
  if (!mouseInside()) return false;
  if (dist(mouseX, mouseY, orbX, orbY) > ORB_REACH) return false;

  const dx = mouseX - orbX;
  const dy = mouseY - orbY;
  if (abs(dx) + abs(dy) < 0.5) return false;

  const k = 1 - exp(-deltaTime / ORB_FOLLOW_MS);
  orbX += dx * k;
  orbY += dy * k;
  return true;
}


function drawOrb() {
  const ctx = drawingContext;
  const g = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, ORB_R);
  for (const [offset, [r, gr, b], a] of ORB_STOPS) {
    g.addColorStop(offset, `rgba(${r},${gr},${b},${a})`);
  }
  ctx.save();
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(orbX, orbY, ORB_R, 0, TWO_PI);
  ctx.fill();
  ctx.restore();
}

function linearGradient(x_i, y_i, x_e, y_e, color_i, color_e) {
  const gradient = drawingContext.createLinearGradient(x_i, y_i, x_e, y_e);
  gradient.addColorStop(0, color_i);
  gradient.addColorStop(1, color_e);
  return gradient;
}


function ditherCells() {
  const dCols = ceil(width / DITHER_SIZE);
  const dRows = ceil(DITHER_SCROLL_HEIGHT / DITHER_SIZE);
  const scrollY = window.scrollY || window.pageYOffset;
  const gradientStart = scrollY / DITHER_SIZE;
  const gradientEnd = gradientStart + (height * DITHER_DEPTH) / DITHER_SIZE;

  const cells = [];
  let yoff = 0;
  for (let i = 0; i < dCols; i++) {
    let xoff = 0;
    for (let j = 0; j < dRows; j++) {
      const gradientValue = map(j, gradientStart, gradientEnd, 0, 255);
      const noiseValue = map(noise(xoff, yoff, ditherZ), 0, 1, 0, 255);
      if (gradientValue + (noiseValue - DITHER_COLOR_THRESHOLD) < DITHER_THRESHOLD) {
        cells.push([i * DITHER_SIZE, j * DITHER_SIZE]);
      }
      xoff += DITHER_NOISE_STEP;
    }
    yoff += DITHER_NOISE_STEP;
  }
  return cells;
}

function drawDither() {
  image(ditherGray, 0, 0);
  noStroke();
  fill(255);
  for (const [x, y] of ditherCells()) rect(x, y, DITHER_SIZE, DITHER_SIZE);
  ditherZ += 0.005;
}


function renderBase() {
  background(BG_COLOR);
  textureOverlay(textureImage, { width: 1152, height: 792, mode: BLEND, reflect: false });
  textureOverlay(textureImage, { width: 1152, height: 792, mode: MULTIPLY, reflect: true });
}

function buildShapesLayer() {
  shapesLayer = createGraphics(width, height);
  shapesLayer.pixelDensity(1);
  drawShapes(shapesLayer);
}

function drawShapes(g = window) {
  g.noStroke();
  for (const [type, cx, cy, w, h, c] of SHAPES) {
    g.fill(c);
    if (type === 'arc') g.arc(cx, cy, w, h, 0, PI);
    else g.ellipse(cx, cy, w, h);
  }
}

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


async function getTextureDataURL() {
  if (textureDataURL) return textureDataURL;
  const blob = await (await fetch(TEXTURE_PATH)).blob();
  textureDataURL = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(blob);
  });
  return textureDataURL;
}


function fillAttr(c) {
  const col = color(c);
  return `fill="rgb(${round(red(col))},${round(green(col))},${round(blue(col))})" ` +
         `fill-opacity="${(alpha(col) / 255).toFixed(3)}"`;
}

function svgLayer(id, label, inner, extraAttrs = '') {
  return `  <g id="${id}" inkscape:groupmode="layer" inkscape:label="${label}" ${extraAttrs}>\n${inner}\n  </g>`;
}

function buildSVG({ includeTexture }) {
  const layers = [];
  const f2 = (n) => n.toFixed(2);


  layers.push(svgLayer('background', 'background',
    `    <rect width="100%" height="100%" fill="${BG_COLOR.replace(/\s/g, '')}"/>`));

 
  if (includeTexture) {
    layers.push(svgLayer('texture-blend', 'texture (blend)',
      `    <use href="#tex" xlink:href="#tex"/>`));
    layers.push(svgLayer('texture-multiply', 'texture (multiply)',
      `    <use href="#tex" xlink:href="#tex"/>`,
      `style="mix-blend-mode:multiply"`));
  }

 
  const bgBlend = BG_GRAD_MODE === 'source-over' ? '' : `style="mix-blend-mode:${BG_GRAD_MODE}"`;
  layers.push(svgLayer('bg-gradient', 'background gradient',
    `    <rect width="100%" height="100%" fill="url(#bgGrad)" opacity="${BG_GRAD_ALPHA}"/>`,
    bgBlend));


  const shapes = SHAPES.map(([type, cx, cy, w, h, c]) =>
    type === 'arc'
      ? `    <path d="M ${cx - w / 2} ${cy} A ${w / 2} ${h / 2} 0 0 0 ${cx + w / 2} ${cy} Z" fill="${c}"/>`
      : `    <ellipse cx="${cx}" cy="${cy}" rx="${w / 2}" ry="${h / 2}" fill="${c}"/>`
  ).join('\n');
  layers.push(svgLayer('shapes', 'shapes', shapes));

  layers.push(svgLayer('orb', 'gradient orb',
    `    <circle cx="${f2(orbX)}" cy="${f2(orbY)}" r="${ORB_R}" fill="url(#orbGrad)"/>`));

 
  let grid = '';
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid += `    <rect x="${f2(x * cellW)}" y="${f2(y * cellH)}" ` +
              `width="${f2(cellW - 1)}" height="${f2(cellH - 1)}" ` +
              `${fillAttr(cellColor(intensity[x + y * cols]))}/>\n`;
    }
  }
  layers.push(svgLayer('grid', 'hover grid', grid.trimEnd()));

  
  if (includeTexture) {
    layers.push(svgLayer('texture-overlay', 'texture (overlay)',
      `    <use href="#tex" xlink:href="#tex"/>`,
      `style="mix-blend-mode:overlay"`));
  }

  
  const stars = STARS.map(([c, x, y, div]) =>
    `    <polygon points="${starSVGPoints(x, y, STAR_R_INNER, STAR_R_OUTER, STAR_POINTS, frameCount / -div)}" ${fillAttr(c)}/>`
  ).join('\n');
  layers.push(svgLayer('stars', 'moving stars', stars));

 
  const squares = SQUARES.map(([c, x, y, s]) =>
    `    <rect x="${x}" y="${y}" width="${s}" height="${s}" ${fillAttr(c)}/>`).join('\n');
  layers.push(svgLayer('squares', 'corner squares', squares));

 
  if (DITHER_ENABLED) {
    const dith = ditherCells().map(([x, y]) =>
      `    <rect x="${x}" y="${y}" width="${DITHER_SIZE}" height="${DITHER_SIZE}" fill="#fff"/>`).join('\n');
    const gray = includeTexture
      ? `    <use href="#tex" xlink:href="#tex" filter="url(#gray)"/>\n`
      : '';
    layers.push(svgLayer('dither', 'dither', gray + dith));
  }

  const orbStops = ORB_STOPS.map(([o, [r, g, b], a]) =>
    `<stop offset="${o}" stop-color="rgb(${r},${g},${b})" stop-opacity="${a}"/>`).join('');

  const heightIn = (PRINT_WIDTH_IN * height / width).toFixed(4).replace(/\.?0+$/, '');

  return { orbStops, layers, heightIn };
}

async function exportLayeredSVG(includeTexture, filename) {
  const tex = includeTexture ? await getTextureDataURL() : null;
  const { orbStops, layers, heightIn } = buildSVG({ includeTexture });
  const bg = bgGradientLine();

  const texDef = includeTexture
    ? `<image id="tex" href="${tex}" xlink:href="${tex}" width="${width}" height="${height}" preserveAspectRatio="none"/>`
    : '';
  const grayDef = includeTexture
    ? `<filter id="gray"><feColorMatrix type="saturate" values="0"/></filter>`
    : '';

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
     width="${PRINT_WIDTH_IN}in" height="${heightIn}in" viewBox="0 0 ${width} ${height}">
  <defs>
    ${texDef}
    ${grayDef}
    <radialGradient id="orbGrad">${orbStops}</radialGradient>
    <linearGradient id="bgGrad" gradientUnits="userSpaceOnUse"
        x1="${bg.x1.toFixed(2)}" y1="${bg.y1.toFixed(2)}" x2="${bg.x2.toFixed(2)}" y2="${bg.y2.toFixed(2)}">
      <stop offset="0" stop-color="rgb(${BG_GRAD_FROM.join(',')})"/>
      <stop offset="1" stop-color="rgb(${BG_GRAD_TO.join(',')})"/>
    </linearGradient>
  </defs>
${layers.join('\n')}
</svg>
`;

  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function keyPressed() {
  if (key === 'e') exportLayeredSVG(true,  'artwork_full.svg');    
  if (key === 's') exportLayeredSVG(false, 'artwork_vector.svg');  
}