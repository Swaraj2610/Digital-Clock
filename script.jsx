let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let mon=document.getElementById("mon")
let day = document.getElementById("day");


setInterval(()=>{
    let currentTime=new Date();

    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
    mon.innerHTML=((currentTime.getMonth()+1)<10?"0":"")+(currentTime.getMonth()+1);
    day.innerHTML=((currentTime.getDate())<10?"0":"")+(currentTime.getDate());
},1000)





// console.log(currentTime.getMinutes());

//to update every second we use set interval//

