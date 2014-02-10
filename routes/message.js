
// GET the message to be sent and send it off

exports.setWhen = function(req, res) {    
	// get the time then render message page
	res.render('message', {locals: req.whos});
 };


