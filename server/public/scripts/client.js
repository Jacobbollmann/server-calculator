console.log('client.js is sourced!');

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
  })
  .catch((error) => {
    console.log('Error', error);
  })
};


getCalculations();