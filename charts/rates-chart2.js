Highcharts.chart('rates-chart2', {

		title: {
			text: 'Derived Rate Curves',
			align: 'center'
		},
	
		yAxis: {
			title: {
				text: 'rate %'
			}
		},
		xAxis: {
			min: 0,
			max: 10

		},
	
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
            x: 0,
            y: 0
		},
	
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false,
					style: {
						fontSize: 10
					}
				},
				marker: {
                    enabled: false
                },
				pointStart: 1
			}
		},
	
		series: [{
			name: 'Spots',
			data: [
				6, 7, 7.75, 8.31, 8.73, 9.05, 9.29, 9.47, 9.6, 9.7
			]
		}, {
			name: '1y forwards',
			data: [
				6, 8.01, 9.27, 10.01, 10.43, 10.66, 10.74, 10.74, 10.65, 10.6
			]
		}, {
			name: 'Implied spots in 1y',
			data: [
				8.01, 8.64, 9.09, 9.42, 9.67, 9.85, 9.97, 10.06, 10.12
			]
		}, {
			name: 'Implied spots in 2y',
			data: [
				9.27,9.64,9.9,10.09,10.22,10.31,10.35,10.39
			]
		}
		],
		credits: {
			enabled: false
		},
	
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}
	
	});
