var addBtn = document.getElementById('addBtn');
var subBtn = document.getElementById('subBtn');
var xSolution = document.getElementById('x-solution');
var ySolution = document.getElementById('y-solution');
var zSolution = document.getElementById('z-solution');
var operator = document.getElementById('operator');

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', sub);

function add() {
  var x = getX();
  var y = getY();
  if ( areNumbers(x,y) ) {
    xSolution.innerHTML = x;
    operator.innerHTML = "plus";
    ySolution.innerHTML = y;
    zSolution.innerHTML = "= " + (x + y);
  } else {
    resetSolution();
    alert("Only numbers allowed!")
  }
}

function sub() {
  var x = getX();
  var y = getY();
  if ( areNumbers(x,y) ) {
    xSolution.innerHTML = x;
    operator.innerHTML = "minus";
    ySolution.innerHTML = y;
    zSolution.innerHTML = "= " + (x - y);
  } else {
    resetSolution();
    alert("Only numbers allowed!")
  }
}

function getX() {
  var x = document.getElementById('x-val').value;
  document.getElementById('x-val').value = "";
  x = parseInt(x);

  if (Math.floor(x) == x) {
    return x;
  } else {
    return false;
  }
}

function getY() {
  var y = document.getElementById('y-val').value;
  document.getElementById('y-val').value = "";
  y = parseInt(y);

  if (Math.floor(y) == y) {
    return y;
  } else {
    return false;
  }
}

function resetSolution() {
  xSolution.innerHTML = "";
  operator.innerHTML = "";
  ySolution.innerHTML = "";
  zSolution.innerHTML = "";
}

function areNumbers(x,y) {
  if (x != false && y != false) {
    return true;
  } else {
    return false;
  }
}