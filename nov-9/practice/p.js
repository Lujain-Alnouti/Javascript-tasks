function input_names(a){
    sessionStorage.setItem(a.id,a.value);
    var x=sessionStorage.getItem(a.id);
    document.getElementById("p1").innerHTML+=" "+x;
}


sessionStorage.setItem("Fname","Lujain");
var x=sessionStorage.getItem("Fname");
document.write(x+"<br>");
sessionStorage.setItem("Fname","Mohammad");
var x=sessionStorage.getItem("Fname");
document.write(x+"<br>");

sessionStorage.setItem("Mname","Amin");
var y=sessionStorage.getItem("Mname");
document.write(y+"<br>");

sessionStorage.setItem("Lname","Alnouti");
var z=sessionStorage.getItem("Lname");
document.write(z+"<br>");

sessionStorage.setItem("Age","22");
var a=sessionStorage.getItem("Age");
document.write(a+"<br>");
document.write(sessionStorage.key(4)+"<br>");

sessionStorage.removeItem("Lname");
var z1=sessionStorage.getItem("Lname");
document.write(z1+"<br>");
// sessionStorage.clear();