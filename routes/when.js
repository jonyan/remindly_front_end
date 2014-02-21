
exports.addRecipients = function(req, res) {  

	console.log("in when.js");
	if(req.query.me) {

		var data = {
			'user_phone' : req.query.user_phone,
			'user_name' : req.query.user_name,
			'recipients': [
				{"recipient":"self"},
				{"recipient":req.query.recipient1},
				{"recipient":req.query.recipient2},
				{"recipient":req.query.recipient3},
				{"recipient":req.query.recipient4}
			]
		}
	} else {
			var data = {
				'user_phone' : req.query.user_phone,
				'user_name' : req.query.user_name,

				'recipients': [
					{"recipient":req.query.recipient1},
					{"recipient":req.query.recipient2},
					{"recipient":req.query.recipient3},
					{"recipient":req.query.recipient4}
				]
			}
	}

	res.render('when', data);
 };