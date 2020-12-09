

function convertTo64() {
    let input = document.getElementById("uploadBtn")
    let b6P = document.getElementById("bt64converted")
   var file = input.files[0],
     reader = new FileReader();
 
   reader.onloadend = function () {
     // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
     var b64 = reader.result/*.replace(/^data:.+;base64,/, '')*/;
     
     b6P.innerHTML = b64
   };
 
   reader.readAsDataURL(file);
 };
 
 function convertTo642() {
  let input = document.getElementById("uploadModif")
  let b6P = document.getElementById("bt64")
 var file = input.files[0],
   reader = new FileReader();

 reader.onloadend = function () {
   // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
   var b64 = reader.result/*.replace(/^data:.+;base64,/, '')*/;
   
   b6P.innerHTML = b64
 };

 reader.readAsDataURL(file);
};

function convertTo643() {
  let input = document.getElementById("repImg")
  let b6P = document.getElementById("t64")
 var file = input.files[0],
   reader = new FileReader();

 reader.onloadend = function () {
   // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
   var b64 = reader.result/*.replace(/^data:.+;base64,/, '')*/;
   
   b6P.innerHTML = b64
 };

 reader.readAsDataURL(file);
};


