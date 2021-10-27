//let array = [5, 6, 18, 10, 4, 2, 8, 25];
const Chart = require('chart.js');
let moneyChart = document.getElementById("chart");

//Chart.defaults.global.defaultFontFamily = "Lato";
//Chart.defaults.global.defaultFontSize = 18;

let moneyData = {
  labels: ["Oct.1", "Oct.2", "Oct.3", "Oct.4", "Oct.5", "Oct.6", "Oct.7", "Oct.8", "Oct.9", "Oct.10"],
  datasets: [{
    label: "Donations ($)",
    data: [0, 59, 75, 20, 20, 55, 40, 56, 15, 50],
    lineTension: 0.4,
    fill: false,
    borderColor: '#558eff',
    backgroundColor: '#FFFFFF',
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

let lineChart = new Chart(moneyChart, {
  type: 'line',
  data: moneyData,
  options: chartOptions
});