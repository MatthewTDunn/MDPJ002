const username = document.getElementById('email')
const password = document.getElementById('password')
const errorElement = document.getElementById('errorMessage')
const form = document.getElementById('form')
const newUserEmail = document.getElementById('newUserEmail')
const newPassword = document.getElementById('newUserPassword')
const regexUpperCase = /[A-Z]/g
const regexLowerCase = /[a-z]/g
const regexSpecial = /^[!@#\$%\^\&*\)\(+=._-]/g;


//upon rendering, hide the footer section of create account
document.querySelector("footer").style.visibility = 'hidden';

//establish the onclick function and action to turn the footer to visible
document.querySelector("#createAccountButton").onclick = function createAccountClick(){
    document.querySelector('footer').style.visibility = 'visible'
}

//
form.addEventListener('submit', (e) => {
    let messages = []
    password.style.border = 'solid'
    username.style.border = 'solid'
    const passwordUpperCase = password.value.match(regexUpperCase)
    const passwordLowerCase = password.value.match(regexLowerCase)
    const passwordSpecial = password.value.match(regexSpecial)
    

    if (username.value === '' || username.value == null) {
        messages.push('a email is required')
        username.style.border = 'red';
    } else if (username.value != newUserEmail.value) {
        username.style.borderBlockColor = 'red'
        messages.push('Username does not match client side defined email address')
    } else {
        username.style.border = 'solid'
        username.style.borderBlockColor = 'green'
    }

    
    if (password.value === '' || password.value ==null ){
        messages.push('a password is required')
        password.style.borderBlockColor = 'red';
    } else if (password.value.length <=6){
        password.style.borderBlockColor = 'red';
        messages.push('Password must be longer than 6 characters')
    } else if (password.value != newPassword.value) {
        password.style.borderBlockColor = 'red'
        messages.push('password does not match client side defined password')
    } else {
        password.style.border = 'solid'
        password.style.borderBlockColor = 'green'
    }

    //if we have some form of error, 
    if (messages.length > 0 || password.value == "" || username.value == ""){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    } else{
        alert('access granted, form validation requirements met')
        password.style.border = 'solid'
        password.style.borderBlockColor = 'green'


    }
})