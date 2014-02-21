function renderWhoPage() {
	var user_phone = $('#user_phone').val();
	var user_name = $('#user_name_field').val();
	console.log(user_phone);
	console.log(user_name);
	window.location.href = '/who?user_phone=' + user_phone + '&user_name=' + user_name;

}