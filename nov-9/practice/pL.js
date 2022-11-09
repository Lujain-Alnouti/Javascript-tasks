function input_names(a){
    localStorage.setItem(a.id,a.value);
    var x=localStorage.getItem(a.id);
    document.getElementById("p1").innerHTML+=" "+x;
}


localStorage.setItem("Fname","Lujain");
var x=localStorage.getItem("Fname");
document.write(x+"<br>");

localStorage.setItem("Mname","Amin");
var y=localStorage.getItem("Mname");
document.write(y+"<br>");

localStorage.setItem("Lname","Alnouti");
var z=localStorage.getItem("Lname");
document.write(z+"<br>");

localStorage.setItem("Age","22");
var a=localStorage.getItem("Age");
document.write(a+"<br>");
document.write(localStorage.key(4)+"<br>");

localStorage.removeItem("Lname");
var z1=localStorage.getItem("Lname");
document.write(z1+"<br>");
// sessionStorage.clear();