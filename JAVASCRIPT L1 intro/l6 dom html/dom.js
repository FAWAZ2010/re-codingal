
var text = document.getElementById("dom").innerHTML;
alert("the first heading is " + text)
function validate(e) {
    e.preventDefault();
    const email =document.getElementById("email").value;
     const password =document.getElementById("password").value;
     const age =document.getElementById("age").value;
     const msgbox =document.getElementById("message");  
     
     let message ="";
     if (email === ""){
        message ="please enter email"
        msgbox.style.color ="red";
     }
        else if (password === ""){
            message ="please enter password"
            msgbox.style.color ="yellow";
     }
     else if (age === ""){
        message ="Password must be at least 8 characters long"
        msgbox.style.color ="red";
     }
     else {
        message ="login successful"
        msgbox.style.color ="green";
     }
     msgbox.innerHTML = message;
     





    }