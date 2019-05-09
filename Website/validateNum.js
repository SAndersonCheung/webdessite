 // A JavaScript function used for form validation
function validateNum() {
    var x, text;
    x = document.getElementById("num").value; // Takes the value entered into the input box

    if (isNaN(x) || x < 1 || x > 5) { // checks if the value is valid
        text = "Input not valid: must be between 1 and 5"; // outputs not valid if not valid
    } else {
        text = "Input OK"; // outputs valid otherwise
    }
    document.getElementById("fve").innerHTML = text; // outputs the text

}