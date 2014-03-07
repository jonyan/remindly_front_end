$(document).ready(function() {
	var contact_id = $("#contact_id_field").val();
	var user_id = $.cookie('user_id');
	console.log("in post");
	$.post("http://www.aerodroid.com/remindly/get_contact.php",
		{	
			"contact_id" : contact_id,
			"user_id" : user_id
		},
	onFinishPost);

});

function onFinishPost(contact) {
	var contact_id = contact['contact_id'];
	var name = contact['name'];
	var phone = contact['phone'];
	console.log(contact);

	var contact_id = contact['contact_id'];
		$("<tr class='contact_name_row'><td class='add_contact_row'><label class='contact_label' for='contact_name'>Name:</label>" + 
		"<input class='contact_textbox' id='contact_name' type='tel' value='" + name + "'></td>" + 
		"</tr><tr id='contact_phone_row1'><td class='add_contact_row'><label class='contact_label' for='contact_phone'>Number:</label>" + 
		"<input class='contact_textbox' id='contact_phone' type='tel' value='" + phone + "'>").insertBefore('#delete_contact_row');


}

function updateContactsData() {
	var contact_id = $("#contact_id_field").val();
	var user_id = $.cookie('user_id');
	var name = $("#contact_name").val();
	var phone = $("#contact_phone").val();
	
	if (isEmpty()) {
		alert("Field left empty!");
	} else if (isInvalid(phone)) {
		alert("Please enter a valid phone number!")
	} else {

		$.post("http://www.aerodroid.com/remindly/edit_contact.php",
			{
				"contact_id" : contact_id,
				"user_id" : user_id,
				"name" : name, 			// new name
				"phone" : phone		// new phone
			},
		onFinishEdit);
	}

}

function onFinishEdit() {
	alert("Update Successful!")
	window.location.href = "/contacts";
}


function isInvalid(phone) {
	var nondigits = /\D/g;
	console.log(phone);
	if (phone.length != 10 || nondigits.test(phone)) {
		console.log("returning true");
		return true;
	}
	return false;
}

function isEmpty() {
	if ($("#contact_name").val() == "" || $('#contact_phone').val() == "") {
		return true;
	}
	return false;
}

$(document).on('click', '.edit_contact_delete_btn', function() {
	var result = confirm("Are you sure?")
	if (result) {
			var contact_id = $("#contact_id_field").val();
			var user_id = $.cookie('user_id');
				$.post("http://www.aerodroid.com/remindly/delete_contact.php",
					{
						"contact_id" : contact_id,
						"user_id" : user_id	
					},
				onFinishDelete);
	}

});

function onFinishDelete() {
	alert("Deleted Contact!")
	window.location.href = "/contacts";
}
