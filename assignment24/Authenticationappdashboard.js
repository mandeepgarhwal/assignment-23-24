 
function logout(){
    sessionStorage.clear()
    document.location.href = "Log in screen.html"
} 

logoutbtn = document.getElementById("logout");

logoutbtn.addEventListener("click", logout);