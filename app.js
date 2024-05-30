import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from './firebase.js'


let registerBtn = document.querySelector('#registerBtn');
const registration = (e) => {

     e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let conformPassword = document.querySelector('#retypePassword').value;
    let userName = document.querySelector('#name').value;
    let phoneNumber = document.querySelector('#number').value;



    if (userName === "" || userName.length < 3){
        alert("Please enter your valid name");
    }
    else if (phoneNumber === "" || phoneNumber.length < 11){
        alert("Please enter your phone valid number");
    }
    else if (email === "" || email.indexOf('@') == -1 || email.indexOf('@') == 0){
        alert("Please enter a valid Email");
    } else if (password.length < 6) {
        // If password is less than 6 characters
        alert("Password should have at least 6 characters");
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        // If password does not contain both alphabets and numbers
        alert("Password must contain both alphabets and numbers");
    }else if (password !== conformPassword){
        alert("Your password not match");
    }else{
        
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location.assign('./login.html');
      document.querySelector('')
 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    }

 
   
}
registerBtn.addEventListener("click", registration);



