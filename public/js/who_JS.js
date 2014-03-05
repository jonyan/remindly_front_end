(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	ga('send', 'timing', 'timeSpent', 'newWhoPage', 50, 'Remindly', {'page': '/who'});

var startTime;

$(document).ready(function() {
	startTime = new Date().getTime();
	console.log("Started watching: " + startTime);
});


$(document).on('click', '.add_name_btn', function() {
	var id = $(this).closest("tr").attr("id");
	$("<tr id='recipient_name_row" + id.substr(13) + "'><td class='contact_row'><img class='sub_arrow' src='images/sub_arrow.png'><input class='recipient_name_textbox' id='recipient_name_textbox" + id.substr(13) +"' type='text' placeholder='Input Name to Save in Contacts'></td></tr>").insertAfter("#" + id);
	$("#add_name" + id.substr(13)).replaceWith("<a id='add_name_faded'> <img class='plus_btn' src='images/add_user_btn_faded.png'></a>");

});


function submitWhoData() {
	if (isEmpty()) {
		alert("Please select at least one recipient");
	} else if (isInvalid()) {
		alert("Please enter a valid 10 digit phone number.");
	} else {
		var endTime = new Date().getTime();
		var timeSpent = endTime - startTime;
	  ga('send', 'timing', 'timeSpent', 'newWhoPage', timeSpent, 'Remindly', {'page': '/who'});
	  // _gaq.push(['_trackTiming', 'timeSpent', 'newWhoPage', timeSpent, 'Remindly']);
	  console.log("Finished timing: " + timeSpent);
	  submitNewContacts();
		$('#add_contacts_form').submit();
	}
}

function submitNewContacts() {
	// console.log("hello");
	for (var row = 1; row <= 5; row++) {
		if ($("#recipient_name_row" + row).length > 0){
			if ($("#recipient_name_textbox" + row).val() != "") {
				var user_id = $.cookie('user_id');
				var name = $("#recipient_name_textbox" + row).val();
				var phone = $("#recipient" + row).val();
				$.post("http://www.aerodroid.com/remindly/add_contact.php",
						{
							"user_id" : user_id,
							"name" : name,
							"phone" : phone
						},
				onFinishPost);
			}
		} else {
			console.log(row + "th row doesn't exist");

		}
	}
}

function onFinishPost(result) {
	console.log(result);
}

// 	var data = {
// 			'newContact' : [
// 				{"user_id" : $.cookie(“user_id”)},
// 				{"name" : req.query.recipient1},
// 				{"recipient" : req.query.recipient2},
// 				{"recipient" : req.query.recipient3},
// 				{"recipient" : req.query.recipient4}
// 			]
// 		}
// }

// 	var nondigits = /\D/g;

// else if(phone_number.length != 10 || nondigits.test(phone_number)) {
// 		alert("Please enter a valid 10 digit phone number.");
// 	} 

function isInvalid() {
	var isInvalid = false;
	var index = 1;
	var nondigits = /\D/g;

	var value = $('#recipient' + index.toString()).val();
		while(value != null) {
			if (value != "") {
				if (value.length != 10 || nondigits.test(value)) {
					isInvalid = true;
					return true;
				}
			}
			index++;
			value = $('#recipient' + index.toString()).val();
		}
		return isInvalid;
}


function isEmpty() {
	var isEmpty = true;
	if (!$('#me').is(":checked")) {
		var index = 1;

		var value = $('#recipient' + index.toString()).val();
		while(value != null) {
			if (value != "") {
				isEmpty == false;
				return false;
			}
			index++;
			value = $('#recipient' + index.toString()).val();
		}
	} else {
		isEmpty = false;
	}
	return isEmpty
}




/* WHO PAGE */

/* If user inputs name/number in the text field on 
 * who page, this code will create another input field
 * dynamically; up to 4 text fields if the 'me' checkbox
 * is checked, up to 5 text fields if the 'me' checkbox
 * is unchecked
 */

var numTextFields = 3;
var recipientNumber = 2;

$('#me').change(function() {
	if ($('#me').is(':checked'))  {
		numTextFields--;
	} else {
		numTextFields++;
	}
	if ((!$('#me').is(':checked')) && numTextFields <= 1) {
		console.log("uncheck and add field");
		addTextField();
	}
	if ($('#me').is(':checked') && numTextFields < 0) {
		$("#recipient_row5").remove();
		$("#recipient_name_row5").remove();
		var add_button_row = $("#add_button_row");
		add_button_row.remove();
		numTextFields++;
		recipientNumber--;
		var htmlElemToInsertAfter;
		if (($("#recipient_name_row" + (recipientNumber - 1))).length > 0) {
			htmlElemToInsertAfter = "#recipient_name_row" + (recipientNumber - 1);
		} else {
			htmlElemToInsertAfter = "#recipient_row" + (recipientNumber - 1);
		}

		add_button_row.insertAfter(htmlElemToInsertAfter);
	}
});
function addTextField() {
	ga("send", "event", "whoNew_plusButton", "click");
	if (numTextFields > 0) {
		var newTextField = "<tr id='recipient_row" + recipientNumber
			+ "'><td class='contact_row'><input class='recipient_textbox' id='recipient"
			+ recipientNumber + "' type='tel' placeholder='Input phone number' name='recipient"
			+ recipientNumber +"'><a id='add_name" + recipientNumber + "' class='add_name_btn'><img class='plus_btn' " + 
			"src='images/add_user_btn.png'></a></td></tr>";
			var htmlElemToInsertAfter;
			if (($("#recipient_name_row" + (recipientNumber - 1))).length > 0) {
				htmlElemToInsertAfter = "#recipient_name_row" + (recipientNumber - 1);
			} else {
				htmlElemToInsertAfter = "#recipient_row" + (recipientNumber - 1);
			}
		$(newTextField).insertAfter(htmlElemToInsertAfter);
		numTextFields--;
		recipientNumber++;
	}
	console.log(numTextFields);

}

$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});

