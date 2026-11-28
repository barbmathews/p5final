
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



// let textureImage;
// let base;       // cached snapshot of the static art under the grid
// let topLayer;   // cached corner squares (transparent), drawn last
// let textureDataURL;

// const cols = 40;
// const rows = 38;
// let cellW, cellH;

// // --- trail settings ---
// const TRAIL_RADIUS = 1.5;   // in cells; 0 = only the hovered cell
// const FADE_MS = 250;        // time constant of the fade (bigger = longer trail)
// const CUTOFF = 0.01;        // below this a cell counts as "off"

// const intensity = new Float32Array(cols * rows);
// let idleColor, hoverColor;
// let ready = false;

// let grad1

// async function setup() {
//   pixelDensity(1);
//   const canvas = createCanvas(1152, 792);
//   canvas.parent("sketch");
//   cellW = width / cols;
//   cellH = height / rows;

//   p5grain.setup();
//   textureImage = await loadImage('assets/SPpaceTexture.png');

//   idleColor = color("#05adc332");
//   hoverColor = color("#edda2fa8");

//   grad1=linearGradient(
//     width/2-200, 150,
//     width/2+200, 150,
//     color(255, 0, 0),
//     color(255, 255, 0)
//   );
  

//   renderBase();
//   base = get();            // snapshot the finished background art
//   buildTopLayer();
//   ready = true;

//   noLoop();                // sleeps until the mouse moves
//   redraw();
// }

// async function getTextureDataURL() {
//   if (textureDataURL) return textureDataURL;
//   const blob = await (await fetch('assets/SPpaceTexture.png')).blob();
//   textureDataURL = await new Promise((res, rej) => {
//     const r = new FileReader();
//     r.onload = () => res(r.result);
//     r.onerror = rej;
//     r.readAsDataURL(blob);
//   });
//   return textureDataURL;
// }

// // "#fa9f75d8" / "rgba(...)" / p5 color -> separate fill + opacity (works in more editors)
// function fillAttr(c) {
//   const col = color(c);
//   return `fill="rgb(${round(red(col))},${round(green(col))},${round(blue(col))})" ` +
//          `fill-opacity="${(alpha(col) / 255).toFixed(3)}"`;
// }

// async function exportFullSVG() {
//   const tex = await getTextureDataURL();

//   // Same shapes as drawShapes(). Update both if you change one.
//   const arc = (cx, cy, w, h) =>
//     `<path d="M ${cx - w / 2} ${cy} A ${w / 2} ${h / 2} 0 0 0 ${cx + w / 2} ${cy} Z"`;
//   const ell = (cx, cy, w, h) =>
//     `<ellipse cx="${cx}" cy="${cy}" rx="${w / 2}" ry="${h / 2}"`;
//   const shapes = [
//     ellipse(250+200*Math.cos(frameCount*0.05),175,100),
//     arc(150, 410, 880, 85) + ` fill="#3e7a13"/>`,
//     ell(200, 380, 380, 350) + ` fill="#fb5607"/>`,
//     ell(896, 260, 80, 70) + ` fill="#3a86ff"/>`,
//     arc(150, 410, 880, 35) + ` fill="#88f739"/>`,
//     ell(806, 280, 20, 20) + ` fill="#ddd014"/>`,
//     ell(736, 290, 13, 13) + ` fill="#974eeb"/>`,
//   ].join('\n');

//   let grid = '';
//   const gridFill = fillAttr(idleColor);
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       grid += `<rect x="${(x * cellW).toFixed(2)}" y="${(y * cellH).toFixed(2)}" ` +
//               `width="${(cellW - 1).toFixed(2)}" height="${(cellH - 1).toFixed(2)}" ${gridFill}/>\n`;
//     }
//   }

//   const squares = SQUARES.map(([c, x, y, s]) =>
//     `<rect x="${x}" y="${y}" width="${s}" height="${s}" ${fillAttr(c)}/>`).join('\n');

//   const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
//   <defs>
//     <image id="tex" href="${tex}" width="${width}" height="${height}" preserveAspectRatio="none"/>
//   </defs>
//   <rect width="100%" height="100%" fill="rgb(15,5,93)"/>
//   <use href="#tex"/>
//   <use href="#tex" style="mix-blend-mode:multiply"/>
//   <g id="shapes">
//   ${shapes}
//   </g>
//   <g id="grid">
//   ${grid}</g>
//   <use href="#tex" style="mix-blend-mode:overlay"/>
//   <g id="squares">
//   ${squares}
//   </g>
//   </svg>`;

//   const a = document.createElement('a');
//   a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
//   a.download = 'artwork_full.svg';
//   a.click();
//   setTimeout(() => URL.revokeObjectURL(a.href), 1000);
// }

// function draw() {
//   if (!ready) return;

//   // 1. Update trail: stamp the cell under the mouse, decay everything else
//   stampMouse();
//   const decay = exp(-deltaTime / FADE_MS);
//   let anyActive = false;
//   for (let i = 0; i < intensity.length; i++) {
//     intensity[i] *= decay;
//     if (intensity[i] < CUTOFF) intensity[i] = 0;
//     else anyActive = true;
//   }

//   // 2. Composite: base art -> grid -> texture overlay -> corner squares
//   image(base, 0, 0);

//   noStroke();
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       const v = intensity[x + y * cols];
//       fill(v === 0 ? idleColor : lerpColor(idleColor, hoverColor, v));
//       rect(x * cellW, y * cellH, cellW - 1, cellH - 1);
//     }
//   }

//   // Cheap per-frame OVERLAY: one blended image() instead of re-running textureOverlay()
//   blendMode(OVERLAY);
//   image(textureImage, 0, 0, width, height);
//   blendMode(BLEND);

//   image(topLayer, 0, 0);


//   // 3. Go back to sleep once the trail has fully faded and the mouse is outside
//   if (!anyActive && !mouseInside()) noLoop();

//   let grad2=linearGradient(
//     250+200*Math.cos(frameCount*0.05)-50,350,
//     250+200*Math.cos(frameCount*0.05)+50,350,
//     color('rgb(15, 5, 93)'),
//     color('#fb5607')
//   );
//   drawingContext.fillStyle = grad2;
//   ellipse(250+200*Math.sin(frameCount*0.05),325,100);
// }

// function linearGradient(x_i, y_i, x_e, y_e, color_i, color_e){
//   let gradient = drawingContext.createLinearGradient(x_i, y_i, x_e, y_e);
//   gradient.addColorStop(0, color_i);
//   gradient.addColorStop(1, color_e);
//   return gradient;
// }

// function mouseMoved() {
//   loop();   // wake up; draw() will stamp the new cell
// }

// function mouseInside() {
//   return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
// }

// // Set intensity around the cell under the mouse, with a soft falloff
// function stampMouse() {
//   if (!mouseInside()) return;
//   const cx = floor(mouseX / cellW);
//   const cy = floor(mouseY / cellH);
//   const r = ceil(TRAIL_RADIUS);
//   for (let dy = -r; dy <= r; dy++) {
//     for (let dx = -r; dx <= r; dx++) {
//       const x = cx + dx, y = cy + dy;
//       if (x < 0 || x >= cols || y < 0 || y >= rows) continue;
//       const d = sqrt(dx * dx + dy * dy);
//       if (d > TRAIL_RADIUS) continue;
//       const v = 1 - d / (TRAIL_RADIUS + 1);
//       const i = x + y * cols;
//       intensity[i] = max(intensity[i], v);
//     }
//   }
// }

// // ---------- static art (runs once) ----------

// function renderBase() {
  
//   background('rgb(15, 5, 93)');
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: BLEND, reflect: false });
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: MULTIPLY, reflect: true });

//   drawShapes();
// }

// // Shared by the canvas and the SVG export (pass a p5.Graphics or leave as global)
// function drawShapes(g = window) {
//   g.noStroke();
//   g.fill("#3e7a13"); g.arc(150, 410, 880, 85, 0, PI);
//   g.fill("#fb5607"); g.ellipse(200, 380, 380, 350);
//   g.fill("#3a86ff"); g.ellipse(896, 260, 80, 70);
//   g.fill("#88f739"); g.arc(150, 410, 880, 35, 0, PI);
//   g.fill("#ddd014"); g.ellipse(806, 280, 20, 20);
//   g.fill("#974eeb"); g.ellipse(736, 290, 13, 13);
// }

// // [color, x, y, size] in draw order
// const SQUARES = [
//   ['rgba(37, 15, 206, 0.52)', 5, 5, 30],
//   ['rgba(76, 60, 200, 0.57)', 35, 5, 30],
//   ['rgba(125, 60, 200, 0.48)', 5, 35, 30],
//   ['rgba(66, 3, 138, 0.57)', 35, 35, 30],
//   ['rgba(53, 24, 42, 0.72)', 35, 35, 30],
//   ['rgba(100, 48, 15, 0.74)', 35, 65, 30],

