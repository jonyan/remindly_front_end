$("#headerinfo").click();

var recipients_names;

$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	} else if($.cookie("temp_message")) {
		$("#message_textbox").val($.cookie("temp_message"))
	}
});

function messageBackAction() {
	$.cookie("temp_message", $("#message_textbox").val());
	parent.history.back();
}

function displayHeaderInfo() {
	var time = $('#time').val();
	var datetime = time.split("_");
	var recipient1 = $('#recipient1').val();
	var recipient2 = $('#recipient2').val();
	var recipient3 = $('#recipient3').val();
	var recipient4 = $('#recipient4').val();
	
	var recipients = "";
	if (recipient1 == "self") {
		recipients += "myself";
	} else if(recipient1 != "name=\"recipient1\"") {
		recipients += recipient1;
	}

	if (recipient2 != "name=\"recipient2\"") {
		recipients += ", " + recipient2;
	}

	if (recipient3 != "name=\"recipient3\"") {
		recipients += ", " + recipient3;
	}

	if (recipient4 != "name=\"recipient4\"") {
		recipients += ", " + recipient4;
	}

	var recipients_string = "";
	recipients_names = "";
	var recipients_json = JSON.parse($.cookie("recipients"));
	console.log(recipients_json);
	if(recipient1 == "self") {
		recipients_string = "myself";
		recipients_names = "Myself";
	} for(var recipient in recipients_json) {
			if(recipients_string == "") {
				recipients_string += recipients_json[recipient]["recipient_name"];
				recipients_names += recipients_json[recipient]["recipient_name"];
			} else {
				recipients_string += ", " + recipients_json[recipient]["recipient_name"];
				recipients_names += ", " + recipients_json[recipient]["recipient_name"];;
			}
	}

	$("<h2 class='body_normal_text'>This Remindly will be sent to " + recipients_string + " on " + datetime[0] + " at " + datetime[1] + ".</h2>").insertAfter("#message_container");
}

function sendMessageData() {
	
	var recipient1 = $('#recipient1').val();
	var recipient2 = $('#recipient2').val();
	var recipient3 = $('#recipient3').val();
	var recipient4 = $('#recipient4').val();
	var time = $('#time').val();
	var preMessage = $('#message_textbox').val();

	var message = $.cookie("name") + ": " + preMessage + " - via Remindly.me";

	var recipients = "";

	var user_phone_number = $.cookie("user_phone");
	user_phone_number = user_phone_number.substr(1, 3) + user_phone_number.substr(5, 3) + user_phone_number.substr(9, 4);
	console.log(user_phone_number);
	if (recipient1 == "self") {
		recipients += user_phone_number;
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

	send_remindly(user_phone_number, recipients, time, message);
}

function send_remindly(user_phone, recipients, time, message) {
	var user_id = $.cookie("user_id");
	var data = {
			"user_id" : user_id,
			"user_phone" : user_phone, 
			"recipients" : recipients,
			"recipients_names" : recipients_names,
			"time" : time,
			"message" : message
		};
	$.post("http://www.aerodroid.com/remindly/send_remindly.php", data, onFinish);
	console.log(data);
}

function onFinish(result) {
	goToHomeAction();
}