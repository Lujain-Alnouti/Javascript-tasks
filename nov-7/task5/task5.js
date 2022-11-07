function is_Odd(x){
 if(x%2!=0) return "True";
 else return "False";
}


let a =parseInt(prompt("please enter only numbers"));
document.write(is_Odd(a));