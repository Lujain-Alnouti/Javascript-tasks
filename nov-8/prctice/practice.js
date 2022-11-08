function on_light(){
    document.getElementById("light").src="on-L.png";
}
function off_light(){
    document.getElementById("light").src="off-L.png";
}
function opendoor(){
    
     document.getElementById("door").src="open-d.png";    
    
   }




document.getElementsByClassName("Paragraph")[0].innerHTML="Welcome you in this page";
document.getElementsByClassName("Paragraph")[0].style.color="black";
document.getElementById("title").innerHTML="ON-OFF Light";
document.getElementById("title").style.fontFamily=" Segoe UI";
document.getElementById("title").style.color="yellow";
document.getElementById("title").style.fontSize="20px";
document.getElementById("light").style.width="500px";
document.getElementById("light").style.height="500px";
document.getElementById("door").style.width="500px";
document.getElementById("door").style.height="500px";
document.getElementById("door").setAttribute("alt","IMages");
document.querySelector("p").style.backgroundColor = "black";
document.querySelector("p").style.color = "yellow";
const col = document.querySelectorAll("p");
for (let i = 0; i < col.length; i++) {
  col[i].style.color = " rgb(139, 139, 7)";
  col[i].style.fontWeight = "bold";
}

function choice_item() {
    var x = document.getElementById("myse").value;
    document.getElementById("body").innerHTML="You selected: " + x;
 }