//   ['rgba(32, 16, 157, 0.59)', 1120, 760, 30],
//   ['rgba(54, 37, 183, 0.56)', 1090, 730, 30],
//   ['rgba(97, 86, 176, 0.55)', 1120, 730, 30],
//   ['rgba(133, 129, 163, 0.57)', 1120, 700, 30],
//   ['rgba(27, 6, 182, 0.7)', 1060, 700, 30],
//   ['rgba(92, 72, 245, 0.87)', 1060, 670, 30],
//   ['rgba(168, 72, 8, 0.87)', 1030, 670, 30],
//   ['rgba(97, 93, 132, 0.87)', 1060, 730, 30],
//   ['rgba(85, 51, 142, 0.87)', 1060, 760, 30],
//   ['rgba(89, 9, 227, 0.57)', 1090, 760, 30],
//   ['rgb(12, 49, 162)', 1030, 760, 30],
//   ['rgba(56, 19, 206, 0.87)', 1030, 730, 30],
//   ['rgb(50, 4, 58)', 1030, 700, 30],
//   ['rgb(42, 14, 127)', 1000, 760, 30],
//   ['rgba(160, 148, 206, 0.78)', 1000, 730, 30],
//   ['rgb(64, 34, 174)', 1000, 700, 30],
//   ['rgba(4, 74, 67, 0.71)', 970, 760, 30],
//   ['rgb(52, 53, 7)', 970, 730, 30],
//   ['rgba(42, 8, 178, 0.93)', 940, 760, 30],

//   ['#fa9f75d8', 335, 265, 15],
//   ['#c74205c0', 335, 250, 15],
//   ['#3a1597', 350, 265, 15],
// ];

// function buildTopLayer() {
//   topLayer = createGraphics(width, height);
//   topLayer.pixelDensity(1);
//   drawSquares(topLayer);
// }

// function drawSquares(g = window) {
//   g.noStroke();
//   for (const [c, x, y, s] of SQUARES) {
//     g.fill(c);
//     g.rect(x, y, s, s);
//   }
// }


// // ---------- SVG export (p5 2.4+, press "s") ----------

// function exportSVG() {
//   const record = buildShape(() => {
//     background('rgb(15, 5, 93)');
//     drawShapes();
//     drawSquares();
//   });
//   saveSVG(record, 'artwork.svg');
// }

// // function keyPressed() {
// //   if (key === 's') exportSVG();       // shapes + squares only (buildShape)
// //   if (key === 'e') exportFullSVG();   // shapes + grid + texture + squares
// // }
// // =====================================================================
// // Layered texture piece: base art -> gradient orb -> hover grid ->
// // OVERLAY texture -> corner squares.
// // Requires p5 2.x (async setup) + p5.grain.
// // Keys: "s" = shapes+squares SVG, "e" = full SVG (texture, grid, orb)
// // =====================================================================

// // =====================================================================
// // Layered texture piece
// //   canvas order: base art -> gradient orb -> hover grid ->
// //                 OVERLAY texture -> corner squares (-> optional dither)
// // Requires p5 2.x (async setup) + p5.grain.
// //
// // Keys:
// //   e = FULL layered SVG  (texture images embedded, every layer separate)
// //   s = VECTOR-ONLY layered SVG (no raster texture; lighter, plotter-friendly)
// // Both export the current hover trail + current orb position, and are
// // sized in inches so they open at print size.
// // =====================================================================

// // ---------- config ----------
// const TEXTURE_PATH = 'assets/SPpaceTexture.png';
// const BG_COLOR = 'rgb(15, 5, 93)';

// // print size of the SVG (height follows the canvas aspect ratio)
// const PRINT_WIDTH_IN = 16;   // 1152 x 792 canvas -> 16in x 11in

// const cols = 40;
// const rows = 38;
// let cellW, cellH;

// // hover trail
// const TRAIL_RADIUS = 1.5;   // in cells; 0 = only the hovered cell
// const FADE_MS = 250;        // time constant of the fade (bigger = longer trail)
// const CUTOFF = 0.01;        // below this a cell counts as "off"
// const intensity = new Float32Array(cols * rows);

// // gradient orb
// const ORB_R = 120;          // radius of the glow in px
// const ORB_FOLLOW_MS = 220;  // easing time constant (bigger = lazier follow)
// const ORB_REACH = Infinity; // follow only when mouse is within this many px (try 150)
// // [offset, [r, g, b], alpha] - fades to transparent so there is no hard edge
// const ORB_STOPS = [
//   [0,    [251, 86, 7],   0.9],
//   [0.55, [131, 56, 236], 0.35],
//   [1,    [131, 56, 236], 0],
// ];
// let orbX = 250, orbY = 325; // resting position; only changes while hovering

// // optional scroll-driven dithered gradient (off by default = same look as before)
// const DITHER_ENABLED = false;
// const DITHER_SIZE = 8;
// const DITHER_SCROLL_HEIGHT = 1200;
// const DITHER_NOISE_STEP = 0.5;
// const DITHER_COLOR_THRESHOLD = 50;
// const DITHER_THRESHOLD = 127;
// const DITHER_DEPTH = 0.3;
// let ditherZ = 0;
// let ditherGray;             // grayscale copy of the texture (canvas only)

// // shape definitions, shared by the canvas and the SVG export
// // [type, cx, cy, w, h, color]
// const SHAPES = [
//   ['arc', 150, 410, 880, 85,  '#3e7a13'],
//   ['ell', 200, 380, 380, 350, '#fb5607'],
//   ['ell', 896, 260, 80,  70,  '#3a86ff'],
//   ['arc', 150, 410, 880, 35,  '#88f739'],
//   ['ell', 806, 280, 20,  20,  '#ddd014'],
//   ['ell', 736, 290, 13,  13,  '#974eeb'],
// ];

// // [color, x, y, size] in draw order
// const SQUARES = [
//   ['rgba(37, 15, 206, 0.52)', 5, 5, 30],
//   ['rgba(76, 60, 200, 0.57)', 35, 5, 30],
//   ['rgba(125, 60, 200, 0.48)', 5, 35, 30],
//   ['rgba(66, 3, 138, 0.57)', 35, 35, 30],
//   ['rgba(53, 24, 42, 0.72)', 35, 35, 30],
//   ['rgba(100, 48, 15, 0.74)', 35, 65, 30],

//   ['rgba(32, 16, 157, 0.59)', 1120, 760, 30],
//   ['rgba(54, 37, 183, 0.56)', 1090, 730, 30],
//   ['rgba(97, 86, 176, 0.55)', 1120, 730, 30],
//   ['rgba(133, 129, 163, 0.57)', 1120, 700, 30],
//   ['rgba(27, 6, 182, 0.7)', 1060, 700, 30],
//   ['rgba(92, 72, 245, 0.87)', 1060, 670, 30],
//   ['rgba(168, 72, 8, 0.87)', 1030, 670, 30],
//   ['rgba(97, 93, 132, 0.87)', 1060, 730, 30],
//   ['rgba(85, 51, 142, 0.87)', 1060, 760, 30],
//   ['rgba(89, 9, 227, 0.57)', 1090, 760, 30],
//   ['rgb(12, 49, 162)', 1030, 760, 30],
//   ['rgba(56, 19, 206, 0.87)', 1030, 730, 30],
//   ['rgb(50, 4, 58)', 1030, 700, 30],
//   ['rgb(42, 14, 127)', 1000, 760, 30],
//   ['rgba(160, 148, 206, 0.78)', 1000, 730, 30],
//   ['rgb(64, 34, 174)', 1000, 700, 30],
//   ['rgba(4, 74, 67, 0.71)', 970, 760, 30],
//   ['rgb(52, 53, 7)', 970, 730, 30],
//   ['rgba(42, 8, 178, 0.93)', 940, 760, 30],

//   ['#fa9f75d8', 335, 265, 15],
//   ['#c74205c0', 335, 250, 15],
//   ['#3a1597', 350, 265, 15],
// ];

// // state
// let textureImage, base, topLayer, textureDataURL;
// let idleColor, hoverColor;
// let ready = false;

// // ---------- setup ----------
// async function setup() {
//   pixelDensity(1);
//   const canvas = createCanvas(1152, 792);
//   canvas.parent('sketch');
//   cellW = width / cols;
//   cellH = height / rows;

//   p5grain.setup();
//   textureImage = await loadImage(TEXTURE_PATH);

//   idleColor = color('#05adc332');
//   hoverColor = color('#edda2fa8');

//   renderBase();
//   base = get();             // snapshot the finished background art
//   buildTopLayer();

//   if (DITHER_ENABLED) {
//     ditherGray = textureImage.get();
//     ditherGray.resize(width, 0);
//     ditherGray.filter(GRAY);
//   }

//   ready = true;
//   noLoop();                 // sleeps until the mouse moves
//   redraw();
// }

// // ---------- draw ----------
// function draw() {
//   if (!ready) return;

