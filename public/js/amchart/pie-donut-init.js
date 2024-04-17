// start pie chart
//=================================================================
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("pie-amchart");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 250
      })
    );
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270
      })
    );
    
    series.states.create("hidden", {
      endAngle: -70
    });
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([{
      category: "Lithuania",
      value: 501.9
    }, {
      category: "Czechia",
      value: 301.9
    }, {
      category: "Ireland",
      value: 201.1
    }, {
      category: "Germany",
      value: 165.8
    }, {
      category: "Australia",
      value: 139.9
    }, {
      category: "Austria",
      value: 128.3
    }, {
      category: "UK",
      value: 99
    }]);
    
    series.appear(1000, 100);
    
    }); // end am5.ready()

    // end pie chart
//=================================================================




 // start 2 level pie chart
//=================================================================
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("tlp-chart");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    // start and end angle must be set both for chart and series
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout
      })
    );
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    var series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
        radius: am5.percent(100),
        innerRadius: am5.percent(80)
      })
    );
    
    series0.states.create("hidden", {
      startAngle: 180,
      endAngle: 180
    });
    
    series0.slices.template.setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0,
      templateField: "settings"
    });
    
    series0.slices.template.states.create("hover", { scale: 1 });
    series0.slices.template.states.create("active", { shiftRadius:0 });
    
    series0.labels.template.setAll({
      templateField: "settings"
    });
    
    series0.ticks.template.setAll({
      templateField: "settings"
    });
    
    series0.labels.template.setAll({
      textType: "circular",
      radius: 30
    });
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series0.data.setAll([
      {
        category: "First + Second",
        value: 60
      },
      {
        category: "Unused",
        value: 30,
        settings: { forceHidden: true }
      }
    ]);
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    var series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        radius: am5.percent(95),
        innerRadius: am5.percent(85),
        valueField: "value",
        categoryField: "category",
        alignLabels: false
      })
    );
    
    series1.states.create("hidden", {
      startAngle: 180,
      endAngle: 180
    });
    
    series1.slices.template.setAll({
      templateField: "sliceSettings",
      strokeOpacity: 0
    });
    
    series1.labels.template.setAll({
      textType: "circular"
    });
    
    series1.labels.template.adapters.add("radius", function (radius, target) {
      var dataItem = target.dataItem;
      var slice = dataItem.get("slice");
      return -(slice.get("radius") - slice.get("innerRadius")) / 2 - 10;
    });
    
    series1.slices.template.states.create("hover", { scale: 1 });
    series1.slices.template.states.create("active", { shiftRadius:0 });
    
    series1.ticks.template.setAll({
      forceHidden: true
    });
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series1.data.setAll([{
      category: "First",
      value: 30
    }, {
      category: "Second",
      value: 30
    }, {
      category: "Remaining",
      value: 30,
      sliceSettings: { fill: am5.color(0xdedede) }
    }]);
    
    }); // end am5.ready()

     // end 2 level pie chart
//=================================================================


 // start daging pie slice chart
//=================================================================


