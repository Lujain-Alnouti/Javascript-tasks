localStorage.clear();
sessionStorage.clear();
function personal_info(a){
    localStorage.setItem(a.id,a.value);    
}

function GENDER(b){
    var y1=document.getElementById("female");
    var y2=document.getElementById("male");

    if(b.id == "female" && y1.checked){
        localStorage.setItem(b.id,b.value);
        localStorage["male"]="off";
    }
    else if(b.id == "male" && y2.checked){
        localStorage.setItem(b.id,b.value);
        localStorage["female"]="off";
    }
}

function LANG(L){
    var y1=document.getElementById("JS");
    var y2=document.getElementById("CSS");
    var y3=document.getElementById("HTML");

    if(L.id == "JS" && y1.checked){
        localStorage.setItem(L.id,"JS");
       
    }

    if(L.id == "CSS" && y2.checked){
        localStorage.setItem(L.id,"CSS");
       
    }

    if(L.id =="HTML" && y3.checked){
        localStorage.setItem(L.id,"HTML");
       
    }
}



function Submit(){
    document.getElementById("divv").style.display="block";
    document.getElementById("divv").style.backgroundColor="darkgray";
    document.getElementById("divv").style.width="300px";
    document.getElementById("divv").style.marginLeft="100px";
    document.getElementById("divv").style.border="2px black solid";

    var x1=localStorage.getItem("full");
    document.getElementById("full_name").innerHTML=x1;

    var x2=localStorage.getItem("age");
    document.getElementById("agee").innerHTML=x2;

    var x3=localStorage.getItem("major");
    document.getElementById("maj").innerHTML=x3;

    var x4=localStorage.getItem("desc");
    document.getElementById("des").innerHTML=x4;

    if(localStorage.getItem("female")=="on"){document.getElementById("gen").innerHTML="Female";}
    else if(localStorage.getItem("male")=="on"){document.getElementById("gen").innerHTML="Male";}
   
    
    if(document.getElementById("JS").checked){
        var x6=localStorage.getItem("JS");
        document.getElementById("lan1").innerHTML=x6+" , ";
    }
    else document.getElementById("lan1").innerHTML="";

    if(document.getElementById("CSS").checked){
        var x7=localStorage.getItem("CSS");
        document.getElementById("lan2").innerHTML=x7+" , ";
    }
    else document.getElementById("lan2").innerHTML="";

    if(document.getElementById("HTML").checked){
        var x8=localStorage.getItem("HTML");
        document.getElementById("lan3").innerHTML=x8;
    }
    else document.getElementById("lan3").innerHTML="";


}
