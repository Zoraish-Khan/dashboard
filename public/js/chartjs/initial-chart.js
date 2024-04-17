
const ctx = document.getElementById('bar-chart');
const myChart = new Chart(ctx, {
    
    type: 'bar',
    data: {
        
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            borderRadius: 20,
            borderSkipped: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// start for line 
var ctx1 = document.getElementById("lineChart").getContext('2d');


var lineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

// start donut js

Chart.types.Doughnut.extend({
    name: "DoughnutTextInside",
    showTooltip: function() {
        this.chart.ctx.save();
        Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
        this.chart.ctx.restore();
    },
    draw: function() {
        Chart.types.Doughnut.prototype.draw.apply(this, arguments);

        var width = this.chart.width,
            height = this.chart.height;

        var fontSize = (height / 114).toFixed(2);
        this.chart.ctx.font = fontSize + "em Verdana";
        this.chart.ctx.textBaseline = "middle";

        var text = "82%",
            textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
            textY = height / 2;

        this.chart.ctx.fillText(text, textX, textY);
    }
});

var data = [{
    value: 30,
    color: "#F7464A"
}, {
    value: 50,
    color: "#E2EAE9"
}, {
    value: 100,
    color: "#D4CCC5"
}, {
    value: 40,
    color: "#949FB1"
}, {
    value: 120,
    color: "#4D5360"
}];

var DoughnutTextInsideChart = new Chart($('#donut-chart')[0].getContext('2d')).DoughnutTextInside(data, {
    responsive: true
});