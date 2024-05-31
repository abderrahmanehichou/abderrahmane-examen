document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        document.getElementById("error").innerText = "Las contraseñas no coinciden";
        return;
    }

    if (!username || !email || !password || !confirm_password) {
        document.getElementById("error").innerText = "Por favor completa todos los campos";
        return;
    }
    var user = {
        username: username,
        email: email,
        password: password
    };

   
    localStorage.setItem(username, JSON.stringify(user));

    alert("Cuenta creada exitosamente");
    window.location.href = "index.html"; 
});




document.getElementById('agree_terms').addEventListener('change', function () {
    document.getElementById('submitButton').disabled = !this.checked;
});