//   // 1. Update trail: stamp the cell under the mouse, decay everything else
//   stampMouse();
//   const decay = exp(-deltaTime / FADE_MS);
//   let anyActive = false;
//   for (let i = 0; i < intensity.length; i++) {
//     intensity[i] *= decay;
//     if (intensity[i] < CUTOFF) intensity[i] = 0;
//     else anyActive = true;
//   }

//   // Orb follows the mouse only while hovering
//   if (updateOrb()) anyActive = true;

//   // 2. Composite: base art -> orb -> grid -> texture overlay -> corner squares
//   image(base, 0, 0);
//   drawOrb();   // before the grid + texture so they blend over it

//   noStroke();
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       fill(cellColor(intensity[x + y * cols]));
//       rect(x * cellW, y * cellH, cellW - 1, cellH - 1);
//     }
//   }

//   // Cheap per-frame OVERLAY: one blended image() instead of re-running textureOverlay()
//   blendMode(OVERLAY);
//   image(textureImage, 0, 0, width, height);
//   blendMode(BLEND);

//   image(topLayer, 0, 0);

//   if (DITHER_ENABLED) {
//     drawDither();
//     return; // keep looping so the noise animates
//   }

//   // 3. Sleep once the trail has fully faded and the mouse is outside
//   if (!anyActive && !mouseInside()) noLoop();
// }

// function cellColor(v) {
//   return v === 0 ? idleColor : lerpColor(idleColor, hoverColor, v);
// }

// // ---------- hover trail ----------
// function mouseMoved() {
//   loop();   // wake up; draw() will stamp the new cell
// }

// function mouseInside() {
//   return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
// }

// // Set intensity around the cell under the mouse, with a soft falloff
// function stampMouse() {
//   if (!mouseInside()) return;
//   const cx = floor(mouseX / cellW);
//   const cy = floor(mouseY / cellH);
//   const r = ceil(TRAIL_RADIUS);
//   for (let dy = -r; dy <= r; dy++) {
//     for (let dx = -r; dx <= r; dx++) {
//       const x = cx + dx, y = cy + dy;
//       if (x < 0 || x >= cols || y < 0 || y >= rows) continue;
//       const d = sqrt(dx * dx + dy * dy);
//       if (d > TRAIL_RADIUS) continue;
//       const v = 1 - d / (TRAIL_RADIUS + 1);
//       const i = x + y * cols;
//       intensity[i] = max(intensity[i], v);
//     }
//   }
// }

// // ---------- gradient orb ----------
// // Ease the orb toward the mouse. Returns true while it is still moving.
// function updateOrb() {
//   if (!mouseInside()) return false;
//   if (dist(mouseX, mouseY, orbX, orbY) > ORB_REACH) return false;

//   const dx = mouseX - orbX;
//   const dy = mouseY - orbY;
//   if (abs(dx) + abs(dy) < 0.5) return false;

//   const k = 1 - exp(-deltaTime / ORB_FOLLOW_MS);
//   orbX += dx * k;
//   orbY += dy * k;
//   return true;
// }

// // Radial gradient that fades to transparent, melting into whatever is behind it
// function drawOrb() {
//   const ctx = drawingContext;
//   const g = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, ORB_R);
//   for (const [offset, [r, gr, b], a] of ORB_STOPS) {
//     g.addColorStop(offset, `rgba(${r},${gr},${b},${a})`);
//   }
//   ctx.save();
//   ctx.fillStyle = g;
//   ctx.beginPath();
//   ctx.arc(orbX, orbY, ORB_R, 0, TWO_PI);
//   ctx.fill();
//   ctx.restore();
// }

// function linearGradient(x_i, y_i, x_e, y_e, color_i, color_e) {
//   const gradient = drawingContext.createLinearGradient(x_i, y_i, x_e, y_e);
//   gradient.addColorStop(0, color_i);
//   gradient.addColorStop(1, color_e);
//   return gradient;
// }

// // ---------- optional dither layer ----------
// // Returns the [x, y] of every white dither square for the current frame/scroll.
// function ditherCells() {
//   const dCols = ceil(width / DITHER_SIZE);
//   const dRows = ceil(DITHER_SCROLL_HEIGHT / DITHER_SIZE);
//   const scrollY = window.scrollY || window.pageYOffset;
//   const gradientStart = scrollY / DITHER_SIZE;
//   const gradientEnd = gradientStart + (height * DITHER_DEPTH) / DITHER_SIZE;

//   const cells = [];
//   let yoff = 0;
//   for (let i = 0; i < dCols; i++) {
//     let xoff = 0;
//     for (let j = 0; j < dRows; j++) {
//       const gradientValue = map(j, gradientStart, gradientEnd, 0, 255);
//       const noiseValue = map(noise(xoff, yoff, ditherZ), 0, 1, 0, 255);
//       if (gradientValue + (noiseValue - DITHER_COLOR_THRESHOLD) < DITHER_THRESHOLD) {
//         cells.push([i * DITHER_SIZE, j * DITHER_SIZE]);
//       }
//       xoff += DITHER_NOISE_STEP;
//     }
//     yoff += DITHER_NOISE_STEP;
//   }
//   return cells;
// }

// function drawDither() {
//   image(ditherGray, 0, 0);
//   noStroke();
//   fill(255);
//   for (const [x, y] of ditherCells()) rect(x, y, DITHER_SIZE, DITHER_SIZE);
//   ditherZ += 0.005;
// }

// // ---------- static art (runs once) ----------
// function renderBase() {
//   background(BG_COLOR);
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: BLEND, reflect: false });
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: MULTIPLY, reflect: true });
//   drawShapes();
// }

// function drawShapes(g = window) {
//   g.noStroke();
//   for (const [type, cx, cy, w, h, c] of SHAPES) {
//     g.fill(c);
//     if (type === 'arc') g.arc(cx, cy, w, h, 0, PI);
//     else g.ellipse(cx, cy, w, h);
//   }
// }

// function buildTopLayer() {
//   topLayer = createGraphics(width, height);
//   topLayer.pixelDensity(1);
//   drawSquares(topLayer);
// }

// function drawSquares(g = window) {
//   g.noStroke();
//   for (const [c, x, y, s] of SQUARES) {
//     g.fill(c);
//     g.rect(x, y, s, s);
//   }
// }

// // =====================================================================
// // SVG export: every layer is its own named group (Illustrator / Inkscape /
// // Affinity / Figma all read these as layers), in the same stacking order
// // as the canvas. Sized in inches for printing.
// // =====================================================================
// async function getTextureDataURL() {
//   if (textureDataURL) return textureDataURL;
//   const blob = await (await fetch(TEXTURE_PATH)).blob();
//   textureDataURL = await new Promise((res, rej) => {
//     const r = new FileReader();
//     r.onload = () => res(r.result);
//     r.onerror = rej;
//     r.readAsDataURL(blob);
//   });
//   return textureDataURL;
// }

// // "#fa9f75d8" / "rgba(...)" / p5 color -> separate fill + opacity (works in more editors)
// function fillAttr(c) {
//   const col = color(c);
//   return `fill="rgb(${round(red(col))},${round(green(col))},${round(blue(col))})" ` +
//          `fill-opacity="${(alpha(col) / 255).toFixed(3)}"`;
// }

// function svgLayer(id, label, inner, extraAttrs = '') {
//   return `  <g id="${id}" inkscape:groupmode="layer" inkscape:label="${label}" ${extraAttrs}>\n${inner}\n  </g>`;
// }

// function buildSVG({ includeTexture }) {
//   const layers = [];
//   const f2 = (n) => n.toFixed(2);

//   // 1. background
//   layers.push(svgLayer('background', 'background',
//     `    <rect width="100%" height="100%" fill="${BG_COLOR.replace(/\s/g, '')}"/>`));

//   // 2-3. texture under the shapes (BLEND, then MULTIPLY)
//   if (includeTexture) {
//     layers.push(svgLayer('texture-blend', 'texture (blend)',
//       `    <use href="#tex" xlink:href="#tex"/>`));
//     layers.push(svgLayer('texture-multiply', 'texture (multiply)',
//       `    <use href="#tex" xlink:href="#tex"/>`,
//       `style="mix-blend-mode:multiply"`));
//   }

//   // 4. shapes
//   const shapes = SHAPES.map(([type, cx, cy, w, h, c]) =>
//     type === 'arc'
//       ? `    <path d="M ${cx - w / 2} ${cy} A ${w / 2} ${h / 2} 0 0 0 ${cx + w / 2} ${cy} Z" fill="${c}"/>`
//       : `    <ellipse cx="${cx}" cy="${cy}" rx="${w / 2}" ry="${h / 2}" fill="${c}"/>`
//   ).join('\n');
//   layers.push(svgLayer('shapes', 'shapes', shapes));

//   // 5. orb (current position)
//   layers.push(svgLayer('orb', 'gradient orb',
//     `    <circle cx="${f2(orbX)}" cy="${f2(orbY)}" r="${ORB_R}" fill="url(#orbGrad)"/>`));

