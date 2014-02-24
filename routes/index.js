
// GET the login credentials.  Go to the who page upon sucess.
// get the contacts associated with this user and render them on the who page
// get JSON of user's contact


exports.view = function(req, res){
	console.log(req.query.message);
	if(req.query.message == "error1") {
		var message = {
			"message" : "Invalid phone number, please try again."
		}
	} if(req.query.message == "error2") {
		var message = {
			"message" : "You've been logged out, please log in again."
		}
	} else {
		var message = {
			"message" : "Log in with cell number to send a delayed text reminder!"
		}
	}
	console.log(message);
	res.render('index', message);
};