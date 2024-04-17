//  strat line graph chart
//=========================================
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("line-graph-chart");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    
    
    // Generate random data
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var value = 100;
    
    function generateData() {
      value = Math.round((Math.random() * 10 - 5) + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value
      };
    }
    
    function generateDatas(count) {
      var data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.2,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));
    
    
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    // chart.set("scrollbarX", am5.Scrollbar.new(root, {
    //   orientation: "horizontal"
    // }));
    
    
    // Set data
    var data = generateDatas(1200);
    series.data.setAll(data);
    
    // watermark logo hide
    root._logo.dispose();

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()

// end line graph chart
//=========================================




// Start Line Duration on value axis
//==================================================

am5.ready(function() {

    var data = [{
      "date": "2012-01-01",
      "distance": 227,
      "townName": "New York",
      "townSize": 12,
      "latitude": 40.71,
      "duration": 408
    }, {
      "date": "2012-01-02",
      "distance": 371,
      "townName": "Washington",
      "townSize": 7,
      "latitude": 38.89,
      "duration": 482
    }, {
      "date": "2012-01-03",
      "distance": 433,
      "townName": "Wilmington",
      "townSize": 3,
      "latitude": 34.22,
      "duration": 562
    }, {
      "date": "2012-01-04",
      "distance": 345,
      "townName": "Jacksonville",
      "townSize": 3.5,
      "latitude": 30.35,
      "duration": 379
    }, {
      "date": "2012-01-05",
      "distance": 480,
      "townName": "Miami",
      "townSize": 5,
      "latitude": 25.83,
      "duration": 501
    }, {
      "date": "2012-01-06",
      "distance": 386,
      "townName": "Tallahassee",
      "townSize": 3.5,
      "latitude": 30.46,
      "duration": 443
    }, {
      "date": "2012-01-07",
      "distance": 348,
      "townName": "New Orleans",
      "townSize": 5,
      "latitude": 29.94,
      "duration": 405
    }, {
      "date": "2012-01-08",
      "distance": 238,
      "townName": "Houston",
      "townSize": 8,
      "latitude": 29.76,
      "duration": 309
    }, {
      "date": "2012-01-09",
      "distance": 218,
      "townName": "Dalas",
      "townSize": 8,
      "latitude": 32.8,
      "duration": 287
    }, {
      "date": "2012-01-10",
      "distance": 349,
      "townName": "Oklahoma City",
      "townSize": 5,
      "latitude": 35.49,
      "duration": 485
    }, {
      "date": "2012-01-11",
      "distance": 603,
      "townName": "Kansas City",
      "townSize": 5,
      "latitude": 39.1,
      "duration": 890
    }, {
      "date": "2012-01-12",
      "distance": 534,
      "townName": "Denver",
      "townSize": 9,
      "latitude": 39.74,
      "duration": 810
    }, {
      "date": "2012-01-13",
      "townName": "Salt Lake City",
      "townSize": 6,
      "distance": 425,
      "duration": 670,
      "latitude": 40.75,
      "dashLength": 8,
      "alpha": 0.4
    }, {
      "date": "2012-01-14",
      "latitude": 36.1,
      "duration": 470,
      "townName": "Las Vegas"
    }, {
      "date": "2012-01-15"
    }, {
      "date": "2012-01-16"
    }, {
      "date": "2012-01-17"
    }];
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("line-duration-value");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelY: "none"
    }));
    
    chart.zoomOutButton.set("forceHidden", true);
    
    chart.get("colors").set("step", 2);
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 50 }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    
    var distanceAxisRenderer = am5xy.AxisRendererY.new(root, {});
    distanceAxisRenderer.grid.template.set("forceHidden", true);
    var distanceAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: distanceAxisRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var latitudeAxisRenderer = am5xy.AxisRendererY.new(root, {});
    latitudeAxisRenderer.grid.template.set("forceHidden", true);
    var latitudeAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: latitudeAxisRenderer,
      forceHidden: true
    }));
    
    var durationAxisRenderer = am5xy.AxisRendererY.new(root, {
      opposite: true
    });
    durationAxisRenderer.grid.template.set("forceHidden", true);
    var durationAxis = chart.yAxes.push(am5xy.DurationAxis.new(root, {
      baseUnit:"minute",
      renderer: durationAxisRenderer,
      extraMax:0.3
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var distanceSeries = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: distanceAxis,
      valueYField: "distance",
      valueXField: "date",
      tooltip:am5.Tooltip.new(root, {
        labelText:"{valueY} miles"
      })
    }));
    
    distanceSeries.data.processor = am5.DataProcessor.new(root, {
      dateFields: ["date"],
      dateFormat: "yyyy-MM-dd"
    });
    
    var latitudeSeries = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: latitudeAxis,
      valueYField: "latitude",
      valueXField: "date",
      tooltip:am5.Tooltip.new(root, {
        labelText:"latitude: {valueY} ({townName})"
      })  
    }));
    
    latitudeSeries.strokes.template.setAll({ strokeWidth: 2 });
    
    // Add circle bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    latitudeSeries.bullets.push(function() {
      var graphics = am5.Circle.new(root, {
        strokeWidth: 2,
        radius: 5,
        stroke: latitudeSeries.get("stroke"),
        fill: root.interfaceColors.get("background"),
      });
    
      graphics.adapters.add("radius", function(radius, target) {
        return target.dataItem.dataContext.townSize;
      })
    
      return am5.Bullet.new(root, {
        sprite: graphics
      });
    });
    
    var durationSeries = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: durationAxis,
      valueYField: "duration",
      valueXField: "date",
      tooltip:am5.Tooltip.new(root, {
        labelText:"duration: {valueY.formatDuration()}"
      }) 
    }));
    
    durationSeries.strokes.template.setAll({ strokeWidth: 2 });
    
    // Add circle bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    durationSeries.bullets.push(function() {
      var graphics = am5.Rectangle.new(root, {
        width:10, 
        height:10,
        centerX:am5.p50,
        centerY:am5.p50,
        fill: durationSeries.get("stroke")
      });
    
      return am5.Bullet.new(root, {
        sprite: graphics
      });
    });
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      yAxis: distanceAxis
    }));
    
    
    distanceSeries.data.setAll(data);
    latitudeSeries.data.setAll(data);
    durationSeries.data.setAll(data);
    xAxis.data.setAll(data);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    distanceSeries.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()

