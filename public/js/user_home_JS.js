
$("#get_pending_remindlys").click();

function getPendingRemindlys() {

	get_users_remindlys($('#user_phone').val());

}

function get_users_remindlys(user_phone) {
	console.log("getting pending remindlys..."); 
	$.post("http://www.aerodroid.com/remindly/user_remindlys.php",
		{
			"user_phone" : user_phone
		}, onReceiveRemindlys);
}

function onReceiveRemindlys(result) { 
	for(var i in result) {
		var message = result[i];
		console.log("Message " + i);
		console.log("   Recipients: " + message['recipients']);
		console.log("		Time: " + message['time']);
		console.log(" 	Message: " + message['message']);
		console.log("		Status: " + message['status']);
	} 
}




function renderWhoPage() {
	var user_phone = $('#user_phone').val();
	var user_name = $('#user_name_field').val();
	console.log(user_phone);
	console.log(user_name);
	window.location.href = '/who?user_phone=' + user_phone + '&user_name=' + user_name;
}

