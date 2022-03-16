

// General

state = 1; // 0 = menu, 1 = game, 2 = settings
gameState = 0;
uiState = 0; // 0 = normal, 1 = build menu open
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
cost = 0;
profit = 0;
publicRage = 0;
price = 10;
timer = 0;
timerSpd = 0.01;
greenScore = 0;
powerPerc = 0;
produced = 0;
powerUsed = 0;

batteryStatus = 0;
batteryCapacity = 1000;
batteryCharge = 0;
batteryInOut = 0;
batteryOutPerc = 0;

cellSize = 0;
xRes = 0;
yRes = 0;
xOff = 0;
yOff = 0;

hoveringOnFacility = -1;
hoveringOnNewFacility = 0;

colours = [];


// Production

production = [

  /*
    0 - Type
    1 - Current details
      0 - Enabled/disabled/under construction
      1 - Active/inactive
      2 - Level (or details on what's been upgraded)
      3 - Output
      4 - Cost
      5 - Intermittent stuff
        0 - On duration
        1 - Off duration
        2 - Status
        3 - Timer
      6 - Impact
    2 - History
      TBD
  */
];
productionTypes = [];

intermittentSources = [];

document.addEventListener('contextmenu', event => event.preventDefault());



function preload() {

  // Fonts

  fontRegular = loadFont('assets/Lora-Regular.ttf');
  fontBold = loadFont('assets/Lora-Bold.ttf');
  fontMedium = loadFont('assets/Lora-Medium.ttf');
  fontSemibold = loadFont('assets/Lora-SemiBold.ttf');
  solarIcon = loadImage('assets/solar-icon.svg');
  hydroIcon = loadImage('assets/hydro-icon.svg');
  batteryIcon = loadImage('assets/battery-icon.svg');

  latoRegular = loadFont('assets/Lato-Regular.ttf');
  latoBold = loadFont('assets/Lato-Bold.ttf');
}



function setup() {

  productionTypes = [

    /*
      0 - Default
        0 - Info
          0 - - Name
          1 - Colour
          2 - Icon
        1 - Build details
          0 - Cost
          1 - Impact
          2 - Time
        2 - Running Details
          0 - Output
          1 - Cost (/MWh)
          2 - Intermittent stuff
            0 - On duration
            1 - Off duration
          3 - Impact
    */

    [ // Coal

      [ // Default

        ["Coal Plant", color(0, 0, 0), solarIcon],
        [100, 0, 300],
        [5, 6, 0, 0]
      ]
    ],

    [ // Wind

      [ // Default

        ["Wind Farm", color(140, 198, 63), hydroIcon],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],
  ]

  createCanvas(windowWidth, windowHeight);

  calcLayout(); // Has to be done before UI is loaded (unless UI is refreshed)

  createTestFacilities();

  // Load UI data from js file

  script = document.createElement('script');
  script.onload = function () {
    uiData = ui.slice();
    uiLoaded = 1;
  };
  script.src = 'ui.js';
  document.head.appendChild(script);

  colours = [
    color(0, 0, 0), // Black
    color(57, 181, 74), // Green
    color(237, 28, 36), // Red
    color(131, 204, 138), // Lighter Green (Power Overcharge)
    color(46, 49, 146) // Purple (Battery)
  ]
}



function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}



function mouseClicked() {

  if (mouseButton === LEFT) {

    if (hoveringOnFacility > -1) {

      // Clicked on existing power plant

      production.splice(hoveringOnFacility, 1);
      hoveringOnFacility = -1;
    }

    if (hoveringOnNewFacility == 1) {

      // Adding new power plant

      // Open build menu

      uiState = 1;

      /*production.push(createFacilityFromTemplate(1));
      intermittentSources.push(production.length - 1);*/
      hoveringOnFacility = 0;
    }

    // Dynamic UI

    if (uiLoaded == 1) { // Check if UI has loaded yet

      if (uiHover == 1) { // Is mouse on UI element?

        if (uiSelected[3][0] == 1) { // Does the element have a click function?

          uiSelected[3][3]();
          uiHover = 0;
        }
      }
    }

  }

  /*if (mouseButton === RIGHT) {

    production.splice(production.length - 1, 1);
  }*/
}



