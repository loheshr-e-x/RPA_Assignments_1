(function () {

var img = document.createElement('img');
img.src = 'https://c.tenor.com/P3JULNHAL9MAAAAC/tenor.gif';  // use web url for testing
img.style.position = 'fixed';
img.style.top = '20%';
img.style.left = '35%';
img.style.width = '300px';
img.style.zIndex = '999999';

document.body.appendChild(img);

setTimeout(function() {
    if (img && img.parentNode) {
        img.parentNode.removeChild(img);
    }
}, 3000);

return true;

})();