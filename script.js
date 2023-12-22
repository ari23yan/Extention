document.getElementById('Date-day').innerHTML = new persianDate().format("D");
document.getElementById('Date-month').innerHTML = new persianDate().format("MMMM");
document.getElementById('Date-year').innerHTML = new persianDate().format("YYYY");
document.getElementById('Date-dayName').innerHTML = new persianDate().format('dddd'); 
// document.getElementById('time').innerHTML = new persianDate().format('HH:mm:ss'); 
