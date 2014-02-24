$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});

function submitWhenData() {
	if ($('#datetime').val() == "") {
		alert("You must select a date and time!");
	} else {
		console.log("triggering form");
		$('#submitBtn').click();
	}
}