

var sum=0;
for(var i=0;i<=100;i++){
    sum=sum+i;
    
    if(sum>100){
        document.write("the sumation of numbers are greater than 100 <br>");
        document.write("Sum = "+ sum + " , in number : "+ i);
        break;
    }
       
}
