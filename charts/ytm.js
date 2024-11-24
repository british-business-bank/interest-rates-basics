Highcharts.chart('ytm-chart', {

		title: {
			text: 'Bonds yielding 5.5%',
			align: 'center'
		},
	
		yAxis: {
			title: {
				text: 'Price'
			}
		},
	
		xAxis: {
            title: {
				text: 'Year to maturity'
			}, 
            reversed: true
		},
        legend: {
			enabled: false
		},
        tooltip: {
            enabled: false
        },
	
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
                allowPointSelect: false,
                states: {
                    hover: {
                        enabled: false
                    },
                    inactive: {
                        enabled: false
                    },
                    select: {
                        enabled: false
                    }
                },
				pointStart: 10,
                marker: {
                    enabled: false
                }
			}
		},
	
		series: [{
			name: 'Coupon = 7.5%',
			data: [
				[10, 115.08], [9, 113.90], [8, 112.67], [7, 111.37], [6, 109.99], [5, 108.54], [4, 107.01], [3, 105.40], [2, 103.69], [1, 101.90], [0, 100] 
			]
		}, {
			name: 'Coupon = 3.5%',
			data: [
				[10, 84.92], [9, 86.10], [8, 87.33], [7, 88.63], [6, 90.00], [5, 91.46], [4, 92.99], [3, 94.60], [2, 96.31], [1, 98.10], [0, 100] 
			]
		}, {
			name: 'Coupon = 5.5%',
			data: [
				[10, 100], [9, 100], [8, 100], [7, 100], [6, 100], [5, 100], [4, 100], [3, 100], [2, 100], [1, 100], [0, 100] 
			]
		}], 
        credits: {
            enabled: false
        }
	
	});
