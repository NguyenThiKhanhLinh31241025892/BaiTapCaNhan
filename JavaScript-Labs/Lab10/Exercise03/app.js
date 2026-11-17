/* Exercise 10.3 - Advanced Selectors */
$(function() {
    // Bước 2 thử: $(':password').css('background-color','yellow');
    // Bước 3: comment dòng trên và tiếp tục kiểm tra bộ chọn nâng cao.
    $('form :nth-child(4n)').css('background-color','yellow');
    $('label:contains("word")').css('color','black');
});
