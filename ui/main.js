console.log('Loaded!');

//changin img stuff
var img = document.getElementById('madi');
var marginL = 0;
function moveLeft () {
    marginL += 1;
    if (marginL <= 500) {
      img.style.marginLeft = marginL + "px";   
    }
}
img.onclick = function () {
    var inter = setInterval(moveLeft,50);
    
};