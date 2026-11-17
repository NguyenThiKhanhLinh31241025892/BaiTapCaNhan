/* Exercise 9.4 - Simple Event Handling */
var btn = document.getElementById('testButton');
var img = document.getElementById('mainImage');
var delayId = null;

function simpleHandler(event) {
    var content = document.getElementById('content');
    if (delayId !== null) clearTimeout(delayId);
    if (btn.innerHTML === 'Hide') {
        btn.innerHTML = 'Show';
        content.className = 'makeItDisappear';
        delayId = setTimeout(function() { content.style.display = 'none'; }, 1000);
    } else {
        btn.innerHTML = 'Hide';
        content.style.display = 'block';
        delayId = setTimeout(function() { content.className = 'makeItNormal'; }, 500);
    }
}
btn.addEventListener('click', simpleHandler);
img.addEventListener('mouseover', function(event) { img.className = 'makeItGray'; });
img.addEventListener('mouseout', function(event) { img.className = 'makeItNormal'; });
