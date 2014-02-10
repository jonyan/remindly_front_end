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


var digitCount = 1; // keeps track of which digit the user is currently typing
var phoneNumber = ["(","_","_","_",")","_","_","_","-","_","_","_","_"];
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected index.js!");

	$("#digit1").click(displayDigit1);
	$("#digit2").click(displayDigit2);
	$("#digit3").click(displayDigit3);
	$("#digit4").click(displayDigit4);
	$("#digit5").click(displayDigit5);
	$("#digit6").click(displayDigit6);
	$("#digit7").click(displayDigit7);
	$("#digit8").click(displayDigit8);
	$("#digit9").click(displayDigit9);
	$("#digit0").click(displayDigit0);
	$("#delete_btn").click(deleteDigit);
}

function deleteDigit(e) {
	if (digitCount == 1) return; 
	if (digitCount == 9 || digitCount == 5) {
		digitCount -= 2;
		phoneNumber[digitCount] = "_";
		$("#user_phone_number").text(phoneNumber.join(" "));
	} 
	else {
		digitCount--;
		phoneNumber[digitCount] = "_";
		$("#user_phone_number").text(phoneNumber.join(" "));
	}
	console.log(phoneNumber);
}

function displayDigit1(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 1 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 1;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit2(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 2 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 2;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit3(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 3 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 3;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit4(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 4 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 4;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit5(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 5 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 5;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit6(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 6 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 6;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit7(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 7 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 7;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit8(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 8 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 8;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit9(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 9 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 9;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}

function displayDigit0(e) {
	if (digitCount == 13) return;
	e.preventDefault();
	console.log("digit 0 pressed");
	console.log(phoneNumber);
	phoneNumber[digitCount] = 0;
	$("#user_phone_number").text(phoneNumber.join(" "));

	// update digitCount
	if (digitCount == 3) digitCount += 2; // account for paranthesis )
	else if (digitCount == 7) digitCount += 2; // account for dash -
	else digitCount++;
}









/* 
 * Code to fill buttons upon clicking, application wide
 */


$('.nav_footer_button').mousedown(buttonFill);
$('.nav_footer_button').mouseup(buttonUnfill);



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
