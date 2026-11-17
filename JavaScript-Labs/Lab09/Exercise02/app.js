/* Exercise 9.2 - DOM Family Relations.
   Thử trong Console: document.getElementById('first').firstChild,
   .firstChild.nextSibling và .parentNode. */
var stories = document.getElementById('stories');
for (var i = 0; i < stories.childNodes.length; i++) {
    var child = stories.childNodes[i];
    console.log('child ' + i + ' =' + child + ' nodeType=' + child.nodeType);
    // nodeType 1 là phần tử HTML, nodeType 3 là văn bản (khoảng trắng).
    if (child.nodeType === 1) {
        child.style.backgroundColor = '#fff2b8';
    }
}
