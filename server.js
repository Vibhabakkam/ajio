function register(event){
    event.preventDefault();

    var userName= document.getElementById("userName").value;
    var userEmail =document.getElementById("userEmail").value;
    var userPassword =document.getElementById("userPassword").value;
    var ajiouserData = { name:userName, email:userEmail, password:userPassword };

    var dataFromLs =JSON.parse(localStorage.getItem("ajiouserData")) || [];
    console.log(dataFromLs,"dataFromLs");

    var flag =false;
    for(var i=0; i<dataFromLs.length;i++){
        if(dataFromLs[i].email === userEmail){
            flag =true;
        }
    }

    if (flag === true){
        alert("Email already Present");
        document.getElementById("userEmail").value ='';
    }
    else if(userName.length < 1 && userEmail.length <1){
        alert("must filled all fields");
    }
    else if(userPassword.length < 8){
        alert("Password Must be more than 8 digit");
        document.getElementById("userPassword").value ="";
    }
    else{
        dataFromLs.push(ajiouserData);
        localStorage.setItem("ajiouserData",JSON.stringify(dataFromLs));
        document.getElementById("userName").value ='';
        document.getElementById("userEmail").value ='';
        document.getElementById("userPassword").value ="";
        window.location.href ="/ajiologin.html";
        alert("registration Done");
    }
}

function login(event){
    event.preventDefault(event);
    var userEmail =document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLs =JSON.parse(localStorage.getItem("ajiouserData"));

    var flag= false;

    for (var i=0 ; i< dataFromLs.length ; i++){
        if(dataFromLs[i].email === userEmail  && dataFromLs[i].password === userPassword){
            flag =true;
        }
    }

    if(flag){
        document.getElementById("email").value ="";
        document.getElementById("password").value ="";

        var user ={};
        user["current-user-email"]= userEmail;
        localStorage.setItem("currentUser",JSON.stringify(user));
        window.location.href="/index.html";
        alert("Login sucessful");
    }
    else{
        alert("Email or Password does not match");
    }

}
var gettingEmail;

function forgotPassword(event){
    event.preventDefault();
    
    var dataFromLs=JSON.parse(localStorage.getItem("ajiouserData"));
    var emailFromUser =document.getElementById("email").value;

    gettingEmail =emailFromUser;

    var flag = false;
    for(var i=0; i<dataFromLs.length; i++){
        if(dataFromLs[i].email === emailFromUser){
            flag =true;
        }
    }
    if(flag){
        var newCode =`<input type="password" id="password"><br><button onClick="newPassword()"Reset> New Password</button>`;
        var divFromHtml =document.getElementById("change");
        divFromHtml.innerHTML =newCode;
        alert("Now set New Password");

    }
    else{
        alert("Please Enter Register Email");
        document.getElementById("email").value ="";
    }
}

function newPassword(){
    
    var dataFromLs =JSON.parse(localStorage.getItem("ajiouserData"));
    var userPassword =document.getElementById("password").value;

    // console.log(passwordFromUser,"Password");
    for(var i=0; i<dataFromLs.length; i++){
        if(dataFromLs[i].email === gettingEmail){
            dataFromLs[i].password = userPassword;
        }
    }
     // console.log(passwordFromUser,"Password");

    localStorage.setItem("ajiouserData",JSON.stringify(dataFromLs));
    gettingEmail ="";
    // divFromHtml.innerHTML =rest;
    window.location.href ="/ajiologin.html";
    alert("Password Changed , Now Login");

    
}

function addToLS(){

    var dataFromLs =JSON.parse(localStorage.getItem("ajiouserproduct")) || [];

    var userName = document.getElementById("name").value;
    var userImage= document.getElementById("image").value;
    var price =document.getElementById("price").value;

    var ajiouserproduct ={name:userName, image:userImage, price:price};
    dataFromLs.push(ajiouserproduct);

    localStorage.setItem("ajiouserproduct",JSON.stringify(dataFromLs));
    alert("Added");
    var userName = document.getElementById("name").value = "";
    var userImage= document.getElementById("image").value = "";
    var price =document.getElementById("price").value = "";
}