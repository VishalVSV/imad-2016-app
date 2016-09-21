console.log('Loaded!');

//changin img stuff
var img = document.getElementById('madi');
var marginL = 0;
function moveLeft (end) {
    marginL += 1;
    if (marginL <= end) {
      img.style.marginLeft = marginL + "px";   
    }
}
img.onclick = function () {
    var distance = img.style.marginLeft;
    marginL = distance;
    var inter = setInterval(moveLeft((distance+50)),50);
    
};