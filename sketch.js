

// General

state = 1; // 0 = menu, 1 = game, 2 = settings
uiLoaded = 0;
uiHover = 0;
uiHover2 = "";
elementID = "";
uiSelected = "undefined";
uiScale = 1;


// Consumption

demand = 8;


// Other

power = 0;
money = 100;
income = 0;
profit = 0;
publicRage = 0;
price = 10;
timer = 0;
timerSpd = 0.01;
greenScore = 0;
powerPerc = 0;

batteryStatus = 0;
batteryCapacity = 1000;
batteryCharge = 0;

cellSize = 0;
xRes = 0;
yRes = 0;
xOff = 0;
yOff = 0;


// Production

production = [

  /*
    0 = enabled/disabled
    1 = active/inactive
    2 = output
    3 = production cost for total output (maybe change to cost/MW?)
    4 = green or not
    5 = intermittent
      5.1 = on duration
      5.2 = off duration
      5.3 = status
      5.4 = timer
  */

  [ 1, 1, 3, 9, 0, 0 ],
  [ 1, 1, 2, 8, 1, 0 ],
  [ 1, 1, 5, 7, 1, [180, 180, 0, 0]],
  [ 1, 1, 4, 6, 1, [600, 300, 0, 0]]
];

intermittentSources = [];


function setup() {

  createCanvas(windowWidth, windowHeight);

  // Load UI data from js file

  var script = document.createElement('script');
  script.onload = function () {
    uiData = ui.slice();
    uiLoaded = 1;
  };
  script.src = 'ui.js';
  document.head.appendChild(script);

  for (let i = 0; i < production.length; i++) { // Loop through production facilities

    if (production[i][5] != 0) { // Check if intermittent

      intermittentSources.push(i);
    }
  }
}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}


function mouseClicked() {

  if (uiLoaded == 1) { // Check if UI has loaded yet

    if (uiHover == 1) { // Is mouse on UI element?

      if (uiSelected[3][0] == 1) { // Does the element have a click function?

        uiSelected[3][3]();
        uiHover = 0;
      }
    }
  }
}


