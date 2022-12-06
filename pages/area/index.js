var base = document.querySelector("#base");
var height = document.querySelector("#height");
var computeBtn = document.querySelector("#compute-area");
var output = document.querySelector("#output-area");

computeBtn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(base.value, height.value);

  var result = area(base.value, height.value);
  if (
    base.value <= 0 ||
    base.value === "" ||
    height.value <= 0 ||
    height.value === ""
  ) {
    output.innerHTML = `Please enter valid values`;
  } else {
    output.innerHTML = `The area of triangle with base ${base.value} and height ${height.value} is ${result}`;
  }
}

function area(b, h) {
  if (b <= 0 || h <= 0 || b === "" || h === "") {
    return -1;
  }
  var result = (1 / 2) * b * h;
  return result;
}