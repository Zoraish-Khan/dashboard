var options = {

    series: [{

        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63,]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91,]
    },
    ],
    chart: {
        type: 'bar',
        height: 150,
        toolbar: {
            show: false,
        },
    },
    colors: ['#ffffff', '#00e496'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            //endingShape: 'rounded',
            borderRadius: 4,

        },

    },

    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S',],
        labels: {
            style: {
                colors: 'rgba(255, 255, 255, 80%)'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: 'rgba(255, 255, 255, 80%)'
            }
        }
    },
    legend: {
        labels: {
            colors: '#fff'
        }
    },
    fill: {
        opacity: [.8, 1]
    },
    grid: {
        borderColor: 'rgba(255, 255, 255, 20%)',
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            },

        }
    }
};

var chart = new ApexCharts(document.querySelector("#columnchart2"), options);
chart.render();


var options = {
    series: [{
        name: 'Social Compaign',
        type: "area",
        data: [10, 40, 28, 51, 42, 110, 40, 100, 60, 80, 40, 83]
    },
    {
        name: 'Google Ads',
        type: "line",
        data: [111, 32, 95, 62, 94, 152, 111, 61, 97, 102, 139, 143]
    },
    ],
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        dashArray: [2, 6],
        width: [2, 2]
    },
    markers: {
        size: [0, 4],
        strokeWidth: 2,
        hover: {
            size: 4
        }
    },
    fill: {
        //opacity: [.5, 1, 0],

        type: ['gradient', 'color'],
        gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: [], // optional, if not defined - uses the shades of same color in series
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: [.15, .21, 0],
            stops: [0, 100, 60],
            colorStops: []
        }
    },
    dataLabels: {
        enabled: false
    },

    xaxis: {
        //type: 'datetime',
        categories: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    tooltip: {
        x: {
            format: 'Month'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#index-3area-chart"), options);
chart.render();