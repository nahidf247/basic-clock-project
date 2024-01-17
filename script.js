function showTime() {
    document.getElementById('timeZone').innerHTML = new Date().toLocaleTimeString();
    
    
}
showTime();
setInterval(function () {
    showTime();
}, 1000);



