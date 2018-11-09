function AgileChart(canvasElement, automators) {
    var color = Chart.helpers.color;
    var datasets = automators.map(automator => ({
            label: automator.name,
            backgroundColor: color(automator.color).alpha(0.5).rgbString(),
            borderColor: automator.color,
            fill: false,
            data: automator.data
        })
    )
    var config = {
        type: 'line',
        data: {
            datasets: datasets
        },
        options: {
            legend: {
                position: 'left'
            },
            title: {
                text: 'Agile Automation Monitor'
            },
            tooltips: {
                mode: 'point',
                insersect: 'false'
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'day',
                        unitStepSize: 1,
                        displayFormats: {
                            'day': 'MMM DD'
                        },
                        tooltipFormat: 'MMMM DD YYYY'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'points'
                    }
                }]
            },
        }
    };
    this.canvasElement = canvasElement;
    this.config = config;
    this.redraw();
}

AgileChart.prototype.redraw = function() {
    this.chart = new Chart(this.canvasElement, this.config);
}

AgileChart.prototype.update = function() {
    this.chart.update();
}

AgileChart.prototype.addRandomData = function() {
    this.config.data.datasets.map(dataset => {
        dataset.data.push({
            x: "11/19/2018",
            y: 10
        })
    });
    this.update();
}