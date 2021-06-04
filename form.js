document.addEventListener("DOMContentLoaded", function() {
    // form listener
	// set the number of children to 0 - fixes issue where old value is saved on refresh
	document.getElementById('number_of_children').value = 0

	var add_child = document.getElementById("add_child")
	var remove_child = document.getElementById("remove_child")

	add_child.addEventListener("click", function() {
		var old_value = document.getElementById('number_of_children').value
		var new_value = parseFloat(old_value) + 1
		if (old_value < 10) {
			var new_value = parseFloat(old_value) + 1
		} else {
			new_value = 10
		}
		document.getElementById('number_of_children').value = new_value
		change_children(new_value);
	})

	remove_child.addEventListener("click", function() {
		var old_value = document.getElementById('number_of_children').value
		
		if (old_value > 0) {
			var new_value = parseFloat(old_value) - 1
		} else {
			new_value = 0
		}
		document.getElementById('number_of_children').value = new_value
		change_children(new_value);
	})

	function change_children(updated_number) {
		var child_section = document.getElementById("child_forms")
		// remove all children from child_forms
		while (child_section.firstChild) {
			child_section.removeChild(child_section.lastChild)
		}
		// and then add form elements for the updated number of children
		for (i = 0; i < updated_number; i++) {

			var fieldset = document.createElement("fieldset")
			var legend = fieldset.appendChild(document.createElement("legend"))
			legend.innerHTML = "Child " + (i+1)
			var name_label = fieldset.appendChild(document.createElement("label"))
			name_label.innerHTML = "Child " + (i+1) + "\'s name"
			var name = fieldset.appendChild(document.createElement("input"))
			name.type = "text"
			name.name = "Child " + (i+1) + " Name"
			name.placeholder = "Full name"
			name.classList.add("input")
			var age_label = fieldset.appendChild(document.createElement("label"))
			fieldset.appendChild(document.createElement("br"))
			age_label.innerHTML = "Child " + (i+1) + "\'s age"
			var age = fieldset.appendChild(document.createElement("input"))
			age.type = "number"
			age.name = "Child " + (i+1) + " Age"
			age.placeholder = "Age"
			age.classList.add("input")
			fieldset.appendChild(document.createElement("br"))

			child_section.appendChild(fieldset)
		}
	}
})