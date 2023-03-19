function solve(val) {
  var x = document.getElementById("result");
  if (x > 31 && (x < 48 || x > 57)) {
    return false;
  }
  x.value += val;
}
function result() {
  var x = document.getElementById("result").value;
  var y = eval(x);
  document.getElementById("result").value = y;
}

function Clear() {
  document.getElementById("result").value = "";
}
function Back() {
  var x = document.getElementById("result");
  x.value = x.value.slice(0, -1);
}