function draw() {

  power = 0;
  powerPerc = 0;
  income = 0;
  profit = 0;
  greenScore = 0;
  batteryStatus = 0;

  let cost = 0;

  for (let i = 0; i < production.length; i++) { // Loop through production facilities

    if (production[i][0]) { // Check if enabled

      if (production[i][1]) { // Check if active

        power += production[i][2]; // Add facility output to total power
        greenScore += (production[i][2] * production[i][4]); // Add output to green score (if its green)
        cost += (production[i][2] * production[i][3]); // Add running costs to total running costs ($/h)
      }
    }
  }

  if (power > demand) {

    if (batteryCharge < batteryCapacity) {

      batteryCharge = min(1000, batteryCharge + (power - demand));
      batteryStatus = 2;
    }

  } else if (power < demand) {

    if (batteryCharge > 0) {

      let num = min(demand - power, batteryCharge);
      power += num;
      batteryCharge -= num;
      batteryStatus = 1;
    }
  }

  greenScore = round((greenScore / power) * 100); // Calculate total green score (%)
  income = min(demand, power) * price; // Calculate total income ($/h)
  profit = income - cost;
  powerPerc = round((power / demand) * 100); // Convert power to percentage
  money += profit; // Increase money by income ($/h)



  // Drawing

  background(255);

  cellSize = min(width) / 38;
  xRes = floor(width / cellSize);
  yRes = floor(height / cellSize);
  xOff = (width - (xRes * cellSize)) / 2;
  yOff = (height - (yRes * cellSize)) / 2;

  drawGrid();


  // Consumption

  textSize(28);
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  text("Demand: " + demand + "MWh", width / 2, 150);



  // Distribution

  textAlign(LEFT, CENTER);
  fill(0);
  if (batteryStatus == 0) { text("Battery: " + "OFF", 100, (height / 2) - 50); }
  else { if (batteryStatus == 1) { fill(200, 0, 0); text("Battery: " + "Discharging", 100, (height / 2) - 50); }
  else { fill(0, 180, 0); text("Battery: " + "Charging", 100, (height / 2) - 50); }}

  let yy = height / 2;
  let h = 200;
  let hh = (h / batteryCapacity) * batteryCharge;

  rect(20, yy - (h / 2) + ((h - hh)), 50, hh);
  noFill();
  stroke(0);
  rect(20, yy - (h / 2), 50, h);

  fill(0);
  noStroke();
  text("Capacity: " + round(batteryCapacity), 100, (height / 2));
  text("Charge: " + round(batteryCharge) + " (" + round((batteryCharge / batteryCapacity) * 100) + "%)", 100, (height / 2) + 50);


  fill(0, 180, 0);
  if (powerPerc < 100) {

    fill(200, 0, 0);
    publicRage += 0.01;
  } else {

    if (publicRage > 0) {

      publicRage -= 0.005; // This should be made dynamic based on level/frequency of outage(s)
    }
  }
  textAlign(CENTER, CENTER);
  text("Power: " + powerPerc + "%", width / 2, (height / 2) - 50);
  fill(0);
  text("Total Output: " + power + "MWh", width / 2, (height / 2));
  text("Energy Price: " + "$" + price + "/MWh", width / 2, (height / 2) + 50);
  text("Public Anger: " + round(publicRage) + "%", width / 2, (height / 2) + 100);


  textAlign(RIGHT, CENTER);
  fill(0, 180, 0);
  if (money < 0) { fill(200, 0, 0); }
  text("Money: " + "$" + money, width - 100, (height / 2) - 50);

  fill(0);
  text("Income: " + "$" + income + "/h", width - 100, (height / 2));

  text("Costs: " + "$" + cost + "/h", width - 100, (height / 2) + 50);

  fill(0, 180, 0);
  if (profit < 0) { fill(200, 0, 0); }
  text("Profit: " + "$" + profit + "/h", width - 100, (height / 2) + 100);



  // Production

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);

  let prodNum = production.length;
  let size = 4 * cellSize;
  let startX = xOff + cellSize;
  let startY = height - yOff - size - cellSize;

  for (let i = 0; i < floor(((xRes - 2) * cellSize) / size); i++) { // Loop through production facilities

    // Draw box outline

    noFill();
    stroke(200);
    rect(startX + (size * i), startY, size, size);
  }

  for (let i = 0; i < prodNum; i++) { // Loop through production facilities

    // Draw text and box fill

    fill(0, 180, 0);
    if (production[i][1] == 0) { fill(200, 0, 0); }
    noStroke();

    let x = startX + (size * (i + 0.5));
    let y = startY + (size * 0.5);
    text(production[i][2] + "MWh", x, y - 20);
    text("$" + production[i][3] + "/MWh", x, y + 20);

    let p = production[i][5];
    let off = 0;

    if (p != 0) { off = ((size / p[p[2]]) * p[3]); }

    rect(x - (size / 2), y + (size / 2) - 6, size - off, 6);

    // Draw box outline

    noFill();
    stroke(0);
    rect(startX + (size * i), startY, size, size);
  }


  // General

  textAlign(LEFT, CENTER);
  textSize(28);
  fill(0);
  noStroke();
  text("Climate Target Date: " + round(timer) + "%", 20, 50);
  text("Carbon Neutral Sources: " + greenScore + "%", 20, 100);


  for (let i = 0; i < intermittentSources.length; i++) {

    let p = production[intermittentSources[i]][5];

    if (p[3] > 0) {

      p[3]--;

    } else {

      p[2] = (p[2] * -1) + 1;
      p[3] = p[p[2]];

      production[intermittentSources[i]][1] = (p[2] * - 1) + 1; // Toggle power status
    }
  }


  // Draw UI

  drawUI();


  timer += timerSpd;
}


function drawGrid() {

  noFill();
  stroke(240);

  for (let x = 0; x < (xRes + 1); x++) {

    let xx = xOff + (x * cellSize)
    line(xx, 0, xx, height);
  }

  for (let y = 0; y < (yRes + 1); y++) {

    let yy = yOff + (y * cellSize)
    line(0, yy, width, yy);
  }
}


