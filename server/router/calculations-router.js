const express = require('express');
const calculations = require('../data/calculations-data');
const router = express.Router();

//create get route to send calculations [x]
//create a post route to obtain values [x]
//Post route should do math for operator used. +/-/*// [x]
//After post route math. Result should be stored and added to object then pushed to calculations [x]

// Here's a wonderful place to make some routes:

// GET /calculations
router.get('/', (req, res) => {
  console.log('In Get Route:')
  res.send(calculations);
});

// POST /calculations
router.post('/', (req, res) => {
  const newCalculation = req.body;
  const numOne = parseInt(req.body.numOne);
  const numTwo = parseInt(req.body.numTwo);
  const operator = req.body.operator;
  let result = null;
//  console.log('New Calc:', newCalculation);
 // console.log('Operator:', operator);
 // console.log('Num One:', numOne);
 // console.log('Num Two:', numTwo);

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

module.exports = router;