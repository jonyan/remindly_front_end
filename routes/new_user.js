exports.create = function(req, res) {  
	console.log(req.query.user_phone);
	var user_data = {
		"user_phone" : req.query.user_phone,
	}
	res.render('new_user', user_data);
}