// End Line Duration on value axis
//==================================================



// start area chart with time data
//==================================================

am5.ready(function() {

    // Create root and chart
    var root = am5.Root.new("area-time-chart");
    
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelY: "zoomX",
      layout: root.verticalLayout,
      pinchZoomX:true
    }));
    
    // Create Y-axis
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation:1,
      renderer: am5xy.AxisRendererY.new(root, {pan:"zoom"})
    }));
    
    // Create X-Axis
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      groupData: true,
      maxDeviation:0.5,
      baseInterval: { timeUnit: "minute", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 50, pan:"zoom"
      })
    }));
    
    // xAxis.get("dateFormats")["day"] = "MM/dd";
    // xAxis.get("periodChangeDateFormats")["day"] = "MMMM";
    
    // Generate random data
    function generateChartData() {
      var chartData = [];
      // current date
      var firstDate = new Date();
      // now set 500 minutes back
      firstDate.setMinutes(firstDate.getDate() - 500, 0, 0);
    
      // and generate 500 data items
      var visits = 500;
      for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        // add data item to the array
        chartData.push({
          date: newDate.getTime(),
          visits: visits
        });
      }
      return chartData;
    }
    var data = generateChartData();
    
    // Create series
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "visits",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}"
      })
    }));
    
    series.strokes.template.set("strokeWidth", 2);
    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.4
    });
    
    series.data.setAll(data);
    
    // Pre-zoom X axis to last hour
    series.events.once("datavalidated", function(ev, target) {
      var lastDate = new Date(data[data.length - 1].date);
      var firstDate = new Date(lastDate.getTime() - 3600000);
      xAxis.zoomToDates(firstDate, lastDate);
    })
    
    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
      xAxis: xAxis
    }));
    
    xAxis.set("tooltip", am5.Tooltip.new(root, {}));
    
    yAxis.set("tooltip", am5.Tooltip.new(root, {}));
    
    
    var scrollbarX = am5xy.XYChartScrollbar.new(root, {
      orientation: "horizontal",
      height: 50
    });
    
    chart.set("scrollbarX", scrollbarX);
    
    var sbxAxis = scrollbarX.chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "minute", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {
        opposite: false,
        strokeOpacity: 0
      })
    }));
    
    var sbyAxis = scrollbarX.chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    // watermark logo hide
    root._logo.dispose();

    var sbseries = scrollbarX.chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: sbxAxis,
      yAxis: sbyAxis,
      valueYField: "visits",
      valueXField: "date"
    }));
    sbseries.data.setAll(data);
    
    }); // end am5.ready()

