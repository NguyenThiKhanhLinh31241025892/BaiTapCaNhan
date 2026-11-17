/* Exercise 10.10 - jqXHR Handling: done, fail, always.
   Dịch vụ ví dụ dùng HTTP cũ, có thể không hoạt động trên HTTPS.
   Khi gặp lỗi, ghi nhận lỗi và tiếp tục thử GET JSON local. */
$(function() {
    $('.animLoading').hide();
    $('#consume').click(function() {
        $('.animLoading').show();
        $('#results ul').empty();
        $('#resultStatus').remove();
        var url = 'https://www.randyconnolly.com/funwebdev/services/travel/cities.php';
        $.ajax({url:url,method:'GET',dataType:'json',timeout:3500})
            .done(function(data) {
                renderCities(data);
                announce('GET thành công từ dịch vụ trong tài liệu.');
            })
            .fail(function(xhr,status,error) {
                console.warn('Remote GET failed - status='+status+' error='+error);
                announce('Dịch vụ gốc không phản hồi ('+status+'). Đang tải dữ liệu dự phòng.');
                $.getJSON('../data/cities.json')
                    .done(function(data) {
                        renderCities(data);
                        announce('GET thành công từ dữ liệu dự phòng; dịch vụ gốc báo lỗi '+status+'.');
                    })
                    .fail(function(xhr,status,error) {
                        announce('Không thể tải dữ liệu: '+status+' - '+error);
                    })
                    .always(function() { $('.animLoading').fadeOut('slow'); });
            })
            .always(function() {
                // Loader sẽ tắt tại đây khi GET gốc thành công.
                // Trong nhánh fail, loader được tắt sau GET dự phòng.
                if ($('#results ul li').length) $('.animLoading').fadeOut('slow');
            });
    });
    function renderCities(data) {
        if (!Array.isArray(data)) { announce('Dữ liệu không đúng định dạng.'); return; }
        $.each(data,function(index,value) {
            $('<li/>').text(value.name).appendTo('div#results ul');
        });
    }
    function announce(msg) {
        var node = $('#resultStatus');
        if (!node.length) node = $('<p id="resultStatus"></p>').insertBefore('#results');
        node.text(msg);
    }
});
