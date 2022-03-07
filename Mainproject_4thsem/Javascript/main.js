function validateDetails(){
    userName = document.getElementById('username').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;



    userNameError = document.getElementById('username-error');
    emailError = document.getElementById('email-error');
    phoneError = document.getElementById('phone-error');


    if(userName == ""){
        userNameError.innerHTML="Username cannot be EMPTY";
        userNameError.style.display="block";
    }else{
        if(userName.length<8){
            userNameError.innerHTML="Username has less then 8 characters";
            userNameError.style.display="block";
        }
    }

    if(email == ""){
        emailError.innerHTML="Email cannot be EMPTY";
        emailError.style.display="block";
    } 

    if(phone == ""){
        phoneError.innerHTML="Phone number cannot be EMPTY";
        phoneError.style.display="block";
    }else{
        if(phone.length<=10){
            phoneError.innerHTML="Phone number cannot be less than 10 digits";
            phoneError.style.display="block";
        }else{
            if(phone.length>10){
                phoneError.innerHTML="Phone number cannot be greater than 10 digits";
                phoneError.style.display="block";
            }
        }
    }

}

function validateContact(){
    firstName = document.getElementById('fname').value;
    lastName = document.getElementById('lname').value;
    email = document.getElementById('email').value;

    fNameError = document.getElementById('fname-error');
    lNameError = document.getElementById('lname-error');
    emailError = document.getElementById('email-error');


    if(firstName == ""){
        fNameError.innerHTML="First name cannot be empty";
        fNameError.style.display="block";
    }

    if(lastName == ""){
        lNameError.innerHTML="Last name cannot be empty";
        lNameError.style.display="block";
    }

    if(email == ""){
        emailError.innerHTML="Email cannot be empty";
        emailError.style.display="block";
    }


}