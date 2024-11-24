// Plugin to add a pulsating marker on add point
Highcharts.addEvent(Highcharts.Series, 'addPoint', e => {
    const point = e.point,
        series = e.target;

    if (!series.pulse) {
        series.pulse = series.chart.renderer.circle()
            .add(series.markerGroup);
    }
    setTimeout(() => {
        series.pulse
            .attr({
                x: series.xAxis.toPixels(point.x, true),
                y: series.yAxis.toPixels(point.y, true),
                r: series.options.marker.radius,
                opacity: 1,
                fill: series.color
            })
            .animate({
                r: 20,
                opacity: 0
            }, {
                duration: 1000
            });
    }, 1);
});

Highcharts.chart('bootstrap-chart', {
    chart: {
        type: 'scatter',
        margin: [70, 50, 60, 80],
        events: {
            click: function (e) {
                // find the clicked values and the series
                const x = Math.round(e.xAxis[0].value),
                    y = Math.round(e.yAxis[0].value),
                    series = this.series[0];

                // Add it
                series.addPoint([x, y]);

            }
        }
    },
    title: {
        text: 'Bootstrapping a spot curve',
        align: 'center'
    },
    xAxis: {
        maxZoom: 10,
        title: {
            text: 'Year to maturity'
        },
        min: 0
    },
    yAxis: {
        title: {
            text: 'Spot rate (bps)'
        },
        maxZoom: 1500,
        tickInterval: 50,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            stickyTracking: false,
            lineWidth: 3,
            point: {
                events: {
                    click: function () {
                        if (this.series.data.length > 1) {
                            this.remove();
                        }
                    }
                }
            }
        }
    },
    series: [{
        name: "spot curve",
        data: [[0, 0], [1, 500]],
        color: Highcharts.getOptions().colors[3],
        marker: {
            lineWidth: 2,
            radius: 6
        }
    }]
});
