var startTime;

$(document).ready(function() {
	startTime = new Date().getTime();
});


$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});

// function submitWhoData() {
// 	var endTime = new Date().getTime();
// 	var timeSpent = endTime - startTime;
// 	ga('send', 'timing', 'timeSpent', 'newWhoPage', timeSpent);
// 	$('#submitBtn').click();
// }


function submitWhoData() {
	if (isEmpty()) {
		alert("Please select at least one recipient");
	} else if (isInvalid()) {
		alert("Please enter a valid 10 digit phone number.");
	} else {
		var endTime = new Date().getTime();
		var timeSpent = endTime - startTime;
	  	ga('send', 'timing', 'timeSpent', 'oldWhoPage', timeSpent, 'Google CDN');
		console.log("hello");
		$('#add_contacts_form').submit();
	}
}

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
		$("#recipient5").remove();
		numTextFields++;
		recipientNumber--;
	}
});


function addTextField() {
	ga("send", "event", "whoOld_addTextField", "click");
	if (numTextFields > 0) {
		var newTextField = "<tr id='recipient" + recipientNumber
			+ "'><td class='contact_row'><input class='recipient_textbox' id='recipient"
			+ recipientNumber + "' type='tel' onclick='addTextField()' placeholder='Add "
			+ numTextFields + " more phone #s or names...' name='recipient"
			+ recipientNumber +"'></td></tr>";
		$(newTextField).insertAfter('#recipient' + (recipientNumber - 1));
		numTextFields--;
		recipientNumber++;
	}
	console.log(numTextFields);

}