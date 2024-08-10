(function () {
  var hour = document.querySelector(".hour_show");
  var mint = document.querySelector(".mint_show");
  var sec = document.querySelector(".sec_show");

  var start = document.querySelector(".start");
  var pause = document.querySelector(".pause");
  var reset = document.querySelector(".reset");
  var countdowntimer = null;
  start.addEventListener("click", function () {
    if (hour.value == 0 && mint.value == 0 && sec.value == 0) return;

    function set() {
      start.style.display = "none";
      pause.style.display = "initial";
         countdowntimer= setInterval(()=>{
                timer();
         },1000);
    }
    set();

  });
  function stopInterval(state)
{
start.innerHTML= state=== "pause" ? "Continue" :"Start";
start.style.display="initial";
stop.style.display="none";
clearInterval(countdowntimer)
}  
function timer(){
     if(sec.value>60){
        mint.value++;
        sec.value=sec.value-59
     } if(mint.value>60){
        hour.value++;
        mint.value=mint.value-60
     }
     

    if(hour.value==0 && mint.value==0 && sec.value==0)
    {
        hour.value="";
        mint.value="";
        sec.value="";
        stopInterval();
    }else if( sec.value!=0){
        sec.value=sec.value-1;
    }else if (mint.value!=0 && sec.value==0)
    {
        sec.value=59;
        mint.value=mint.value-1;
    }else if(hour.value!=0 && mint.value==0) {
        mint.value=60;
        hour.value=hour.value-1;
    }
  }
  pause.addEventListener('click',function(){
    stopInterval('pause')
  })
  reset.addEventListener("click",function(){
    hour.value="";
    mint.value="";
    sec.value="";
    stopInterval();
  })
})();
