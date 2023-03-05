window.onload = function(){
    alert("worked")
    var dataFromLS = JSON.parse(localStorage.getItem("userProduct"));
    console.log(dataFromLS,"dataFromLS")
    

    array = [];
    for(var i=0; i<dataFromLS.length; i++){
        array += `<div><img src="${ dataFromLS[i].proImg}" /><br/><h1>${dataFromLS[i].proName}</h1><br/><p>${dataFromLS[i].proPrice}</p></div>`
        // console.log(dataFromLS[i].proName)
    }
    var divFromHTML = document.getElementById("screen")
    divFromHTML.innerHTML = array;
}