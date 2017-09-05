$(document).on('click', '.favorite', function (e) {
    var id = $(this).attr('data-id');
    e.preventDefault();
    var _this = $(this);

    if (!_this.hasClass('add')) {
        $.ajax({
            type: 'POST',
            url: '/ajax/favorite-update.php',
            dataType: 'json',
            data: {
                ajax_action: 'add_favorite',
                id: id
            }
        }).done(function (msg) {
            if (msg.status > 0) {
                _this.addClass('add');
                $.get('/ajax/favorite-update.php', '', function (data) {
                    $('.favorite-ajax').html(data);
                });
            }
        });
    }
    else {
        $.ajax({
            type: 'POST',
            url: '/ajax/favorite-update.php',
            dataType: 'json',
            data: {
                ajax_action: 'remove_favorite',
                id: id
            }
        }).done(function (msg) {
            if (msg.status > 0) {
                _this.removeClass('add');
                $.get('/ajax/favorite-update.php', '', function (data) {
                    $('.favorite-ajax').html(data);
                });
            }
        });
    }

});
