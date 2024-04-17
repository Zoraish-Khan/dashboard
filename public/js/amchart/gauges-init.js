// start gauges with band
//=========================================================

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("gauges-band");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    var chart = root.container.children.push(am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      startAngle: 160,
      endAngle: 380,
    }));
    
    
    // Create axis and its renderer
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
    var axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: -40
    });
    
    axisRenderer.grid.template.setAll({
      stroke: root.interfaceColors.get("background"),
      visible: true,
      strokeOpacity: 0.8
    });
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: -40,
      max: 100,
      strictMinMax: true,
      renderer: axisRenderer
    }));
    
    
    // Add clock hand
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
    var axisDataItem = xAxis.makeDataItem({});
    
    var clockHand = am5radar.ClockHand.new(root, {
      pinRadius: am5.percent(20),
      radius: am5.percent(100),
      bottomWidth: 40
    })
    
    var bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
      sprite: clockHand
    }));
    
    xAxis.createAxisRange(axisDataItem);
    
    var label = chart.radarContainer.children.push(am5.Label.new(root, {
      fill: am5.color(0xffffff),
      centerX: am5.percent(50),
      textAlign: "center",
      centerY: am5.percent(50),
      fontSize: "3em"
    }));
    
    axisDataItem.set("value", 50);
    bullet.get("sprite").on("rotation", function () {
      var value = axisDataItem.get("value");
      var text = Math.round(axisDataItem.get("value")).toString();
      var fill = am5.color(0x000000);
      xAxis.axisRanges.each(function (axisRange) {
        if (value >= axisRange.get("value") && value <= axisRange.get("endValue")) {
          fill = axisRange.get("axisFill").get("fill");
        }
      })
    
      label.set("text", Math.round(value).toString());
    
      clockHand.pin.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
      clockHand.hand.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
    });
    
    setInterval(function () {
      axisDataItem.animate({
        key: "value",
        to: Math.round(Math.random() * 140 - 40),
        duration: 500,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }, 2000)
    
    chart.bulletsContainer.set("mask", undefined);
    
    
    // Create axis ranges bands
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
    var bandsData = [{
      title: "Unsustainable",
      color: "#ee1f25",
      lowScore: -40,
      highScore: -20
    }, {
      title: "Volatile",
      color: "#f04922",
      lowScore: -20,
      highScore: 0
    }, {
      title: "Foundational",
      color: "#fdae19",
      lowScore: 0,
      highScore: 20
    }, {
      title: "Developing",
      color: "#f3eb0c",
      lowScore: 20,
      highScore: 40
    }, {
      title: "Maturing",
      color: "#b0d136",
      lowScore: 40,
      highScore: 60
    }, {
      title: "Sustainable",
      color: "#54b947",
      lowScore: 60,
      highScore: 80
    }, {
      title: "High Performing",
      color: "#0f9747",
      lowScore: 80,
      highScore: 100
    }];
    
    am5.array.each(bandsData, function (data) {
      var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));
    
      axisRange.setAll({
        value: data.lowScore,
        endValue: data.highScore
      });
    
      axisRange.get("axisFill").setAll({
        visible: true,
        fill: am5.color(data.color),
        fillOpacity: 0.8
      });
    
      axisRange.get("label").setAll({
        text: data.title,
        inside: true,
        radius: 15,
        fontSize: "0.9em",
        fill: root.interfaceColors.get("background")
      });
    });
    
    // watermark logo hide
    root._logo.dispose();
    
    // Make stuff animate on load
    chart.appear(1000, 100);
    
    }); // end am5.ready()
// end gauges with band
//=========================================================



// start gauge with gradient
//=========================================

am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("g-w-g");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root),
    
  ]);
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(
    am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      startAngle: 180,
      endAngle: 360,
      

    })
  );

  
  // Create axis and its renderer
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
  var axisRenderer = am5radar.AxisRendererCircular.new(root, {
    innerRadius: -10,
    strokeOpacity: 1,
    strokeWidth: 15,
    strokeGradient: am5.LinearGradient.new(root, {
      rotation: 0,
      stops: [
        { color: am5.color(0x19d228) },
        { color: am5.color(0xf4fb16) },
        { color: am5.color(0xf6d32b) },
        { color: am5.color(0xfb7116) }
      ]
    })
  });
 
  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      max: 100,
      strictMinMax: true,
      renderer: axisRenderer,
      
    })
  );
  
  // Add clock hand
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
  var axisDataItem = xAxis.makeDataItem({});
  axisDataItem.set("value", 0);
  
  
  var bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
    sprite: am5radar.ClockHand.new(root, {
      radius: am5.percent(99),
      
    })

    

  }));
  
  xAxis.createAxisRange(axisDataItem);
  
  axisDataItem.get("grid").set("visible", false);
  
  setInterval(() => {
    axisDataItem.animate({
      key: "value",
      to: Math.round(Math.random() * 100),
      duration: 800,
      easing: am5.ease.out(am5.ease.cubic),
      
    });
  }, 2000);

  // watermark logo hide
  root._logo.dispose();

  // Make stuff animate on load
  chart.appear(1000, 100);
  
  }); // end am5.ready()

