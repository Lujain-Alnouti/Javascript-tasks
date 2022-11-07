function employeeinfo(obj){

    document.write("The first name is: "+obj.firstname+"<br>");
    document.write("The age is: "+obj.age+"<br>");
    document.write("The salary is: "+obj.salary+"<br>");
    
}

let object={
    firstname:"Lujain",
    lastname:"Alnouti",
    age:22,
    salary:10000,
}
employeeinfo(object);