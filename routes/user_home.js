
// req.query.pin and send this to backend to make sure it matches the
// correct pin in the database.  Backend sends us message letting us know
// it was a success or failure.  Upon success get the user's pending 
// remindly's and render the user_home.

exports.verify = function(req, res){
	res.render('user_home');
};