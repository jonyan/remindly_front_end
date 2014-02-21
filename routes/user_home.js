
exports.verify = function(req, res){

	console.log("submit button clicked using jquery");
	// console.log(req.query.user_phone);
	// console.log(req.query.user_name);
	var user_data = {
		"user_phone" : req.query.user_phone,
		"user_name" : req.query.user_name
	}
	res.render("user_home", user_data);
};