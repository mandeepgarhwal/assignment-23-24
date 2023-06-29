var subbtn = document.getElementById("submitbtn")

function formsubmit(event){
    event.preventDefault()
    console.log(12)
    var newemail = document.getElementById("exampleInputEmail2").value.trim()
    var newpassword = document.getElementById("exampleInputPassword2").value.trim()
    var newname = document.getElementById("exampleInputName2").value.trim()
    if (newemail == "" || newname== "" || newpassword == ""){
        console.log(13)
        alert("All fields should be filled")
    }
    else{
        detail = {password : newpassword, name : newname, email : newemail}
        console.log(detail)
        sessionStorage.clear()
        sessionStorage.setItem("details", JSON.stringify(detail))
        console.log(10)
        console.log(sessionStorage.getItem("details"))
        alert("You are registered")
        document.location.href = "Log in screen.html"
    }



    

}

subbtn.addEventListener('click', formsubmit);