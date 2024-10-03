// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

function getLength(x1, y1, x2, y2) {
  let length = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return length.toFixed(2);
}

function getSlope(x1, y1, x2, y2) {
  let rise = y2 - y1;
  let run = x2 - x1;
  let slope = rise / run;
  if (slope != +-Infinity) {
    return slope.toFixed(2);
  } else {
    return "undefined";
  }
}

function getDescription(x1, y1, x2, y2) {
  let rise = y1 - y2;
  let run = x1 - x2;
  let slope = rise / run;
  if (x1 == x2) {
    return "vertical";
  } else if (y1 == y2) {
    return "horizontal";
  } else if (slope > 0) {
    return "increasing";
  } else {
    return "decreasing";
  }
}

function getPointLocation(x, y) {
  if (x == 0 && y == 0) {
    return "origin";
  } else if (x == 0) {
    return "y-axis";
  } else if (y == 0) {
    return "x-axis";
  } else if (x > 0 && y > 0) {
    return "quadrant 1";
  } else if (x < 0 && y > 0) {
    return "quadrant 2";
  } else if (x < 0 && y < 0) {
    return "quadrant 3";
  } else {
    return "quadrant 4";
  }
}

function getPointSlope(x1, y1, x2, y2) {
  let slope = (y1 - y2) / (x1 - x2);
  // y - y1 = m(x - x1)
  if (y1 == y2) {
    return `y = ${y1}`;
  } else if (x1 == x2) {
    return `x = ${x1}`;
  } else if (x1 < 0 && y1 < 0) {
    x1 = x1 * -1;
    y1 = y1 * -1;
    return `y + ${y1} = ${slope}(x + ${x1})`;
  } else if (x1 < 0) {
    x1 = x1 * -1;
    return `y - ${y1} = ${slope}(x + ${x1})`;
  } else if (y1 < 0) {
    y1 = y1 * -1;
    return `y + ${y1} = ${slope}(x - ${x1})`;
  } else {
    return `y - ${y1} = ${slope}(x + ${x1})`;
  }
}

function getEquation(x1, y1, x2, y2) {
  // y = mx + b
  let slope = (y1 - y2) / (x1 - x2);
  let b = y1 - slope * x1;
  if (slope == Infinity && b == Infinity) {
    return "undefined";
  }
  if (b > 0) {
    return `y = ${slope}x + ${b}`;
  } else if (b == 0) {
    return `y = ${slope}x`;
  } else {
    return `y = ${slope}x - ${b}`;
  }
}
