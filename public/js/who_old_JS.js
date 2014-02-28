$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});

function submitWhoData() {
	$('#submitBtn').click();
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
		numTextFields++;
		recipientNumber--;
	}
});


function addTextField() {
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