//   // 6. grid, colored by the current hover-trail intensity
//   let grid = '';
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       grid += `    <rect x="${f2(x * cellW)}" y="${f2(y * cellH)}" ` +
//               `width="${f2(cellW - 1)}" height="${f2(cellH - 1)}" ` +
//               `${fillAttr(cellColor(intensity[x + y * cols]))}/>\n`;
//     }
//   }
//   layers.push(svgLayer('grid', 'hover grid', grid.trimEnd()));

//   // 7. overlay texture
//   if (includeTexture) {
//     layers.push(svgLayer('texture-overlay', 'texture (overlay)',
//       `    <use href="#tex" xlink:href="#tex"/>`,
//       `style="mix-blend-mode:overlay"`));
//   }

//   // 8. corner squares
//   const squares = SQUARES.map(([c, x, y, s]) =>
//     `    <rect x="${x}" y="${y}" width="${s}" height="${s}" ${fillAttr(c)}/>`).join('\n');
//   layers.push(svgLayer('squares', 'corner squares', squares));

//   // 9. optional dither (grayscale texture + white squares, as on the canvas)
//   if (DITHER_ENABLED) {
//     const dith = ditherCells().map(([x, y]) =>
//       `    <rect x="${x}" y="${y}" width="${DITHER_SIZE}" height="${DITHER_SIZE}" fill="#fff"/>`).join('\n');
//     const gray = includeTexture
//       ? `    <use href="#tex" xlink:href="#tex" filter="url(#gray)"/>\n`
//       : '';
//     layers.push(svgLayer('dither', 'dither', gray + dith));
//   }

//   const orbStops = ORB_STOPS.map(([o, [r, g, b], a]) =>
//     `<stop offset="${o}" stop-color="rgb(${r},${g},${b})" stop-opacity="${a}"/>`).join('');

//   const heightIn = (PRINT_WIDTH_IN * height / width).toFixed(4).replace(/\.?0+$/, '');

//   return { orbStops, layers, heightIn };
// }

// async function exportLayeredSVG(includeTexture, filename) {
//   const tex = includeTexture ? await getTextureDataURL() : null;
//   const { orbStops, layers, heightIn } = buildSVG({ includeTexture });

//   const texDef = includeTexture
//     ? `<image id="tex" href="${tex}" xlink:href="${tex}" width="${width}" height="${height}" preserveAspectRatio="none"/>`
//     : '';
//   const grayDef = includeTexture
//     ? `<filter id="gray"><feColorMatrix type="saturate" values="0"/></filter>`
//     : '';

//   const svg = `<?xml version="1.0" encoding="UTF-8"?>
// <svg xmlns="http://www.w3.org/2000/svg"
//      xmlns:xlink="http://www.w3.org/1999/xlink"
//      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
//      width="${PRINT_WIDTH_IN}in" height="${heightIn}in" viewBox="0 0 ${width} ${height}">
//   <defs>
//     ${texDef}
//     ${grayDef}
//     <radialGradient id="orbGrad">${orbStops}</radialGradient>
//   </defs>
// ${layers.join('\n')}
// </svg>
// `;

//   const a = document.createElement('a');
//   a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
//   a.download = filename;
//   a.click();
//   setTimeout(() => URL.revokeObjectURL(a.href), 1000);
// }

// function keyPressed() {
//   if (key === 'e') exportLayeredSVG(true,  'artwork_full.svg');    // all layers + texture
//   if (key === 's') exportLayeredSVG(false, 'artwork_vector.svg');  // all vector layers, no raster
// }
// =====================================================================
// Layered texture piece
//   canvas order: background + texture -> blue->orange gradient -> shapes ->
//                 gradient orb -> hover grid -> OVERLAY texture ->
//                 corner squares (-> optional dither)
// Requires p5 2.x (async setup) + p5.grain.
//
// Keys:
//   e = FULL layered SVG  (texture images embedded, every layer separate)
//   s = VECTOR-ONLY layered SVG (no raster texture; lighter, plotter-friendly)
// Both export the current hover trail + current orb position, and are
// sized in inches so they open at print size.
// =====================================================================

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



// let textureImage;
// let base;       // cached snapshot of the static art under the grid
// let topLayer;   // cached corner squares (transparent), drawn last
// let textureDataURL;

// const cols = 40;
// const rows = 38;
// let cellW, cellH;

// // --- trail settings ---
// const TRAIL_RADIUS = 1.5;   // in cells; 0 = only the hovered cell
// const FADE_MS = 250;        // time constant of the fade (bigger = longer trail)
// const CUTOFF = 0.01;        // below this a cell counts as "off"

// const intensity = new Float32Array(cols * rows);
// let idleColor, hoverColor;
// let ready = false;

// let grad1

// async function setup() {
//   pixelDensity(1);
//   const canvas = createCanvas(1152, 792);
//   canvas.parent("sketch");
//   cellW = width / cols;
//   cellH = height / rows;

//   p5grain.setup();
//   textureImage = await loadImage('assets/SPpaceTexture.png');

//   idleColor = color("#05adc332");
//   hoverColor = color("#edda2fa8");

//   grad1=linearGradient(
//     width/2-200, 150,
//     width/2+200, 150,
//     color(255, 0, 0),
//     color(255, 255, 0)
//   );
  

//   renderBase();
//   base = get();            // snapshot the finished background art
//   buildTopLayer();
//   ready = true;

//   noLoop();                // sleeps until the mouse moves
//   redraw();
// }

// async function getTextureDataURL() {
//   if (textureDataURL) return textureDataURL;
//   const blob = await (await fetch('assets/SPpaceTexture.png')).blob();
//   textureDataURL = await new Promise((res, rej) => {
//     const r = new FileReader();
//     r.onload = () => res(r.result);
//     r.onerror = rej;
//     r.readAsDataURL(blob);
//   });
//   return textureDataURL;
// }

// // "#fa9f75d8" / "rgba(...)" / p5 color -> separate fill + opacity (works in more editors)
// function fillAttr(c) {
//   const col = color(c);
//   return `fill="rgb(${round(red(col))},${round(green(col))},${round(blue(col))})" ` +
//          `fill-opacity="${(alpha(col) / 255).toFixed(3)}"`;
// }

// async function exportFullSVG() {
//   const tex = await getTextureDataURL();

//   // Same shapes as drawShapes(). Update both if you change one.
//   const arc = (cx, cy, w, h) =>
//     `<path d="M ${cx - w / 2} ${cy} A ${w / 2} ${h / 2} 0 0 0 ${cx + w / 2} ${cy} Z"`;
//   const ell = (cx, cy, w, h) =>
//     `<ellipse cx="${cx}" cy="${cy}" rx="${w / 2}" ry="${h / 2}"`;
//   const shapes = [
//     ellipse(250+200*Math.cos(frameCount*0.05),175,100),
//     arc(150, 410, 880, 85) + ` fill="#3e7a13"/>`,
//     ell(200, 380, 380, 350) + ` fill="#fb5607"/>`,
//     ell(896, 260, 80, 70) + ` fill="#3a86ff"/>`,
//     arc(150, 410, 880, 35) + ` fill="#88f739"/>`,
//     ell(806, 280, 20, 20) + ` fill="#ddd014"/>`,
//     ell(736, 290, 13, 13) + ` fill="#974eeb"/>`,
//   ].join('\n');

//   let grid = '';
//   const gridFill = fillAttr(idleColor);
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       grid += `<rect x="${(x * cellW).toFixed(2)}" y="${(y * cellH).toFixed(2)}" ` +
//               `width="${(cellW - 1).toFixed(2)}" height="${(cellH - 1).toFixed(2)}" ${gridFill}/>\n`;
//     }
//   }

//   const squares = SQUARES.map(([c, x, y, s]) =>
//     `<rect x="${x}" y="${y}" width="${s}" height="${s}" ${fillAttr(c)}/>`).join('\n');

//   const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
//   <defs>
//     <image id="tex" href="${tex}" width="${width}" height="${height}" preserveAspectRatio="none"/>
//   </defs>
//   <rect width="100%" height="100%" fill="rgb(15,5,93)"/>
//   <use href="#tex"/>
//   <use href="#tex" style="mix-blend-mode:multiply"/>
//   <g id="shapes">
//   ${shapes}
//   </g>
//   <g id="grid">
//   ${grid}</g>
//   <use href="#tex" style="mix-blend-mode:overlay"/>
//   <g id="squares">
//   ${squares}
//   </g>
//   </svg>`;

//   const a = document.createElement('a');
//   a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
//   a.download = 'artwork_full.svg';
//   a.click();
//   setTimeout(() => URL.revokeObjectURL(a.href), 1000);
// }

// function draw() {
//   if (!ready) return;

//   // 1. Update trail: stamp the cell under the mouse, decay everything else
//   stampMouse();
//   const decay = exp(-deltaTime / FADE_MS);
//   let anyActive = false;
//   for (let i = 0; i < intensity.length; i++) {
//     intensity[i] *= decay;
//     if (intensity[i] < CUTOFF) intensity[i] = 0;
//     else anyActive = true;
//   }

