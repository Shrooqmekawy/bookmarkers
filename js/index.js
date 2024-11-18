
var siteInput=document.getElementById("Name");
var urlInput=document.getElementById("URL");
var btn=document.getElementById("submit");
var alertValid=document.getElementById("alert");
var icon=document.getElementById("xmark");


bookMarkerArray = [];

if(localStorage.getItem("bookMarker")==null){
    bookMarkerArray=[];
}
else{
    bookMarkerArray=JSON.parse(localStorage.getItem("bookMarker"));
    display(bookMarkerArray)
}

function press(){
    
 bookMarker={
name: siteInput.value.trim() ,
url: urlInput.value.trim(),
};

var usedName=siteInput.value.trim()
var userValid=bookMarkerArray.some(function(item){
    return  item.name.toLowerCase() === usedName.toLowerCase();
})
if(userValid||bookMarker.name.length<3 ){
    alertValid.classList.remove("d-none");
    return;
}


var urlInvalid=/\.com$/i;

if(!urlInvalid.test(bookMarker.url)){
    alertValid.classList.remove("d-none");
   return;
}
    bookMarkerArray.push(bookMarker);
    
    display(bookMarkerArray);
    clear()

}

// function check(){

//    var usedName=siteInput.value.trim()
// var userValid=bookMarkerArray.some(function(item){
//     return  item.name.toLowerCase() === usedName.toLowerCase();
// })
// if(userValid||bookMarker.name.length<3 ){
//     alertValid.classList.remove("d-none");
//     return;
// }
// var urlInvalid=/\.com$/i;
// if(!urlInvalid.test(bookMarker.url)){
//     alertValid.classList.remove("d-none");
//    return;
// }
// }


function display(arr){
    var box="";
    for(var i=0; i< arr.length; i++){
     box+=

`<tr><td>${i}</td>
<td class="text-capitalize">${arr[i].name}</td>
<td><a href="${arr[i].url}" target="blank"><button class="btn btn-success text-wdite px-3 py-2"  > <i class="fa-solid fa-eye "></i> Visit </button></a>  </td>
<td><button onclick="delBook( ${i})" class="btn btn-danger text-white px-3 py-2"><i class="fa-solid fa-trash"></i>Delete</button> </td></tr>`
    }
    document.getElementById("Content").innerHTML = box;
    localStorage.setItem("bookMarker", JSON.stringify(arr));
   
}


function delBook(i){
    bookMarkerArray.splice(i,1);
    display(bookMarkerArray);
}
function clear(){
    siteInput.value=null;
    urlInput.value=null;
}


function repeat(){
       var usedName=siteInput.value.trim()
       var userValid=bookMarkerArray.some(function (item) {
        return item.name.toLowerCase() === usedName.toLowerCase();
    });
   
       if(userValid||usedName.length<3){

        
        siteInput.style.borderColor = "red";
        siteInput.style.boxShadow = "0 0 0 5px  rgb(231, 141, 141, 0.5)";
      
    }
    
    else {
        
        siteInput.style.borderColor = "green";
        siteInput.style.boxShadow = "0 0 0 5px  rgb(0, 128, 0, 0.2)";

       
    }
    
}

function urlValid(){
    
    var usedurl=urlInput.value.trim();
    var urlInvalid=/\.com$/i



    if(!usedurl.match(urlInvalid)){
        urlInput.style.borderColor = "red";
        urlInput.style.boxShadow = "0 0 0 5px  rgb(231, 141, 141, 0.5)";
    }
    else{
        urlInput.style.borderColor = "green";
        urlInput.style.boxShadow = "0 0 0 5px  rgb(0, 128, 0, 0.2)";
    }
   
}

function delAlert(){
    alertValid.classList.add("d-none");
    siteInput.style.borderColor ="";
    siteInput.style.boxShadow = "";
    urlInput.style.borderColor ="";
    urlInput.style.boxShadow = "";
    clear()

}