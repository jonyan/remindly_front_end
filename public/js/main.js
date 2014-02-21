'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

/* APPLICATION WIDE */

/* 
 * Code to fill buttons upon clicking, application wide
 */

$('.nav_footer_button').mousedown(buttonFill);
$('.nav_footer_button').mouseup(buttonUnfill);

$('.nav_footer_button_option').mousedown(buttonFill);
$('.nav_footer_button_option').mouseup(buttonUnfill);


function buttonFill(e) {
		e.preventDefault();
		$(this).css({
			transition: 'background-color .1s ease-in-out',
			"background-color": "rgb(52, 52, 52)"
		});
}

function buttonUnfill(e) {
	e.preventDefault();
		$(this).css({
			transition: 'background-color .5s ease-in-out',
			"background-color": "none"
		});
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
		var newTextField = "<tr id='recipient" + recipientNumber + "'><td class='contact_row'><input class='recipient_textbox' id='recipient" + recipientNumber + "' type='tel' onclick='addTextField()' placeholder='Add " + numTextFields + " more phone #s or names...' name='recipient" + recipientNumber +"'></td></tr>"; 
		$(newTextField).insertAfter('#recipient' + (recipientNumber - 1));
		numTextFields--;
		recipientNumber++;
	}
	console.log(numTextFields);

}
