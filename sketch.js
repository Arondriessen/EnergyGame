
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

  for (let i = 0; i < production.length; i++) { // Loop through production facilities

    if (production[i][5] != 0) { // Check if intermittent

      intermittentSources.push(i);
    }
  }
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
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
