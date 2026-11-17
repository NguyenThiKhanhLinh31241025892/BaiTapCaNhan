/* Exercise 10.7 - More jQuery Animation */
$(function() {
    $('figure img').on('mouseover',function(e) {
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace('small','medium');
        $('#preview').remove();
        var preview = $('<div id="preview"></div>');
        var image = $('<img>').attr('src',newsrc).attr('alt',alt);
        var caption = $('<p>').text(alt);
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);
        $(this).addClass('gray');
        movePreview(e);
        $('#preview').fadeIn(1000);
    });
    $('figure img').on('mouseleave',removePreview);
    $('figure img').on('mousemove',movePreview);
});
function removePreview() {
    $(this).removeClass('gray');
    $('#preview').remove();
}
function movePreview(e) {
    $('#preview').css('top',(e.pageY - 10)+'px').css('left',(e.pageX + 30)+'px');
}
