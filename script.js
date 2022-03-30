// date and time 
var today = new Date();
var date = today.getMonth()+1 + '-' +today.getDate() + '-' +today.getFullYear();

var today = new Date();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' | '+time;

document.getElementById("p1").innerHTML = dateTime;