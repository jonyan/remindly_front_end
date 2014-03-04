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
		$('#add_contacts_form').submit();
	}
}

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
		$("#recipient5").remove();
		var add_button_row = $("#add_button_row");
		add_button_row.remove();
		numTextFields++;
		recipientNumber--;
		add_button_row.insertAfter('#recipient_row' + (recipientNumber - 1));
	}
});


function addTextField() {
	if (numTextFields > 0) {
		var newTextField = "<tr id='recipient_row" + recipientNumber
			+ "'><td class='contact_row'><input class='recipient_textbox' id='recipient"
			+ recipientNumber + "' type='tel' placeholder='Input phone number' name='recipient"
			+ recipientNumber +"'></td></tr>";

		$(newTextField).insertAfter('#recipient_row' + (recipientNumber - 1));
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

