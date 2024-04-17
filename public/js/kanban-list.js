// using apex chart in list view page
var options = {
    series: [{
    name: 'Net Task',
    type: 'bar',
    data: [44, 55, 57, 56, 61, 58, ]
  }, {
    name: 'Completed Task',
    type: 'line',
    data: [76, 85, 101, 98, 87, 105, ]
  }, {
    name: 'Inprogress Task',
    type: 'bar',
    data: [15, 41, 36, 26, 45, 48, ]
  }, {
    name: 'Pending Task',
    type: 'line',
    data: [23, 54, 45, 98, 21, 11, ]
  }],
    chart: {
    type: 'line',
    height: 290,
    stacked: false,
    toolbar:{
        show: false
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  colors: ['#4745d2', '#0ecf97', '#39afd1', '#efbd46'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: [2, 2, 2, 2],
    dashArray:[0, 4, 0,0],
   curve: ['smooth', 'smooth', 'smooth', 'smooth'],

  },
  xaxis: {
    categories: [ 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', ],
  },
//   yaxis: {
//     logBase: 10,
//     categories:[0, 1, 2, 3, 4, 5, 6]
//   },
  fill: {
    opacity: [1,1,1,1]
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return   val + " tasks"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#task"), options);
        chart.render();