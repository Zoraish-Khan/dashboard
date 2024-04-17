var options2 = {
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    fill: {
        colors: ["#f1b44c"]
    },
    chart: {
        type: "bar",
        width: 70,
        height: 40,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        bar: {
            columnWidth: "50%"
        }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return "";
                }
            }
        },
        marker: {
            show: !1
        }
    }
},
    chart2 = new ApexCharts(document.querySelector("#deal-chart"), options2);
chart2.render();

var options2 = {
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    fill: {
        colors: ["#4745d2"]
    },
    chart: {
        type: "bar",
        width: 70,
        height: 40,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        bar: {
            columnWidth: "50%"
        }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return "";
                }
            }
        },
        marker: {
            show: !1
        }
    }
},
    chart2 = new ApexCharts(document.querySelector("#income-chart"), options2);
chart2.render();


var options2 = {
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    // fill: {
    //     colors: ["#4745d2"],
    // },
    chart: {
        type: "area",
        width: 70,
        height: 40,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        bar: {
            columnWidth: "50%"
        }
    },
    stroke: {
        width: 2,
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return "";
                }
            }
        },
        marker: {
            show: !1
        }
    }
},
    chart2 = new ApexCharts(document.querySelector("#book-revenue-chart"), options2);
chart2.render();