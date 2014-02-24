
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
	// .insertAfter('.body_header_text');
	for(var i in result) {
		 var message = result[i];
		// var table = "<table id='pending_remindly_table'><tr><td>Message #: " + i + "<td></tr><tr><td> Recipients: " + message['recipients'] + "</td></tr><tr><td>Date to Send: " + message['time'] + "</td></tr><tr><td>Message: " + message['message'] + "</td></tr></table>";
		$("<table id='pending_remindly_table'><tr><th>Message #:<th><td>" + i + "</td></tr><tr><td> Recipients: " + message['recipients'] + "</td></tr><tr><td>Date to Send: " + message['time'] + "</td></tr><tr><td>Message: " + message['message'] + "</td></tr></table>").insertAfter('.body_header_text')
		console.log("Message " + i);
		console.log("   Recipients: " + message['recipients']);
		console.log("		Time: " + message['time']);
		console.log(" 	Message: " + message['message']);
		console.log("		Status: " + message['status']);
	} 
}




function renderWhoPage() {
	var user_phone = $('#user_phone').val();
	var user_name = $('#user_name').val();
	console.log(user_phone);
	console.log(user_name);
	window.location.href = '/who?user_phone=' + user_phone + '&user_name=' + user_name;
}

