// step number 1 .. add click event handler with submit button

document.getElementById('btn-submit').addEventListener('click', function (event) {
    // console.log('Hello World');
    // step 2 : get the email address inside the email input filed
    // always remember to use .value to get text form an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 : get the password
    // 3.a set id on the html element 
    // 3.b get the element 
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // console.log(email,password);

    // do not verify email password on the client side
    // step verify email and password to check weather valid user or nor!!

    if(email == 'sontan@bapp.com' && password == 'secret')
    {
        // console.log('valid user');
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user!');
        // console.log('invalid user!');
    }

})