// end area chart with time data
//==================================================



// start  chart gap in data
//==================================================

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chart-gap-data");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    root.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });
    
    var data = [{
      "year": "1950",
      "value": -0.307
    }, {
      "year": "1951",
      "value": -0.168
    }, {
      "year": "1952",
      "value": -0.073
    }, {
      "year": "1953",
      "value": -0.027
    }, {
      "year": "1954",
      "value": -0.251
    }, {
      "year": "1955",
      "value": -0.281
    }, {
      "year": "1956",
      "value": -0.348
    }, {
      "year": "1957",
      "value": -0.074
    }, {
      "year": "1958",
      "value": -0.011
    }, {
      "year": "1959",
      "value": -0.074
    }, {
      "year": "1960",
      "value": -0.124
    }, {
      "year": "1961",
      "value": -0.024
    }, {
      "year": "1962",
      "value": -0.022
    }, {
      "year": "1963",
      "value": 0
    }, {
      "year": "1964",
      "value": -0.296
    }, {
      "year": "1965",
      "value": -0.217
    }, {
      "year": "1966",
      "value": -0.147
    }, {
      "year": "1967"
    }, {
      "year": "1971",
      "value": -0.19
    }, {
      "year": "1972",
      "value": -0.056
    }, {
      "year": "1973",
      "value": 0.077
    }, {
      "year": "1974",
      "value": -0.213
    }, {
      "year": "1975",
      "value": -0.17
    }, {
      "year": "1976",
      "value": -0.254
    }, {
      "year": "1977",
      "value": 0.019
    }, {
      "year": "1978",
      "value": -0.063
    }, {
      "year": "1979",
      "value": 0.05
    }, {
      "year": "1980",
      "value": 0.077
    }, {
      "year": "1981",
      "value": 0.12
    }, {
      "year": "1982",
      "value": 0.011
    }, {
      "year": "1983",
      "value": 0.177
    }, {
      "year": "1984"
    }, {
      "year": "1989",
      "value": 0.104
    }, {
      "year": "1990",
      "value": 0.255
    }, {
      "year": "1991",
      "value": 0.21
    }, {
      "year": "1992",
      "value": 0.065
    }, {
      "year": "1993",
      "value": 0.11
    }, {
      "year": "1994",
      "value": 0.172
    }, {
      "year": "1995",
      "value": 0.269
    }, {
      "year": "1996",
      "value": 0.141
    }, {
      "year": "1997",
      "value": 0.353
    }, {
      "year": "1998",
      "value": 0.548
    }, {
      "year": "1999",
      "value": 0.298
    }, {
      "year": "2000",
      "value": 0.267
    }, {
      "year": "2001",
      "value": 0.411
    }, {
      "year": "2002",
      "value": 0.462
    }, {
      "year": "2003",
      "value": 0.47
    }, {
      "year": "2004",
      "value": 0.445
    }, {
      "year": "2005",
      "value": 0.47
    }];
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));
    
    var easing = am5.ease.linear;
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.5,
      baseInterval: {
        timeUnit: "year",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 50, pan:"zoom"
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 1,
      renderer: am5xy.AxisRendererY.new(root, {pan:"zoom"})
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
      minBulletDistance: 10,
      connect: false,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "year",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{valueY}"
      })
    }));
    
    series.fills.template.setAll({ fillOpacity: 0.2, visible: true });
    
    // Add series axis range for a different stroke/fill
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/#Series_axis_ranges
    var rangeDataItem = yAxis.makeDataItem({
      value: 0,
      endValue: 1000
    });
    
    var color = chart.get("colors").getIndex(3);
    
    var range = series.createAxisRange(rangeDataItem);
    
    range.strokes.template.setAll({
      stroke: color
    });
    
    range.fills.template.setAll({
      fill: color,
      fillOpacity: 0.2,
      visible: true
    });
    
    
    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: "yyyy",
      dateFields: ["year"]
    });
    
    series.data.setAll(data);
    
    series.bullets.push(function() {
      var circle = am5.Circle.new(root, {
        radius: 4,
        fill: series.get("fill"),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 8
      })
    
      circle.adapters.add("fill", function(fill, target) {
        var dataItem = circle.dataItem;
        if (dataItem.get("valueY") >= 0) {
          return color;
        }
        return fill
      })
    
      return am5.Bullet.new(root, {
        sprite: circle
      })
    });
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);
    
    // add scrollbar
    chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()

