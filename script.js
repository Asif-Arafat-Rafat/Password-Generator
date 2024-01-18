function newpass(){
const buttonT=document.querySelector("button")
const password=document.querySelector('.generated')
let pass=[];
let out=[];
let i=0;

while(i<8){
let num=Math.floor(Math.random()*(122-48))+48
pass.push(num);
i++
}
function converter(pass) {
    pass.forEach(num => {
       
            out.push(String.fromCharCode(num))
    
    });
    out=out.join("")
    let fpass=out.toString()
    password.innerHTML=fpass
}
converter(pass)
}