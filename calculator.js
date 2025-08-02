const add = (number1, number2) => {
  return number1 + number2;
}

const subtract = (number1, number2) => {
  return number1 - number2;
}

const multiply = (number1, number2) => {
  return number1 * number2;
}

const divide = (number1, number2) => {
  return number1 / number2;
}


const add_button = document.getElementById("add")
add_button.addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result
})

const sub_button = document.getElementById("subtract")
sub_button.addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = subtract(number1, number2);
  document.getElementById("calculation-result").textContent = result
})

const mul_button = document.getElementById("multiply")
mul_button.addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = multiply(number1, number2);
  document.getElementById("calculation-result").textContent = result
})

const div_button = document.getElementById("divide")
div_button.addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = divide(number1, number2);
  document.getElementById("calculation-result").textContent = result
})