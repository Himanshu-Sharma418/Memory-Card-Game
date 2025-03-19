function check() {
    var email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (!email) {
        alert("Please enter a valid email address");
        return;
    }
    if (!pass) {
        alert("Please enter a valid password!");
        return;
    }
    window.location.href = "main.html";
    return;
}