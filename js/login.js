import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// ===============================
// Show / Hide Password
// ===============================
window.showPassword = function () {

    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

};

// ===============================
// Login
// ===============================
const loginBtn = document.getElementById("loginbtn");

loginBtn.addEventListener("click", function () {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter Email and Password");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            alert("✅ Login Successful");

            window.location.href = "dashboard.html";

        })

        .catch((error) => {

            switch (error.code) {

                case "auth/invalid-email":
                    alert("Invalid Email Address");
                    break;

                case "auth/user-not-found":
                    alert("User not found");
                    break;

                case "auth/wrong-password":
                    alert("Wrong Password");
                    break;

                case "auth/invalid-credential":
                    alert("Invalid Email or Password");
                    break;

                default:
                    alert(error.message);

            }

        });

});