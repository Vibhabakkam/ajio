window.onload = function () {
    var divFromHtml = document.getElementById("product");
    var products = JSON.parse(localStorage.getItem("ajiouserproduct"));
  
    var array = [];
  
    for (var i = 0; i < products.length; i++) {
      // console.log(products[i]);
      array += `<div id = "picture2"><img src="${products[i].image}" alt="productImg" /><h2>${products[i].name}</h2><p>${products[i].price}</p><button id = "cartbutton" onclick='addToCart(${JSON.stringify(products[i])})'>Add to cart</button></div>`;
    }
  
    divFromHtml.innerHTML = array;
  };
  
  
  function addToCart(pro){
      alert("worked");
      var ajiouserproduct =JSON.stringify(pro);
      var dataFromLs =JSON.parse(localStorage.getItem("ajiouserData"));
      var currentUser =JSON.parse(localStorage.getItem("currentUser"));
  
      if(currentUser){
          var allUsers =[];
          for( var i=0; i<dataFromLs.length; i++){
              if(dataFromLs[i].email === currentUser["current-user-email"]){
                  var newObj = dataFromLs[i];
                  newObj["cartProducts"] = newObj["cartProducts"] || [];
                  newObj["cartProducts"].push(JSON.parse(ajiouserproduct));
                  allUsers.push(newObj);
              }
              else{
                  allUsers.push(dataFromLs[i]);
              }
          }
          // console.log()
          localStorage.setItem("ajiouserData",JSON.stringify(allUsers));
          alert("Product added to cart");
      }
      else{
          alert("login first to add product into cart");
      }
  }