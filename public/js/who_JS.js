function submitWhoData() {
	if (isEmpty()) {
		alert("Please select at least one recipient");
	} 
	if (isInvalid()) {
		alert("Please enter a valid 10 digit phone number.");
	} else {
		$('#submitBtn').click();
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

$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});

