function searchNone(){

    setTimeout(function(){
        window.location.href = '../views/search_none.html';
     }, 500);

}

function search(){

    setTimeout(function(){
        window.location.href = '../views/search.html';
     }, 500);

}

function uploadNew(){
    setTimeout(function(){
        window.location.href = '../views/upload_new.html';
     }, 500);
}

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("password").value;
    
    if(inputVal == "password"){
        window.location.href = '../views/upload.html';
    }else{
        alert("Incorrect Password");
    }
}