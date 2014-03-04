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
			"background-color": "white"
		});
}

function buttonUnfill(e) {
	e.preventDefault();
		$(this).css({
			transition: 'background-color .5s ease-in-out',
			"background-color": "none"
		});
}


function goToHomeAction() {
	$.removeCookie("temp_datetime");
	$.removeCookie("temp_message");
	window.location.href = "/user_home";
}

function isLoggedIn() {
	return $.cookie("user_phone") && $.cookie("name") && $.cookie("user_id");
}

function logout() {
	$.removeCookie("user_phone");
	$.removeCookie("name");
	$.removeCookie("user_id");
	$.removeCookie("temp_datetime");
	$.removeCookie("temp_message");
	window.location.href = "/";
}
