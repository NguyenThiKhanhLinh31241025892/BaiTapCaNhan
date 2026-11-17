/* Exercise 9.1 - Basic DOM Selection. Thực hành lần lượt từng bước trong PDF. */
var msg = document.getElementById('msgArea');
msg.value = 'here is some text';
var title = document.getElementById('pageTitle');
title.innerHTML = 'New Title';
document.getElementById('pageTitle').innerHTML = 'Even newer title';
msg.value = document.getElementById('first').innerHTML;
msg.value = document.getElementById('first').innerText;
msg.value = 'My class is ' + msg.getAttribute('class');
var elem = document.getElementsByTagName('textarea');
elem[0].value = 'selected by tag name';
elem = document.getElementsByTagName('span');
for (var i = 0; i < elem.length; i++) {
    msg.value += '\n' + elem[i].innerText;
}
msg.value = '';
var counts = document.getElementsByClassName('count-number');
for (var j = 0; j < counts.length; j++) {
    msg.value += '\n' + counts[j].innerText;
}
var ps = document.querySelector('#first p');
msg.value = ps.innerHTML;
ps = document.querySelectorAll('#first p');
for (var k = 0; k < ps.length; k++) {
    msg.value += ps[k].innerHTML + '\n';
}
console.log('Giá trị textarea trước khi ẩn:',msg.value);
msg.setAttribute('class','hidden');
document.getElementById('features').style.backgroundColor = 'green';
