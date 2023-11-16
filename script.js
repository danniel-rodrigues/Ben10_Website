let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextSlide();
}, 10000)

function nextSlide() {
    count++;
    if(count > 10) count = 1;

    document.getElementById("radio"+count).checked = true;
}