
exports.login = function(req, res){
	// req.query.phoneNumber, sent this off to backend 
	// backend checks to see if phone number already exists, if not, create
	// new "user" with this phone number, send verification PIN to user's number
	// then render verification page
	res.render('verification');
};

// exports.getMessage = function(req, res) {
// 	//  get message data and send to backend
// 	res.render('verification')
// }

/*
Data need to collect and send off to back end:
1.) phone number from index.handlebars page

Backend needs to send back a pin:

*/