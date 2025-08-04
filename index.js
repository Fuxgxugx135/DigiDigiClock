function updateClock(){
    //This line create an object of type Date , which contains the current date and time of the user's system . 
    const now = new Date();
    const hour = addzero(now.getHours());
    const minute = addzero(now.getMinutes());
    const seconds = addzero(now.getSeconds());
   //Transfer div with id=clock to const clock
   const clock = document.getElementById("clock");
   clock.textContent = `${hour}:${minute}:${seconds}`;

   clock.style.color = getRandomcolor();
}
// (?)--> if true and (:)--> if false 
function addzero(number){
    return number < 10 ? "0" + number : number;
}
function getRandomcolor(){
    const names = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0 ; i < 6 ; i++)
    {
        color +=names[Math.floor(Math.random()* 16)];
    }
    return color ;
}
setInterval(updateClock, 1000);

 

