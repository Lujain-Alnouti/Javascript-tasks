function FormPass(){
let x=document.getElementById("firstpass").value;
let y=document.getElementById("spass").value;
if(x.length<6){
    document.getElementById("mess").style.display="inline";
    document.getElementById("mess").innerHTML="Too short";
    document.getElementById("mess").style.color="red";
    
}
else document.getElementById("mess").style.display="none";



}



function sec_pass(){
    let x=document.getElementById("firstpass").value;
let y=document.getElementById("spass").value;

if(x==y){
    document.getElementById("sub").style.display="block";
    document.getElementById("mess2").style.display="none";
    document.getElementById("mess").style.display="none";
}
  else {
    document.getElementById("mess2").style.display="inline";
    document.getElementById("mess2").innerHTML="The two password don't match";
    document.getElementById("mess2").style.color="red";
}
}