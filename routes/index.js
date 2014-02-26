
// GET the login credentials.  Go to the who page upon sucess.
// get the contacts associated with this user and render them on the who page
// get JSON of user's contact


exports.view = function(req, res){
	console.log(req.query.message);
	if(req.query.message == "error1") {
		var message = {
			"message" : "Sorry, invalid phone number."
		}
	} if(req.query.message == "error2") {
		var message = {
			"message" : "Sorry, you've been logged out."
		}
	} else {
		var message = {
			"message" : "Send delayed SMS reminders!"
		}
	}
	console.log(message);
	res.render('index', message);
};