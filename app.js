const namee=document.getElementById('name');
const clock=document.getElementById('clock');
let person = prompt("Please enter your name", "");
if(person===null || person===""){
    alert("İsim alanı boş olamaz");
    window.location.reload();
}
else{
    namee.innerHTML=`Merhaba ${person.toUpperCase()}, Hoş geldiniz!`;
}
getTime()
function getTime(){
    var date = new Date;
    var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var weekday = new Array(7);
    weekday[0]=" Pazartesi";
    weekday[1]=" Salı";
    weekday[2]=" Çarşamba";
    weekday[3]=" Perşembe";
    weekday[4]=" Cuma";
    weekday[5]=" Cumartesi";
    weekday[6]=" Pazar";
    time+=weekday[date.getDay()-1];
    clock.innerHTML=time;
}
var myInterval=setInterval(getTime,1000)