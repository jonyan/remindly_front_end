
exports.verify = function(req, res) {

	if(!req.cookies.login) {
		console.log("Not logged in, redirecting to home page.");
		res.redirect("/?message=error2");
		return;
	} else {
		console.log("submit button clicked using jquery");
		// console.log(req.query.user_phone);
		// console.log(req.query.user_name);
		var user_data = {
			"user_phone" : req.query.user_phone,
			"user_name" : req.query.user_name
		}
		res.render("user_home", user_data);
	}
};