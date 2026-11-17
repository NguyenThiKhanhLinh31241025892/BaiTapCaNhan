/* Exercise 10.2 - Basic Selectors. Mỗi bước được giữ rõ trong chú thích.
   PDF dùng $('#first').html('new Title'), thao tác này xóa cả textarea.
   Vì vậy lưu nội dung cũ và phục hồi trước khi làm tiếp các bước sau. */
var msg = $('#msgArea');
msg.val('here is some new text');
var originalFirst = $('#first').html();
$('#first').html('new Title');
console.log('Bước 3 - #first:',$('#first').html());
$('#first').html(originalFirst);
msg = $('#msgArea');
msg.val('My class is ' + msg.attr('class'));
console.log('Bước 4 - textarea:',msg.val());
var buttons = $('button');
buttons.css('background-color','red');
var temp = $('body');
temp.css('background-color','ivory');
$('.center-icons').addClass('selected');
$('#pageTitle').text('new Title'); // Giữ tiêu đề phản ánh kết quả sau khi khôi phục.
