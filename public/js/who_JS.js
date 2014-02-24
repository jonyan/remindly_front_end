$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});

function submitWhoData() {
	// if ($('#recipient1').val() == "" && $('#recipient2').val() == "" && $('#recipient3').val() == "" && $('#recipient4').val() == "" &&
	// !$('#me').is(":checked")){
	// 	alert("You must input at least one recipient!");
	// } else {
		console.log("triggering form");
		$('#submitBtn').click();

	// }
}