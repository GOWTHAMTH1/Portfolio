
function dark(){
    var body=document.getElementsByTagName("body")
    body[0].style.backgroundColor="black"
     body[0].style.color="white"
     var github=document.getElementsByClassName("fa-github")
  github[0].style.color="white"
  var alist=document.querySelectorAll("a")
  for(var i=0;i<alist.length;i++){
      alist[i].style.color="white"
  }
}

function light(){
    var body=document.getElementsByTagName("body")
    body[0].style.backgroundColor="white"
   body[0].style.color="black"

   var github=document.getElementsByClassName("fa-github")
  github[0].style.color="black"

   var alist=document.querySelectorAll("a")
   for(var i=0;i<alist.length;i++){
       alist[i].style.color="black"
   }
}
   function cv(){
    var mywindow;
    mywindow=window.open("Resume.pdf")
}
document.querySelector(".btn").onclick=function(){
    document.querySelector(".listdiv").classList.toggle("hide")
}




