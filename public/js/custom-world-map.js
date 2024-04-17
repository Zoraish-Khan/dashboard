var map = new jsVectorMap({
    map: "world_merc",
    selector: "#worldmap-markers",
    zoomOnScroll: !1,
    zoomButtons: !1,
    markers: [{
        name: "Greenland",
        coords: [72, -42]
    }, {
        name: "Canada",
        coords: [56.1304, -106.3468]
    }, {
        name: "Brazil",
        coords: [-14.235, -51.9253]
    }, {
        name: "India",
        coords: [21.1290, 82.7792]
    }, {
        name: "Russia",
        coords: [61, 105]
    }, {
        name: "China",
        coords: [35.8617, 104.1954]
    }, {
        name: "United States",
        coords: [37.0902, -95.7129]
    }, {
        name: "Norway",
        coords: [60.472024, 8.468946]
    }, {
        name: "Ukraine",
        coords: [48.379433, 31.16558]
    }],
    lines: [{
        from: "Canada",
        to: "India"
    }, {
        from: "Russia",
        to: "India"
    }, {
        from: "Greenland",
        to: "India"
    }, {
        from: "Brazil",
        to: "India"
    }, {
        from: "United States",
        to: "India"
    }, {
        from: "China",
        to: "India"
    }, {
        from: "Norway",
        to: "India"
    }, {
        from: "Ukraine",
        to: "India"
    }],
    lineStyle: {
        animation: !0,
        strokeDasharray: "6 3 6"
    }
});