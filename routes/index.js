var express = require('express');
var moment = require('moment');
var router = express.Router();
var timeFormat = 'MM/DD/YYYY';

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index',
		{
			title: 'Agile Automation Monitor',
			automators: [
				{
					name: 'Automator 1',
					color: 'rgb(54, 162, 235)',
					data: getRandomData(10)
				},
				{
					name: 'Automator 2',
					color: 'rgb(255, 99, 132)',
					data: getRandomData(10)
				}
			]
		});
});

function newDateString(days) {
	return moment().add(days, 'd').format(timeFormat);
}

function getRandomNumber(){
	return Math.floor(Math.random() * 11);
}

function getRandomData(dataNumbers){
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
