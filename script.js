// adding brain😆 to my website.

function processData() {
    const height = document.getElementById('height-input').value;;
    const weight = document.getElementById('weight-input').value ;
    // get the elements this is cool.
const output = document.getElementById('output-area');
const Bmi = document.getElementById('bmi-output');
const badge = document.getElementById('status-badge');
const feedback = document.getElementById('feedback')
;


if(!height || !weight) {
    alert('Please enter height and weight. ');
    return;
}
const heightInM = parseFloat(height) / 100;
const weightInKg = parseFloat(weight)
;

// formula of bmi bro..
const bmiFormula = (weightInKg / (heightInM * heightInM)).toFixed(1);

let category = "";
let color = "";
let message = "";

if(bmiFormula < 18.5) {
    category = "UnderWeight";
    color = "rgb(75, 151, 244)";
    message = "Bro eat more you are underweighted.";
}
  else if (bmiFormula >= 18.5 && bmiFormula <= 24.9) {
    category = "Normal (Fit)";
    color = "rgb(44, 206, 111)";
    message = "You are Prefect ! maintain it bro";
  }
         else if (bmiFormula >= 25 && bmiFormula <= 29.9) {
            category = "Overweight";
        color = "rgb(230, 187, 13)";
        message = "You are overweighted, fat. Do workout !" ;
        ;
         }

         else {
            category = "Obesity";
            color = "rgb(228, 70, 52)";
            message = "You are too fat, obesity."
         }

         output.classList.add('active');
         Bmi.innerText = bmiFormula;
         Bmi.style.color = color;

    badge.innerText = category;
    badge.style.backgroundColor = color;
    badge.style.color = "white";

feedback.innerText = message;

    console.log(`BMI Test Complete: BMI ${bmiFormula} - ${category}`);
        }