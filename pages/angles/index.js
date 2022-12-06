var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var computeAngleBtn = document.querySelector("#compute-angle");
var output = document.querySelector("#output-angle");

// input
computeAngleBtn.addEventListener("click", clickHandler);

function clickHandler() {
  // processing
  var result = isTriangle(+angle1.value, +angle2.value, +angle3.value);
  console.log(result);
  // output
  if (result === true) {
    output.innerHTML = "Yay! It is a triangle";
  } else {
    output.innerHTML = "Sorry, try different angles";
  }
}

function isTriangle(a, b, c) {
  if (a + b + c === 180) {
    return true;
  } else {
    console.log(a + b + c);
    return false;
  }
}