var options = {
    series: [{
    name: 'Day',
    type: 'area',
    data: [44, 55, 57, 56, 61, 58, 63]
  }, {
    name: 'Completed',
    type: 'line',
    data: [76, 85, 101, 98, 87, 105, 91]
  }],
    chart: {
    type: 'area',
    height: 350
  },
  colors:['#4745d2', '#008ffb'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['#4745d2', '#008ffb']
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yaxis: {
    title: {
      text: '% (task)'
    }
  },
  fill: {
    opacity: 1
  },
  toolbar: false,
  tooltip: {
    y: {
      formatter: function (val) {
        return "project " + val + ""
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#overview-chart"), options);
  chart.render();