function draw() {

  power = 0;
  produced = 0;
  producedPerc = 0;
  powerPerc = 0;
  income = 0;
  profit = 0;
  greenScore = 0;
  batteryStatus = 0;
  batteryIn = 0;
  batteryOut = 0;
  batteryInPerc = 0;
  batteryOutPerc = 0;
  cost = 0;



  // Simulation stuff

  for (let i = 0; i < production.length; i++) { // Loop through production facilities

    if (production[i][1][0]) { // Check if enabled

      if (production[i][1][1]) { // Check if active

        produced += production[i][1][3]; // Add facility output to total power
        //greenScore += (production[i][1][2] * production[i][4]); // Add output to green score (if its green)
        cost += (production[i][1][3] * production[i][1][4]); // Add running costs to total running costs ($/h)
      }
    }
  }

  power = produced;

  if (power > demand) { // Overpowered

    if (batteryCharge < batteryCapacity) { // Battery is not fully charged

      batteryIn = power - demand;
      batteryCharge = min(1000, batteryCharge + batteryIn);
      batteryStatus = 1;
    }

  } else if (power < demand) { // Underpowered

    if (batteryCharge > 0) { // Battery has charge

      batteryOut = min(demand - power, batteryCharge);
      power += batteryOut;
      batteryCharge -= batteryOut;
      batteryStatus = 2;
    }
  }

  powerUsed = min(demand, power);
  //greenScore = round((greenScore / power) * 100); // Calculate total green score (%)
  income = powerUsed * price; // Calculate total income ($/h)
  profit = income - cost;
  producedPerc = round((produced / demand) * 100);
  powerPerc = round((power / demand) * 100); // Convert power to percentage
  money += profit; // Increase money by income ($/h)
  batteryInPerc = round((batteryIn / demand) * 100);
  batteryOutPerc = round((batteryOut / demand) * 100);



  // Drawing

  background(255);

  drawGrid();


  // Distribution

  if (powerPerc < 100) {

    publicRage += 0.01;

  } else {

    if (publicRage > 0) {

      publicRage -= 0.005; // This should be made dynamic based on level/frequency of outage(s)
    }
  }


  // Production

  fill(0);
  textAlign(CENTER, CENTER);
  textFont(latoRegular);

  let prodNum = production.length;
  let rangeX = 12;
  let rangeY = 4;
  let startX = (width / 2) - (cellSize * (rangeX / 2));
  let startY = height - yOff - (cellSize * rangeY);
  let hoveringDel = 0;

  for (let i = 0; i < rangeX; i++) { // Loop through production places

    for (let y = 0; y < rangeY; y++) {

      let prod = i + (y * rangeX);

      let xx = startX + (cellSize * (i + 0.5));
      let yy = startY + (cellSize * (y + 0.5));

      if (prod < prodNum) {

        // Placed production facility

        if ((mouseX > (xx - (cellSize / 2))) && (mouseX < (xx + (cellSize / 2)))) {

          if ((mouseY > (yy - (cellSize / 2))) && (mouseY < (yy + (cellSize / 2)))) {

            // If mouse is hovering over

            hoveringDel = 1;
            hoveringOnFacility = prod;
          }
        }

        // Draw text and box fill

        fill(productionTypes[production[prod][0]][0][0][1]);
        if (production[prod][1][1] == 0) { fill(230); }
        noStroke();
        rect(startX + (cellSize * i) + (cellSize / 4), startY + (cellSize * y) + (cellSize / 4), (cellSize / 2),  (cellSize / 2));

        let p = production[prod][1][5];
        let off = 0;
        let rev = (p[2] * -1) + 1;
        let barSize = cellSize / 2;

        if (p != 0) { off = ((barSize / p[rev]) * p[3]); }

        rect(xx - (barSize / 2), yy + (cellSize / 3), barSize - off, 6);

        fill(255);
        textSize(20);
        text(production[prod][1][3], xx, yy - (cellSize / 32));
        fill(0);
        textSize(13);
        text("$" + production[prod][1][4] + "/MWh", xx, yy - ((cellSize / 8) * 3));

        // Draw box outline

        noFill();
        stroke(0);
        //rect(xx - (cellSize * 0.5), yy - (cellSize * 0.5), cellSize, cellSize);

      } else if (prod == prodNum) {

        // First empty lot

        let hovering = 0;
        let boxSize = (cellSize / 4);

        if ((mouseX > (xx - (cellSize / 2))) && (mouseX < (xx + (cellSize / 2)))) {

          if ((mouseY > (yy - (cellSize / 2))) && (mouseY < (yy + (cellSize / 2)))) {

            // If mouse is hovering over

            hovering = 1;
            hoveringOnNewFacility = 1;
          }
        }

        if (hovering == 0) {

          hoveringOnNewFacility = 0;
        }

        noFill();
        stroke(230);
        if (hoveringOnNewFacility) { stroke(0); }
        rect(xx - boxSize, yy - boxSize, (boxSize * 2),  (boxSize * 2));

        stroke(0);
        line(xx - (cellSize / 8), yy, xx + (cellSize / 8), yy);
        line(xx, yy - (cellSize / 8), xx, yy + (cellSize / 8));

      } else {

        // Empty lots

        // Draw boxes

        noStroke();
        fill(240);
        rect(startX + (cellSize * i) + (cellSize / 4), startY + (cellSize * y) + (cellSize / 4), (cellSize / 2),  (cellSize / 2));
      }
    }
  }

  if (hoveringDel == 0) {

    hoveringOnFacility = -1;
  }


  // Update intermittent sources

  for (let i = 0; i < intermittentSources.length; i++) {

    let pp = production[intermittentSources[i]];

    if (pp != undefined) {  ///////// CLEAR REFERENCES TO DELETED OBJECTS /////////

      let p = pp[1][5];

      if (p[3] > 0) {

        p[3]--;

      } else {

        let toggle = (p[2] * -1) + 1;
        p[3] = p[p[2]];
        p[2] = toggle;

        production[intermittentSources[i]][1][1] = toggle; // Toggle power status
      }
    }
  }


  // Draw UI

  drawUI();


  timer += timerSpd;
}



