const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirmPassword');

form.addEventListener('submit' ,e=> {
    e.preventDefault();
    checkInputs();

})

//Submit Function

function checkInputs(){
    //get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorfor(username, 'Username cannot be blank');
    }else{
        //add success class   
        setSuccessfor(username); 
    }
    if (emailValue === '') {
        setErrorfor(email,'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorfor(email,'Please Enter a valid email address')
    }
    else{
        setSuccessfor(email);
    }
    if (passwordValue === '') {
        setErrorfor(password,'Password cannot be blank');
        
    }else if(passwordValue.length < 8){
        setErrorfor(password,'Password must contain atleast 8 Characters');
    }else if(passwordValue.length > 16){
        setErrorfor(password,'Password must not exceed more than 16 Characters');
    }else if(passwordValue.search (/[a-z]/) < 0){
        setErrorfor(password,'Password must contain atleast one small letter');
    }else if(passwordValue.search (/[A-Z]/) < 0){
        setErrorfor(password,'Password must contain atleast one capital letter');
    }else if(passwordValue.search (/[0-9]/) < 0){
        setErrorfor(password,'Password must contain atleast one number');
    }else if(passwordValue.search (/[!@#\$%\^&\*_]/) < 0){
        setErrorfor(password,'Password must contain atleast one Special Character');
    }
    else{
        setSuccessfor(password);
    }
    if (password2Value === '') {
        setErrorfor(password2,'ConfirmPassword cannot be blank');
        
    }else if(passwordValue !== password2Value){
        setErrorfor(password2,'Password and ConfirmPassword must be same');
    }else{
        setSuccessfor(password2);
    }
}
function setErrorfor(input,message) {
    const formControl = input.parentElement;  //formControl div
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'; 
}
function setSuccessfor(input) {
    const formControl = input.parentElement;  //formControl div
    formControl.className = 'form-control success'; 
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Reset Function
//     let clearValues = document.querySelector('btn_1');
//     let input = document.querySelector('input');
//     let small = document.querySelector('small');
//     let i = document.querySelector('i');


// clearValues.addEventListener('reset' ,()=> {
//     input.forEach(input => input.value = '');
//     small.forEach(small => small.value = '');
//     i.forEach(i => i.value = ''); 
        
//     });

// form.addEventListener('reset' ,e=> {
//     e.defaultPrevented();
//     setClear();
// })

// function resetinput() {
//     let clearValues = document.getElementById('btn_1').value;

//     clearValues = setClear();
// }
// function setClear(input,message) {
//     const formControl = input.parentElement;  //formControl div
//     const small = formControl.querySelector('small');

//     //add error message inside small
//     // small.innerText = message;

//     //add error class
//     formControl.className = 'form-control small';
    
// }