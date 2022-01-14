
window.onload = function () {
	CanvasJS.addColorSet("greenShades",
                [//colorSet Array
				"rgb(127, 83, 163)",
                 "#bee5eb",
                "#17a2b8"
				
                               
                ]);
				

var chart1 = new CanvasJS.Chart("Annual_quantities", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title: {
		text: "Annual (quantities)",
		fontSize:14
	},
	
	axisY: {
		title: "Amounts(Products)",
		fontSize:8
		//suffix: "%"
	},

	data: [{
		type: "spline",
		 showInLegend: true, 
		 legendMarkerColor: "grey",
		 legendText: " Piece",
	yValueFormatString: "#,##0.0  #\"Piece\"",
	dataPoints: [      
			{ y: 10, label: "January" },
			{ y: 90,  label: "February" },
			{ y: 10,  label: "March" },
			{ y: 40,  label: "April" },
			{ y: 50,  label: "May" },
			{ y: 60, label: "June" },
			{ y: 70,  label: "July" },
			{ y: 80,  label: "August" },
            { y: 10,  label: "September" },
            { y: 100,  label: "October" },
            { y: 110,  label: "November" },
            { y: 20,  label: "December" }
 
		]
	}]
});
chart1.render();

var chart2 = new CanvasJS.Chart("Annual_profit", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title: {
		text: "Annual (profit) ",
		fontSize:14

	},

	
	axisY: {
		title: "SP:Syrian Pound",
	
		
	},

	data: [{
		type: "column",
		 
	yValueFormatString: "#,##0.0  #\" SP\"",
	dataPoints: [      
			{ y: 10, label: "January" },
			{ y: 20,  label: "February" },
			{ y: 30,  label: "March" },
			{ y: 40,  label: "April" },
			{ y: 50,  label: "May" },
			{ y: 60, label: "June" },
			{ y: 100,  label: "July" },
			{ y: 80,  label: "August" },
            { y: 90,  label: "September" },
            { y: 30,  label: "October" },
            { y: 10,  label: "November" },
            { y: 20,  label: "December" }
 
		]
	}]
});
chart2.render();

var chart3 = new CanvasJS.Chart("Annual_quantities_price", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title: {
		text: "Annual (quantities price)",
		fontSize:14

	},

	
	axisY: {
		title: "SP:Syrian Pound",
	
		
	},

	data: [{
		type: "splineArea",
		 
	yValueFormatString: "#,##0.0  #\" SP\"",
	dataPoints: [      
			{ y: 10, label: "January" },
			{ y: 20,  label: "February" },
			{ y: 100,  label: "March" },
			{ y: 40,  label: "April" },
			{ y: 50,  label: "May" },
			{ y: 60, label: "June" },
			{ y: 0,  label: "July" },
			{ y: 80,  label: "August" },
            { y: 90,  label: "September" },
            { y: 0,  label: "October" },
            { y: 110,  label: "November" },
            { y: 20,  label: "December" }
 
		]
	}]
});
chart3.render();

var chart4= new CanvasJS.Chart("companies", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title:{
		text:"Best selling companies",
		fontSize:14
	},
	


	data: [{
		type: "pie",
		name: "companies",
		axisYType: "secondary",
		//color: "#17a2b8",
		yValueFormatString: "#,##0.0  #\"Piece\"",
		dataPoints: [
			{ y: 100, label: "companies1" },
			{ y: 200, label: "companies2" },
			{ y: 300, label: "companies3" },
			{ y: 400, label: "companies4" },
			{ y: 500, label: "companies5" },
			{ y: 600, label: "companies6" }
		]
	}]
});
chart4.render();

var chart5 = new CanvasJS.Chart("Profits_for_each_branch", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title:{
		text:"Profits ",
		fontSize:14
	},
	


	data: [{
		type: "doughnut",
		name: "companies",
		axisYType: "secondary",
		//color: "#17a2b8",
		yValueFormatString: "#,##0.0  #\"SP\"",
		dataPoints: [
			{ y: 100, label: "branch1" },
			{ y: 200, label: "branch2" },
			{ y: 60, label: "branch3" },
			{ y: 400, label: "branch4" },
			{ y: 500, label: "branch5" },
			{ y: 600, label: "branch6" }
		]
	}]
});
chart5.render();

var chart6 = new CanvasJS.Chart("The_quantity_withdrawn_from_the_store_for_each_branch", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title:{
		text:"The quantity withdrawn from the store ",
		fontSize:14
	},
	


	data: [{
		type: "doughnut",
		innerRadius:70,
		name: "companies",
		axisYType: "secondary",
		//color: "#17a2b8",
		yValueFormatString: "#,##0.0  #\"Pices\"",
		dataPoints: [
			{ y: 100, label: "branch1" },
			{ y: 200, label: "branch2" },
			{ y: 60, label: "branch3" },
			{ y: 400, label: "branch4" },
			{ y: 500, label: "branch5" },
			{ y: 600, label: "branch6" }
		]
	}]
});
chart6.render();

var chart7 = new CanvasJS.Chart("The_amount_of_the_loss", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title:{
		text:"The amount of the loss ",
		fontSize:14
	},
	


	data: [{
		type: "doughnut",
		innerRadius:70,
		name: "companies",
		axisYType: "secondary",
		
		yValueFormatString: "#,##0.0  #\"SP\"",
		dataPoints: [
			{ y: 100, label: "branch1" },
			{ y: 200, label: "branch2" },
			{ y: 60, label: "branch3" },
			{ y: 400, label: "branch4" },
			{ y: 500, label: "branch5" },
			{ y: 600, label: "branch6" }
		]
	}]
});
chart7.render();

var chart8 = new CanvasJS.Chart("The_best_products", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title: {
		text: "The best products",
		fontSize:14
	},
	
	axisX: {
		margin: 10,
		labelPlacement: "inside",
		tickPlacement: "inside"
	  },

	data: [{
		type: "bar",
		
	yValueFormatString: "#,##0.0  #\"Piece\"",
	dataPoints: [      
		{ y: 100, label: "products1" },
		{ y: 200, label: "products2" },
		{ y: 300, label: "products3" },
		{ y: 400, label: "products4" },
		{ y: 500, label: "products5" },
		{ y: 600, label: "products6" },
		{ y: 700, label: "products7" },
		{ y: 800, label: "products8" },
		{ y: 900, label: "products9" },
		{ y: 1000, label: "products10" },
 
		]
	}]
});
chart8.render();


var chart9 = new CanvasJS.Chart("The_best_products_of_a_branch", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", 
	colorSet: "greenShades",
	title: {
		text: "The best products of a branch",
		fontSize:14
	},
	
	axisX: {
		margin: 10,
		labelPlacement: "inside",
		tickPlacement: "inside"
	  },

	data: [{
		type: "bar",
		
	yValueFormatString: "#,##0.0  #\"Piece\"",
	dataPoints: [      
		{ y: 100, label: "products1" },
		{ y: 200, label: "products2" },
		{ y: 300, label: "products3" },
		{ y: 400, label: "products4" },
		{ y: 500, label: "products5" },
		{ y: 600, label: "products6" },
		{ y: 700, label: "products7" },
		{ y: 800, label: "products8" },
		{ y: 900, label: "products9" },
		{ y: 1000, label: "products10" },
 
		]
	}]
});
chart9.render();




}



