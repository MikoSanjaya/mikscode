function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username and password are required!");
    } else {
        // Perform additional validation or form submission logic here
        alert("Form submitted successfully!");
    }
}
