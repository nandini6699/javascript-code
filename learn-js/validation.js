function acceptData(){
    let username=document.getElementById("username").value
   // alert=("username = "+username)
    validateUsername(username)

    let email=document.getElementById("email").value
    //alert("email = "+email)

    let password=document.getElementById("password").value
    //alert("password = "+password)

    let gender=document.querySelector("[input name='gender']:checkend").value
    //alert("gender = "+gender)

    let date=document.getElementById("date").value
    //alert("date = "+date)

    alert(username+" , "+email+" , "+password+" , "+gender+" , "+date)
}
function validateUsername(username){
    let regex=/^[A_Za-z0-9]+$/
    if(username === ''){
        alert("username cannot be empty")
    }
    else if(username.length<5 || username.length>15){
        alert("username should contain min 5 and max 15 characters")
    }
    else{
        alert("valid username")
    }
}
function validatePassword(password){
    let regex=/^[A_Za-z0-9]+$/
    if(password === ''){
        alert("username cannot be empty")
    }
    else if(password.length<8 || password.length>15){
        alert("username should contain min 8 and max 15 characters")
    }
    else if(regex.test(password)== false){
        alert("password should contain at least 1 digit,1 upper case,1 lower case")
    }
    else{
        alert("valid password")
    }

}