// end gauge with gradient
//=======================================


// start clock
//=======================================
am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("amchart-clock");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(am5radar.RadarChart.new(root, {
    panX: false,
    panY: false
  }));
  
  
  // Create axis and its renderer
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
  var axisRenderer = am5radar.AxisRendererCircular.new(root, {
    innerRadius: -10,
    strokeOpacity: 1,
    strokeWidth: 8
  });
  
  var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    max: 12,
    strictMinMax: true,
    renderer: axisRenderer,
    maxPrecision: 0
  }));
  
  // hides 0 value
  axisRenderer.labels.template.setAll({
    minPosition: 0.02,
    textType: "adjusted",
    inside: true,
    radius: 25,
    fill:am5.color(0x4745d2)
  });
  axisRenderer.grid.template.set("strokeOpacity", 1);
  
  
  // Add clock hands
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
  
  // hour
  var hourDataItem = xAxis.makeDataItem({});
  
  var hourHand = am5radar.ClockHand.new(root, {
    radius: am5.percent(50),
    topWidth: 12,
    bottomWidth: 12,
    pinRadius: 8,
    layer:5
  })
  
  hourDataItem.set("bullet", am5xy.AxisBullet.new(root, {
    sprite: hourHand
  }));
  
  xAxis.createAxisRange(hourDataItem);
  
  hourDataItem.get("grid").set("visible", false);
  
  // minutes
  var minutesDataItem = xAxis.makeDataItem({});
  
  var minutesHand = am5radar.ClockHand.new(root, {
    radius: am5.percent(80),
    topWidth: 8,
    bottomWidth: 8,
    pinRadius: 7,
    layer:5
  })
  
  minutesDataItem.set("bullet", am5xy.AxisBullet.new(root, {
    sprite: minutesHand
  }));
  
  xAxis.createAxisRange(minutesDataItem);
  
  minutesDataItem.get("grid").set("visible", false);
  
  // seconds
  var secondsDataItem = xAxis.makeDataItem({});
  
  var secondsHand = am5radar.ClockHand.new(root, {
    radius: am5.percent(80),
    topWidth: 3,
    bottomWidth: 3,
    pinRadius: 3,
    layer:5
  })
  
  secondsHand.hand.set("fill", am5.color(0xff0000));
  secondsHand.pin.set("fill", am5.color(0xff0000));
  
  secondsDataItem.set("bullet", am5xy.AxisBullet.new(root, {
    sprite: secondsHand
  }));
  
  xAxis.createAxisRange(secondsDataItem);
  
  secondsDataItem.get("grid").set("visible", false);
  
  
  
  setInterval(function() {
    updateHands(300)
  }, 1000);
  
  function updateHands(duration) {
    // get current date
    var date = new Date();
    var hours = date.getHours();
    
    if(hours > 12){
      hours -= 12;
    }  
    
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    // set hours
    hourDataItem.set("value", hours + minutes / 60 + seconds / 60 / 60);
    // set minutes
    minutesDataItem.set("value", 12 * (minutes + seconds / 60) / 60);
    // set seconds
    var current = secondsDataItem.get("value");
    var value = 12 * date.getSeconds() / 60;
    // otherwise animation will go from 59 to 0 and the hand will move backwards
    if (value == 0) {
      value = 11.999;
    }
    // if it's more than 11.99, set it to 0
    if (current > 11.99) {
      current = 0;
    }
    secondsDataItem.animate({
      key: "value",
      from: current,
      to: value,
      duration: duration
    });
  }
  
  updateHands(0);
  

  // watermark logo hide
  root._logo.dispose();

  // Make stuff animate on load
  chart.appear(1000, 100);
  
  // update on visibility
  document.addEventListener("visibilitychange", function() {
    updateHands(0)
  });
  
  }); // end am5.ready()

// end clock
//=======================================




// start compass
//=======================================

