// Add a click event listener to each paragraph element for "See more/less"
//  and bind it to the toggleContent function.
// In other words, when the paragraph element is clicked, call toggleContent.
document.querySelector('#showHide1').addEventListener('click', toggleContent);
document.querySelector('#showHide2').addEventListener('click', toggleContent);
document.querySelector('#showHide3').addEventListener('click', toggleContent);
document.querySelector('#showHide4').addEventListener('click', toggleContent);

// Determine which of the 4 paragraph elements was clicked by checking the value of the id attribute.
// Then get the associated details paragraph element, and assign to the details variable.
// 'this' is a variable (set by JavaScript) that corresponds to the clicked element.
function toggleContent()  {
	var details;
	if (this.id == "showHide1")   // Is the id of the clicked element = 'showHide1' ?
	   details = document.querySelector('#details1');
	if (this.id == "showHide2")
	   details = document.querySelector('#details2');
	if (this.id == "showHide3")
	   details = document.querySelector('#details3');
	if (this.id == "showHide4")
	   details = document.querySelector('#details4');

    // Toggle the details display and "See/Hide description" text
    if (this.textContent == "See description") {
        details.style.display = 'block';    // Show the details paragraph
        this.textContent = "Hide description";      // Change the clickable text
    }
    else {  // Text content = "Hide description"
       details.style.display = 'none';      // Hide the details paragraph
       this.textContent = "See description";       // Change the clickable text
    }
}
