

function addedComment() {
	var name = document.getElementById("inputName").value
	var text = document.createTextNode(name)
	var newName = document.createElement("li")
	newName.appendChild(text)
	document.getElementById("addedComment").appendChild(newName)

	var comment = document.getElementById("comment").value
	var textTwo = document.createTextNode(comment)
	var newComment = document.createElement("li")
	newComment.appendChild(textTwo)
	document.getElementById("addedComment").appendChild(newComment)


}	


