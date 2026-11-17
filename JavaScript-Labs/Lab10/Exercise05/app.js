/* Exercise 10.5 - Inserting DOM Elements.
   Các thử nghiệm khác ở bước 2-7: after, before, append, prepend,
   appendTo, prependTo. Bước cuối sử dụng insertBefore(). */
$(function() {
    var img = $('<img src="../images/art/thumbs/13030.jpg" alt="Art thumbnail">');
    var panel = $('.panel');
    img.insertBefore(panel);
});
