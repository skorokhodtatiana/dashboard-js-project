const Chart = require('chart.js');
let donationChart = document.getElementById("chart");

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

function getValueUser(arrChart, indexArr){
    myChart.destroy();
    moneyData.datasets[0].data = [...arrChart];
    moneyData.labels =[...indexArr];
    myChart = new Chart(donationChart, {
    type: 'line',
    data: moneyData,
    options: chartOptions
  });
}

module.exports = getValueUser;