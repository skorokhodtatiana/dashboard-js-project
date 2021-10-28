const Chart = require('chart.js');
let donationChart = document.getElementById("chart");


// const ctx = document.getElementById('myChart');
// let myChart = new Chart(donationChart, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: 'data',
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 // 'rgba(54, 162, 235, 0.2)',
//                 // 'rgba(255, 206, 86, 0.2)',
//                 // 'rgba(75, 192, 192, 0.2)',
//                 // 'rgba(153, 102, 255, 0.2)',
//                 // 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 // 'rgba(54, 162, 235, 1)',
//                 // 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

let moneyData = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [{
      label: "Donations ($)",
      data: [0, 20, 4, 9, 14, 6],
      lineTension: 0.4,
      fill: false,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
    }]
  };

  let chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };

  let myChart = new Chart(donationChart, {
    type: 'line',
    data: moneyData,
    options: chartOptions
  });

function getValueUser(arrChart){
    myChart.destroy();

    let donationChart = document.getElementById("chart");
    moneyData.datasets[0].data = [...arrChart];

    myChart = new Chart(donationChart, {
    type: 'line',
    data: moneyData,
    options: chartOptions
  });
}

module.exports = getValueUser;