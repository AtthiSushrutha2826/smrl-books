/*
var sidenav=document.querySelector(".sidenavbar")
function showNavbar(){
    sidenav.style.display="block"
}
function closenavbar(){
    sidenav.style.display="none"
}
*/
var sidenav=document.querySelector(".sidenavbar")

function showNavbar(){
    sidenav.style.display="block"

}
function closenavbar(){
    sidenav.style.display="none"
}


var productContainer =document.getElementById("products")
    var search=document.getElementById("search")
    var productlist = productContainer.querySelectorAll("div")
    
    search.addEventListener("keyup",function()){}
     function check(){
       var enteredValue=event.target.value.toUppercase()

       for (var count=0; i<productlist.length;count++){
         var productname=productlist[count].querySelector("p").textContent

           if (productname.touppercase().indexOf(enteredValue)<0){
        productlist[count].style.display="none"
       }
           else{
        productlist[count].style.display="block"
       }
     }




