/* Exercise 10.9 - GET Requests.
   Thử endpoint bài PDF qua HTTPS, nếu không truy cập được thì tải
   data/cities.json trong repository bằng một GET thực sự. */
$(function() {
    $('#consume').click(function() {
        $('#results').html('<p>Đang gửi GET request...</p>');
        var remoteUrl = 'https://www.randyconnolly.com/funwebdev/services/travel/cities.php';
        $.ajax({url:remoteUrl,method:'GET',dataType:'json',timeout:3500})
            .done(function(data,status) { renderCities(data,status,'dịch vụ từ tài liệu'); })
            .fail(function() {
                $.getJSON('../data/cities.json',function(data,status) {
                    renderCities(data,status,'bộ dữ liệu dự phòng trên GitHub Pages');
                }).fail(function(xhr,status,error) {
                    $('#results').text('GET request không thành công: '+status+' '+error);
                });
            });
    });
    function renderCities(data,status,source) {
        if (!Array.isArray(data)) { $('#results').text('Dữ liệu trả về không phải danh sách.'); return; }
        if (status === 'success') {
            var ul = $('<ul></ul>');
            $.each(data,function(index,value) {
                $('<li/>').text(value.name).appendTo(ul);
            });
            $('#results').empty().append($('<p/>').text('GET thành công ('+source+')')).append(ul);
        }
    }
});
