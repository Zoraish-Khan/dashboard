new gridjs.Grid({
    columns: [{
        name: "ID",
        formatter: function(element) {
            return gridjs.html('<span class="fw-semibold">' + element + "</span>")
        }
    }, "Name", {
        name: "Email",
        formatter: function(element) {
            return gridjs.html('<a href="">' + element + "</a>")
        }
    }, "Position", "Company", "Country", {
        name: "Actions",
        width: "120px",
        formatter: function(element) {
            return gridjs.html("<a href='#' class='text-reset text-decoration-underline'>Details</a>")
        }
    }],
    pagination: {
        limit: 5
    },
    sort: !0,
    search: !0,
    data: [
        ["01", "Nadeem", "nadeem@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        ["02", "Hatem", "hatem@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        ["03", "Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        ["04", "Zoraish", "zoraish@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        ["05", "Ahan", "ahan@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        ["06", "Tipoo", "tipoo@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        ["07", "Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        ["08", "Farhan", "farhan@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        ["09", "John", "john@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        ["10", "Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
    ]
}).render(document.getElementById("table-gridjs")), new gridjs.Grid({
    columns: ["Name", "Email", "Position", "Company", "Country"],
    sort: !0,
    pagination: {
        limit: 5
    },
    data: [
        ["Nadeem", "nadeem@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        ["Hatem", "hatem@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        ["Zoraish", "zoraish@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        ["Ahan", "ahan@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        ["Tipoo", "tipoo@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        ["Farhan", "farhan@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        ["John", "john@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
    ]
}).render(document.getElementById("table-card")), new gridjs.Grid({
    columns: [{
        name: "ID",
        width: "120px",
        formatter: function(element) {
            return gridjs.html('<a href="" class="fw-medium">' + element + "</a>")
        }
    }, "Name", "Date", "Total", "Status", {
        name: "Actions",
        width: "100px",
        formatter: function(element) {
            return gridjs.html("<button type='button' class='btn btn-sm btn-soft-primary'>Details</button>")
        }
    }],
    pagination: {
        limit: 5
    },
    data: [
        ["#VL2111", "Nadeem", "07 Oct, 2021", "$24.05", "Paid"],
        ["#VL2110", "Hatem", "07 Oct, 2021", "$26.15", "Paid"],
        ["#VL2109", "Shannon", "06 Oct, 2021", "$21.25", "Refund"],
        ["#VL2108", "Zoraish", "05 Oct, 2021", "$25.03", "Paid"],
        ["#VL2107", "Ahan", "05 Oct, 2021", "$22.61", "Paid"],
        ["#VL2106", "Tipoo", "04 Oct, 2021", "$24.05", "Paid"],
        ["#VL2105", "Kerry", "04 Oct, 2021", "$26.15", "Paid"],
        ["#VL2104", "Farhan", "04 Oct, 2021", "$21.25", "Refund"],
        ["#VL2103", "John", "03 Oct, 2021", "$22.61", "Paid"],
        ["#VL2102", "Tyrone", "03 Oct, 2021", "$25.03", "Paid"]
    ]
}).render(document.getElementById("table-pagination")), new gridjs.Grid({
    columns: ["Name", "Email", "Position", "Company", "Country"],
    pagination: {
        limit: 5
    },
    search: !0,
    data: [
        ["Nadeem", "nadeem@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        ["Hatem", "hatem@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        ["Zoraish", "zoraish@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        ["Ahan", "ahan@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        ["Tipoo", "tipoo@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        ["Farhan", "farhan@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        ["John", "john@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
    ]
}).render(document.getElementById("table-search")), new gridjs.Grid({
    columns: ["Name", "Email", "Position", "Company", "Country"],
    pagination: {
        limit: 5
    },
    sort: !0,
    data: [
        ["Nadeem", "nadeem@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        ["Hatem", "hatem@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        ["Zoraish", "zoraish@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        ["Ahan", "ahan@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        ["Tipoo", "tipoo@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        ["Farhan", "farhan@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        ["John", "john@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
    ]
}).render(document.getElementById("table-sorting")), new gridjs.Grid({
    columns: ["Name", "Email", "Position", "Company", "Country"],
    pagination: {
        limit: 5
    },
    sort: !0,
    data: function() {
        return new Promise(function(element) {
            setTimeout(function() {
                element([
                    ["Nadeem", "nadeem@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
                    ["Hatem", "hatem@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
                    ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
                    ["Zoraish", "zoraish@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
                    ["Ahan", "ahan@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
                    ["Tipoo", "tipoo@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
                    ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
                    ["Farhan", "farhan@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
                    ["John", "john@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
                    ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
                ])
            }, 2e3)
        })
    }
}).render(document.getElementById("table-loading-state")), new gridjs.Grid({
    columns: ["Name", "Email", "Position", "Company", "Country"],
    sort: !0,
    pagination: !0,
    fixedHeader: !0,
    height: "400px",
    data: [
        ["Nadeem", "nadeem@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        ["Hatem", "hatem@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        ["Zoraish", "zoraish@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        ["Ahan", "ahan@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        ["Tipoo", "tipoo@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        ["Farhan", "farhan@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        ["John", "john@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
    ]
}).render(document.getElementById("table-fixed-header")), new gridjs.Grid({
    columns: ["Name", "Email", "Position", "Company", {
        name: "Country",
        hidden: !0
    }],
    pagination: {
        limit: 5
    },
    sort: !0,
    data: [
        ["Nadeem", "nadeem@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        ["Hatem", "hatem@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        ["Zoraish", "zoraish@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        ["Ahan", "ahan@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        ["Tipoo", "tipoo@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        ["Farhan", "farhan@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        ["John", "john@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
    ]
}).render(document.getElementById("table-hidden-column"));