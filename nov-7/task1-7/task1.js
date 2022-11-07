function lastOfarray(a){
    var x= a[a.length-1]
  document.write(x);
}
let arr=[1,2,3,5,4,7,8,6,9,5,2,4];
document.write("first array : <br>"+arr+"<br>");
lastOfarray(arr);


let arr1=new Array;
for(let i=0;i<7;i++){
    arr1[i]=prompt("please fill the array"+ (i+1));
}
document.write("<br> second array 'values from user': <br>"+ arr1 + "<br>");
lastOfarray(arr1);
