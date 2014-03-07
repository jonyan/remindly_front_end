
exports.edit = function(req, res) { 
	var contact = {
			"contact" : req.query.contact
		}
	res.render('edit_contact', contact);
 };