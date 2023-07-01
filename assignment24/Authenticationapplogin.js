var logbtn = document.getElementById("loginbtn")
var registerbtn = document.getElementById("register")
var storeddetails = sessionStorage.getItem("details")

console.log(storeddetails)



console.log(logbtn)
console.log(registerbtn)

function loginprocess(event){
    event.preventDefault();
    event.stopPropagation();
    console.log(6)
    var email = document.getElementById("exampleInputEmail1").value.trim()
    var password = document.getElementById("exampleInputPassword1").value.trim()
    console.log(0)
    console.log(email)
    console.log(password)
    console.log(storeddetails)
    if (email === ""){
        alert("Email can not be left blank")
        console.log(1)
    }
    if (email !== "" & password ===""){
        alert("Please enter a valid Password")
        console.log(2)
    }
    if (email != "" & password != ""){
        if (storeddetails == null){
            alert("Please register yourself")
            document.getElementById("exampleInputEmail1").value = ""
            document.getElementById("exampleInputPassword1").value = ""
            console.log(3)
        }       
        if (email == JSON.parse(storeddetails).email & password == JSON.parse(storeddetails).password){
            console.log(JSON.parse(storeddetails).email)
            document.location.href = "Dashboard.html"
            console.log(4)
            }
        if (email != JSON.parse(storeddetails).email){
            console.log(email)
            console.log(5)
            alert("Please enter a valid email")
            document.getElementById("exampleInputEmail1").value = ""
            document.getElementById("exampleInputPassword1").value = ""
            
            
            }
    }
}

function newregistration(event){
    event.preventDefault()
    console.log(7)
    document.location.href = "registeration form.html"
}



logbtn.addEventListener('click', loginprocess);
registerbtn.addEventListener('click', newregistration);
