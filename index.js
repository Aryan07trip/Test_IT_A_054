function validate(){
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(user=="admin" && password=="admin"){
        window.location.href = "index.html"; 
        return false;
    }
    else{
        alert("Login unsuccessful");
            return false; 
    }
}