
    fname = document.getElementById('fname');
    lname = document.getElementById('lname');
    email = document.getElementById('email');
    mob = document.getElementById('mob');
    ans = document.getElementById('ans');


function submit(){
  if (document.getElementById("fname").value.length === 0) {
        
    document.getElementById("fname").focus();
    alert("Enter Your Name")
    fname.style.borderColor = "red"
    return false
}
if (document.getElementById("lname").value.length === 0) {
    
    document.getElementById("lname").focus();
    alert("Enter your Last Name")
    lname.style.borderColor = "red"
    return false
}
 if (email.value.indexOf(".") - email.value.indexOf("@") < 2 ||
email.value.indexOf(".") > email.value.length - 3) {
    
    document.getElementById("email").focus();
    alert("Enter your Email Account")
    email.style.borderColor = "red"
    return false
}
if (document.getElementById("mob").value.length === 0 || document.getElementById("mob").value.length >  11 ||document.getElementById("mob").value.length < 11 ) {
    
    document.getElementById("mob").focus();
    alert("Enter your Phone Number")
    mob.style.borderColor = "red"
    return false
}


fname.value = ""
lname.value = ""
wemail.value = ""
mob.value = ""
ans.value = ""
}

