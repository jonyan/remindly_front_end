$("#get_pending_remindlys").click();

function getPendingRemindlys() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	} else {
		var user_phone = $.cookie("user_phone");
		user_phone = user_phone.substr(1, 3) + user_phone.substr(5, 3) + user_phone.substr(9, 4);
		get_users_remindlys(user_phone);
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
	console.log(result);
	var userName = $.cookie("name");

	$("#body").prepend($("<h2 class='body_header_text'>Hi, " + userName + "!</h2>"));
	// $("<h3 class='sub_body_header_text'>Your number: " + $.cookie("user_phone") + "</h3>").insertAfter('.body_header_text');
	$("<h2 id='numpending' class='body_normal_text'>You have <b>" + result.length + "</b> pending Remindly(s).</h2>").insertAfter('.body_header_text');

	for(var i in result) {
		 var message = result[i];
		 var datetime = message['time'].split("_");
		 var indexofmsg = message['message'].indexOf(":") + 2;
		 console.log("index of msg: " + indexofmsg);
		 var extractedmsg = message['message'].substr(indexofmsg);
		 console.log("extracted message: " + extractedmsg);
		 var msgnum = parseInt(i) +1;
		 console.log("message number: " + msgnum);
		 var message_id = message['message_id'];

		$("<div id='msginfo'>To: " + message['recipients']
			+ "<input type='hidden' class='message_id' value='" + message_id + "'><a class='delete_remindly'><img class='delete_btn' src='images/delete_btn.png'></a></div>"+ "<table id='pending_remindly_table'><tr><td>" + extractedmsg + "</tr><tr><td><i class='body_small_text'>"
			+ datetime[0] + " at " + datetime[1] + "</i></td></tr></table><hr>").insertAfter('#numpending');
	}
}

$(document).on('click', '.delete_remindly', function() {
	var continuteToDeleteRemindly = confirm("Are you sure you want to delete this Remindly?");
	if (continuteToDeleteRemindly == true) {
		var user_id = $.cookie('user_id');
		var message_id = $(this).siblings().val();
		console.log("Message ID: " + message_id);
		$.post("http://www.aerodroid.com/remindly/cancel_remindly.php",
			{
				"user_id" : user_id,
				"message_id" : message_id	
			},
		onFinishDelete);
	} else {
		// do nothing
	}

	function onFinishDelete(result) {
		location.reload();
	}



});

function renderWhoPage() {
	window.location.href = '/who';
}

