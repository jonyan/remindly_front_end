$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	} else if($.cookie("temp_datetime")) {
		$("#datetime").val($.cookie("temp_datetime"));
	}
});

function whenBackAction() {
	console.log("Remember when: " + $("#datetime").val());
	$.cookie("temp_datetime", $("#datetime").val());
	parent.history.back();
}

function submitWhenData() {
	if ($('#datetime').val() == "") {
		alert("Please enter the date and time this Remindly should be sent at.");
	} else {
		$.cookie("temp_datetime", $("#datetime").val());
		$('#submitBtn').click();
	}
}