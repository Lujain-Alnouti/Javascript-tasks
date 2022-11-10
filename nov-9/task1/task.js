localStorage.clear();
sessionStorage.clear();
function personal_info(a){
    localStorage.setItem(a.id,a.value);    
}

function GENDER(b){
   
    if(b.checked){
        localStorage.setItem(b.name,b.id);
    }
   

    
}


function LANG(L){
    if(L.checked){
        localStorage.setItem(L.id,L.name);
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

    
    var t=localStorage.getItem("gender");
    document.getElementById("gen").innerHTML=t;
   
    
    if(document.getElementById("JS").checked){
        var x6=localStorage.getItem("JS");
        document.getElementById("lan1").innerHTML=x6+"    ";
    }
    else document.getElementById("lan1").innerHTML="";

    if(document.getElementById("CSS").checked){
        var x7=localStorage.getItem("CSS");
        document.getElementById("lan2").innerHTML=x7+"    ";
    }
    else document.getElementById("lan2").innerHTML="";

    if(document.getElementById("HTML").checked){
        var x8=localStorage.getItem("HTML");
        document.getElementById("lan3").innerHTML=x8;
    }
    else document.getElementById("lan3").innerHTML="";


}
