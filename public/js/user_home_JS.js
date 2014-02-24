
$("#get_pending_remindlys").click();

function getPendingRemindlys() {

	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	} else {
		get_users_remindlys($.cookie("user_phone"));
	}
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
		$("<table id='pending_remindly_table'><tr><th>Message #:<th><td>"
			+ i + "</td></tr><tr><td> Recipients: " + message['recipients'] 
			+ "</td></tr><tr><td>Date to Send: " + message['time'] + "</td></tr><tr><td>Message: "
			+ message['message'] + "</td></tr></table>").insertAfter('.body_header_text');
		console.log("Message " + i);
		console.log("   Recipients: " + message['recipients']);
		console.log("	Time: " + message['time']);
		console.log(" 	Message: " + message['message']);
		console.log("	Status: " + message['status']);
	} 
}

function renderWhoPage() {
	window.location.href = '/who';
}

