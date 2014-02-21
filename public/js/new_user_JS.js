function createNewUser() {
	console.log("create new user connected");
	var user_phone = $('#user_phone').val();
	var name = $('#name_field').val();
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
	console.log("Success: " + result["success"]);
		$('#submitBtn').click();
}