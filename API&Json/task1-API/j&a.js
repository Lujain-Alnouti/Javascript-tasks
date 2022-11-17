async function allinfo(){
    const fetc=await fetch("https://www.breakingbadapi.com/api/characters");
    const data=await fetc.json();
    console.log(data);
    let a=document.getElementById("drop");
    for (let i = 0; i <= data.length; i++) {
       a.innerHTML+=`"<option value='${data[i].name}'>${data[i].name}</option>"`
    }
    for(var l=0;l<data.length;l++ ){
        if (data[l].name==value2)
        document.getElementById("images").src=data[l].img;
    }
   
}

allinfo();


async function imagess(){
  
        const fetc = await fetch ("https://www.breakingbadapi.com/api/characters");
         const data = await fetc.json();
         let val=document.getElementById("drop").value;
        console.log(data);
        for(var j=0;j<data.length;j++ ){
            if(data[j].name == val)
        document.getElementById("image").src=data[j].img;
}}
