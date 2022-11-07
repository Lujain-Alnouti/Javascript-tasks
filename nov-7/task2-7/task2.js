function largestNumber (a,b){
    if(a>b) 
    return a;
    else 
    return b;
}
let x=parseInt(prompt("please enter number x"));
let y=parseInt(prompt("please enter number y"));
let val = largestNumber(x,y);
document.write("the two numbers are: "+x+" and "+y+", and the largest number is "+val);