// start  chart gap in data
//==================================================


// start line chart data every second
//===================================================

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("live-line-chart-data");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Generate random data
    var value = 100;
    
    function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 1000);
      firstDate.setHours(0, 0, 0, 0);
    
      for (var i = 0; i < 50; i++) {
        var newDate = new Date(firstDate);
        newDate.setSeconds(newDate.getSeconds() + i);
    
        value += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10;
    
        chartData.push({
          date: newDate.getTime(),
          value: value
        });
      }
      return chartData;
    }
    
    var data = generateChartData();
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true,
      
    }));
    
    
    var easing = am5.ease.linear;
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.5,
      groupData: false,
      extraMax:0.1, // this adds some space in front
      extraMin:-0.1,  // this removes some space form th beginning so that the line would not be cut off
      baseInterval: {
        timeUnit: "second",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 50
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{valueY}"
      })
    }));
    
    // tell that the last data item must create bullet
    data[data.length - 1].bullet = true;
    series.data.setAll(data);
    
    
    // Create animating bullet by adding two circles in a bullet container and
    // animating radius and opacity of one of them.
    series.bullets.push(function(root, series, dataItem) {  
      // only create sprite if bullet == true in data context
      if (dataItem.dataContext.bullet) {    
        var container = am5.Container.new(root, {});
        var circle0 = container.children.push(am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000)
        }));
        var circle1 = container.children.push(am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000)
        }));
    
        circle1.animate({
          key: "radius",
          to: 20,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic),
          loops: Infinity
        });
        circle1.animate({
          key: "opacity",
          to: 0,
          from: 1,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic),
          loops: Infinity
        });
    
        return am5.Bullet.new(root, {
          locationX:undefined,
          sprite: container
        })
      }
    })
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);
    
    
    // Update data every second
    setInterval(function () {
      addData();
    }, 1000)
    
    
    function addData() {
      var lastDataItem = series.dataItems[series.dataItems.length - 1];
    
      var lastValue = lastDataItem.get("valueY");
      var newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      var lastDate = new Date(lastDataItem.get("valueX"));
      var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
      series.data.removeIndex(0);
      series.data.push({
        date: time,
        value: newValue
      })
    
      var newDataItem = series.dataItems[series.dataItems.length - 1];
      newDataItem.animate({
        key: "valueYWorking",
        to: newValue,
        from: lastValue,
        duration: 600,
        easing: easing
      });
    
      // use the bullet of last data item so that a new sprite is not created
      newDataItem.bullets = [];
      newDataItem.bullets[0] = lastDataItem.bullets[0];
      newDataItem.bullets[0].get("sprite").dataItem = newDataItem;
      // reset bullets
      lastDataItem.dataContext.bullet = false;
      lastDataItem.bullets = [];
    
    
      var animation = newDataItem.animate({
        key: "locationX",
        to: 0.5,
        from: -0.5,
        duration: 600
      });
      if (animation) {
        var tooltip = xAxis.get("tooltip");
        if (tooltip && !tooltip.isHidden()) {
          animation.events.on("stopped", function () {
            xAxis.updateTooltip();
          })
        }
      }
    }
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()
// end line chart data every second
//====================================================