function drawUI() {

  uiHover = 0;

  if (uiLoaded == 1) { // Check if UI has loaded yet

    // Draw UI (Dynamic)

    for (s = 0; s < uiData[state].length; s++) { // Cycle through UI states (starting with the default one)

      aa = uiData[state][s]; // Load state

      let subStateEnabled = 0;

      if (typeof aa[0] === "function") { subStateEnabled = aa[0](); } else { subStateEnabled = aa[0]; }

      if (subStateEnabled) { // Check if state is enabled

        for (i = 1; i < aa.length; i++) { // Cycle through UI elements

          a = aa[i].slice(); // Load UI element (doesn't work without slice for some reason)

          limit = 2;
          hNum = 1;
          vNum = 1;
          vNum2 = 1;
          xOff = 0;
          yOff = 0;
          xOff2 = 0;
          yOff2 = 0;
          listHAlign =  0;
          listVAlign =  0;

          if (a[0] == 2) { // Is it a list item?

            limit = a[1][15]();
            hNum = Math.min(a[1][16](), limit);
            vNum2 = Math.ceil(limit / a[1][16]());
            vNum = Math.max(vNum2, a[1][17]());
            xOff = a[1][18]();
            yOff = a[1][19]();
            xOff2 = a[1][20]();
            yOff2 = a[1][21]();
            listHAlign =  a[1][22];
            listVAlign =  a[1][23];
          }

          for (v = 0; v < vNum2; v++) { // Cycle through rows

            for (h = 0; h < hNum; h++) { // Cycle through columns

              if (((v * hNum) + h) == limit) { break; }

              a = aa[i].slice(); // Reload UI element (doesn't work without slice for some reason)

              for (x = 1; x < a.length; x++) { // Cycle through UI parameter groups

                a[x] = a[x].slice();

                for (y = 0; y < a[x].length; y++) { // Cycle throug element parameters

                  if (typeof a[x][y] === "function") { // Check if parameter is a function

                    if (((x == 3) && ((y == 1) || (y == 2) || (y == 3))) == 0) { // Exclude hover/click functions which should stay functions

                      a[x][y] = a[x][y](); // If it is, store the function's return value
                    }

                  } else if (typeof a[x][y] === "object") { // Check if parameter is an array

                    if (a[1][15] != undefined) {

                      if (a[x][y].length < a[1][15]()) {

                        let temp = a[x][y][1];
                        a[x][y].length = 0;

                        for (z = 0; z < (a[1][15]()); z++) {

                          a[x][y].push(temp);
                        }
                      }
                    }
                  }
                }
              }

              // Variables for drawing UI elements

              boxW = a[1][4];
              boxH = a[1][5];
              boxOp = a[1][9];
              if (typeof boxOp === "object") { boxOp = a[1][9][((v * hNum) + h)]; }
              if (typeof boxOp === "function") { boxOp = boxOp(); }
              boxOutlineOp = a[1][12];
              if (a[4] != undefined) { imgOp = a[4][3]; }


              // Moves drawing start position to top-left corner regardless of alignments

              xx = (a[1][2] - (a[1][6] * boxW)) - ((hNum - 1) * (xOff * listHAlign)) - ((vNum - 1) * (xOff2 * listHAlign)) + (xOff * h) + (xOff2 * v);
              yy = (a[1][3] - (a[1][7] * boxH)) - ((hNum - 1) * (yOff * listVAlign)) - ((vNum - 1) * (yOff2 * listVAlign)) + (yOff * h) + (yOff2 * v);

              hAlign = a[1][6];
              vAlign = a[1][7];


              if (a[3][0] == 1) { // Is it interactive?

                // Is the mouse on a UI element? (New)

                let mouseIsOnElement = 0;

                if (a[1][1] < 4) { // Rectangular hitbox

                  if ((mouseX > xx) && (mouseX < (xx + boxW))) {

                    if ((mouseY > yy) && (mouseY < (yy + boxH))) {

                      mouseIsOnElement = 1;
                    }
                  }
                } else if  (a[1][1] == 4){ // Rotated Rectangular Hitbox

                  if ((abs(mouseX - (xx + (boxW * (1 - hAlign)))) + abs(mouseY - (yy + (boxH * (1 - vAlign))))) < (boxW)) {

                    mouseIsOnElement = 1;
                  }
                }

                elementID = (str(s) + "-" + str(i) + "-" + str(v) + "-" + str(h));

                if (mouseIsOnElement) {

                  if (uiHover2 != elementID) {

                    if (uiSelected != "undefined") {
                      if (uiSelected[3][2] != 0) {

                        uiSelected[3][2]();
                        //console.log("Hover Out 2");
                      }
                    }
                  }

                  uiHover = 1;
                  uiSelected = a;
                  uiSelectedIndex = ((v * hNum) + h + 1);

                  if (uiSelected[3][1] != 0) {

                    uiSelected[3][1]();
                    //if (uiHover2 != elementID) { console.log("Hover In"); }
                  }

                  uiHover2 = elementID;

                } else {

                  if (uiHover2 == elementID) {

                    uiHover2 = "";
                  }
                }
              }


              // Reset positions to take alignment into account

              xx = (a[1][2]) - ((hNum - 1) * (xOff * listHAlign)) - ((vNum - 1) * (xOff2 * listHAlign)) + (xOff * h) + (xOff2 * v);
              yy = (a[1][3]) - ((hNum - 1) * (yOff * listVAlign)) - ((vNum - 1) * (yOff2 * listVAlign)) + (yOff * h) + (yOff2 * v);


              push();
              translate(xx, yy);

              if (a[1][14] != 0) { // Apply rotation if applicable

                angleMode(DEGREES);
                rotate(a[1][14]);
              }


              if (a[1][0] == 1) { // Is box element active?

                let ccc = a[1][8];
                let cccc = ccc;

                if (typeof ccc === "object") {

                  cccc = color(ccc.levels[0], ccc.levels[1], ccc.levels[2], boxOp);

                } else {

                  cccc = color(ccc, ccc, ccc, boxOp);
                }

                fill(cccc);

                //if (a[0] == 2) { if (uiSelected == a) { fill(a[1][8], a[3][1]()); } }

                if (a[1][10] == 1) {

                  stroke(a[1][11], boxOutlineOp);
                  strokeWeight(a[1][13]);

                } else {

                  noStroke();
                }


                // Draw element box

                rectMode(CORNER);

                switch(a[1][1]) {

                  case 1: rect(- (boxW * hAlign), - (boxH * vAlign), boxW, boxH);
                  break;

                  case 2: rect(- (boxW * hAlign), - (boxH * vAlign), boxW, boxH, min(boxW, boxH) / 3.4);
                  break;

                  case 3: circle(0, 0, boxW);
                  break;

                  case 4:
                  quad(- (boxW * hAlign) + (boxW * (1 - hAlign)), - ((boxH * 2) * vAlign),
                  ((boxW * 2) * (1 - hAlign)), - (boxH * vAlign) + (boxH * (1 - vAlign)),
                  - (boxW * hAlign) + (boxW * (1 - hAlign)), ((boxH * 2) * (1 - vAlign)),
                  - ((boxW * 2) * hAlign), - (boxH * vAlign) + (boxH * (1 - vAlign)));
                  break;
                }

              } else {

                noFill();
                noStroke();
              }


              if (a[2][0] == 1) { // Is text element active?


                // Draw element text

                let ccc = a[2][3];
                let cccc = ccc;

                if (typeof ccc === "object") {

                  cccc = color(ccc.levels[0], ccc.levels[1], ccc.levels[2], a[2][4]);

                } else {

                  cccc = color(ccc, ccc, ccc, a[2][4]);
                }

                fill(cccc);

                textFont(fontRegular);
                if (a[2][7] != undefined) { textFont(a[2][7]); }
                textSize(a[2][2]);
                //if (a[2][4] != -1) { fill(a[2][3], a[2][4]); } else { fill(a[2][3]); }
                noStroke();
                textAlign(LEFT, TOP);

                let hA = (((boxW * (1 + (a[1][1] == 4))) * a[2][5]) - (textWidth(a[2][1]) * a[2][5])); // Horizontal aligning
                let vA = (((boxH * (1 + (a[1][1] == 4))) * a[2][6]) - (a[2][2] * a[2][6])); // Vertical aligning
                let vC = -(a[2][2] / 7); // Small vertical correction for font height

                text(a[2][1], hA - ((boxW * (1 + (a[1][1] == 4))) * hAlign), vA + vC - ((boxH * (1 + (a[1][1] == 4))) * vAlign));

              }


              if (a[4] != undefined) {

                if (a[4][0] == 1) { // Is image element active?

                  let ww = a[4][2];
                  let hh = a[4][2];
                  if (a[4][3] != 0) { hh = a[4][3]; }
                  let hA = (((boxW * (1 + (a[1][1] == 4))) * a[4][4]) - (ww / 2)); // Horizontal aligning
                  let vA = (((boxH * (1 + (a[1][1] == 4))) * a[4][5]) - (hh / 2)); // Vertical aligning

                  image(a[4][1], hA - ((boxW * (1 + (a[1][1] == 4))) * hAlign), vA - ((boxH * (1 + (a[1][1] == 4))) * vAlign), ww, hh); // ***** Causes fatal error in firefox only *****
                }
              }


              pop(); // Reset translate/rotation
            }
          }
        }
      }
    }

    // Reset hover effect if not hovering on UI anymore

    if (uiHover == 0) {

      if (uiSelected != "undefined") {

        if (uiSelected[3][2] != 0) {

          uiSelected[3][2]();
          uiSelected = "undefined";

          //console.log("Hover Out 1");
        }
      }
    }
  }
}
