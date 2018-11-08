var express = require('express');
var moment = require('moment');
var router = express.Router();
var timeFormat = 'MM/DD/YYYY';

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index',
		{
			title: 'Agile Automation Monitor',
			dataSets: {
				automator1: getRandomDataSet(10),
				automator2: getRandomDataSet(10)
			}
		});
});

function newDateString(days) {
	return moment().add(days, 'd').format(timeFormat);
}

function getRandomNumber(){
	return Math.floor(Math.random() * -10) - 10;
}

function getRandomDataSet(dataNumbers){
	var dataset=[];
	for (var i = 0; i < dataNumbers; i++){
		dataset.push({
			x: newDateString(i),
			y: getRandomNumber()
		})
	}
	return dataset
}

module.exports = router;
