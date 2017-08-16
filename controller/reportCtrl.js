app.controller("annualReportCtrl", function($scope) {
	$scope.selectedOption = [];
	$scope.chartAvailable = false;
	$scope.annualResult = {
							"date":['MAR 2005','MAR 2006','MAR 2007','MAR 2008','MAR 2009','MAR 2010', 'MAR 2011','MAR 2012','MAR 2013','MAR 2014','MAR 2015','MAR 2016','MAR 2017'],
							"figure":[
										{	
											"name":"Sales",
											"data":[152.07,152.20,119.19,98.01,69.31,91.54,207.75,393.41,648.04,1131.61,1780.66,2018.29,2654.19],
											"color":"#9ACD32"
										},
										{	
											"name":"Expenses",
											"data":[135.99,146.03,113.53,96.57,73.12,98.60,199.32,348.66,597.56,1020.17,1598.36,1796.41,2362.88],
											"color":"#FF0000"
										},
										{	
											"name":"Operating Profit",
											"data":[16.08,6.17,5.66,1.44,-3.81,-7.06,8.43,44.75,50.48,11.44,182.30,221.88,291.31],
											"color":"#20b2aa"
										},
										{	
											"name":"OPM",
											"data":["10.57%","4.05%","4.75%","1.47%","-5.50%","-7.71%","4.06%","11.37%","7.79%","9.85%","10.24%","10.99%","10.98%"]
										},
										{	
											"name":"Other Income",
											"data":[3.20,7.61,4.35,8.76,4.28,10.69,3.95,3.35,2.58,3.68,9.02,23.42,17.70],
											"color":"#2f4f4f"
										}
									]
						};

	$scope.selectRow = function(data, active) {
		
		if(active) {
			$scope.selectedOption.push(data);
			$scope.chartAvailable = true;
		} else {
			$scope.selectedOption.splice($scope.selectedOption.indexOf(data),1);
		}
		if(!$scope.selectedOption.length){
			$scope.chartAvailable = false;
		}

		Highcharts.chart('chart', {
		    chart: {
		        type: 'line'
		    },
		    title: {
		        text: 'Annual Report'
		    },
   		    xAxis: {
		        categories: $scope.annualResult.date
		    },
		    yAxis: {
		        title: {
		            text: 'Figure'
		        },
	        	minorTickInterval: 'auto',
        		minorTickLength: 0
		    },
		    legend: {
		    	layout: 'vertical',
		    	align: 'right',
		    	verticalAlign: 'top',
		    	padding:3,
		    	itemMarginTop:5,
		    	itemMarginBottom:5,
		    	itemStyle:{
		    		lineHeight:'14px'
		    	}
		    },
		    plotOptions: {
		        line: {
		            dataLabels: {
		                enabled: true
		            },
		            enableMouseTracking: true
		        }
		    },
		    series: $scope.selectedOption
		});
	}							


});