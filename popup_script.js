//region {variables and functions}
var timeId = "time";
var dateId = "date";
var days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var consoleGreeting = "Hello World! - from popup_script.js";
function setTimeandDate(timeElement, dataElement){
	var date = new Date();
	var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	var time = date.getHours() + ":" + minutes;
	var date = days[date.getDay()] + ", " + months[date.getMonth()] + "" + date.getDate() + "" + date.getFullYear();
	timeElement.innerHTML = time;
	dataElement.innerHTML = date; 
}
//end-region