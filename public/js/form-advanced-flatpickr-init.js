//const flatpickr = require("flatpickr");
flatpickr("#basic-fp", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});
flatpickr("#human-fd", {
    altInput: false,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});
flatpickr("#min-max-date", {
    altInput: false,
    minDate: "today",
    maxDate: new Date().fp_incr(14) // 
});

flatpickr("#disab-date", {
    altInput: false,
    
    disable: ["2022-08-30", "2022-09-21", "2023-03-01", new Date(2025, 4, 9) ],
});
flatpickr("#disab-range-date",{
dateFormat: "Y-m-d",
disable: [
    {
        from: "2022-08-27",
        to: "2022-09-07"
    },
    {
        from: "2025-09-01",
        to: "2025-12-01"
    }
    ]
});
flatpickr("#mul-date",{
    
mode: "multiple",
dateFormat: "Y-m-d"

});
flatpickr("#range-calendar",{
mode: "range",
minDate: "today",
dateFormat: "Y-m-d",
// disable: [
//     function(date) {
//         // disable every multiple of 8
//         return !(date.getDate() % 8);
//     }
// ]
});
flatpickr("#inline-calendar",{

inline: true

});
// time picker

flatpickr("#basic-time",{    
enableTime: true,
noCalendar: true,
dateFormat: "H:i",

});

flatpickr("#time-w-limit",{
enableTime: true,
noCalendar: true,
dateFormat: "H:i",
minTime: "16:00",
maxTime: "22:30",
});
flatpickr("#preloading-time",{
enableTime: true,
noCalendar: true,
dateFormat: "H:i",
defaultDate: "13:45"
})