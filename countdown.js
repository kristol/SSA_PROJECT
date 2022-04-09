var countDownDate = new Date("Apr 22, 2022 00:00:00").getTime();

var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  if(days > 10){
    document.getElementById("days").innerHTML = days + "d/ ";
  }else{
    document.getElementById("days").innerHTML = "0" + days + "d/ ";
  }
  if(hours > 10){
    document.getElementById("hours").innerHTML = hours + "h/ ";
  }else{
    document.getElementById("hours").innerHTML ="0" + hours + "h/ ";
  }
  if(minutes > 10){
    document.getElementById("mins").innerHTML = minutes + "m/ ";
  }else{
    document.getElementById("mins").innerHTML ="0" + minutes + "m/ ";
  }
  if(seconds < 10){
    document.getElementById("secs").innerHTML = "0" + seconds + "s";
  }else{
    document.getElementById("secs").innerHTML = seconds + "s";
  }
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "OUT NOW";
}
}, 1000);
