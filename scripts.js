var showingConnect = false;

$(function() {
    $('.main-page h1').fadeIn(500);
    $('#work').fadeIn(1000);
    $('#code').fadeIn(1500);
    $('#design').fadeIn(2000);
    $('#resume').fadeIn(2500);
    $('#connect').fadeIn(3000);
});

$(function() {
    $('#connect').click(function() {
        if (!showingConnect){
            $('.platforms li')
                .css('opacity', 0)
                .slideDown(700)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1200 });
            showingConnect = true;
        } else {
            $('.platforms li')
                .css('opacity', 1)
                .slideUp(700)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 500 });
            showingConnect = false;
        }
    });
});

/* Page transitions */

$(function() {
    $('.resume')
                .css('opacity', 0)
                .slideDown(1000)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1000 });
});

$(function() {
    $('#resume').click(function() {
        $('.main-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'resume.html' }, 1000 );
    });
});

$(function() {
    $('.resume #left').click(function() {
        $('.resume')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'index.html' }, 1000 );
    });
});

$(function() {
    $('.design-page')
                .css('opacity', 0)
                .slideDown(1000)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1000 });
});

$(function() {
    $('#design').click(function() {
        $('.main-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'designs.html' }, 1000 );
    });
});

$(function() {
    $('.design-page #left').click(function() {
        $('.design-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'index.html' }, 1000 );
    });
});

/* End of transitions */

/* Modal */

$(function() {
    $('#dsgn img').click(function() {
        $('#myModal').show();
        $('#modalImg').attr('src', this.src);
        $('#dsgn #caption').html(this.alt);
    });
});

$(function() {
    $('.close').click(function() {
        $('#myModal').hide();
    });
});