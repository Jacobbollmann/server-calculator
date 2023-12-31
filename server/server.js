const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = []

//create get route to send calculations [x]
//create a post route to obtain values [x]
//Post route should do math for operator used. +/-/*// [x]
//After post route math. Result should be stored and added to object then pushed to calculations [x]

// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('In Get Route:')
  res.send(calculations);
});

// POST /calculations
app.post('/calculations', (req, res) => {
  const newCalculation = req.body;
  const numOne = parseInt(req.body.numOne);
  const numTwo = parseInt(req.body.numTwo);
  const operator = req.body.operator;
//  console.log('New Calc:', newCalculation);
 // console.log('Operator:', operator);
 // console.log('Num One:', numOne);
 // console.log('Num Two:', numTwo);

  let result = null;
  if ( operator === '+' ) {
    result = numOne + numTwo
  } else if ( operator === '-' ) {
    result = numOne - numTwo
  } else if ( operator === '*' ) {
    result = numOne * numTwo
  } else if ( operator === '/' ) {
    result = numOne / numTwo
  } else {
    res.status(400).send('Error with calculation');
    return
  };
  //console.log(result);

  newCalculation.result = result;
  calculations.push(newCalculation);
  res.status(201).send('Post route successful');
});

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
