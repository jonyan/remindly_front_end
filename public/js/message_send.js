function sendMessageData() {
	var recipient1 = $('#recipient1').val();
	var recipient2 = $('#recipient2').val();
	var recipient3 = $('#recipient3').val();
	var recipient4 = $('#recipient4').val();
	var time = $('#time').val();
	var preMessage = $('#message_textbox').val();

	var message = $.cookie("name") + ": " + preMessage;

	var recipients = "";

	if (recipient1 == "self") {
		recipients += $.cookie("user_phone");
	} else if(recipient1 != "name=\"recipient1\"") {
		recipients += recipient1;
	}

	if (recipient2 != "name=\"recipient2\"") {
		recipients += "," + recipient2;
	}

	if (recipient3 != "name=\"recipient3\"") {
		recipients += "," + recipient3;
	}

	if (recipient4 != "name=\"recipient4\"") {
		recipients += "," + recipient4;
	}

	send_remindly($.cookie("user_phone"), recipients, time, message);
}
function send_remindly(user_phone, recipients, time, message) { 
	$.post("http://www.aerodroid.com/remindly/send_remindly.php",
		{
			"user_phone" : user_phone, 
			"recipients" : recipients, 
			"time" : time,
			"message" : message
		}, onFinish);
}

function onFinish(result) {
	console.log("Working?");
	window.location.href = '/user_home';
}