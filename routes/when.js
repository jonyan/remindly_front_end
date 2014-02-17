
exports.addRecipients = function(req, res) {  

	console.log("in when.js");
	if(req.query.me) {
		var recipients = {
			recipientsArr: [
				{"recipient":"self"},
				{"recipient":req.query.recipient1},
				{"recipient":req.query.recipient2},
				{"recipient":req.query.recipient3},
				{"recipient":req.query.recipient4}
			]
		}
	} else {
			var recipients = {
				recipientsArr: [
					{"recipient":req.query.recipient1},
					{"recipient":req.query.recipient2},
					{"recipient":req.query.recipient3},
					{"recipient":req.query.recipient4}
				]
			}
		}

	res.render('when', recipients);
 };