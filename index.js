import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from './firebase.js'


document.addEventListener('DOMContentLoaded', () => {
    const login_Btn = document.getElementById('login_Btn');

    const logIn = (e) => {
        e.preventDefault();
        const email = document.getElementById('login_email').value;
        const password = document.getElementById('login_password').value;

        console.log(email);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("login success");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    login_Btn.addEventListener('click', logIn);
});