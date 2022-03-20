

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
buildSelected = 0;


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
waste = 0;

batteryStatus = 0;
batteryCapacity = 1000;
batteryCharge = 0;
batteryInOut = 0;
batteryOutPerc = 0;
batteryInMax = 3;
batteryOutMax = 1;

cellSize = 0;
xRes = 0;
yRes = 0;
xOff = 0;
yOff = 0;

hoveringOnFacility = -1;
hoveringOnNewFacility = 0;

// History

tickRate = 10;
tickRateTimer = 0;
dataHistory = [];
tempHistory = [[], [], [], []];
tempDemand = 0;
tempProduced = 0;
tempBatteryIn = 0;
tempBatteryOut = 0;
chartMax = 0;
chartMaxPoints = 500;

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
      6 - Index of ref in int. array
      7 - Impact
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
  exitIcon = loadImage('assets/exit-icon.svg');
  exitIconW = loadImage('assets/exit-icon-white.svg');
  pauseIcon = loadImage('assets/pause-icon.svg');
  playIcon = loadImage('assets/play-icon.svg');
  researchIcon = loadImage('assets/research-icon.svg');
  sadIcon = loadImage('assets/sad-icon.svg');
  unhappyIcon = loadImage('assets/unhappy-icon.svg');
  happyIcon = loadImage('assets/happy-icon.svg');

  latoRegular = loadFont('assets/Lato-Regular.ttf');
  latoBold = loadFont('assets/Lato-Bold.ttf');
}



