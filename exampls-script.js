(function($) {

    "use strict";

    var loadingbar = '<div class="se-loading"> <div class="se-loader"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div>';

    /**
     * -----------------------------------------------------------------------
     * 		mega menu
     * -----------------------------------------------------------------------
     */
    var align_menu = function() {
        $('.mega-block').each(function() {
            var menu_left = $('.ay-nav-list').offset().left - $(this).parents('li.mega-menu').offset().left;
            $(this).css({
                'left': -($(this).parents('li.mega-menu').offset().left - ($(window).width() - $(this).outerWidth()) / 2),
            });
        });
    }
    align_menu();


    $(function() {

        if (aysel_obj.sticky_sidebar != false) {
            jQuery('.blog-content, #sidebars').theiaStickySidebar({
                additionalMarginTop: $('body').is('.admin-bar') ? $('#wpadminbar').height() + 30 : 30,
                additionalMarginBottom: 15,
                minWidth: 985
            });
        };

        $('li.mega-menu').one('hover', function() {
            align_menu();
        });

        var first_mega = true,
            megablock = $('.mega-block');
        $('.mega-subcats > li > a').on('click', function(e) {
            e.preventDefault();
            var megalink = $(this),
                data_catid = megalink.attr('data-catid'),
                data_catslug = megalink.attr('data-catslug'),
                data_menuid = $('input[name="menuid"]').val(),
                megamenu_nonce = $('.megamenu_nonce').val();

            if (data_catid != '' && data_catslug != '' && !megalink.hasClass('megalink')) {
                $.ajax({
                    type: 'POST',
                    url: aysel_obj.ajaxurl,
                    data: { menuid: data_menuid, cat_id: data_catid, action: 'mega_posts', megamenu_nonce: megamenu_nonce },
                    beforeSend: function() {
                        if (first_mega && megablock.find('.se-loading').length == 0) {
                            megablock.append(loadingbar);
                        };
                        megablock.find('.se-loading').addClass('active');
                        megablock.find('.se-loader').addClass('se-left');
                    }
                }).done(function(result) {
                    $('.se-loading').removeClass('active');
                    first_mega = false;
                    if (result) {
                        megalink.addClass('active');
                        $('.mega-more-posts').html(result);
                    };
                }).fail(function() {
                    first_mega = false;
                    $('.se-loading').removeClass('active');
                });
            };
        });

        /**********************************************/
        /* owl-header */
        /**********************************************/
        $("#owl-header .item").show();
        var owl = $("#owl-header");


        $("#owl-header").owlCarousel({


            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            pagination: false,
            navigation: false,
            navigationText: false,
            rewindNav: true,
            scrollPerPage: false,
            lazyLoad: true,
            autoHeight: true,

        });

        // Custom Navigation Events
        $(".owl-next").click(function() {
            owl.trigger('owl.next');
        });
        $(".owl-prev").click(function() {
            owl.trigger('owl.prev');
        });
        $(".owl-play").click(function() {
            owl.trigger('owl.play', 3000);
        });
        $(".owl-pause").click(function() {
            owl.trigger('owl.stop');
        });


    });

    /**
     * -----------------------------------------------------------------------
     * 	top search
     * -----------------------------------------------------------------------
     */

    var search_box = $('.suggested-results');
    var first_search = true;
    var live_search = function() {
        var search_key = $(this).val(),
            live_search_nonce = $("input[name=live_search_nonce]").val();

        if ($.trim(search_key).length > 0) {
            $.ajax({
                type: 'POST',
                url: aysel_obj.ajaxurl,
                data: { search_key: search_key, action: 'live_search', live_search_nonce: live_search_nonce },
                beforeSend: function() {
                    if (search_box.css('display') == 'block') {
                        if (first_search === false && search_box.find('.se-loading').length == 0) {
                            search_box.append(loadingbar);
                        };
                        search_box.find('.se-loading').addClass('active');
                        search_box.find('.se-loader').addClass('se-left');
                    }
                }
            }).done(function(result) {
                search_box.remove('.se-loading');
                first_search = false;

                if (result) {
                    search_box.html(result);
                    search_box.slideDown('slow');
                };
            }).fail(function() {
                search_box.remove('.se-loading');
                if (search_box.css('display') == 'block') {
                    search_box.slideUp('slow');
                }
            });
        };
    }


    $('.top-social-search input[type=text]').on('focus', function() {
        $(this).animate({ width: '220px' }, 300);
    }).on('blur', function() {
        if ($.trim($(this).val()) == '') {
            $(this).animate({ width: '105px' }, 300);
            if (search_box.css('display') == 'block') {
                search_box.slideUp();
            }
        };
    });

    $(window).resize(function() {
        var window_width = parseInt($(this).width(), 10);
        if (window_width <= 650) {
            $('.top-social-search input[type=text]').off();
            $('.top-social-search input[type=text]').on('keyup', live_search);
            $('.top-social-search input[type=text]').on('blur', function() {
                if ($.trim($(this).val()) == '') {
                    if (search_box.css('display') == 'block') {
                        search_box.slideUp();
                    }
                };
            });
        };
    });
    $('.top-social-search input[type=text]').on('keyup', live_search);


    /**
     * -----------------------------------------------------------------------
     * 			breaking news
     * -----------------------------------------------------------------------
     */
    function news_roller() {
        if (aysel_obj.news_animation == 'roll') {
            $('.news-list li:first').slideUp(function() { $(this).appendTo($('.news-list')).slideDown(); });
        } else {
            $('.news-list li:first').animate({ 'opacity': 0 }, aysel_obj.news_animation_speed, function() { $(this).appendTo($('.news-list')).css('opacity', 1); });
        }
    }

    function start_news_animation() {
        if (aysel_obj.news_status) {
            setInterval(function() { news_roller() }, aysel_obj.news_animation_laps);
        };
    }

    start_news_animation();

    /**********************************************/
    /* masonry */
    /*******************************************/
    var masonry_layout = $('.masonry');
    var set_masonry_arrow = function() {
        $('.masonry.timeline').masonry('on', 'layoutComplete', function(items) {
            $.each($('.ay-masonry'), function() {
                var masnory_item_offset = parseInt($(this).css('left'), 10);
                if (masnory_item_offset > 0) {
                    if ($(this).find('.corner').length) {
                        $(this).find('.corner').removeClass('corner corner-right corner-left').addClass('corner-left');
                    };
                } else {
                    if ($(this).find('.corner').length) {
                        $(this).find('.corner').removeClass('corner corner-left corner-right').addClass('corner-right');
                    }
                };
            })

        })
    }

    $(window).load(function() {
        masonry_layout.masonry({
            itemSelector: '.ay-masonry',
            gutter: 30,
        });
        masonry_layout.masonry('reloadItems');
        set_masonry_arrow();

    });

    $(window).on("resize", function() {
        masonry_layout.masonry({
            itemSelector: '.ay-masonry',
            gutter: 30
        });
        masonry_layout.masonry('reloadItems');
        set_masonry_arrow();

    });
    $(window).on("scroll", function() {
        if (!masonry_layout.find('.ay-masonry').hasClass('wdportfolio')) {
            masonry_layout.masonry({
                itemSelector: '.ay-masonry',
                gutter: 30
            });
            masonry_layout.masonry('reloadItems');
            set_masonry_arrow();
        }
    });
    /**********************************************/
    /* WAYPOINT */
    /*******************************************/
    $(function() {
        $('.ay-post-entry ,.sidebar > .ay-widget , .ay-post-auther , .related , .post-pagination ,.footer-widgets,.comment-body ,.ay-form').waypoint(function() {
            $(this).addClass('animate');
            //  if browser less ie10
            if ($.browser.msie && $.browser.version < 10) {
                $(this).css({ 'opacity': '1' });
            }
        }, {
            offset: '110%',
            triggerOnce: false
        });



        /**********************************************/
        /* posts share mouse enter*/
        /**********************************************/
        $(function() {
            $(".share-list").live('mouseenter', function(event) {
                $(this).children(".share-mask").css({ "opacity": 1 });
                var offset_x = event.pageX - $(this).offset().left,
                    width_list = $(this).width(),
                    mask_postion = parseInt($(this).children(".share-mask").css('left')),
                    mask = $(this).children(".share-mask");

                if (offset_x <= $(this).width() / 2) {
                    if (mask_postion > width_list) {
                        mask.css({ "left": "-100%", });
                    }
                    $(this).children(".share-mask").animate({ "left": "0", }, 200);
                } else {
                    if (mask_postion < 1) {
                        mask.css({ "left": "100%" });
                    }
                    $(this).children(".share-mask").animate({ "left": "0", }, 200);
                }
            });


            /**********************************************/
            /* posts share mouse leave*/
            /**********************************************/

            $(".share-list").live('mouseleave', function(event) {
                var offset_x = event.pageX - $(this).offset().left,
                    width_list = $(this).width(),
                    mask_postion = parseInt($(this).children(".share-mask").css('left')),
                    mask = $(this).children(".share-mask");

                if (offset_x >= $(this).width() / 2) {
                    if (mask_postion < 1) {
                        mask.css({ "left": "0", });
                    }
                    $(this).children(".share-mask").animate({ "left": "100%", }, 300);
                } else {
                    if (mask_postion > 1) {
                        mask.css({ "left": "100%", });
                    }
                    $(this).children(".share-mask").animate({ "left": "-100%", }, 300);
                }
            });
        });




        /**********************************************/
        /* Light box */
        /**********************************************/

        function wd_light_box() {
            $('.ay-lightbox').nivoLightbox({
                effect: 'fadeScale', // The effect to use when showing the lightbox
                theme: 'default', // The lightbox theme to use
                keyboardNav: true, // Enable/Disable keyboard navigation (left/right/escape)
                clickOverlayToClose: true, // If false clicking the "close" button will be the only way to close the lightbox
                onInit: function() {}, // Callback when lightbox has loaded
                beforeShowLightbox: function() {}, // Callback before the lightbox is shown
                afterShowLightbox: function(lightbox) {
                    var lightbox = $('.nivo-lightbox-wrap').find('.nivo-lightbox-image img').outerHeight(),
                        nivo_lightbox_wrap = $('.nivo-lightbox-wrap').outerHeight(),
                        position_bottom = nivo_lightbox_wrap - lightbox;
                    if (nivo_lightbox_wrap == lightbox) {
                        $('.nivo-lightbox-title-wrap').css({ 'bottom': 10 });
                    } else {
                        $('.nivo-lightbox-title-wrap').css({ 'bottom': position_bottom / 2 + 11 });
                    }

                }, // Callback after the lightbox is shown
                beforeHideLightbox: function() {}, // Callback before the lightbox is hidden
                afterHideLightbox: function() {}, // Callback after the lightbox is hidden
                onPrev: function(element) {
                    var lightbox = $('.nivo-lightbox-wrap').find('.nivo-lightbox-image img').outerHeight(),
                        nivo_lightbox_wrap = $('.nivo-lightbox-wrap').outerHeight(),
                        position_bottom = nivo_lightbox_wrap - lightbox;
                    if (nivo_lightbox_wrap == lightbox) {
                        $('.nivo-lightbox-title-wrap').css({ 'bottom': 10 });
                    } else {
                        $('.nivo-lightbox-title-wrap').css({ 'bottom': position_bottom / 2 + 11 });
                    }
                }, // Callback when the lightbox gallery goes to previous item
                onNext: function(element) {
                    var lightbox = $('.nivo-lightbox-wrap').find('.nivo-lightbox-image img').outerHeight(),
                        nivo_lightbox_wrap = $('.nivo-lightbox-wrap').outerHeight(),
                        position_bottom = nivo_lightbox_wrap - lightbox;
                    if (nivo_lightbox_wrap == lightbox) {
                        $('.nivo-lightbox-title-wrap').css({ 'bottom': 10 });
                    } else {
                        $('.nivo-lightbox-title-wrap').css({ 'bottom': position_bottom / 2 + 11 });
                    }
                }, // Callback when the lightbox gallery goes to next item
                errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
            });
        };
        $(function() {

            wd_light_box();

        });





        /**********************************************/
        /* Responsive Video & soundcloud*/
        /**********************************************/
        $(".ay-post").fitVids();
        $(".fluid-width-video-wrapper").fitVids();
        $(".ay-post").fitVids({ customSelector: "iframe[src^='https://w.soundcloud.com']" });


        $('.site-tagline').waypoint(function() {
            $('.home-featured .simple-social-icons ul li a').toggleClass('animate');
        }, {
            offset: '50%',
            triggerOnce: true
        });

        var menuIsOn = false,
            $window = $(window);

        var scrollup = function(elm) {
            if (elm.scrollTop() > 200) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        };

        /**********************************************/
        /* BACK TO TOP */
        /**********************************************/

        $window.scroll(function() {
            scrollup($(this));
        });

        scrollup($window);

        $('.scrollup').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 800);
        });

        /**
         * -----------------------------------------------------------------------
         * 	RETINA LOGO
         * -----------------------------------------------------------------------
         */

        if (window.devicePixelRatio > 1) {
            var lowresImages = $('.logo h1 a img');
            lowresImages.attr('src', lowresImages.attr('data-retina'));
        }

        /**********************************************/
        /*  Create the dropdown nav   */
        /**********************************************/

        var create_dropdown_nav = function(location) {

            $("<select />").appendTo(location);
            $("<option />", { "selected": "selected", "value": "", "text": "Go to..." }).appendTo(location + " select");
            $(location + "  a").each(function() {
                var el = $(this);
                var da = '';
                if ($(this).parents('.sub-menu').length) { da = '- '; }
                if ($(this).parents('.sub-menu').length == 2) { da = '- - '; }
                if ($(this).parents('.sub-menu').length == 3) { da = '- - - '; }
                $("<option />", { "value": $(this).attr("href"), "text": da + $(this).text() }).appendTo(location + " select");
            });
            $(location + " select").change(function() { window.location = $(this).find("option:selected").val(); });

        }

        create_dropdown_nav('.ay-nav');
        create_dropdown_nav('.top-nav');

        /**********************************************/
        /* tooltip && carousel slider   */
        /**********************************************/

        $('.tooltips a').tooltip();
        $('.carousel').carousel();
        /**********************************************/
        /* social counter in widget */
        /**********************************************/
        var $social_follower_height = $('.bl-social-follower li').eq(1).height(),
            $animation_speed = 800;

        $('ul.bl-social-follower > li').hover(function(e) {
            $(this).find('img').animate({ top: '-' + $social_follower_height }, { duration: $animation_speed, queue: false });
            $(this).find('p').animate({ top: 0 }, { duration: $animation_speed, queue: false });

        }, function() {

            $(this).find('img').animate({ top: 0 }, { duration: $animation_speed, queue: false });
            $(this).find('p').animate({ top: $social_follower_height }, { duration: $animation_speed, queue: false });

        });

    });
})(jQuery);