
exports.addRecipients = function(req, res) { 
	if(req.query.me) {
		var data = {
			'recipients' : [
				{"recipient" : "self"},
				{"recipient" : req.query.recipient1},
				{"recipient" : req.query.recipient2},
				{"recipient" : req.query.recipient3},
				{"recipient" : req.query.recipient4}
			]
		}
	} else {
			var data = {
				'recipients' : [
					{"recipient" : req.query.recipient1},
					{"recipient" : req.query.recipient2},
					{"recipient" : req.query.recipient3},
					{"recipient" : req.query.recipient4}
				]
			}
	}

	res.render('when', data);
 };