function setup() {

  productionTypes = [

    /*
      0 - Default
        0 - Info
          0 - Name
          1 - Colour
          2 - Icon
          3- Green
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

    [ // Oil

      [ // Default

        ["Oil", color(0, 0, 0), solarIcon, "No"],
        [10000, 0, 300],
        [5, 6, 0, 0]
      ]
    ],

    [ // Coal

      [ // Default

        ["Coal", color(83, 71, 65), hydroIcon, "No"],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],

    [ // Natural Gas

      [ // Default

        ["Natural Gas", color(198, 156, 109), hydroIcon, "No"],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],

    [ // Hydro

      [ // Default

        ["Hydro", color(41, 171, 226), hydroIcon, "Yes"],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],

    [ // Nuclear

      [ // Default

        ["Nuclear", color(46, 49, 146), hydroIcon, "Yes"],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],

    [ // Wind

      [ // Default

        ["Wind", color(140, 198, 63), hydroIcon, "Yes"],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],

    [ // Solar

      [ // Default

        ["Solar", color(247, 147, 30), solarIcon, "Yes"],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],

    [ // Biofuel

      [ // Default

        ["Biofuel", color(0, 104, 55), hydroIcon, "No"],
        [100, 0, 300],
        [5, 8, [180, 90], 0]
      ]
    ],
  ]

  createCanvas(windowWidth - 1, windowHeight - 1);

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

  setUIVariables();

  graphImg = createGraphics(gPW, gPH);
  graphImg.background(255);

  colours = [
    color(0, 0, 0), // 1 Black
    color(57, 181, 74), // 2 Green
    color(237, 28, 36), // 3 Red
    color(131, 204, 138), // 4 Lighter Green (Power Overcharge)
    color(46, 49, 146), // 5 Purple (Battery)
    color(231, 244, 211), // 6 Light Green (Green Energy)
    color(247, 147, 30) // 7 Orange (Customers)
  ]
}



function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}



function mouseClicked() {

  if (mouseButton === LEFT) {

    if (hoveringOnFacility > -1) {

      // Clicked on existing power plant

      intermittentSources.splice(production[hoveringOnFacility][1][6], 1);
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

  // Update Simulation Numbers

  updateSim();

  // Update History

  updateHistory();


  // Drawing

  background(255);

  drawGrid();
  drawProductionFacilities();

  // Draw Graph Image

  image(graphImg, gPX, gPY);

  // Draw Build Menu

  if (uiState == 1) { drawBuildMenu(); }

  // Draw UI

  drawUI();
}



function updateSim() {

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
  batteryInOut = 0;
  batteryInPerc = 0;
  batteryOutPerc = 0;
  cost = 0;
  waste = 0;
  moneyStr = "";


  // Simulation stuff

  for (let i = 0; i < production.length; i++) { // Loop through production facilities

    if (production[i][1][0] == 1) { // Check if enabled

      if (production[i][1][1]) { // Check if active

        produced += production[i][1][3]; // Add facility output to total power
        //greenScore += (production[i][1][2] * production[i][4]); // Add output to green score (if its green)
        cost += (production[i][1][3] * production[i][1][4]); // Add running costs to total running costs ($/h)
      }

    } else {

      // Update build timer

      if (production[i][1][0] > 1) {

        production[i][1][0]--;
      }
    }
  }

  power = produced;
  powerUsed = min(demand, power);

  if (power > demand) { // Overpowered

    if (batteryCharge < batteryCapacity) { // Battery is not fully charged

      batteryIn = min(batteryInMax, power - demand);
      batteryCharge = min(batteryCapacity, batteryCharge + batteryIn);
      batteryStatus = 1;
    }

    waste = power - demand - batteryIn;

  } else if (power < demand) { // Underpowered

    if (batteryCharge > 0) { // Battery has charge

      batteryOut = min(batteryOutMax, min(demand - power, batteryCharge));
      power += batteryOut;
      batteryCharge -= batteryOut;
      batteryStatus = 2;
    }

    shortage = demand - power - batteryOut;
  }

  //greenScore = round((greenScore / power) * 100); // Calculate total green score (%)
  income = powerUsed * price; // Calculate total income ($/h)
  profit = income - cost;
  producedPerc = round((produced / demand) * 100);
  powerPerc = round((power / demand) * 100); // Convert power to percentage
  money += profit; // Increase money by income ($/h)
  batteryInPerc = round((batteryIn / demand) * 100);
  batteryOutPerc = round((batteryOut / demand) * 100);
  batteryInOut = batteryIn - batteryOut;

  // Distribution

  if (powerPerc < 100) {

    publicRage += 0.01;

  } else {

    if (publicRage > 0) {

      publicRage -= 0.005; // This should be made dynamic based on level/frequency of outage(s)
    }
  }

  // Clean up money text

  moneyStr = formatNumber(money);

  // Update Intermittent Sources

  updateIntermittentSources();

  // Update timeline timer

  timer += timerSpd;
}



function updateIntermittentSources() {

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
}



function updateHistory() {

  // History


  // Update History

  // Every frame

  tempHistory[0].push(demand);
  tempHistory[1].push(produced);
  tempHistory[2].push(batteryIn);
  tempHistory[3].push(batteryOut);

  tickRateTimer++;

  // Every tick

  if (tickRateTimer == tickRate) {

    // Push data to history array

    tempDemand = 0;
    tempProduced = 0;
    tempBatteryIn = 0;
    tempBatteryOut = 0;

    for (let i = 0; i < tickRate; i++) {

      tempDemand += tempHistory[0][i];
      tempProduced += tempHistory[1][i];
      tempBatteryIn += tempHistory[2][i];
      tempBatteryOut += tempHistory[3][i];
    }

    tempDemand = tempDemand / tickRate;
    tempProduced = tempProduced / tickRate;
    tempBatteryIn = tempBatteryIn / tickRate;
    tempBatteryOut = tempBatteryOut / tickRate;

    if (tempDemand > chartMax) { chartMax = tempDemand; }
    if (tempProduced > chartMax) { chartMax = tempProduced; }

    dataHistory.push([tempDemand, tempProduced, tempBatteryIn, tempBatteryOut]);

    if (dataHistory.length > chartMaxPoints) { dataHistory.splice(0, 1); }

    tempHistory[0].length = 0;
    tempHistory[1].length = 0;
    tempHistory[2].length = 0;
    tempHistory[3].length = 0;

    tickRateTimer = 0;


    // Draw History

    drawGraph();
  }
}



function drawProductionFacilities() {

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

      fill(255);
      stroke(240);
      rect(startX + (cellSize * i), startY + (cellSize * y), (cellSize), (cellSize));

      if (prod < prodNum) {

        // Placed production facility

        if (production[prod][1][0] == 1) {

          // If turned on

          if ((mouseX > (xx - (cellSize / 2))) && (mouseX < (xx + (cellSize / 2)))) {

            if ((mouseY > (yy - (cellSize / 2))) && (mouseY < (yy + (cellSize / 2)))) {

              // If mouse is hovering over

              hoveringDel = 1;
              hoveringOnFacility = prod;
            }
          }

          // Draw text and box fill

          //image(productionTypes[production[prod][0]][0][0][2], startX + (cellSize * i) + (cellSize / 4), startY + (cellSize * y) + (cellSize / 4), cellSize / 2, cellSize / 2);
          fill(productionTypes[production[prod][0]][0][0][1]);
          rect(startX + (cellSize * i) + (cellSize / 4) - 1, startY + (cellSize * y) + (cellSize / 4) - 1, (cellSize / 2) + 2, (cellSize / 2) + 2);
          noStroke();
          if (production[prod][1][1] == 0) {

            fill(255, 200);
            rect(startX + (cellSize * i) + (cellSize / 4) - 1, startY + (cellSize * y) + (cellSize / 4) - 1, (cellSize / 2) + 2, (cellSize / 2) + 2);
          }

          let p = production[prod][1][5];
          let off = 0;
          let rev = (p[2] * -1) + 1;
          let barSize = cellSize / 2;

          if (p != 0) { off = ((barSize / p[rev]) * p[3]); }

          //rect(xx - (barSize / 2), yy + (cellSize / 3), barSize - off, 6);

          fill(255);
          textSize(20);
          //text(production[prod][1][3], xx, yy - (cellSize / 32));
          fill(0);
          textSize(13);
          //text("$" + production[prod][1][4] + "/MWh", xx, yy - ((cellSize / 8) * 3));

          // Draw box outline

          noFill();
          stroke(0);
          //rect(xx - (cellSize * 0.5), yy - (cellSize * 0.5), cellSize, cellSize);

        } else {

          // If under construction

          fill(productionTypes[production[prod][0]][0][0][1]);
          noStroke();
          arc(xx, yy, cellSize / 2, cellSize / 2, - (PI / 2), ((min((production[prod][1][0] / productionTypes[production[prod][0]][0][1][2]) * 100, 100) / 50) *  PI) - (PI / 2));
        }

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
}



function drawGraph() {

  // Draw History

  let chartOff = cellSize / 3;
  let chartW = gPW - (2 * cellSize);
  let chartH = gPH - (chartOff * 2);
  let lineSize = chartW / (dataHistory.length - 1);

  graphImg.background(255);


  // Draw Production Fill (Green)

  graphImg.fill(color('#D7F0DB'));
  graphImg.beginShape();

  graphImg.vertex(0, chartH + (chartOff * 2));

  for (let i = 0; i < dataHistory.length; i++) { // Loop through points in history (oldest first)

    let xx = round(lineSize * i);
    let yy = round((chartH + chartOff) - (chartH * (dataHistory[i][1] / chartMax)));

    graphImg.vertex(xx, yy);
  }

  graphImg.vertex(chartW, chartH + (chartOff * 2));

  graphImg.endShape();


  // Draw Waste & Shortage Fill (Red)

  graphImg.noStroke();
  graphImg.fill(color('#FBD2E4'));
  graphImg.beginShape();

  for (let i = 0; i < dataHistory.length; i++) { // Loop through points in history (oldest first)

    let xx = round(lineSize * i);
    let yy = round((chartH + chartOff) - (chartH * (dataHistory[i][1] / chartMax)));

    graphImg.vertex(xx, yy);
  }

  for (let i = (dataHistory.length - 1); i > -1; i--) { // Loop through points in history (oldest first)

    let xx = round(lineSize * i);
    let p = 0;
    if (dataHistory[i][1] > dataHistory[i][0]) { p = min(dataHistory[i][0] + dataHistory[i][2], dataHistory[i][1]); }
    else { p = max(dataHistory[i][0] - dataHistory[i][3], dataHistory[i][1]); }
    let yy = round((chartH + chartOff) - (chartH * (p / chartMax)));

    graphImg.vertex(xx, yy);
  }

  graphImg.endShape(CLOSE);


  // Draw Battery Charge & Discharge Fill (Purple)

  graphImg.strokeCap(SQUARE);
  graphImg.stroke(colours[4]);
  graphImg.strokeWeight(1);
  graphImg.fill(color('#C9CBE2'));
  graphImg.beginShape();

  for (let i = 0; i < dataHistory.length; i++) { // Loop through points in history (oldest first)

    let xx = round(lineSize * i);
    let p = 0;
    if (dataHistory[i][1] > dataHistory[i][0]) { p = min(dataHistory[i][0] + dataHistory[i][2], dataHistory[i][1]); }
    else { p = max(dataHistory[i][0] - dataHistory[i][3], dataHistory[i][1]); }
    let yy = round((chartH + chartOff) - (chartH * (p / chartMax)));

    graphImg.vertex(xx, yy);
  }

  for (let i = (dataHistory.length - 1); i > -1; i--) { // Loop through points in history (oldest first)

    let xx = round(lineSize * i);
    let yy = round((chartH + chartOff) - (chartH * (dataHistory[i][0] / chartMax)));

    graphImg.vertex(xx, yy);
  }

  graphImg.endShape();


  // Draw Production Line (Green)

  graphImg.noFill();
  graphImg.stroke(colours[1]);
  graphImg.strokeWeight(1.2);
  graphImg.beginShape();

  for (let i = 0; i < dataHistory.length; i++) { // Loop through points in history (oldest first)

    let xx = round(lineSize * i);
    let yy = round((chartH + chartOff) - (chartH * (dataHistory[i][1] / chartMax)));

    graphImg.vertex(xx, yy);
  }

  graphImg.endShape();


  // Draw Demand Line

  graphImg.stroke(colours[0]);

  graphImg.beginShape();

  for (let i = 0; i < dataHistory.length; i++) { // Loop through points in history (oldest first)

    let xx = round(lineSize * i);
    let yy = round((chartH + chartOff) - (chartH * (dataHistory[i][0] / chartMax)));

    graphImg.vertex(xx, yy);
  }

  graphImg.endShape();


  // Draw Power Line

  let yy = round((chartH + chartOff) - (chartH * (dataHistory[dataHistory.length - 1][1] / chartMax)));

  graphImg.stroke(colours[1]);
  graphImg.line(chartW, yy, graphImg.width, yy);


  // Draw Text

  graphImg.noStroke();
  graphImg.fill(0);
  graphImg.textFont(latoRegular);
  graphImg.textSize(10);
  graphImg.textAlign(LEFT, CENTER);

  graphImg.text("0 MWh", chartW + 10, chartH + chartOff + 10);
  graphImg.text(chartMax + " MWh", chartW + 10, chartOff - 10);

  //graphImg.text(dataHistory[dataHistory.length - 1][0] + " MWh", chartW + 10, yy);
}



function drawBuildMenu() {

}



function drawGrid() {

  calcLayout();

  noFill();
  stroke(245);

  for (let x = 0; x < (xRes); x++) {

    let xx = xOff + (x * (cellSize / 2))
    line(xx, 0, xx, height);
  }

  for (let y = 0; y < (yRes); y++) {

    let yy = yOff + (y * (cellSize / 2))
    line(0, yy, width, yy);
  }
}



function calcLayout() {

  cellSize = height / 12;
  xRes = (ceil(floor(width / (cellSize / 2)) / 2)) * 2;
  yRes = floor(height / (cellSize / 2));
  xOff = (width - (xRes * (cellSize / 2))) / 2;
  yOff = (height - (yRes * (cellSize / 2))) / 2;
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
              boxFill = -1;
              txtC = -1;
              img = -1;


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
                      }
                    }
                  }

                  uiHover = 1;
                  uiSelected = a;
                  uiSelectedIndex = ((v * hNum) + h + 1);

                  if (uiSelected[3][1] != 0) {

                    uiSelected[3][1]();
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
                if (boxFill > -1) { fill(boxFill); }

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
                if (txtC > -1) { fill(txtC); }

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

                  let im = a[4][1];
                  if (img != -1) { im = img; }

                  image(im, hA - ((boxW * (1 + (a[1][1] == 4))) * hAlign), vA - ((boxH * (1 + (a[1][1] == 4))) * vAlign), ww, hh); // ***** Causes fatal error in firefox only *****
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
        }
      }
    }
  }
}



function buildFacility(prodType) {

  money -= productionTypes[prodType][0][1][0];

  createFacilityFromTemplate(prodType, 1);
}



function createFacilityFromTemplate(prodType, useBuildTimer) {

  let pTA = productionTypes[prodType][0];
  let inter = 0;
  let buildTimer = 1;

  if (pTA[2][2] != 0) {
    inter = [pTA[2][2][0], pTA[2][2][1], 1, pTA[2][2][0]];
  }

  if (useBuildTimer) {
    buildTimer = pTA[1][2] + 1;
  }

  let tempA = [
    prodType,
    [
      buildTimer,
      1,
      1,
      pTA[2][0],
      pTA[2][1],
      inter,
      0,
      0
    ],
    [
      0
    ]
  ];

  if (inter != 0) {

    intermittentSources.push(production.length);
    tempA[1][6] = intermittentSources.length - 1;
  }

  production.push(tempA);
}



function formatNumber(number) {

  let num = abs(number);
  let num2 = number / abs(number);
  let result = number;

  if (num > 1000) {

    if (num < 100000) {

      result = (round((num / 1000), 1) * num2) + "k";

    } else if (num < 1000000) {

      result = round((num / 1000)) + "k";

    } else if (num < 10000000) {

      result = round((num / 1000000), 2) + "m";

    } else if (num < 100000000) {

      result = round((num / 1000000), 1) + "m";

    } else if (num < 1000000000) {

      result = round((num / 1000000)) + "m";

    } else {

      result = round((num / 1000000000), 1) + "b";
    }
  }

  return result;
}



function setUIVariables() {

  // UI variables

  // Power Circle
  pCX = width / 2;
  pCY = (height / 2) - (cellSize * 2);
  // Produced Circle
  pDCX = (width / 2) + (cellSize * 5);
  pDCY = (height / 2) + (cellSize / 2);
  // Battery
  bTX = (width / 2) + (cellSize * 3);
  bTY = (height / 2) - (cellSize * 2);
  // Cash Flow
  cFX = (width / 2) + (cellSize * 2);
  cFY = (height / 2) - (cellSize * 5);
  // Graph
  gPX = (width / 2) - (cellSize * 4);
  gPY = (height / 2) - (cellSize / 2);
  gPW = cellSize * 9;
  gPH = cellSize * 2;
  // Graph Expl.
  gPEX = (width / 2) - (cellSize * 6);
  gPEY = (height / 2) + (cellSize / 2);
  // Consumers
  cSX = (width / 2) - (cellSize * 6);
  cSY = (height / 2) - (cellSize * 3);
}



function createTestFacilities() {

  createFacilityFromTemplate(0);
  createFacilityFromTemplate(1);
}