am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("compass");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(
    am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      startAngle: -90,
      endAngle: 270
    })
  );
  
  // Create axis and its renderer
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
  var axisRenderer = am5radar.AxisRendererCircular.new(root, {
    strokeOpacity: 1,
    strokeWidth: 5,
    minGridDistance: 10
  });
  axisRenderer.ticks.template.setAll({
    forceHidden: true
  });
  axisRenderer.grid.template.setAll({
    forceHidden: true
  });
  
  axisRenderer.labels.template.setAll({ forceHidden: true });
  
  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      max: 360,
      strictMinMax: true,
      renderer: axisRenderer
    })
  );
  
  // Add clock hand
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
  // north
  var axisDataItemN = xAxis.makeDataItem({ value: 0 });
  
  var clockHandN = am5radar.ClockHand.new(root, {
    pinRadius: 0,
    radius: am5.percent(90),
    bottomWidth: 40
  });
  
  clockHandN.hand.set("fill", am5.color(0xff0000));
  // do not change angle at all
  clockHandN.adapters.add("rotation", function () {
    return -90;
  });
  
  axisDataItemN.set(
    "bullet",
    am5xy.AxisBullet.new(root, {
      sprite: clockHandN
    })
  );
  
  xAxis.createAxisRange(axisDataItemN);
  
  //south
  var axisDataItemS = xAxis.makeDataItem({ value: 180 });
  
  var clockHandS = am5radar.ClockHand.new(root, {
    pinRadius: 0,
    radius: am5.percent(90),
    bottomWidth: 40
  });
  
  // do not change angle at all
  clockHandS.adapters.add("rotation", function () {
    return 90;
  });
  
  axisDataItemS.set(
    "bullet",
    am5xy.AxisBullet.new(root, {
      sprite: clockHandS
    })
  );
  
  xAxis.createAxisRange(axisDataItemS);
  
  function createLabel(text, value, tickOpacity) {
    var axisDataItem = xAxis.makeDataItem({ value: value });
    xAxis.createAxisRange(axisDataItem);
    var label = axisDataItem.get("label");
    label.setAll({
      text: text,
      forceHidden: false,
      inside: true,
      radius: 20
    });
  
    var tick = axisDataItem
      .get("tick")
      .setAll({
        forceHidden: false,
        strokeOpacity: tickOpacity,
        length: 12 * tickOpacity,
        visible: true,
        inside: true
      });
  }
  
  createLabel("N", 0, 1);
  createLabel("NE", 45, 1);
  createLabel("E", 90, 1);
  createLabel("SE", 135, 1);
  createLabel("S", 180, 1);
  createLabel("SW", 225, 1);
  createLabel("W", 270, 1);
  createLabel("NW", 315, 1);
  
  for (var i = 0; i < 360; i = i + 5) {
    createLabel("", i, 0.5);
  }
  
  setInterval(function () {
    var newAngle = Math.random() * 360;
    chart.animate({
      key: "startAngle",
      to: newAngle,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
    chart.animate({
      key: "endAngle",
      to: newAngle + 360,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
    axisDataItemN.animate({
      key: "value",
      to: am5.math.normalizeAngle(-90 - newAngle),
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
    axisDataItemS.animate({
      key: "value",
      to: am5.math.normalizeAngle(90 - newAngle),
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
  }, 2000);
  
  // watermark logo hide
  root._logo.dispose();

  // Make stuff animate on load
  chart.appear(1000, 100);
  
  }); // end am5.ready()

// end compass
//=======================================



// start two axis gauge
//=======================================

am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("two-axis-gauge");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    startAngle: 180,
    endAngle: 360,
    radius: am5.percent(90),
    layout: root.verticalLayout
  }));
  
  
  // Colors
  var colors = am5.ColorSet.new(root, {
    step: 2
  });
  
  
  // Measurement #1
  
  // Axis
  var color1 = colors.next();
  
  var axisRenderer1 = am5radar.AxisRendererCircular.new(root, {
    radius: -10,
    stroke: color1,
    strokeOpacity: 1,
    strokeWidth: 6,
    inside: true
  });
  
  axisRenderer1.grid.template.setAll({
    forceHidden: true
  });
  
  axisRenderer1.ticks.template.setAll({
    stroke: color1,
    visible: true,
    length: 10,
    strokeOpacity: 1,
    inside: true
  });
  
  axisRenderer1.labels.template.setAll({
    radius: 15,
    inside: true
  });
  
  var xAxis1 = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    max: 160,
    strictMinMax: true,
    renderer: axisRenderer1
  }));
  
  
  // Label
  var label1 = chart.seriesContainer.children.push(am5.Label.new(root, {
    fill: am5.color(0xffffff),
    x: -100,
    y: -60,
    width: 100,
    centerX: am5.percent(50),
    textAlign: "center",
    centerY: am5.percent(50),
    fontSize: "2em",
    text: "0",
    background: am5.RoundedRectangle.new(root, {
      fill: color1
    })
  }));
  
  // Add clock hand
  var axisDataItem1 = xAxis1.makeDataItem({
    value: 0,
    fill: color1,
    name: "Measurement #1"
  });
  
  var clockHand1 = am5radar.ClockHand.new(root, {
    pinRadius: 14,
    radius: am5.percent(98),
    bottomWidth: 10
  });
  
  clockHand1.pin.setAll({
    fill: color1
  });
  
  clockHand1.hand.setAll({
    fill: color1
  });
  
  var bullet1 = axisDataItem1.set("bullet", am5xy.AxisBullet.new(root, {
    sprite: clockHand1
  }));
  
  xAxis1.createAxisRange(axisDataItem1);
  
  axisDataItem1.get("grid").set("forceHidden", true);
  axisDataItem1.get("tick").set("forceHidden", true);
  
  
  // Measurement #2
  
  // Axis
  var color2 = colors.next();
  
  var axisRenderer2 = am5radar.AxisRendererCircular.new(root, {
    //innerRadius: -40,
    stroke: color2,
    strokeOpacity: 1,
    strokeWidth: 6
  });
  
  axisRenderer2.grid.template.setAll({
    forceHidden: true
  });
  
  axisRenderer2.ticks.template.setAll({
    stroke: color2,
    visible: true,
    length: 10,
    strokeOpacity: 1
  });
  
  axisRenderer2.labels.template.setAll({
    radius: 15
  });
  
  var xAxis2 = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    max: 240,
    strictMinMax: true,
    renderer: axisRenderer2
  }));
  
  
  // Label
  var label2 = chart.seriesContainer.children.push(am5.Label.new(root, {
    fill: am5.color(0xffffff),
    x: 100,
    y: -60,
    width: 100,
    centerX: am5.percent(50),
    textAlign: "center",
    centerY: am5.percent(50),
    fontSize: "2em",
    text: "0",
    background: am5.RoundedRectangle.new(root, {
      fill: color2
    })
  }));
  
  
  // Add clock hand
  var axisDataItem2 = xAxis2.makeDataItem({
    value: 0,
    fill: color2,
    name: "Measurement #2"
  });
  
  var clockHand2 = am5radar.ClockHand.new(root, {
    pinRadius: 10,
    radius: am5.percent(98),
    bottomWidth: 10
  });
  
  clockHand2.pin.setAll({
    fill: color2
  });
  
  clockHand2.hand.setAll({
    fill: color2
  });
  
  var bullet2 = axisDataItem2.set("bullet", am5xy.AxisBullet.new(root, {
    sprite: clockHand2
  }));
  
  xAxis2.createAxisRange(axisDataItem2);
  
  axisDataItem2.get("grid").set("forceHidden", true);
  axisDataItem2.get("tick").set("forceHidden", true);
  
  
  // Legend
  var legend = chart.children.push(am5.Legend.new(root, {
    x: am5.p50,
    centerX: am5.p50
  }));
  legend.data.setAll([axisDataItem1, axisDataItem2])
  
  
  // Animate values
  setInterval(function () {
    var value1 = Math.round(Math.random() * 160);
    axisDataItem1.animate({
      key: "value",
      to: value1,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
    
    label1.set("text", value1);
    
    var value2 = Math.round(Math.random() * 240);
    axisDataItem2.animate({
      key: "value",
      to: value2,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
    
    label2.set("text", value2);
  }, 2000)
  
  // chart.bulletsContainer.set("mask", undefined);
  
  
  // // Create axis ranges bands
  // // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
  // var bandsData = [{
  //   title: "Unsustainable",
  //   color: "#ee1f25",
  //   lowScore: -40,
  //   highScore: -20
  // }, {
  //   title: "Volatile",
  //   color: "#f04922",
  //   lowScore: -20,
  //   highScore: 0
  // }, {
  //   title: "Foundational",
  //   color: "#fdae19",
  //   lowScore: 0,
  //   highScore: 20
  // }, {
  //   title: "Developing",
  //   color: "#f3eb0c",
  //   lowScore: 20,
  //   highScore: 40
  // }, {
  //   title: "Maturing",
  //   color: "#b0d136",
  //   lowScore: 40,
  //   highScore: 60
  // }, {
  //   title: "Sustainable",
  //   color: "#54b947",
  //   lowScore: 60,
  //   highScore: 80
  // }, {
  //   title: "High Performing",
  //   color: "#0f9747",
  //   lowScore: 80,
  //   highScore: 100
  // }];
  
  // am5.array.each(bandsData, function (data) {
  //   var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));
  
  //   axisRange.setAll({
  //     value: data.lowScore,
  //     endValue: data.highScore
  //   });
  
  //   axisRange.get("axisFill").setAll({
  //     visible: true,
  //     fill: am5.color(data.color),
  //     fillOpacity: 0.8
  //   });
  
  //   axisRange.get("label").setAll({
  //     text: data.title,
  //     inside: true,
  //     radius: 15,
  //     fontSize: "0.9em",
  //     fill: root.interfaceColors.get("background")
  //   });
  // });
  
  // watermark logo hide
  root._logo.dispose();

  // Make stuff animate on load
  chart.appear(1000, 100);
  
  }); // end am5.ready()

// end two axis gauge
//=======================================