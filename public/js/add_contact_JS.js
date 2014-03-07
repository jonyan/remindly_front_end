function addContact() {
	var user_id = $.cookie('user_id');
	var name = $('#contact_name').val();
	var phone = $('#contact_phone').val();

	if (isEmpty()) {
		alert("Field left empty!");
	} else if (isInvalid(phone)) {
		alert("Please enter a valid phone number!")
	} else {

		$.post("http://www.aerodroid.com/remindly/add_contact.php",
			{
				"user_id" : user_id,
				"name" : name,
				"phone" : phone
			},
		onFinishPost);
	}
}

function onFinishPost(result) {
	console.log(result);
	alert('Added Contact Successfully!');
	window.location.href = "/contacts";
}

function isInvalid(phone) {
	var nondigits = /\D/g;
	console.log(phone);
	if (phone.length != 10 || nondigits.test(phone)) {
		console.log("returning true");
		return true;
	}
	return false;
}

function isEmpty() {
	if ($('#contact_name').val() == "" || $('#contact_phone').val() == "") {
		return true;
	}
	return false;
}