function drawGrid() {

  calcLayout();

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



function calcLayout() {

  cellSize = height / 12;
  xRes = (ceil(floor(width / cellSize) / 2)) * 2;
  yRes = floor(height / cellSize);
  xOff = (width - (xRes * cellSize)) / 2;
  yOff = (height - (yRes * cellSize)) / 2;
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

            limit = a[1][16]();
            hNum = Math.min(a[1][17](), limit);
            vNum2 = Math.ceil(limit / a[1][17]());
            vNum = Math.max(vNum2, a[1][18]());
            xOff = a[1][19]();
            yOff = a[1][20]();
            xOff2 = a[1][21]();
            yOff2 = a[1][22]();
            listHAlign =  a[1][23];
            listVAlign =  a[1][24];
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

                    /*if (a[1][16] != undefined) {

                      console.log(a[1][16]);

                      if (a[x][y].length < a[1][16]()) {

                        let temp = a[x][y][1];
                        a[x][y].length = 0;

                        for (z = 0; z < (a[1][16]()); z++) {

                          a[x][y].push(temp);
                        }
                      }
                    }*/
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

                  case 5: strokeCap(SQUARE); arc(0, 0, boxW, boxW, a[1][15][0], a[1][15][1]);
                  break;

                  case 6: strokeCap(SQUARE); triangle(0, - (boxH / 2), boxW / 2, boxH / 2, - (boxW / 2), boxH / 2);
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


              if (a[1][14] != 0) {

                angleMode(RADIANS);
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



function createFacilityFromTemplate(prodType) {

  let pTA = productionTypes[prodType][0];
  let inter;

  if (pTA[2][2] != 0) {
    inter = [pTA[2][2][0], pTA[2][2][1], 1, pTA[2][2][0]];
  } else { inter = 0; }

  let tempA = [
    prodType,
    [
      1,
      1,
      1,
      pTA[2][0],
      pTA[2][1],
      inter,
      0
    ],
    [
      0
    ]
  ];

  production.push(tempA);

  if (inter != 0) {

    intermittentSources.push(production.length - 1);
  }
}



function createTestFacilities() {

  createFacilityFromTemplate(0);
  createFacilityFromTemplate(1);
}
