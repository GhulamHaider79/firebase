import {
    auth,
    signInWithEmailAndPassword,
    sendEmailVerification ,

} from './firebase.js'


document.addEventListener('DOMContentLoaded', () => {
    const login_Btn = document.getElementById('login_Btn');
    
    const logIn = (e) => {
        e.preventDefault();
        let login_container= document.querySelector('.login_container');
        let login_profile_container = document.querySelector('.login_profile_container');
         const email = document.getElementById('login_email').value;
        const password = document.getElementById('login_password').value;
        let showUserEmail = document.querySelector('.showUserEmail');
        let emailVerificationNote = document.querySelector('.emailVerificationNote');
        

       
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                
                login_profile_container.classList.remove('for_display_none');
                login_container.classList.remove('login_container');
                login_container.classList.add('for_display_none');
                showUserEmail.innerHTML = user.email;
                if (user.emailVerified == false) {
                    emailVerificationNote.innerHTML = `Your Email ${user.email} Not verified click on button for verification`
                }else{
                    emailVerificationNote.innerHTML = 'Your Email verified'
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    login_Btn.addEventListener('click', logIn);




    document.querySelector('.verificationEmail').addEventListener('click', () => {
        if (!auth.currentUser) {
            console.error("User is not logged in.");
            return;
        }

        if (auth.currentUser.emailVerified) {
            console.log("Email is already verified.");
            return;
        }

        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Email verification sent!");
                // Optionally, notify the user that the verification email has been sent.
            })
            .catch((error) => {
                if (error.code === 'auth/too-many-requests') {
                    console.error("Too many requests. Please try again later.");
                    // Optionally, notify the user to try again later.
                } else {
                    console.error(error.code, error.message);
                }
            });
    });
});