//   // 2. Composite: base art -> grid -> texture overlay -> corner squares
//   image(base, 0, 0);

//   noStroke();
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       const v = intensity[x + y * cols];
//       fill(v === 0 ? idleColor : lerpColor(idleColor, hoverColor, v));
//       rect(x * cellW, y * cellH, cellW - 1, cellH - 1);
//     }
//   }

//   // Cheap per-frame OVERLAY: one blended image() instead of re-running textureOverlay()
//   blendMode(OVERLAY);
//   image(textureImage, 0, 0, width, height);
//   blendMode(BLEND);

//   image(topLayer, 0, 0);


//   // 3. Go back to sleep once the trail has fully faded and the mouse is outside
//   if (!anyActive && !mouseInside()) noLoop();

//   let grad2=linearGradient(
//     250+200*Math.cos(frameCount*0.05)-50,350,
//     250+200*Math.cos(frameCount*0.05)+50,350,
//     color('rgb(15, 5, 93)'),
//     color('#fb5607')
//   );
//   drawingContext.fillStyle = grad2;
//   ellipse(250+200*Math.sin(frameCount*0.05),325,100);
// }

// function linearGradient(x_i, y_i, x_e, y_e, color_i, color_e){
//   let gradient = drawingContext.createLinearGradient(x_i, y_i, x_e, y_e);
//   gradient.addColorStop(0, color_i);
//   gradient.addColorStop(1, color_e);
//   return gradient;
// }

// function mouseMoved() {
//   loop();   // wake up; draw() will stamp the new cell
// }

// function mouseInside() {
//   return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
// }

// // Set intensity around the cell under the mouse, with a soft falloff
// function stampMouse() {
//   if (!mouseInside()) return;
//   const cx = floor(mouseX / cellW);
//   const cy = floor(mouseY / cellH);
//   const r = ceil(TRAIL_RADIUS);
//   for (let dy = -r; dy <= r; dy++) {
//     for (let dx = -r; dx <= r; dx++) {
//       const x = cx + dx, y = cy + dy;
//       if (x < 0 || x >= cols || y < 0 || y >= rows) continue;
//       const d = sqrt(dx * dx + dy * dy);
//       if (d > TRAIL_RADIUS) continue;
//       const v = 1 - d / (TRAIL_RADIUS + 1);
//       const i = x + y * cols;
//       intensity[i] = max(intensity[i], v);
//     }
//   }
// }

// // ---------- static art (runs once) ----------

// function renderBase() {
  
//   background('rgb(15, 5, 93)');
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: BLEND, reflect: false });
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: MULTIPLY, reflect: true });

//   drawShapes();
// }

// // Shared by the canvas and the SVG export (pass a p5.Graphics or leave as global)
// function drawShapes(g = window) {
//   g.noStroke();
//   g.fill("#3e7a13"); g.arc(150, 410, 880, 85, 0, PI);
//   g.fill("#fb5607"); g.ellipse(200, 380, 380, 350);
//   g.fill("#3a86ff"); g.ellipse(896, 260, 80, 70);
//   g.fill("#88f739"); g.arc(150, 410, 880, 35, 0, PI);
//   g.fill("#ddd014"); g.ellipse(806, 280, 20, 20);
//   g.fill("#974eeb"); g.ellipse(736, 290, 13, 13);
// }

// // [color, x, y, size] in draw order
// const SQUARES = [
//   ['rgba(37, 15, 206, 0.52)', 5, 5, 30],
//   ['rgba(76, 60, 200, 0.57)', 35, 5, 30],
//   ['rgba(125, 60, 200, 0.48)', 5, 35, 30],
//   ['rgba(66, 3, 138, 0.57)', 35, 35, 30],
//   ['rgba(53, 24, 42, 0.72)', 35, 35, 30],
//   ['rgba(100, 48, 15, 0.74)', 35, 65, 30],

//   ['rgba(32, 16, 157, 0.59)', 1120, 760, 30],
//   ['rgba(54, 37, 183, 0.56)', 1090, 730, 30],
//   ['rgba(97, 86, 176, 0.55)', 1120, 730, 30],
//   ['rgba(133, 129, 163, 0.57)', 1120, 700, 30],
//   ['rgba(27, 6, 182, 0.7)', 1060, 700, 30],
//   ['rgba(92, 72, 245, 0.87)', 1060, 670, 30],
//   ['rgba(168, 72, 8, 0.87)', 1030, 670, 30],
//   ['rgba(97, 93, 132, 0.87)', 1060, 730, 30],
//   ['rgba(85, 51, 142, 0.87)', 1060, 760, 30],
//   ['rgba(89, 9, 227, 0.57)', 1090, 760, 30],
//   ['rgb(12, 49, 162)', 1030, 760, 30],
//   ['rgba(56, 19, 206, 0.87)', 1030, 730, 30],
//   ['rgb(50, 4, 58)', 1030, 700, 30],
//   ['rgb(42, 14, 127)', 1000, 760, 30],
//   ['rgba(160, 148, 206, 0.78)', 1000, 730, 30],
//   ['rgb(64, 34, 174)', 1000, 700, 30],
//   ['rgba(4, 74, 67, 0.71)', 970, 760, 30],
//   ['rgb(52, 53, 7)', 970, 730, 30],
//   ['rgba(42, 8, 178, 0.93)', 940, 760, 30],

//   ['#fa9f75d8', 335, 265, 15],
//   ['#c74205c0', 335, 250, 15],
//   ['#3a1597', 350, 265, 15],
// ];

// function buildTopLayer() {
//   topLayer = createGraphics(width, height);
//   topLayer.pixelDensity(1);
//   drawSquares(topLayer);
// }

// function drawSquares(g = window) {
//   g.noStroke();
//   for (const [c, x, y, s] of SQUARES) {
//     g.fill(c);
//     g.rect(x, y, s, s);
//   }
// }


// // ---------- SVG export (p5 2.4+, press "s") ----------

// function exportSVG() {
//   const record = buildShape(() => {
//     background('rgb(15, 5, 93)');
//     drawShapes();
//     drawSquares();
//   });
//   saveSVG(record, 'artwork.svg');
// }

// // function keyPressed() {
// //   if (key === 's') exportSVG();       // shapes + squares only (buildShape)
// //   if (key === 'e') exportFullSVG();   // shapes + grid + texture + squares
// // }
// // =====================================================================
// // Layered texture piece: base art -> gradient orb -> hover grid ->
// // OVERLAY texture -> corner squares.
// // Requires p5 2.x (async setup) + p5.grain.
// // Keys: "s" = shapes+squares SVG, "e" = full SVG (texture, grid, orb)
// // =====================================================================

// // =====================================================================
// // Layered texture piece
// //   canvas order: base art -> gradient orb -> hover grid ->
// //                 OVERLAY texture -> corner squares (-> optional dither)
// // Requires p5 2.x (async setup) + p5.grain.
// //
// // Keys:
// //   e = FULL layered SVG  (texture images embedded, every layer separate)
// //   s = VECTOR-ONLY layered SVG (no raster texture; lighter, plotter-friendly)
// // Both export the current hover trail + current orb position, and are
// // sized in inches so they open at print size.
// // =====================================================================

// // ---------- config ----------
// const TEXTURE_PATH = 'assets/SPpaceTexture.png';
// const BG_COLOR = 'rgb(15, 5, 93)';

// // print size of the SVG (height follows the canvas aspect ratio)
// const PRINT_WIDTH_IN = 16;   // 1152 x 792 canvas -> 16in x 11in

// const cols = 40;
// const rows = 38;
// let cellW, cellH;

// // hover trail
// const TRAIL_RADIUS = 1.5;   // in cells; 0 = only the hovered cell
// const FADE_MS = 250;        // time constant of the fade (bigger = longer trail)
// const CUTOFF = 0.01;        // below this a cell counts as "off"
// const intensity = new Float32Array(cols * rows);

// // gradient orb
// const ORB_R = 120;          // radius of the glow in px
// const ORB_FOLLOW_MS = 220;  // easing time constant (bigger = lazier follow)
// const ORB_REACH = Infinity; // follow only when mouse is within this many px (try 150)
// // [offset, [r, g, b], alpha] - fades to transparent so there is no hard edge
// const ORB_STOPS = [
//   [0,    [251, 86, 7],   0.9],
//   [0.55, [131, 56, 236], 0.35],
//   [1,    [131, 56, 236], 0],
// ];
// let orbX = 250, orbY = 325; // resting position; only changes while hovering

// // optional scroll-driven dithered gradient (off by default = same look as before)
// const DITHER_ENABLED = false;
// const DITHER_SIZE = 8;
// const DITHER_SCROLL_HEIGHT = 1200;
// const DITHER_NOISE_STEP = 0.5;
// const DITHER_COLOR_THRESHOLD = 50;
// const DITHER_THRESHOLD = 127;
// const DITHER_DEPTH = 0.3;
// let ditherZ = 0;
// let ditherGray;             // grayscale copy of the texture (canvas only)

