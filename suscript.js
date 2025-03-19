function check() {
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    var mobile = document.getElementById("mobile").value;
    var terms = document.getElementById("terms").checked;

    if (!name) {
        alert("Please enter a valid name");
        return;
    }
    if (isNaN(age) || age < 1 || age > 120) {
        alert("Please enter a valid age");
        return;
    }
    if (!email) {
        alert("Please enter a valid email address");
        return;
    }
    if (!pass) {
        alert("Please enter a valid password!");
        return;
    }
    if (mobile.length != 10) {
        alert("Please enter a valid 10 digit mobile number");
        return;
    }
    if (!terms) {
        alert("Please check the Terms and Conditions to proceed");
        return;
    }

    var con = confirm("Please confirm your details:" + 
        "\nName: " + name + 
        "\nAge: " + age + 
        "\nEmail: " + email + 
        "\nMobile Number: " + mobile);

    if (con) {
        alert("Signed Up Successfully!");
        window.location.href = "main.html";
    }
    return;
}