
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
	console.log(result.length);
	$("<center><p id='numpending'>You have <b>" + result.length + "</b> pending remindly(s)</p></center>").insertAfter('.body_header_text')

	for(var i in result) {
		 var message = result[i];
		 var datetime = message['time'].split("_");
		 var indexofmsg = message['message'].indexOf(":") + 2;
		 console.log("index of msg: " + indexofmsg);
		 var extractedmsg = message['message'].substr(indexofmsg);
		 console.log("extracted message: " + extractedmsg);
		 var msgnum = parseInt(i) +1;
		 console.log("message number: " + msgnum);
		// var table = "<table id='pending_remindly_table'><tr><td>Message #: " + i + "<td></tr><tr><td> Recipients: " + message['recipients'] + "</td></tr><tr><td>Date to Send: " + message['time'] + "</td></tr><tr><td>Message: " + message['message'] + "</td></tr></table>";
		// style 1: who what when
		// $("<table id='pending_remindly_table'><tr><th>Who: </th><td>" + message['recipients'] + "</td></tr><tr><th>What: </th><td>" + extractedmsg+ "</tr><tr><th>When: </th><td>on " + datetime[0] + " at " + datetime[1] + "</td></tr></table><br>").insertAfter('#numpending')
		
		// style 2: 
		// $("<table id='pending_remindly_table'><tr><th>To: </th><td>" + message['recipients'] + "</td></tr><tr><th>What: </th><td>" + extractedmsg+ "</tr><tr><th></th><td><i>To be sent on " + datetime[0] + " at " + datetime[1] + "</i></td></tr></table><br>").insertAfter('#numpending')

		// style 3: only message is green -- this is pretty damn ugly lol
		// $("<b>Message " + msgnum + ": </b> <center><p id='msginfo'> Send on " + datetime[0] + " at " + datetime[1] + " to " + message['recipients'] + "</p></center>" +
		 // "<table id='pending_remindly_table'><tr><td>" + extractedmsg+ "</td></tr></table><br>").insertAfter('#numpending')

		// style 4:
		$("<b>Remindly #" + msgnum + "</b> <p id='msginfo'>To: " + message['recipients'] + "</p>" +
		 "<table id='pending_remindly_table'><tr><td>" + extractedmsg+ "</tr><tr><td><i>To be sent on " + datetime[0] + " at " + datetime[1] + "</i></td></tr></table><hr>").insertAfter('#numpending')

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