// // shape definitions, shared by the canvas and the SVG export
// // [type, cx, cy, w, h, color]
// const SHAPES = [
//   ['arc', 150, 410, 880, 85,  '#3e7a13'],
//   ['ell', 200, 380, 380, 350, '#fb5607'],
//   ['ell', 896, 260, 80,  70,  '#3a86ff'],
//   ['arc', 150, 410, 880, 35,  '#88f739'],
//   ['ell', 806, 280, 20,  20,  '#ddd014'],
//   ['ell', 736, 290, 13,  13,  '#974eeb'],
// ];

// // [color, x, y, size] in draw order
// const SQUARES = [
//   ['rgba(37, 15, 206, 0.52)', 5, 5, 30],
//   ['rgba(76, 60, 200, 0.57)', 35, 5, 30],
//   ['rgba(125, 60, 200, 0.48)', 5, 35, 30],
//   ['rgba(66, 3, 138, 0.57)', 35, 35, 30],
//   ['rgba(53, 24, 42, 0.72)', 35, 35, 30],
//   ['rgba(100, 48, 15, 0.74)', 35, 65, 30],

//   ['rgba(32, 16, 157, 0.59)', 1120, 760, 30],
//   ['rgba(54, 37, 183, 0.56)', 1090, 730, 30],
//   ['rgba(97, 86, 176, 0.55)', 1120, 730, 30],
//   ['rgba(133, 129, 163, 0.57)', 1120, 700, 30],
//   ['rgba(27, 6, 182, 0.7)', 1060, 700, 30],
//   ['rgba(92, 72, 245, 0.87)', 1060, 670, 30],
//   ['rgba(168, 72, 8, 0.87)', 1030, 670, 30],
//   ['rgba(97, 93, 132, 0.87)', 1060, 730, 30],
//   ['rgba(85, 51, 142, 0.87)', 1060, 760, 30],
//   ['rgba(89, 9, 227, 0.57)', 1090, 760, 30],
//   ['rgb(12, 49, 162)', 1030, 760, 30],
//   ['rgba(56, 19, 206, 0.87)', 1030, 730, 30],
//   ['rgb(50, 4, 58)', 1030, 700, 30],
//   ['rgb(42, 14, 127)', 1000, 760, 30],
//   ['rgba(160, 148, 206, 0.78)', 1000, 730, 30],
//   ['rgb(64, 34, 174)', 1000, 700, 30],
//   ['rgba(4, 74, 67, 0.71)', 970, 760, 30],
//   ['rgb(52, 53, 7)', 970, 730, 30],
//   ['rgba(42, 8, 178, 0.93)', 940, 760, 30],

//   ['#fa9f75d8', 335, 265, 15],
//   ['#c74205c0', 335, 250, 15],
//   ['#3a1597', 350, 265, 15],
// ];

// // state
// let textureImage, base, topLayer, textureDataURL;
// let idleColor, hoverColor;
// let ready = false;

// // ---------- setup ----------
// async function setup() {
//   pixelDensity(1);
//   const canvas = createCanvas(1152, 792);
//   canvas.parent('sketch');
//   cellW = width / cols;
//   cellH = height / rows;

//   p5grain.setup();
//   textureImage = await loadImage(TEXTURE_PATH);

//   idleColor = color('#05adc332');
//   hoverColor = color('#edda2fa8');

//   renderBase();
//   base = get();             // snapshot the finished background art
//   buildTopLayer();

//   if (DITHER_ENABLED) {
//     ditherGray = textureImage.get();
//     ditherGray.resize(width, 0);
//     ditherGray.filter(GRAY);
//   }

//   ready = true;
//   noLoop();                 // sleeps until the mouse moves
//   redraw();
// }

// // ---------- draw ----------
// function draw() {
//   if (!ready) return;

//   // 1. Update trail: stamp the cell under the mouse, decay everything else
//   stampMouse();
//   const decay = exp(-deltaTime / FADE_MS);
//   let anyActive = false;
//   for (let i = 0; i < intensity.length; i++) {
//     intensity[i] *= decay;
//     if (intensity[i] < CUTOFF) intensity[i] = 0;
//     else anyActive = true;
//   }

//   // Orb follows the mouse only while hovering
//   if (updateOrb()) anyActive = true;

//   // 2. Composite: base art -> orb -> grid -> texture overlay -> corner squares
//   image(base, 0, 0);
//   drawOrb();   // before the grid + texture so they blend over it

//   noStroke();
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       fill(cellColor(intensity[x + y * cols]));
//       rect(x * cellW, y * cellH, cellW - 1, cellH - 1);
//     }
//   }

//   // Cheap per-frame OVERLAY: one blended image() instead of re-running textureOverlay()
//   blendMode(OVERLAY);
//   image(textureImage, 0, 0, width, height);
//   blendMode(BLEND);

//   image(topLayer, 0, 0);

//   if (DITHER_ENABLED) {
//     drawDither();
//     return; // keep looping so the noise animates
//   }

//   // 3. Sleep once the trail has fully faded and the mouse is outside
//   if (!anyActive && !mouseInside()) noLoop();
// }

// function cellColor(v) {
//   return v === 0 ? idleColor : lerpColor(idleColor, hoverColor, v);
// }

// // ---------- hover trail ----------
// function mouseMoved() {
//   loop();   // wake up; draw() will stamp the new cell
// }

// function mouseInside() {
//   return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
// }

// // Set intensity around the cell under the mouse, with a soft falloff
// function stampMouse() {
//   if (!mouseInside()) return;
//   const cx = floor(mouseX / cellW);
//   const cy = floor(mouseY / cellH);
//   const r = ceil(TRAIL_RADIUS);
//   for (let dy = -r; dy <= r; dy++) {
//     for (let dx = -r; dx <= r; dx++) {
//       const x = cx + dx, y = cy + dy;
//       if (x < 0 || x >= cols || y < 0 || y >= rows) continue;
//       const d = sqrt(dx * dx + dy * dy);
//       if (d > TRAIL_RADIUS) continue;
//       const v = 1 - d / (TRAIL_RADIUS + 1);
//       const i = x + y * cols;
//       intensity[i] = max(intensity[i], v);
//     }
//   }
// }

// // ---------- gradient orb ----------
// // Ease the orb toward the mouse. Returns true while it is still moving.
// function updateOrb() {
//   if (!mouseInside()) return false;
//   if (dist(mouseX, mouseY, orbX, orbY) > ORB_REACH) return false;

//   const dx = mouseX - orbX;
//   const dy = mouseY - orbY;
//   if (abs(dx) + abs(dy) < 0.5) return false;

//   const k = 1 - exp(-deltaTime / ORB_FOLLOW_MS);
//   orbX += dx * k;
//   orbY += dy * k;
//   return true;
// }

// // Radial gradient that fades to transparent, melting into whatever is behind it
// function drawOrb() {
//   const ctx = drawingContext;
//   const g = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, ORB_R);
//   for (const [offset, [r, gr, b], a] of ORB_STOPS) {
//     g.addColorStop(offset, `rgba(${r},${gr},${b},${a})`);
//   }
//   ctx.save();
//   ctx.fillStyle = g;
//   ctx.beginPath();
//   ctx.arc(orbX, orbY, ORB_R, 0, TWO_PI);
//   ctx.fill();
//   ctx.restore();
// }

// function linearGradient(x_i, y_i, x_e, y_e, color_i, color_e) {
//   const gradient = drawingContext.createLinearGradient(x_i, y_i, x_e, y_e);
//   gradient.addColorStop(0, color_i);
//   gradient.addColorStop(1, color_e);
//   return gradient;
// }

// // ---------- optional dither layer ----------
// // Returns the [x, y] of every white dither square for the current frame/scroll.
// function ditherCells() {
//   const dCols = ceil(width / DITHER_SIZE);
//   const dRows = ceil(DITHER_SCROLL_HEIGHT / DITHER_SIZE);
//   const scrollY = window.scrollY || window.pageYOffset;
//   const gradientStart = scrollY / DITHER_SIZE;
//   const gradientEnd = gradientStart + (height * DITHER_DEPTH) / DITHER_SIZE;

//   const cells = [];
//   let yoff = 0;
//   for (let i = 0; i < dCols; i++) {
//     let xoff = 0;
//     for (let j = 0; j < dRows; j++) {
//       const gradientValue = map(j, gradientStart, gradientEnd, 0, 255);
//       const noiseValue = map(noise(xoff, yoff, ditherZ), 0, 1, 0, 255);
//       if (gradientValue + (noiseValue - DITHER_COLOR_THRESHOLD) < DITHER_THRESHOLD) {
//         cells.push([i * DITHER_SIZE, j * DITHER_SIZE]);
//       }
//       xoff += DITHER_NOISE_STEP;
//     }
//     yoff += DITHER_NOISE_STEP;
//   }
//   return cells;
// }

