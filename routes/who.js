
exports.view = function(req, res) {  
	console.log(req.query.user_phone);
	console.log(req.query.user_name);

	var user_data = {
		"user_phone" : req.query.user_phone,
		"user_name" : req.query.user_name
	}
	res.render('who', user_data);
 };