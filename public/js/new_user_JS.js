function createNewUser() {
	var user_phone = $('#user_phone').val();
	var name = $('#user_name').val();

	if(!$('#user_name').val()) {
		alert("We need your first name to send Remindly's, please try again.");
		return;
	}

	console.log(user_phone, name);
	create_user(user_phone, name);
}

function create_user(user_phone, name) {
	$.post("http://www.aerodroid.com/remindly/add_user.php",
		{
			"user_phone" : user_phone, 
			"name" : name,
			"pin" : '',
			"email" : ''
		}, onFinish);
}

function onFinish(result) {
	$.cookie("user_phone", $('#user_phone').val());
	$.cookie("name", $('#user_name').val());
	$('#submitBtn').click();
}