// function drawDither() {
//   image(ditherGray, 0, 0);
//   noStroke();
//   fill(255);
//   for (const [x, y] of ditherCells()) rect(x, y, DITHER_SIZE, DITHER_SIZE);
//   ditherZ += 0.005;
// }

// // ---------- static art (runs once) ----------
// function renderBase() {
//   background(BG_COLOR);
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: BLEND, reflect: false });
//   textureOverlay(textureImage, { width: 1152, height: 792, mode: MULTIPLY, reflect: true });
//   drawShapes();
// }

// function drawShapes(g = window) {
//   g.noStroke();
//   for (const [type, cx, cy, w, h, c] of SHAPES) {
//     g.fill(c);
//     if (type === 'arc') g.arc(cx, cy, w, h, 0, PI);
//     else g.ellipse(cx, cy, w, h);
//   }
// }

// function buildTopLayer() {
//   topLayer = createGraphics(width, height);
//   topLayer.pixelDensity(1);
//   drawSquares(topLayer);
// }

// function drawSquares(g = window) {
//   g.noStroke();
//   for (const [c, x, y, s] of SQUARES) {
//     g.fill(c);
//     g.rect(x, y, s, s);
//   }
// }

// // =====================================================================
// // SVG export: every layer is its own named group (Illustrator / Inkscape /
// // Affinity / Figma all read these as layers), in the same stacking order
// // as the canvas. Sized in inches for printing.
// // =====================================================================
// async function getTextureDataURL() {
//   if (textureDataURL) return textureDataURL;
//   const blob = await (await fetch(TEXTURE_PATH)).blob();
//   textureDataURL = await new Promise((res, rej) => {
//     const r = new FileReader();
//     r.onload = () => res(r.result);
//     r.onerror = rej;
//     r.readAsDataURL(blob);
//   });
//   return textureDataURL;
// }

// // "#fa9f75d8" / "rgba(...)" / p5 color -> separate fill + opacity (works in more editors)
// function fillAttr(c) {
//   const col = color(c);
//   return `fill="rgb(${round(red(col))},${round(green(col))},${round(blue(col))})" ` +
//          `fill-opacity="${(alpha(col) / 255).toFixed(3)}"`;
// }

// function svgLayer(id, label, inner, extraAttrs = '') {
//   return `  <g id="${id}" inkscape:groupmode="layer" inkscape:label="${label}" ${extraAttrs}>\n${inner}\n  </g>`;
// }

// function buildSVG({ includeTexture }) {
//   const layers = [];
//   const f2 = (n) => n.toFixed(2);

//   // 1. background
//   layers.push(svgLayer('background', 'background',
//     `    <rect width="100%" height="100%" fill="${BG_COLOR.replace(/\s/g, '')}"/>`));

//   // 2-3. texture under the shapes (BLEND, then MULTIPLY)
//   if (includeTexture) {
//     layers.push(svgLayer('texture-blend', 'texture (blend)',
//       `    <use href="#tex" xlink:href="#tex"/>`));
//     layers.push(svgLayer('texture-multiply', 'texture (multiply)',
//       `    <use href="#tex" xlink:href="#tex"/>`,
//       `style="mix-blend-mode:multiply"`));
//   }

//   // 4. shapes
//   const shapes = SHAPES.map(([type, cx, cy, w, h, c]) =>
//     type === 'arc'
//       ? `    <path d="M ${cx - w / 2} ${cy} A ${w / 2} ${h / 2} 0 0 0 ${cx + w / 2} ${cy} Z" fill="${c}"/>`
//       : `    <ellipse cx="${cx}" cy="${cy}" rx="${w / 2}" ry="${h / 2}" fill="${c}"/>`
//   ).join('\n');
//   layers.push(svgLayer('shapes', 'shapes', shapes));

//   // 5. orb (current position)
//   layers.push(svgLayer('orb', 'gradient orb',
//     `    <circle cx="${f2(orbX)}" cy="${f2(orbY)}" r="${ORB_R}" fill="url(#orbGrad)"/>`));

//   // 6. grid, colored by the current hover-trail intensity
//   let grid = '';
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       grid += `    <rect x="${f2(x * cellW)}" y="${f2(y * cellH)}" ` +
//               `width="${f2(cellW - 1)}" height="${f2(cellH - 1)}" ` +
//               `${fillAttr(cellColor(intensity[x + y * cols]))}/>\n`;
//     }
//   }
//   layers.push(svgLayer('grid', 'hover grid', grid.trimEnd()));

//   // 7. overlay texture
//   if (includeTexture) {
//     layers.push(svgLayer('texture-overlay', 'texture (overlay)',
//       `    <use href="#tex" xlink:href="#tex"/>`,
//       `style="mix-blend-mode:overlay"`));
//   }

//   // 8. corner squares
//   const squares = SQUARES.map(([c, x, y, s]) =>
//     `    <rect x="${x}" y="${y}" width="${s}" height="${s}" ${fillAttr(c)}/>`).join('\n');
//   layers.push(svgLayer('squares', 'corner squares', squares));

//   // 9. optional dither (grayscale texture + white squares, as on the canvas)
//   if (DITHER_ENABLED) {
//     const dith = ditherCells().map(([x, y]) =>
//       `    <rect x="${x}" y="${y}" width="${DITHER_SIZE}" height="${DITHER_SIZE}" fill="#fff"/>`).join('\n');
//     const gray = includeTexture
//       ? `    <use href="#tex" xlink:href="#tex" filter="url(#gray)"/>\n`
//       : '';
//     layers.push(svgLayer('dither', 'dither', gray + dith));
//   }

//   const orbStops = ORB_STOPS.map(([o, [r, g, b], a]) =>
//     `<stop offset="${o}" stop-color="rgb(${r},${g},${b})" stop-opacity="${a}"/>`).join('');

//   const heightIn = (PRINT_WIDTH_IN * height / width).toFixed(4).replace(/\.?0+$/, '');

//   return { orbStops, layers, heightIn };
// }

// async function exportLayeredSVG(includeTexture, filename) {
//   const tex = includeTexture ? await getTextureDataURL() : null;
//   const { orbStops, layers, heightIn } = buildSVG({ includeTexture });

//   const texDef = includeTexture
//     ? `<image id="tex" href="${tex}" xlink:href="${tex}" width="${width}" height="${height}" preserveAspectRatio="none"/>`
//     : '';
//   const grayDef = includeTexture
//     ? `<filter id="gray"><feColorMatrix type="saturate" values="0"/></filter>`
//     : '';

//   const svg = `<?xml version="1.0" encoding="UTF-8"?>
// <svg xmlns="http://www.w3.org/2000/svg"
//      xmlns:xlink="http://www.w3.org/1999/xlink"
//      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
//      width="${PRINT_WIDTH_IN}in" height="${heightIn}in" viewBox="0 0 ${width} ${height}">
//   <defs>
//     ${texDef}
//     ${grayDef}
//     <radialGradient id="orbGrad">${orbStops}</radialGradient>
//   </defs>
// ${layers.join('\n')}
// </svg>
// `;

//   const a = document.createElement('a');
//   a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
//   a.download = filename;
//   a.click();
//   setTimeout(() => URL.revokeObjectURL(a.href), 1000);
// }

// function keyPressed() {
//   if (key === 'e') exportLayeredSVG(true,  'artwork_full.svg');    // all layers + texture
//   if (key === 's') exportLayeredSVG(false, 'artwork_vector.svg');  // all vector layers, no raster
// }
// =====================================================================
// Layered texture piece
//   canvas order: background + texture -> blue->orange gradient -> shapes ->
//                 gradient orb -> hover grid -> OVERLAY texture ->
//                 corner squares (-> optional dither)
// Requires p5 2.x (async setup) + p5.grain.
//
// Keys:
//   e = FULL layered SVG  (texture images embedded, every layer separate)
//   s = VECTOR-ONLY layered SVG (no raster texture; lighter, plotter-friendly)
// Both export the current hover trail + current orb position, and are
// sized in inches so they open at print size.
// =====================================================================

// ---------- config ----------
const TEXTURE_PATH = 'assets/SPpaceTexture.png';
const BG_COLOR = 'rgb(15, 5, 93)';

// print size of the SVG (height follows the canvas aspect ratio)
const PRINT_WIDTH_IN = 16;   // 1152 x 792 canvas -> 16in x 11in

const cols = 40;
const rows = 38;
let cellW, cellH;

// hover trail
const TRAIL_RADIUS = 1.5;   // in cells; 0 = only the hovered cell
const FADE_MS = 250;        // time constant of the fade (bigger = longer trail)
const CUTOFF = 0.01;        // below this a cell counts as "off"
const intensity = new Float32Array(cols * rows);

// gradient orb
const ORB_R = 120;          // radius of the glow in px
const ORB_FOLLOW_MS = 220;  // easing time constant (bigger = lazier follow)
const ORB_REACH = Infinity; // follow only when mouse is within this many px (try 150)
// [offset, [r, g, b], alpha] - fades to transparent so there is no hard edge
const ORB_STOPS = [
  [0,    [251, 86, 7],   0.9],
  [0.55, [131, 56, 236], 0.35],
  [1,    [131, 56, 236], 0],
];
let orbX = 250, orbY = 325; // resting position; only changes while hovering

