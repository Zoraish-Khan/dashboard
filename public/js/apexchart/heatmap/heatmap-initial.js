
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
// start heatmap basic
var options = {
    series: [{
    name: 'Metric1',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric2',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric3',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric4',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric5',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric6',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric7',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric8',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric9',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  }
  ],
    chart: {
    height: 350,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#008FFB"],
  title: {
    text: 'HeatMap Chart (Single color)'
  },
  };

  var chart = new ApexCharts(document.querySelector("#heatmap-basic"), options);
  chart.render();

  /// multiple colors
  function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
  
  var data = [
    {
      name: 'W1',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W2',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W3',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W4',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W5',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W6',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W7',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W8',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W9',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W10',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W11',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W12',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W13',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W14',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W15',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    }
  ]
  
  data.reverse()
  
  var colors = ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794','#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29']
  
  colors.reverse()
  
  // start multiple color chart
  var options = {
    series: data,
    chart: {
    height: 450,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false
  },
  colors: colors,
  xaxis: {
    type: 'category',
    categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
  },
  title: {
    text: 'HeatMap Chart (Different color shades for each series)'
  },
  grid: {
    padding: {
      right: 20
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#heatmap-multi-color"), options);
  chart.render();

  // start heatmap color range
  var options = {
    series: [{
      name: 'Jan',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Feb',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Mar',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Apr',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'May',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jun',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jul',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Aug',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Sep',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    }
  ],
    chart: {
    height: 350,
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 0,
      useFillColorAsStroke: true,
      colorScale: {
        ranges: [{
            from: -30,
            to: 5,
            name: 'low',
            color: '#00A100'
          },
          {
            from: 6,
            to: 20,
            name: 'medium',
            color: '#128FD9'
          },
          {
            from: 21,
            to: 45,
            name: 'high',
            color: '#FFB200'
          },
          {
            from: 46,
            to: 55,
            name: 'extreme',
            color: '#FF0000'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1
  },
  title: {
    text: 'HeatMap Chart with Color Range'
  },
  };

  var chart = new ApexCharts(document.querySelector("#heatmap-color-range"), options);
  chart.render();

  // heatmap colors scale flipped

  function generateData3(count3, yrange3) {
    var i = 0;
    var series = [];
    while (i < count3) {
      var y = Math.floor(Math.random() * (yrange3.max - yrange3.min + 1)) + yrange3.min;
  
      series.push(y);
      i++;
    }
    return series;
  }
  
  var data3 = [{
      name: '10:00',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: '10:30',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: '11:00',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: '11:30',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: '12:00',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: '12:30',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: '13:00',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: '13:30',
      data: generateData3(15, {
        min: 0,
        max: 90
      })
    }
  ]
  
  data3.reverse();


  var options = {
    series: data3,
    chart: {
    height: 350,
    type: 'heatmap'
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    heatmap: {
      colorScale: {
        inverse: true
      }
    }
  },
  colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
    '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
  ],
  xaxis: {
    type: 'category',
    categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15']
  },
  title: {
    text: 'Color Scales flipped Vertically'
  },
  };

  var chart = new ApexCharts(document.querySelector("#heatmap-flipped"), options);
  chart.render();

  // start rounded heatmap
  function generateData4(count4, yrange4) {
    var i = 0;
    var series = [];
    while (i < count4) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange4.max - yrange4.min + 1)) + yrange4.min;
  
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  };

  var options = {
    series: [{
    name: 'Metric1',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric2',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric3',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric4',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric5',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric6',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric7',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric8',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric8',
    data: generateData4(20, {
      min: 0,
      max: 90
    })
  }
  ],
    chart: {
    height: 350,
    type: 'heatmap',
  },
  stroke: {
    width: 0
  },
  plotOptions: {
    heatmap: {
      radius: 30,
      
      enableShades: false,
      colorScale: {
        ranges: [{
            from: 0,
            to: 50,
            color: '#008FFB'
          },
          {
            from: 51,
            to: 100,
            color: '#00E396'
          },
        ],
      },
  
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff']
    }
  },
  xaxis: {
    type: 'category',
  },
  title: {
    text: 'Rounded (Range without Shades)'
  },
  };

  var chart = new ApexCharts(document.querySelector("#heatmap-rounded"), options);
  chart.render();
