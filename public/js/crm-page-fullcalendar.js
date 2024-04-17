
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('crm-calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: !0,
        initialDate: "2023-03-01",
        editable: !0,
        headerToolbar: !1,
        events: [{
            title: "Call with Hale",
            start: "2020-11-18",
            end: "2020-11-18",
            className: "bg-gradient-danger"
        }, {
            title: "Lunch meeting",
            start: "2020-11-21",
            end: "2020-11-22",
            className: "bg-gradient-warning"
        }, {
            title: "All day conference",
            start: "2020-11-29",
            end: "2020-11-29",
            className: "bg-gradient-success"
        }, {
            title: "Meeting with Azeem",
            start: "2023-03-01",
            end: "2023-03-01",
            className: "bg-gradient-info"
        }, {
            title: "Winter Siberia",
            start: "2023-03-03",
            end: "2023-03-03",
            className: "bg-gradient-danger"
        }, {
            title: "Digital event",
            start: "2023-03-07",
            end: "2023-03-09",
            className: "bg-gradient-warning"
        }, {
            title: "Marketing event",
            start: "2023-03-10",
            end: "2023-03-10",
            className: "bg-gradient-primary"
        }, {
            title: "Dinner with Team",
            start: "2023-03-19",
            end: "2023-03-22",
            className: "bg-gradient-danger"
        }, {
            title: "Black Friday",
            start: "2023-03-23",
            end: "2023-03-23",
            className: "bg-gradient-info"
        }, {
            title: "Cyber Week",
            start: "2023-03-17",
            end: "2023-03-19",
            className: "bg-gradient-warning"
        }]

    });
    calendar.render();
});
