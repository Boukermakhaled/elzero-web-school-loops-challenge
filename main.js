let admins = ["Ahmed" , "Osama" , "Sayed" , "Khaled", "Stop" , "Samera"];
let employees = ["Amged" , "Sameh" , "Ameer" , "Omar" , "Othman" , "Amany" , "Samia" , "Khalil"];

let x=[];
for(let i=0 ; i< admins.indexOf("Stop") ; i++){
    x[i]=admins[i];
}
document.write(`<div><h3> we have ${x.length} admins </h3> </div> <hr> `);


let j=0;
for(let a=0 ; a<x.length ; a++){
document.write(`<div><h3>the admin for the team 1 is ${x[a]} </h3> <h3>team members:</h3>  `);

for(let i=0 ; i < employees.length ; i++){
    if(employees[i].startsWith(x[a][0])){
    document.write( `<p> -${++j +"   "+ employees[i] }</p> `);
    
}
}
j=0
document.write(`</div> <hr>`);
}


