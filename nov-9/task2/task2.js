// function project(a){
//     sessionStorage.setItem(a.id,a.value);    
// }

// function Tec(L){
//     var y1=document.getElementById("JS");
//     var y2=document.getElementById("CSS");
//     var y3=document.getElementById("HTML");

//     if(L.id == "JS" && y1.checked){
//         sessionStorage.setItem(L.id,"JS");
       
//     }

//     if(L.id == "CSS" && y2.checked){
//         sessionStorage.setItem(L.id,"CSS");
       
//     }

//     if(L.id =="HTML" && y3.checked){
//         sessionStorage.setItem(L.id,"HTML");
       
//     }
// }


// function Use(y){
//     var y1=document.getElementById("provider");
//     var y2=document.getElementById("Ruser");
//     var y3=document.getElementById("company");

//     if(y.id == "provider" && y1.checked){
//         sessionStorage.setItem(y.id,"Providers");
       
//     }

//     if(y.id == "Ruser" && y2.checked){
//         sessionStorage.setItem(y.id,"Ruser");
       
//     }

//     if(y.id =="company" && y3.checked){
//         sessionStorage.setItem(y.id,"company");
       
//     }
// }



// function Submit(){
//     document.getElementById("divv").style.display="block";
//     document.getElementById("divv").style.backgroundColor="darkgray";
//     document.getElementById("divv").style.width="300px";
//     document.getElementById("divv").style.marginLeft="100px";
//     document.getElementById("divv").style.border="2px black solid";

//     var x1=localStorage.getItem("subject");
//     document.getElementById("sub").innerHTML=x1;

//     var x4=localStorage.getItem("desc");
//     document.getElementById("descc").innerHTML=x4;

//     if(document.getElementById("JS").checked){
//         var x6=localStorage.getItem("JS");
//         document.getElementById("T1").innerHTML=x6+" , ";
//     }
//     else document.getElementById("T1").innerHTML="";

//     if(document.getElementById("CSS").checked){
//         var x7=localStorage.getItem("CSS");
//         document.getElementById("T2").innerHTML=x7+" , ";
//     }
//     else document.getElementById("T2").innerHTML="";

//     if(document.getElementById("HTML").checked){
//         var x8=localStorage.getItem("HTML");
//         document.getElementById("T3").innerHTML=x8;
//     }
//     else document.getElementById("T3").innerHTML="";

// /*--------------------------------------------------------------*/
//     if(document.getElementById("provider").checked){
//         var y1=localStorage.getItem("provider");
//         document.getElementById("U1").innerHTML=y1+" , ";
//     }
//     else document.getElementById("U1").innerHTML="";

//     if(document.getElementById("Ruser").checked){
//         var y2=localStorage.getItem("Ruser");
//         document.getElementById("U2").innerHTML=y2+" , ";
//     }
//     else document.getElementById("U2").innerHTML="";

//     if(document.getElementById("company").checked){
//         var y3=localStorage.getItem("company");
//         document.getElementById("U3").innerHTML=y3;
//     }
//     else document.getElementById("U3").innerHTML="";


// }


sessionStorage.setItem("subject","Party Planner");
var x=sessionStorage.getItem("subject");
document.getElementById("sub").innerHTML=x;

sessionStorage.setItem("description","Provides all party requirement {Resturant, Sweet,Beuty Salon, Halls, Farms, Music, Clothes, Decoration, etc }");
var x1=sessionStorage.getItem("description");
document.getElementById("desc").innerHTML=x1;

/*--------------------------------------------- */
sessionStorage.setItem("T1","Javascript");
var a=sessionStorage.getItem("T1");
document.getElementById("JS").innerHTML=a;

sessionStorage.setItem("T2","CSS");
var b=sessionStorage.getItem("T2");
document.getElementById("CSS").innerHTML=b;

sessionStorage.setItem("T3","HTML");
var c=sessionStorage.getItem("T3");
document.getElementById("HTML").innerHTML=c;
/*-----------------------------------------*/
sessionStorage.setItem("U1","Providers");
var a=sessionStorage.getItem("U1");
document.getElementById("prov").innerHTML=a;

sessionStorage.setItem("U2","Regular User");
var b=sessionStorage.getItem("U2");
document.getElementById("RU").innerHTML=b;

sessionStorage.setItem("U3","Companies");
var c=sessionStorage.getItem("U3");
document.getElementById("Comp").innerHTML=c;
