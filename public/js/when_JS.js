

function submitWhenData() {
	if ($('#datetime').val() == "") {
		alert("You must select a date and time!");
	} else {
		console.log("triggering form");
		$('#submitBtn').click();

	}
}