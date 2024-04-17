// start basic
var options = {
    series: [
    {
      type: 'boxPlot',
      data: [
        {
          x: 'Jan 2015',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Jan 2016',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Jan 2017',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Jan 2018',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Jan 2019',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Jan 2020',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Jan 2021',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ],
    chart: {
    type: 'boxPlot',
    height: 350,
    
  },
  title: {
    text: 'Basic BoxPlot Chart',
    align: 'left'
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: '#42a705',
        lower: '#1d34a8',
        
      }
    },
    
  }
  };

  var chart = new ApexCharts(document.querySelector("#bp-basic"), options);
  chart.render();
  ////

  //// boxplot scatter

  var options = {
    series: [
    {
      name: 'box',
      type: 'boxPlot',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: [54, 66, 69, 75, 88]
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: [43, 65, 69, 76, 81]
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: [31, 39, 45, 51, 59]
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: [39, 46, 55, 65, 71]
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: [29, 31, 35, 39, 44]
        }
      ]
    },
    {
      name: 'outliers',
      type: 'scatter',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: 32
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: 25
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: 64
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 27
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 78
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: 15
        }
      ]
    }
  ],
    chart: {
    type: 'boxPlot',
    height: 350
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: '#42a705',
        lower: '#1d34a8',
        
      }
    },
    
  },
  colors: ['#008FFB', '#FEB019'],
  title: {
    text: 'BoxPlot - Scatter Chart',
    align: 'left'
  },
  xaxis: {
    type: 'datetime',
    tooltip: {
      formatter: function(val) {
        return new Date(val).getFullYear()
      }
    }
  },
  tooltip: {
    shared: false,
    intersect: true
  }
  };

  var chart = new ApexCharts(document.querySelector("#bp-scatter"), options);
  chart.render();

  // boxplot horizontal
  var options = {
    series: [
    {
      data: [
        {
          x: 'Category A',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Category B',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Category C',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Category D',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Category E',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Category F',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Category G',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ],
    chart: {
    type: 'boxPlot',
    height: 350
  },
  title: {
    text: 'Horizontal BoxPlot Chart',
    align: 'left'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%'
    },
    boxPlot: {
      colors: {
        upper: '#e9ecef',
        lower: '#f8f9fa'
      }
    }
  },
  stroke: {
    colors: ['#6c757d']
  }
  };

  var chart = new ApexCharts(document.querySelector("#bp-horizontal"), options);
  chart.render();