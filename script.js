function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = 'tara meet up!!!';
}

function calculate() {
  var expression = document.getElementById('display').value;
  var result = eval(expression);
  document.getElementById('display').value = 'i miss you<333';
}
