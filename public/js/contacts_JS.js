$(document).ready(function() {
	var user_id = $.cookie('user_id');
	console.log("in post");
	$.post("http://www.aerodroid.com/remindly/user_contacts.php",
		{
			"user_id" : user_id
		},
	onFinishPost);

});

function onFinishPost(result) {
	for (var i in result) {
		var contact = result[i];
		var name = contact['name'];
		var phone = contact['phone'];
		var contact_id = contact['contact_id'];
		createContactsTable(name, phone, contact_id);
	}
}

$(document).on('click', '.delete_contact', function() {
	var contact_id = $(this).closest("td").attr("id");
	var user_id = $.cookie('user_id');


		$.post("http://www.aerodroid.com/remindly/delete_contact.php",
			{
				"contact_id" : contact_id,
				"user_id" : user_id	
			},
		onFinishDelete);

});

function onFinishDelete() {
	location.reload();
}

function createContactsTable(name, phone, contact_id) {

	$("<tr><td id='" + contact_id + "'><a class='delete_contact'><img class='delete_btn' src='images/delete_btn.png'></a></td></tr>" + 
		"<tr><td class='add_contact_row'><h4 class='light'>Name:</h4><h4 class='bold'>" + name + "</h4></td></tr>" + 
		"<tr><td class='add_contact_row'><h4 class='light'>Number:</h4><h4 class='bold'>" + phone + "</h4></td></tr>" +
		"<tr class='edit_btn_row'><td class='horizontal_line_td' id='" + contact_id + "'><a class='edit_btn_link' href='#'><img class='edit_btn' src='images/edit_btn.png'></a><hr class='horizontal_line'></td></tr>").insertBefore('#add_button_row');
}


$(document).on('click', '.edit_btn_link', function() {
	var contact_id = $(this).closest("td").attr("id");
	var user_id = $.cookie('user_id');

	window.location.href = "/edit_contact?contact=" + contact_id;

});

function addContactForm() {
	window.location.href = "/add_contact";

}


		// $("<tr class='contact_name_row'><td class='add_contact_row'><label class='contact_label' for='contact_name'>Name:</label>" + 
		// "<input class='contact_textbox' id='contact_name' type='tel' placeholder='Input Contact Name'></td>" + 
		// "</tr><tr id='contact_phone_row1'><td class='add_contact_row'><label class='contact_label' for='contact_phone'>Number:</label>" + 
		// "<input class='contact_textbox' id='contact_phone' type='tel' placeholder='Input Contact Phone Number'><hr class='horizontal_line2'>").insertBefore('#add_button_row');











