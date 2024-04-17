// credit card
var cleaveCreditCard = new Cleave('.input-credit-card', {
    creditCard: true
});
// time format
new Cleave('.time-1', {
    time: true,
    timePattern: ['h', 'm', 's'],
    delimiter: ':'
});
new Cleave('.time-2', {
    time: true,
    timePattern: ['h', 'm'],
    delimiter: ':'
});
new Cleave('.date-1', {
    date: true,
    datePattern: ['dd', 'mm', 'yy'],
    delimiter: '-'
});
new Cleave('.date-2', {
    date: true,
    datePattern: [ 'm', 'y'],
    delimiter: '/'
});
new Cleave('.delimiter', {
    date: true,
    datePattern: ['Y', 'm', 'd'],
    delimiter: '/'
});

new Cleave('.input-4', {
    numeral: true,
    numeralDecimalMark: ',',
    delimiter: '.'
});

new Cleave('.input-1', {
    numeral: true,
    prefix: '$'
});

new Cleave('.input-5', {
    uppercase: true,
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2]
});

new Cleave('.input-6', {
    uppercase: true,
    delimiter: '',
    prefix: 'UFO',
    blocks: [3, 6] // or [9]
});

new Cleave('.input-2', {
    numericOnly: true,
    delimiter: '.',
    prefix: 'BE',
    blocks: [5, 3, 3]
});

new Cleave('.input-7', {
    uppercase: true,
    delimiter: '-',
    blocks: [6, 2, 3, 3]
});

new Cleave('.input-8-1', {
    uppercase: true,
    delimiters: [' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' '],
    blocks: [3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0]
});

new Cleave('.input-8-2', {
    uppercase: true,
    delimiters: [' | ', ' | ', ' | '],
    blocks: [3, 3, 3, 3]
});

new Cleave('.input-9', {
    delimiter: '-',
    blocks: [3, 3, 3],
    delimiterLazyShow: true
});

new Cleave('.input-10', {
    numericOnly: true,
    blocks: [0, 3, 0, 3, 4],
    delimiters: ["(", ")", " ", "-"]
});
new Cleave('.input-11', {
    numericOnly: true,
    blocks: [0, 3, 3, 4],
    delimiters: ["(", ") ", "-"]
});
