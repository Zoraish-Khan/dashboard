var markers1 = [
    { name: 'Russia', coords: [61.5240, 105.3188], style: { fill:'#42a705'}  },
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'Greenland', coords: [71.7069, -42.6043], offsets: [2, 10] },
    { name: 'Canada', coords: [56, -106], offsets: [-1, 0] },
    { name: "India", coords: [21.1290, 82.7792], style: { fill:'#42a705'}},
    { name: "United States", coords: [37.0902, -95.7129]},
    {name: "Japan", coords:[36.2048,138.2529], style: { fill:'#42a705'} }
  ]

  var lines1 = [
    { from: 'India', to: 'Russia', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
    { from: 'India', to: 'Japan', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
    { from: 'United States', to: 'Canada', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
    { from: 'United States', to: 'Greenland', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
    { from: 'United States', to: 'Egypt', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
  ]

  new jsVectorMap({
    map: 'world_merc',
    selector: document.querySelector('#map'),
    zoomOnScroll: false,

    onLoaded(map) {
      document.querySelector('#add-line').addEventListener('click', () => {
        map.addLine('Canada', 'Greenland', {})
      })
    },

    // -------- Labels --------
    labels: {
      markers: {
        render: function(marker) {
          return marker.name
        },
        offsets: function (index) {
          return markers1[index].offsets || [0, 0]
        }
      },
    },

    // -------- Marker and label style --------
    markers: markers1,
    lines: lines1,
    lineStyle: {
      animation: true,
      strokeDasharray: "6 3 6",
    },
    markerStyle: {
      initial: {
        r: 6,
        fill: '#ef5f5e',
        stroke: '#fff',
        strokeWidth: 3,
      }
    },
    markerLabelStyle: {
      initial: {
        fontSize: 13,
        fontWeight: 500,
        fill: '#35373e',
      },
    },
  });

//////////////////////////////////// starter circle markers

var markers = [{
      name: 'Russia',
      coords: [61, 105],
      style: {
        fill: '#39afd1'
      }
    },
    {
      name: 'Geenland',
      coords: [72, -42],
      style: {
        fill: '#42a705'
      }
    },
    {
      name: 'Canada',
      coords: [56, -106],
      style: {
        fill: '#ef5f5e'
      }
    },
    {
      name: 'Palestine',
      coords: [31.5, 34.8],
      style: {
        fill: '#efbd46'
      }
    },
    {
      name: 'Brazil',
      coords: [-14.2350, -51.9253],
      style: {
        fill: '#1d34a8'
      }
    },
    
  ];

  var map = new jsVectorMap({
    map: 'world_merc',
    selector: '#circlemarker',
    markersSelectable: true,
    zoomOnScroll: !1,
    // markersSelectableOne: true,

    onMarkerSelected(index, isSelected, selectedMarkers) {
      console.log(index, isSelected, selectedMarkers);
    },

    // -------- Labels --------
    labels: {
      markers: {
        render: function(marker) {
          return marker.name
        },
      },
    },

    // -------- Marker and label style --------
    markers: markers,
    markerStyle: {
      hover: {
        stroke: "#DDD",
        strokeWidth: 3,
        fill: '#FFF'
      },
      selected: {
        fill: '#ff525d'
      }
    },
    markerLabelStyle: {
      initial: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: 500,
        fill: '#35373e',
      },
    },
  });

/////////////////////////// start with image marker
var markers = [{
      name: 'Russia',
      coords: [61, 105],
      style: {
          image: "./img/dribble.png"
      }
    },
    {
      name: 'Geenland',
      coords: [72, -42],
      style: {
          image: "./img/pin.png"
      }
    },
    {
      name: 'Canada',
      coords: [56, -106],
      style: {
          image: "./img/marker.png"
      }
    },
    {
      name: 'Palestine',
      coords: [31.5, 34.8],
      style: {
          image: "./img/pin.png"
      }
    },
    {
      name: 'Brazil',
      coords: [-14.2350, -51.9253],
      style: {
        fill: '#1d34a8'
      }
    },
    {
      name: 'United States',
      coords: [37.0902, -95.7129],
      style: {
        image: "./img/logo-dark-sm.png"
      },
      offsets: [2, 2]
    }, 
  ];

  var map = new jsVectorMap({
    map: 'world_merc',
    selector: '#img-marker',
    markersSelectable: true,
    zoomOnScroll: !1,
    // markersSelectableOne: true,

    onMarkerSelected(index, isSelected, selectedMarkers) {
      console.log(index, isSelected, selectedMarkers);
    },

    // -------- Labels --------
    labels: {
      markers: {
        render: function(marker) {
          return marker.name
        },
      },
    },

    // -------- Marker and label style --------
    markers: markers,
    markerStyle: {
      hover: {
        stroke: "#DDD",
        strokeWidth: 3,
        fill: '#FFF'
      },
      selected: {
        fill: '#ff525d'
      }
    },
    markerLabelStyle: {
      initial: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: 500,
        fill: '#35373e',
      },
    },
  });


  //////////////////////////// start Russia map
  var map = new jsVectorMap({
    selector: "#mapRussia",
    map: "russia",
    zoomOnScroll: false,
    regionStyle:{
        initial: {
            fill: '#efbd46',
            stroke: "#9599ad",
            fillOpacity: 1
        } ,
    },
  });
////////////////////////// start USA map
  var map = new jsVectorMap({
    map: 'us_aea',
    selector: '#mapUSA',   
    zoomOnScroll: false,
    regionStyle:{
        initial: {
            fill: '#ef5f5e',
            stroke: "#",
            strokeWidth: .25,
            fillOpacity: 1
        } ,
    },
      
  });
////////////////////////// start spain map
  var map = new jsVectorMap({
    map: 'spain',
    selector: '#mapSpain',   
    zoomOnScroll: false,
    zoomMin: 2,
    regionStyle:{
        initial: {
            fill: '#42a705',
            stroke: "#fff",
            strokeWidth: .25,
            fillOpacity: 1
        } ,
    },
  });

  

  ////////////////////////// start Canada map
  var map = new jsVectorMap({
    map: 'canada',
    selector: '#mapCanada',   
    zoomOnScroll: false,
    zoomMin: 2,
    regionStyle:{
        initial: {
            fill: '#0ecf97',
            stroke: "#fff",
            strokeWidth: .25,
            fillOpacity: 1
        } ,
    },
  });
  
  