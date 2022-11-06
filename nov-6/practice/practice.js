var x =prompt("please enter number between 1-7");
x=parseInt(x);
switch(x){
    case 1 :
        document.write("SUN");
        break;
    case 2 :
        document.write("Mon");
        break; 
    case 3 :
        document.write("Tue");
        break;
    case 4:
        document.write("Wed");
        break; 
    case 5 :
        document.write("Thu");
        break;
    case 6 :
        document.write("Fri");
        break; 
    case 7 :
        document.write("Sat");
        break;
   default :
        document.write("Not a day");
           
}
