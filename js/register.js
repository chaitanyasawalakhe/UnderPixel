import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Show Password
window.showPassword = function () {

    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

};

// Register Button
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)

        .then(() => {

            alert("🎉 Account Created Successfully!");

            window.location.href = "login.html";

        })

        .catch((error) => {

            switch (error.code) {

                case "auth/email-already-in-use":
                    alert("Email already exists");
                    break;

                case "auth/weak-password":
                    alert("Password must be at least 6 characters");
                    break;

                case "auth/invalid-email":
                    alert("Invalid Email");
                    break;

                default:
                    alert(error.message);

            }

        });

});