var options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
    type: 'polarArea',
    height: 360,
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#polar-basic"), options);
  chart.render();

  // start ploar area
  var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
        height: 400,
    type: 'polarArea'
  },
  labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#polar-area"), options);
  chart.render();