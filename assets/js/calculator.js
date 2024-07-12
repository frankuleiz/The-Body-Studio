/* Calculat BMI */

function calculateBMI() {
  const heightElement = document.getElementById('height');
  const weightElement = document.getElementById('kg');
  const outputElement = document.getElementById('bmi-output');

  const height = parseFloat(heightElement.value) / 100;
  const weight = parseFloat(weightElement.value);
  const bmi = weight / (height * height);

  let outputMessage = '';

  if (isNaN(bmi)) {
      outputMessage = 'Please enter valid height and weight values!';
  } else if (bmi < 18.5) {
      outputMessage = `Your BMI is ${bmi.toFixed(2)} and you are underweight 😟`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
      outputMessage = `Your BMI is ${bmi.toFixed(2)} and you are normal weight 🙂`;
  } else if (bmi >= 24.9 && bmi < 29.9) {
      outputMessage = `Your BMI is ${bmi.toFixed(2)} and you are overweight 😟`;
  } else {
      outputMessage = `Your BMI is ${bmi.toFixed(2)} and you are obese 😨`;
  }

  outputElement.innerHTML = outputMessage;
}