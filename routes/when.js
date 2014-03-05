
exports.addRecipients = function(req, res) { 
	var data;
	console.log(req.query.recipient1);
	if(req.query.me) {
		data = {
			'recipients' : [
				{"recipient" : "self"},
				{"recipient" : req.query.recipient1},
				{"recipient" : req.query.recipient2},
				{"recipient" : req.query.recipient3},
				{"recipient" : req.query.recipient4}
			]
		}
	} else {
		data = {
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