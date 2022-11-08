function choice_city() {
    var y= document.getElementById("city").value;
    if(y=="Norway"){
        document.getElementById("photo").src="Norway.png";
        
    }
    else if(y=="Jordan"){
        document.getElementById("photo").src="Jordan.png";
        
    }
    else if(y=="KSA"){
        document.getElementById("photo").src="KSA.png";
        
    }
    else if(y=="USA"){
        document.getElementById("photo").src="USA.png";
        
    }
    else document.getElementById("photo").src="Canada.png";
}

document.getElementById("photo").style.width="300px";
document.getElementById("photo").style.height="150px";