


let userNameEl = document.getElementById("userName");
let passwordEl = document.getElementById("Password");

saveButton.onclick = function(){
    let userNameText = userNameEl.value;
    let passwordText  = passwordEl.value;

    localStorage.setItem("userNameText" , userNameText);
    localStorage.setItem("passwordText" , passwordText);
    let storedUserName = localStorage.getItem("userNameText");
    let storedPassword = localStorage.getItem("passwordText");

    if(storedUserName === null && storedPassword === null){
        userNameEl.value = "";
        passwordEl.value = "";
    }else if(storedUserName === "" ){
        alert("Enter UserName");
    }else if( storedPassword === ""){
        alert("Enter Password");
    }
    
    else{
        storedUserName = userNameEl.value;
        storedPassword = passwordEl.value;
    }
    userNameEl.value = "";
    passwordEl.value = "";

}




















