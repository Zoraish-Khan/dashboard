var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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

  var chart = new ApexCharts(document.querySelector("#pie-basic"), options);
  chart.render();

  // start simple donut
  var options2 = {
    series: [44, 55, 41, 30, 35, 45],
    chart: {
    type: 'donut',
    width: 380,
    toolbar:{
      show:true
    },
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

  var chart = new ApexCharts(document.querySelector("#pie-donut"), options2);
  chart.render();

  // start pie with image

  var options = {
    series: [44, 33, 54, 45],
    chart: {
    width: 380,
    type: 'pie',
  },
  colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
  fill: {
    type: 'image',
    opacity: 0.85,
    image: {
       src: ['./img/bg-1.svg', './img/bg-2.svg', './img/pattern-2.jpg', './img/pattern-3.jpg'],
      width: 25,
      imagedHeight: 25
    },
  },
  stroke: {
    width: 4
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#111']
    },
    background: {
      enabled: true,
      foreColor: '#fff',
      borderWidth: 0
    }
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

  var chart = new ApexCharts(document.querySelector("#pie-img"), options);
  chart.render();

  // start monochrome pie

  var options = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  theme: {
    monochrome: {
      enabled: true
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5
      }
    }
  },
  title: {
    text: "Monochrome Pie"
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex]
      return [name, val.toFixed(1) + '%']
    }
  },
  legend: {
    show: true
  }
  };

  var chart = new ApexCharts(document.querySelector("#pie-monochrome"), options);
  chart.render();

  // start gradient donut

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    width: 380,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
  title: {
    text: 'Gradient Donut with custom Start-angle'
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

  var chart = new ApexCharts(document.querySelector("#donut-gradient"), options);
  chart.render();

  // start semi donut
  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        width: 440,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10
    }
  },
  grid: {
    padding: {
      bottom: -80
    }
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

  var chart = new ApexCharts(document.querySelector("#donut-semi"), options);
  chart.render();

  // start update donut

  var options = {
    series: [44, 55, 13, 33],
    chart: {
    width: 380,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  }
  };

  var chart = new ApexCharts(document.querySelector("#donut-update"), options);
  chart.render();


  function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector("#randomize").addEventListener("click", function() {
  chart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function() {
  chart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function() {
  chart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function() {
  chart.updateSeries(reset())
})

// start pattern donut

var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    width: 380,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
  type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Favourite Movie Type"
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

  var chart = new ApexCharts(document.querySelector("#donut-pattern"), options);
  chart.render();