function Forms(){

var x=document.getElementById("font_family");
switch(x){
    case "Arial":{
        document.getElementById("personal").style.fontFamily=x.value;
        break;}
    case "Times New Roman":{
        document.getElementById("personal").style.fontFamily=x.value;
        break;}
    case "Courier New":{
        document.getElementById("personal").style.fontFamily=x.value;
        break;}
        case "Lucida Handwriting":{
            document.getElementById("personal").style.fontFamily=x.value;
            break;}
    default :  document.getElementById("personal").style.fontFamily=x.value;

}
var y =document.getElementById("font_Size").value;
switch(y){
    case "15pt":{
        document.getElementById("personal").style.fontSize="15pt";
        break;}
    case "20pt":{
        document.getElementById("personal").style.fontSize="20pt";
        break;}
    case "25pt":{
        document.getElementById("personal").style.fontSize="25pt";
        break;}
     default :  document.getElementById("personal").style.fontSize="30pt";

}
var i=document.getElementById("Bold");
if(i.checked){
    document.getElementById("personal").style.fontWeight="bold";
}
var i2=document.getElementById("Italic");
if(i2.checked){
    document.getElementById("personal").style.fontStyle ="italic";
}
var i3=document.getElementById("Underline");
if(i3.checked){
    document.getElementById("personal").style.textDecoration="underline";
}
}