// interactive background gradient (same blue as BG_COLOR -> orange)
// The gradient line tilts toward the mouse (orange end leans to the cursor)
// and slides slightly with it. Eased, so it drifts rather than snaps.
const BG_GRAD_FROM = [15, 5, 93];     // = BG_COLOR
const BG_GRAD_TO = [251, 86, 7];      // = #fb5607 (same orange as the big ellipse)
const BG_GRAD_ALPHA = 0.8;            // 1 = fully replaces the texture underneath
                                      // (the OVERLAY texture pass on top still adds grain)
const BG_GRAD_MODE = 'source-over';   // any canvas/CSS blend: 'multiply', 'overlay',
                                      // 'soft-light', 'hard-light', 'color' ...
const BG_GRAD_FOLLOW_MS = 450;        // easing time constant (bigger = lazier)
const BG_GRAD_SHIFT = 0.35;           // 0 = only tilts, 1 = center follows the mouse
let gradX = 900, gradY = 600;         // resting position of the orange pull

// optional scroll-driven dithered gradient (off by default = same look as before)
const DITHER_ENABLED = false;
const DITHER_SIZE = 8;
const DITHER_SCROLL_HEIGHT = 1200;
const DITHER_NOISE_STEP = 0.5;
const DITHER_COLOR_THRESHOLD = 50;
const DITHER_THRESHOLD = 127;
const DITHER_DEPTH = 0.3;
let ditherZ = 0;
let ditherGray;             // grayscale copy of the texture (canvas only)

// shape definitions, shared by the canvas and the SVG export
// [type, cx, cy, w, h, color]
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

// spinning stars, shared by the canvas and the SVG export
// [color, x, y, spin divisor]  ->  rotation = frameCount / -divisor
const STAR_R_INNER = 3;
const STAR_R_OUTER = 7;
const STAR_POINTS = 5;
const STARS = [
  ['#a5b30d98', 520, 270, 100],
  ['#eb58eb7f', 720, 470, 90],
  ['#10a4cd81', 990, 170, 80],
];

// state
let textureImage, bgBack, shapesLayer, topLayer, textureDataURL;
let idleColor, hoverColor;
let ready = false;

// ---------- setup ----------
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
  bgBack = get();           // snapshot: background + texture (gradient goes on top)
  buildShapesLayer();       // transparent layer, drawn above the gradient
  buildTopLayer();

  if (DITHER_ENABLED) {
    ditherGray = textureImage.get();
    ditherGray.resize(width, 0);
    ditherGray.filter(GRAY);
  }

  ready = true;
  noLoop();                 // sleeps until the mouse moves
  redraw();
}


// ---------- draw ----------
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

  // Orb follows the mouse only while hovering
  if (updateOrb()) anyActive = true;

  // Background gradient eases toward the mouse too
  if (updateBgGradient()) anyActive = true;

  // 2. Composite: background+texture -> gradient -> shapes -> orb -> grid
  //               -> texture overlay -> corner squares
  image(bgBack, 0, 0);
  drawBgGradient();
  image(shapesLayer, 0, 0);
  drawOrb();   // before the grid + texture so they blend over it

  noStroke();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(cellColor(intensity[x + y * cols]));
      rect(x * cellW, y * cellH, cellW - 1, cellH - 1);
    }
  }

  // Cheap per-frame OVERLAY: one blended image() instead of re-running textureOverlay()
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
    return; // keep looping so the noise animates
  }

  // 3. Sleep once the trail has fully faded and the mouse is outside
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

// Same star as star(), but returns an SVG "points" string with the rotation
// baked in (so the export matches the canvas at the current frame).
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

// ---------- hover trail ----------
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

// ---------- interactive background gradient ----------
// Ease the orange pull toward the mouse. Returns true while still moving.
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

// Start (blue) and end (orange) of the gradient line for the current state.
// Direction = from canvas center toward the pull point; length = canvas diagonal,
// so the whole canvas is always covered by the blue->orange ramp.
function bgGradientLine() {
  const cx = width / 2, cy = height / 2;
  let dx = gradX - cx, dy = gradY - cy;
  const m = Math.hypot(dx, dy);
  if (m < 1) { dx = 1; dy = 0; } else { dx /= m; dy /= m; }

  const mx = lerp(cx, gradX, BG_GRAD_SHIFT);
  const my = lerp(cy, gradY, BG_GRAD_SHIFT);
  const half = Math.hypot(width, height) / 2;
  return {
    x1: mx - dx * half, y1: my - dy * half,   // blue end
    x2: mx + dx * half, y2: my + dy * half,   // orange end
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

// ---------- gradient orb ----------
// Ease the orb toward the mouse. Returns true while it is still moving.
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

// Radial gradient that fades to transparent, melting into whatever is behind it
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

// ---------- optional dither layer ----------
// Returns the [x, y] of every white dither square for the current frame/scroll.
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

// ---------- static art (runs once) ----------
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

// =====================================================================
// SVG export: every layer is its own named group (Illustrator / Inkscape /
// Affinity / Figma all read these as layers), in the same stacking order
// as the canvas. Sized in inches for printing.
// =====================================================================
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

// "#fa9f75d8" / "rgba(...)" / p5 color -> separate fill + opacity (works in more editors)
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

  // 1. background
  layers.push(svgLayer('background', 'background',
    `    <rect width="100%" height="100%" fill="${BG_COLOR.replace(/\s/g, '')}"/>`));

  // 2-3. texture under the shapes (BLEND, then MULTIPLY)
  if (includeTexture) {
    layers.push(svgLayer('texture-blend', 'texture (blend)',
      `    <use href="#tex" xlink:href="#tex"/>`));
    layers.push(svgLayer('texture-multiply', 'texture (multiply)',
      `    <use href="#tex" xlink:href="#tex"/>`,
      `style="mix-blend-mode:multiply"`));
  }

  // 3b. interactive background gradient (current state)
  const bgBlend = BG_GRAD_MODE === 'source-over' ? '' : `style="mix-blend-mode:${BG_GRAD_MODE}"`;
  layers.push(svgLayer('bg-gradient', 'background gradient',
    `    <rect width="100%" height="100%" fill="url(#bgGrad)" opacity="${BG_GRAD_ALPHA}"/>`,
    bgBlend));

  // 4. shapes
  const shapes = SHAPES.map(([type, cx, cy, w, h, c]) =>
    type === 'arc'
      ? `    <path d="M ${cx - w / 2} ${cy} A ${w / 2} ${h / 2} 0 0 0 ${cx + w / 2} ${cy} Z" fill="${c}"/>`
      : `    <ellipse cx="${cx}" cy="${cy}" rx="${w / 2}" ry="${h / 2}" fill="${c}"/>`
  ).join('\n');
  layers.push(svgLayer('shapes', 'shapes', shapes));

  // 5. orb (current position)
  layers.push(svgLayer('orb', 'gradient orb',
    `    <circle cx="${f2(orbX)}" cy="${f2(orbY)}" r="${ORB_R}" fill="url(#orbGrad)"/>`));

  // 6. grid, colored by the current hover-trail intensity
  let grid = '';
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid += `    <rect x="${f2(x * cellW)}" y="${f2(y * cellH)}" ` +
              `width="${f2(cellW - 1)}" height="${f2(cellH - 1)}" ` +
              `${fillAttr(cellColor(intensity[x + y * cols]))}/>\n`;
    }
  }
  layers.push(svgLayer('grid', 'hover grid', grid.trimEnd()));

  // 7. overlay texture
  if (includeTexture) {
    layers.push(svgLayer('texture-overlay', 'texture (overlay)',
      `    <use href="#tex" xlink:href="#tex"/>`,
      `style="mix-blend-mode:overlay"`));
  }

  // 7b. spinning stars (current rotation), above the overlay texture like on the canvas
  const stars = STARS.map(([c, x, y, div]) =>
    `    <polygon points="${starSVGPoints(x, y, STAR_R_INNER, STAR_R_OUTER, STAR_POINTS, frameCount / -div)}" ${fillAttr(c)}/>`
  ).join('\n');
  layers.push(svgLayer('stars', 'moving stars', stars));

  // 8. corner squares
  const squares = SQUARES.map(([c, x, y, s]) =>
    `    <rect x="${x}" y="${y}" width="${s}" height="${s}" ${fillAttr(c)}/>`).join('\n');
  layers.push(svgLayer('squares', 'corner squares', squares));

  // 9. optional dither (grayscale texture + white squares, as on the canvas)
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
  if (key === 'e') exportLayeredSVG(true,  'artwork_full.svg');    // all layers + texture
  if (key === 's') exportLayeredSVG(false, 'artwork_vector.svg');  // all vector layers, no raster
}