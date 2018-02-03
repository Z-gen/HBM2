var presets = window.chartColors;
var utils = Samples.utils;
var inputs = {
	min: 0,
	max: 1.0,
	count: 1,
	decimals: 2,
	continuity: 1
};


function generateLabels(config) {
	return utils.months(Chart.helpers.merge({
		count: inputs.count,
		section: 3
	}, config || {}));
}

var options = {
	maintainAspectRatio: false,
	spanGaps: false,
	elements: {
		line: {
			tension: 0.000001
		}
	},
	plugins: {
		filler: {
			propagate: false
		}
	},
	scales: {
		xAxes: [{

			ticks: {
				autoSkip: false,
				maxRotation: 0,
				fontColor: "#9a9a9a"
			},
			gridLines: {
				color: 'rgba(201,201,201,1)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			display: true,
			ticks: {
				beginAtZero:true,
				stepSize: 0.25,
				fontColor: "#9a9a9a",
				max: 1.0,
				callback: function(value) {
					return value
				}
			},
			gridLines: {
				offsetGridLines : true,
				color: 'rgba(201,201,201,1)',
				lineWidth: 1
			}
		}]

	}
};
var ctx = document.getElementById("chart-2").getContext("2d"); 

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255,240,215,0.8)');    
gradient.addColorStop(1, 'rgba(255,240,215, 1)');

['start'].forEach(function(boundary, index) {

			// reset the random seed to generate the same data for all charts
			utils.srand(8);

			new Chart('chart-' + 2, {
				type: 'line',
				data: {
					labels: ["","01.10", "02.10", "03.10", "04.10", "05.10", "06.10", "07.10","08.10", "09.10", "10.10", "11.10", "12.10", "13.10", "14.10"],
					datasets: [{
						backgroundColor: gradient,
						borderColor: "rgba(254,185,53, 1)",
						data: [0.1, 0.4, 0.5, 0.45, 0.64, 0.54, 0.34, 0.42, 0.41, 0.40, 0.44, 0.45, 0.43, 0.40, 0.34],
						label: 'My Second dataset',
						fill: boundary
					}]
				},
				options: Chart.helpers.merge(options, {
					title: {
						text: 'fill: ' + boundary,
						display: false
					},
					legend: {
						display: false
					}
				})
			});
		});