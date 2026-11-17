// Exercise 9.5 - Responding to Load Events.
var boxClass = 'movingDiv';
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += 'This is div ' + num;
    box += '</div>';
    return box;
}
// Nếu đặt truy vấn dưới đây ngoài callback load, #div1 chưa được tạo.
window.addEventListener('load', function() {
    var divToGet = document.getElementById('div1');
    console.log('Đã tải DOM:',divToGet.innerHTML);
    alert(divToGet.innerHTML);
});
