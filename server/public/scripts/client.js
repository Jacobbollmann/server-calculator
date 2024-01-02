console.log('client.js is sourced!');

//Global variables for inputs + calculation history
const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const mostRecentHistory = document.querySelector('#mostRecent');
const allHistory = document.querySelector('#history');

//Store selected operator value
let operator = null;

//Get operator value
function operatorValue(event) {
  event.preventDefault();
  operator = event.target.innerHTML;
  console.log('Updated:', operator);
};

//Get route to render most recent calculation and all calc history [x]
//Post route to send num values and operator [x]
//Equal button when clicked sends post route [x]
//C button clears inputs [x]

//Get route
function getCalculations() {
  console.log('In get calulations route:')

  axios({
    method: 'GET',
    url: '/calculations',
  })
  .then((response) => {
    const calculations = response.data;
    console.log(calculations);
    mostRecentHistory.innerHTML = '';
    allHistory.innerHTML = '';

    for ( item of calculations ) {

      mostRecentHistory.innerHTML = ` 
      <p>${item.result}</p> 
      `

      allHistory.innerHTML += `
    <li>${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}</li>
      `
    }
  })
  .catch((error) => {
    console.log('Error', error);
  })
};

//POST route
function handleCalc(event) {
  event.preventDefault();
  
  const newCalc = {
    numOne: numOne.value,
    numTwo: numTwo.value,
    operator: operator,
  }

  axios({
    method: 'POST',
    url: '/calculations',
    data: newCalc,
  })
  .then((response) => {
    console.log(newCalc);
    getCalculations();
  })
  .catch((error) => {
    console.log('ERROR', error);
  })
};

//clear input values
function inputsClear() {
  numOne.value = '';
  numTwo.value = '';
};

getCalculations();