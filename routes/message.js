	
exports.setWhen = function(req, res) {  
	console.log("in message.js");
	console.log(req.query.user_phone);
	console.log(req.query.user_name);

	var CHAR_LEN_OF_MONTH = 3;
	var datetime = req.query.datetime;
	// var datetime = "Thursday, Feb 20, 2014 @ 2:30 AM";

	var removeDayPttrn = /[a-zA-Z]*, /;

	var charIndexOfMonthName = datetime.match(removeDayPttrn)[0].length;
	var month = datetime.substr(charIndexOfMonthName, CHAR_LEN_OF_MONTH);


	var dateYearStr = datetime.substr(charIndexOfMonthName + 4);
	var obtainDatePttrn = /[0-9]*,/;
	var dateCommaStr = dateYearStr.match(obtainDatePttrn)[0];

	var date = dateCommaStr.substr(0, dateCommaStr.length - 1);

	var year = dateYearStr.substr(dateCommaStr.length + 3, 2);

	var timeAmPm = dateYearStr.substr(dateCommaStr.length + 1 + 7);
	var time = timeAmPm.substr(0, timeAmPm.length - 3);
	var amPm = timeAmPm.substr(timeAmPm.length - 2);

	switch(month) {
		case "Jan":
			month = 1
			break;
		case "Feb":
			month = 2
			break;
		case "Mar":
			month = 3
			break;
		case "Apr":
			month = 4
			break;
		case "May":
			month = 5
			break;
		case "Jun":
			month = 6
			break;
		case "Jul":
			month = 7
			break;
		case "Aug":
			month = 8
			break;
		case "Sep":
			month = 9
			break;
		case "Oct":
			month = 10
			break;
		case "Nov":
			month = 11
			break;
		default:
			month = 12
			break;
	}

	var datetimeResult = month + "/" + date + "/" + year + "_" + time + amPm; 
		// var datetimeResult = month + "/" + date + "/" + year + time + amPm; 



	console.log("datetimeresult: " + datetimeResult);

	if(req.query.me) {
		var data = {
			'user_phone' : req.query.user_phone,
			'user_name' : req.query.user_name,
			'recipients' : [
				{"recipient":"self"},
				{"recipient":req.query.recipient1},
				{"recipient":req.query.recipient2},
				{"recipient":req.query.recipient3},
				{"recipient":req.query.recipient4}
			],
			'time' : datetimeResult

		}
	} else {
			var data = {
				'user_phone' : req.query.user_phone,
				'user_name' : req.query.user_name,
				'recipients' : [
					{"recipient":req.query.recipient1},
					{"recipient":req.query.recipient2},
					{"recipient":req.query.recipient3},
					{"recipient":req.query.recipient4}
				],
				'time' : datetimeResult
			}
	}



	res.render('message', data);
 };

