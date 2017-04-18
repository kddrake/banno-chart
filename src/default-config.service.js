const defaultConfig = {
  line: {
    data: {
      datasets: [{
        lineTension: 0,
        fill: true,
        backgroundColor: 'rgba(58, 174, 218, .16)',
        borderColor: 'rgb(58, 174, 218)',
        borderWidth: 2,
        pointRadius: 5,
        pointBorderColor: 'rgb(58, 174, 218)',
        pointBackgroundColor: '#ffffff',
        pointBorderWidth: 2
      }, {
        lineTension: 0,
        fill: true,
        backgroundColor: 'rgba(103, 189, 72, .16)',
        borderColor: 'rgb(103,189,72)',
        borderWidth: 2,
        pointRadius: 5,
        pointBorderColor: 'rgb(103,189,72)',
        pointBackgroundColor: '#ffffff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0)',
            drawBorder: false
          },
          ticks: {
            maxRotation: 0
          }
        }],
        yAxes: [{
          gridLines: {
            drawBorder: false
          },
          ticks: {
            padding: 20
          }
        }]
      }
    }
  }
}

module.exports = defaultConfig;