am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("dragging-pie-chart");
    
    // Create custom theme
    // https://www.amcharts.com/docs/v5/concepts/themes/#Quick_custom_theme
    var myTheme = am5.Theme.new(root);
    myTheme.rule("Label").set("fontSize", "0.8em");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      myTheme
    ]);
    
    // Create wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
      width: am5.p100,
      height: am5.p100,
      layout: root.horizontalLayout
    }));
    
    // Create first chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart0 = container.children.push(am5percent.PieChart.new(root, {
      innerRadius: am5.p50,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series0 = chart0.series.push(am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
      alignLabels: false
    }));
    
    series0.labels.template.setAll({
      textType: "circular",
      templateField: "dummyLabelSettings"
    });
    
    series0.ticks.template.set("forceHidden", true);
    
    var sliceTemplate0 = series0.slices.template;
    sliceTemplate0.setAll({
      draggable: true,
      templateField: "settings",
      cornerRadius: 5
    });
    
    // Separator line
    container.children.push(am5.Line.new(root, {
      layer: 1,
      height: am5.percent(60),
      y: am5.p50,
      centerY: am5.p50,
      strokeDasharray: [4, 4],
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.5
    }));
    
    // Label
    container.children.push(am5.Label.new(root, {
      layer: 1,
      text: "Drag slices over the line",
      y: am5.p50,
      textAlign: "center",
      rotation: -90,
      isMeasured: false
    }));
    
    // Create second chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart1 = container.children.push(am5percent.PieChart.new(root, {
      innerRadius: am5.p50,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series1 = chart1.series.push(am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
      alignLabels: false
    }));
    
    series1.labels.template.setAll({
      textType: "circular",
      radius: 20,
      templateField: "dummyLabelSettings"
    });
    
    series1.ticks.template.set("forceHidden", true);
    
    var sliceTemplate1 = series1.slices.template;
    sliceTemplate1.setAll({
      draggable: true,
      templateField: "settings",
      cornerRadius: 5
    });
    
    var previousDownSlice;
    
    // change layers when down
    sliceTemplate0.events.on("pointerdown", function (e) {
      if (previousDownSlice) {
        //  previousDownSlice.set("layer", 0);
      }
      e.target.set("layer", 1);
      previousDownSlice = e.target;
    });
    
    sliceTemplate1.events.on("pointerdown", function (e) {
      if (previousDownSlice) {
        // previousDownSlice.set("layer", 0);
      }
      e.target.set("layer", 1);
      previousDownSlice = e.target;
    });
    
    // when released, do all the magic
    sliceTemplate0.events.on("pointerup", function (e) {
      series0.hideTooltip();
      series1.hideTooltip();
    
      var slice = e.target;
      if (slice.x() > container.width() / 4) {
        var index = series0.slices.indexOf(slice);
        slice.dataItem.hide();
    
        var series1DataItem = series1.dataItems[index];
        series1DataItem.show();
        series1DataItem.get("slice").setAll({ x: 0, y: 0 });
    
        handleDummy(series0);
        handleDummy(series1);
      } else {
        slice.animate({
          key: "x",
          to: 0,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });
        slice.animate({
          key: "y",
          to: 0,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    });
    
    sliceTemplate1.events.on("pointerup", function (e) {
      var slice = e.target;
    
      series0.hideTooltip();
      series1.hideTooltip();
    
      if (slice.x() < container.width() / 4) {
        var index = series1.slices.indexOf(slice);
        slice.dataItem.hide();
    
        var series0DataItem = series0.dataItems[index];
        series0DataItem.show();
        series0DataItem.get("slice").setAll({ x: 0, y: 0 });
    
        handleDummy(series0);
        handleDummy(series1);
      } else {
        slice.animate({
          key: "x",
          to: 0,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });
        slice.animate({
          key: "y",
          to: 0,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    });
    
    // data
    var data = [
      {
        category: "Dummy",
        value: 1000,
        settings: {
          fill: am5.color(0xdadada),
          stroke: am5.color(0xdadada),
          fillOpacity: 0.3,
          strokeDasharray: [4, 4],
          tooltipText: null,
          draggable: false
        },
        dummyLabelSettings: {
          forceHidden: true
        }
      },
      {
        category: "Lithuania",
        value: 501.9
      },
      {
        category: "Estonia",
        value: 301.9
      },
      {
        category: "Ireland",
        value: 201.1
      },
      {
        category: "Germany",
        value: 165.8
      },
      {
        category: "Australia",
        value: 139.9
      },
      {
        category: "Austria",
        value: 128.3
      }
    ];
    
    // show/hide dummy slice depending if there are other visible slices
    function handleDummy(series) {
      // count visible data items
      var visibleCount = 0;
      am5.array.each(series.dataItems, function (dataItem) {
        if (!dataItem.isHidden()) {
          visibleCount++;
        }
      });
      // if all hidden, show dummy
      if (visibleCount == 0) {
        series.dataItems[0].show();
      } else {
        series.dataItems[0].hide();
      }
    }
    // set data
    series0.data.setAll(data);
    series1.data.setAll(data);
    
    // hide all except dummy
    am5.array.each(series1.dataItems, function (dataItem) {
      if (dataItem.get("category") != "Dummy") {
        dataItem.hide(0);
      }
    });
    
    // hide dummy
    series0.dataItems[0].hide(0);
    
    // reveal container
    container.appear(1000, 100);
    
    }); // end am5.ready()

// end daging pie slice chart
//=================================================================



// stsrt Variable Radius Pie Chart
//===================================================================

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("variable-radius-pie-chart");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
      layout: root.verticalLayout
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
      alignLabels: true,
      calculateAggregates: true,
      valueField: "value",
      categoryField: "category"
    }));
    
    series.slices.template.setAll({
      strokeWidth: 3,
      stroke: am5.color(0xffffff)
    });
    
    series.labelsContainer.set("paddingTop", 30)
    
    
    // Set up adapters for variable slice radius
    // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
    series.slices.template.adapters.add("radius", function (radius, target) {
      var dataItem = target.dataItem;
      var high = series.getPrivate("valueHigh");
    
      if (dataItem) {
        var value = target.dataItem.get("valueWorking", 0);
        return radius * value / high
      }
      return radius;
    });
    
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([{
      value: 10,
      category: "One"
    }, {
      value: 9,
      category: "Two"
    }, {
      value: 6,
      category: "Three"
    }, {
      value: 5,
      category: "Four"
    }, {
      value: 4,
      category: "Five"
    }, {
      value: 3,
      category: "Six"
    }]);
    
    
    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50,
      marginTop: 15,
      marginBottom: 15
    }));
    
    legend.data.setAll(series.dataItems);
    
    
    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
    
    }); // end am5.ready()

// end Variable Radius Pie Chart
//=======================================



// start semi circle donut chart
//================================================

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("semi-donut-chart");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    // start and end angle must be set both for chart and series
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
      startAngle: 180,
      endAngle: 360,
      layout: root.verticalLayout,
      innerRadius: am5.percent(50)
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
      startAngle: 180,
      endAngle: 360,
      valueField: "value",
      categoryField: "category",
      alignLabels: false
    }));
    
    series.states.create("hidden", {
      startAngle: 180,
      endAngle: 180
    });
    
    series.slices.template.setAll({
      cornerRadius: 5
    });
    
    series.ticks.template.setAll({
      forceHidden: true
    });
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      { value: 10, category: "One" },
      { value: 9, category: "Two" },
      { value: 6, category: "Three" },
      { value: 5, category: "Four" },
      { value: 4, category: "Five" },
      { value: 3, category: "Six" },
      { value: 1, category: "Seven" }
    ]);
    
    series.appear(1000, 100);
    
    }); // end am5.ready()


// end semi circle donut chart
//================================================