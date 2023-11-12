//scroll
// if ($(window).width() > 992) {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 10) {
//             $('.header-logo').hide();
//             $('.fa-home').show();
//         } else {
//             $('.header-logo').show();
//             $('.fa-home').hide();
//         }
//     });
// }
$(document).ready(function () {
    $(".btn-search-category").on("click", function () {
        $(".dropdown-menu.search-mobile").attr("style", "display:block;");
    });
});
$('body').on('click', function () {
    $(".dropdown-menu.search-mobile").attr("style", "");
    // console.log("hide search");
});
$('#Video-player').on('shown.bs.modal', function () {
    $('#video1')[0].play();
})
$('#Video-player').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
})
$(document).ready(function () {
    $('.products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        rtl: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".inputs").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).next('.inputs').focus();
        }
    });
    // password
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    $(".toggle-password2").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

});
$(document).ready(function () {
    $('.product-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        rtl: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.certificates-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        rtl: true,
        dots: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1 ,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.FAQ-carousel').flickity({
        // options
        cellAlign: 'right',
        contain: true,
        rightToLeft: true,
        prevNextButtons: false,
        pageDots: true
    });
    $(".add-qty-btn").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        var newVal = parseFloat(oldValue) + 1;
        $button.parent().find("input").val(newVal);
    });
    $(".sub-qty-btn").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        $button.parent().find("input").val(newVal);
    });
    $('.favs-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        rtl: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.radio').on("click", function() {
        $('.option').removeClass('payment-selected');
        $(this).parent().addClass('payment-selected');
    });

});
$(document).ready(function () {
    $('.virtual-address-toggler').on("click", function () {
        if ($(".virtual-address-toggler").hasClass("off")) {
            console.log("off");
            $(this).removeClass("off");
            $(this).addClass("on");
            $(this).attr('src', 'images/toggler-on.svg');
        }
        else if($(".virtual-address-toggler").hasClass("on")) {
            console.log("on");
            $(this).removeClass("on");
            $(this).addClass("off");
            $(this).attr('src', 'images/toggler-off.svg');
        }
    });
    $('.btn-modal-cancel').on("click", function () {
       $("#add-address").modal('hide');
    });
    $('.choose-address').on("click", function () {
        $('.choose-address').removeClass('selected-address');
        $(this).addClass('selected-address');
    });
    $('.checkbox').on("click", function () {
        if ($(".checkbox").hasClass("checked")) {
            console.log("off");
            $(this).removeClass("checked");
            $(this).attr('src', 'images/un-check-box.svg');
        }
        else {
            console.log("on");
            $(this).addClass("checked");
            $(this).attr('src', 'images/check-box.svg');
        }
    });
    // $( "#price-slider" ).slider({
    //     range: true,
    //     values: [ 17, 67 ]
    // });
    // player
    var num = 0;
    var hiddenPlayer = $('#hidden-player');
    var player = $('#player');
    var title = $('.songtitle');
    var artist = $('.artist');
    var cover = $('.coverr');

    function secondsTimeSpanToHMS(s) {
        var h = Math.floor(s / 3600); //Get whole hours
        s -= h * 3600;
        var m = Math.floor(s / 60); //Get remaining minutes
        s -= m * 60;
        return h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
    };

    songs = [{
        src: "https://babymozart.org/wp-content/uploads/2017/02/BaaBaaBlackSheep.mp3?_=3",
        title: "Song Title",
        artist: "Song Description",
        coverart: "images/player-img.jpg"
    },

        {
            src: "https://babymozart.org/wp-content/uploads/2017/02/alphabet_song.mp3?_=1",
            title: "Superhuman 2",
            artist: "Andy Mineo",
            coverart: "https://babymozart.org/wp-content/uploads/2017/02/BlackSheep.png"
        }
    ];

    var initSongSrc = songs[0].src;
    var initSongTitle = songs[0].title;
    var initSongArtist = songs[0].artist;
    var initSongCover = songs[0].coverart;

    hiddenPlayer.attr("src", initSongSrc);
    title.html(initSongTitle);
    artist.html(initSongArtist);
    cover.attr('src', initSongCover);

    hiddenPlayer.attr('order', '0');
    hiddenPlayer[0].onloadedmetadata = function () {
        var dur = hiddenPlayer[0].duration;
        var songLength = secondsTimeSpanToHMS(dur)
        var songLengthParse = songLength.split(".")[0];
        $('.time-finish').html(songLengthParse);
    };

    var items = songs.length - 1;

    $('.next').on('click', function () {
        var songOrder = hiddenPlayer.attr('order');

        if (items == songOrder) {
            num = 0;
            var songSrc = songs[0].src;
            var songTitle = songs[0].title;
            var songArtist = songs[0].artist;
            var songCover = songs[0].coverart;
            hiddenPlayer.attr('order', '0');
            hiddenPlayer.attr('src', songSrc).trigger('play');
            title.html(songTitle);
            artist.html(songArtist);
            cover.attr('src', songCover);
        } else {
            console.log(songOrder);
            num += 1;
            var songSrc = songs[num].src;
            var songTitle = songs[num].title;
            var songArtist = songs[num].artist;
            var songCover = songs[num].coverart;
            hiddenPlayer.attr('src', songSrc).trigger('play');
            title.html(songTitle);
            artist.html(songArtist);
            cover.attr('src', songCover);
            hiddenPlayer.attr('order', num);
        }
    });

    $('.prev').on('click', function () {
        var songOrder = hiddenPlayer.attr('order');

        if (songOrder == 0) {
            num = items;
            var songSrc = songs[items].src;
            var songTitle = songs[items].title;
            var songArtist = songs[items].artist;
            hiddenPlayer.attr('order', items);
            hiddenPlayer.attr('src', songSrc).trigger('play');
            title.html(songTitle);
            artist.html(songArtist);
        } else {
            num -= 1;
            var songSrc = songs[num].src;
            var songTitle = songs[num].title;
            var songArtist = songs[num].artist;
            hiddenPlayer.attr('src', songSrc).trigger('play');
            title.html(songTitle);
            artist.html(songArtist);
            hiddenPlayer.attr('order', num);
        }
    });

    $(".play-button").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("paused");
        if ($(this).hasClass("paused")) {
            hiddenPlayer[0].pause();
        } else {
            hiddenPlayer[0].play();
        }
    });

    hiddenPlayer.on('timeupdate', function () {
        var songLength = secondsTimeSpanToHMS(this.duration)
        var songLengthParse = songLength.split(".")[0];
        $('.time-finish').html(songLengthParse);

        var songCurrent = secondsTimeSpanToHMS(this.currentTime)
        var songCurrentParse = songCurrent.split(".")[0];
        $('.time-now').html(songCurrentParse);
        $('progress').attr("value", this.currentTime / this.duration);

        if (!hiddenPlayer[0].paused) {
            $(".play-button").removeClass('paused');
            $('progress').css('cursor', 'pointer');


            $('progress').on('click', function (e) {
                var parentOffset = $(this).parent().offset();
                var relX = e.pageX - parentOffset.left;
                var percPos = relX * 100 / 355;
                var second = hiddenPlayer[0].duration * parseInt(percPos) / 100;
                console.log(second);
                hiddenPlayer[0].currentTime = second;
            })
        }

        if (this.currentTime == this.duration) {
            $('.next').trigger('click');
        }
    });

    $("audio").prop('muted', false);

    $("#sound").click(function () {
        if ($("audio").prop('muted')) {
            $("audio").prop('muted', false);
            $(this).addClass('removed-mute'); // changing icon for button
            $(this).removeClass('add-mute');
            $(this).find('i').toggleClass('fa-volume-up fa-volume-off');
        } else {
            $("audio").prop('muted', true);
            $(this).removeClass('removed-mute');
            $(this).addClass('add-mute'); // changing icon for button
            $(this).find('i').toggleClass('fa-volume-up fa-volume-off');
        }
        //console.log($("audio").prop('muted'))
    });


    // end player
});

