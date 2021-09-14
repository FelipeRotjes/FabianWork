$('body')
    .on('click', '.vimeo-launch', function () {
        var videoID = $(this).data('vimeo-id'),
            $video = '<div id="vimeo-pop-container"><div><span class="vimeo-close"></span><iframe sr' +
                    'c="https://player.vimeo.com/video/' + videoID + '/?title=1&amp;byline=1&amp;po' +
                    'rtrait=0&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowf' +
                    'ullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
        $('body').append($video);
    })
    .on('click', '.vimeo-close', function () {
        $(this).addClass('closing');

        $('#vimeo-pop-container')
            .delay(700)
            .animate({
                height: 0,
                top: '80%' 
            }, 'fast', function () {
                $('#vimeo-pop-container').remove();
            });
    });