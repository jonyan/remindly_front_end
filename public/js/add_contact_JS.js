function addContact() {
	var user_id = $.cookie('user_id');
	var name = $('#contact_name').val();
	var phone = $('#contact_phone').val();

	$.post("http://www.aerodroid.com/remindly/add_contact.php",
		{
			"user_id" : user_id,
			"name" : name,
			"phone" : phone
		},
	onFinishPost);
}

function onFinishPost(result) {
	console.log(result);
	alert('Added Contact Successfully!');
	window.location.href = "/contacts";
}