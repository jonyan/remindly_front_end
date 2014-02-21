exports.create = function(req, res) {  
	console.log(req.query.phone_number);
	res.render('new_user');
}
