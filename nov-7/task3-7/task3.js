function lengthOfString(arr){
    let min=10000;
    let min_name;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length < min){
            min=arr[i].length;
           min_name=arr[i];}
    }
    return min_name ;
}

let names=["Mustafa","Mohammad","Ahmad","Ali","noor","AJ"];
let shorter_name= lengthOfString(names);
document.write("the shortest string inside this array: "+shorter_name);