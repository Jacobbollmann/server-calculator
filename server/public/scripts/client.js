console.log('client.js is sourced!');
//Get route to render most recent calculation and all calc history []
//Post route to send num values and operator []
//Equal button when clicked sends post route
//C button clears inputs

function getCalculations() {
  console.log('In get calulations route:')

  axios({
    method: 'GET',
    url: '/calculations',
  })
  .then((response) => {
    const mostRecentHistory = document.querySelector('#mostRecent');
    const allHistory = document.querySelector('#history');
    const calculations = response.data;
    console.log(calculations);
    mostRecentHistory.innerHTML = '';
    allHistory.innerHTML = '';

    for ( item of calculations ) {
      console.log('Item loop', item);
      console.log('calculations loop', calculations);

      mostRecentHistory.innerHTML = `
        <p>${item.result}</p>
      `

      allHistory.innerHTML += `
    <p>${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}</p>
      `
    }
  })
  .catch((error) => {
    console.log('Error', error);
  })
};


getCalculations();