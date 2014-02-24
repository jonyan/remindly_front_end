function submitWhoData() {
	if (isEmpty()) alert("Please select at least one recipient");
	else {
		$('#submitBtn').click();
	}


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

	if (isEmpty) {
		return true;
	} else {
		return false;
	}
}

$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});

