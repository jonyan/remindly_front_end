// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// 		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// 		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// 		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
// 	ga('send', 'timing', 'timeSpent', 'newWhoPage', 50, 'Remindly', {'page': '/who'});
var contactsJson;
var startTime;

$(document).ready(function() {
	startTime = new Date().getTime();
	console.log("Started watching: " + startTime);
	var user_id = $.cookie("user_id");
	$.post("http://www.aerodroid.com/remindly/user_contacts.php",
		{
			"user_id" : user_id
		},
	onFinishPost);
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
		alert("Please enter a valid name or 10 digit phone number.");
	} else {
		var endTime = new Date().getTime();
		var timeSpent = endTime - startTime;
	  // ga('send', 'timing', 'timeSpent', 'newWhoPage', timeSpent, 'Remindly', {'page': '/who'});
	  // _gaq.push(['_trackTiming', 'timeSpent', 'newWhoPage', timeSpent, 'Remindly']);
	  console.log("Finished timing: " + timeSpent);
	  if (submitNewContacts()) {
		  fillHiddenFormFields();
			$('#add_contacts_form').submit();
		}
	}
}

function fillHiddenFormFields() {
	if (!$('#me_input').is(":checked")) {
		$('#me').prop('checked', false);
	} else {
		$('#me').prop('checked', true);
	}

	for (var row = 1; row <= 5; row++) {
		if ($("#recipient_row" + row).length > 0) {
			if ($("#recipient_input" + row).val() != "") {
				var number = getNumber($("#recipient_input" + row).val());
				console.log(number);
				$('#add_contacts_form').append("<input type='hidden' id='recipient" + row + "' name='recipient" + row + "' value='" + number + "'>");
			}
		}
	}
}

function getNumber(value) {
	for(var i in contactsJson) {
		var contact = contactsJson[i];
		if (contact['name'] == value) {
				return contact['phone'];
		}
	}
}

function submitNewContacts() {
	for (var row = 1; row <= 5; row++) {
		if ($("#recipient_name_row" + row).length > 0){
			if ($("#recipient_name_textbox" + row).val() != "") {
				if (!isNumber($("#recipient_name_textbox" + row).val())) {
					alert("Must input number to add contact!");
					return false;
				} else {
					var user_id = $.cookie('user_id');
					var name = $("#recipient_name_textbox" + row).val();
					var phone = $("#recipient_input" + row).val();
					$.post("http://www.aerodroid.com/remindly/add_contact.php",
							{
								"user_id" : user_id,
								"name" : name,
								"phone" : phone
							},
					onFinishSubmit);
					return true;
				}
			}
		}
	}
	return true;
}

function onFinishSubmit(result) {
	return true;
}

function isInvalid() {
	var isInvalid = false;
	var index = 1;
	var nondigits = /\D/g;

	var value = $('#recipient_input' + index.toString()).val();
		while(value != null) {
			if (value != "") {
				if (!isNumber(value)) {
					if(!doesNameExist(value)) {
						isInvalid = true;
						return true;
					}
				} else {
					if (value.length != 10 || nondigits.test(value)) {
						isInvalid = true;
						return true;
					}
				}
			}
			index++;
			value = $('#recipient_input' + index.toString()).val();
		}
		return isInvalid;
}

function isNumber(value) {
	if(isNaN(value)) {
		return false;
	} else {
		return true;
	}
}

function doesNameExist(value) {
	if ($.inArray(value, availableTags) > -1) {
		return true;
	}
	return false;
}


function isEmpty() {
	var isEmpty = true;
	if (!$('#me_input').is(":checked")) {
		var index = 1;

		var value = $('#recipient_input' + index.toString()).val();
		while(value != null) {
			if (value != "") {
				isEmpty == false;
				return false;
			}
			index++;
			value = $('#recipient_input' + index.toString()).val();
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

$('#me_input').change(function() {
	if ($('#me_input').is(':checked'))  {
		numTextFields--;
	} else {
		numTextFields++;
	}
	if ((!$('#me_input').is(':checked')) && numTextFields <= 1) {
		console.log("uncheck and add field");
		addTextField();
	}
	if ($('#me_input').is(':checked') && numTextFields < 0) {
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
	// ga("send", "event", "whoNew_plusButton", "click");
	if (numTextFields > 0) {
		var newTextField = "<tr id='recipient_row" + recipientNumber
			+ "'><td class='contact_row'><input onclick='auto_complete()'' class='recipient_textbox' id='recipient_input"
			+ recipientNumber + "' type='tel' placeholder='Input name or phone number' name='recipient_input"
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

var availableTags = new Array();
function onFinishPost(result) {
	contactsJson=result;
	for(var i in result) {
		var contact = result[i];
		availableTags[i] = contact['name'];
	}

}


// AUTO COMPLETE CODE

function auto_complete() {
	console.log("hello");
	$( ".recipient_textbox" ).autocomplete({
    source: availableTags
  });

}

