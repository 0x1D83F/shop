$(document).on('ready', function () {
    'use strict';


    //show menu
    var fullMenu = $('.full-menu');
    $('.menu-btn, .mob-nav').on('click', function () {
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            fullMenu.show();
            setTimeout(function () {
                fullMenu.addClass('active');
            }, 10);
            $('body, .header, .fixed-header, .full-menu-lang').css({
                'overflow': 'hidden',
                'padding-right': scrollbarWidth() + 'px'
            });
            $('.fixed-menu-btn').css({
                'padding-right': scrollbarWidth() + 'px'
            });
        }else{
            fullMenu.removeClass('active');
            setTimeout(function () {
                fullMenu.hide();
                $('body, .header, .fixed-header, .full-menu-lang').removeAttr('style');
                $('.fixed-menu-btn').css({
                    'padding-right': '0'
                });
            }, 200);

            //close sub-menu
            $('.big-list > ul > li > a').removeClass('sub-opened');
            $('.sub-menu').slideUp(200);
        }

    });

    var fullMenu = $('.full-menu');
    $('.mob-nav').on('click', function () {
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            fullMenu.show();
            setTimeout(function () {
                fullMenu.addClass('active');
            }, 10);
            $('body, .header, .fixed-header, .full-menu-lang').css({
                'overflow': 'hidden',
                'padding-right': scrollbarWidth() + 'px'
            });
            $('.fixed-menu-btn').css({
                'padding-right': scrollbarWidth() + 'px'
            });
        }else{
            fullMenu.removeClass('active');
            setTimeout(function () {
                fullMenu.hide();
                $('body, .header, .fixed-header, .full-menu-lang').removeAttr('style');
                $('.fixed-menu-btn').css({
                    'padding-right': '0'
                });
            }, 200);

            //close sub-menu
            $('.big-list > ul > li > a').removeClass('sub-opened');
            $('.sub-menu').slideUp(200);
        }

    });


    function scrollbarWidth() {
        var block = $('<div>').css({'height':'50px','width':'50px'}),
            indicator = $('<div>').css({'height':'200px'});

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }


    //focus, active input
    $('.site-input input, .site-input textarea').on('focus', function () {
        $(this).parents('label').addClass('focus-input');
    });
    $('.site-input input, .site-input textarea').on('blur', function () {
        $(this).parents('label').removeClass('focus-input');
    });


    //scroll to anchor
    if($('div').is('.faq-section')){
        $('.faq-section .tabs-head ul li a[href*="#"]').on('click', function(event){
            event.preventDefault();
            $('.faq-section .tabs-head ul li').removeClass('active');
            $(this).parent('li').addClass('active');
            var anchor = $(this).attr('href');
            if($(anchor).position()){
                $('html, body').stop().animate({
                    scrollTop: $(anchor).offset().top - 90
                }, 800);
            }
        });
    }


    //to top
    $('.top-button a[href*="#"]').on('click', function(event){
        event.preventDefault();
        var anchor = $(this).attr('href');
        if($(anchor).position()){
            $('html, body').stop().animate({
                scrollTop: $(anchor).offset().top
            }, 800);
        }
    });


    //waves button
    $('.site-btn').on('mousedown', function (e) {
        var target = e.target;
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector('.ripple');
        $(ripple).remove();
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
        var top = e.pageY - rect.top - ripple.offsetHeight / 2 - $(window).scrollTop();
        var left = e.pageX - rect.left - ripple.offsetWidth / 2 - $(window).scrollLeft();
        ripple.style.top = top + 'px';
        ripple.style.left = left + 'px';
        return false;
    });


    //play video when modal opened
    $('[data-target = "#videoModal"]').on('click', function () {
        player.playVideo();
    });
    //stop video when modal closed
    $('#videoModal').on('click', function (event) {
        if ($(event.target).closest($('#videoModal .modal-body')).length) return;
        player.pauseVideo();
    });


    //footer height
    function footerHeight() {
        var footerHeight = $('.footer').outerHeight();
        $('.footer-margin').css('height', footerHeight);
    }
    $(window).on('load', function () {
        footerHeight();
    });
    $(window).on('resize', function () {
        footerHeight();
    });



    //open sub-menu
    $('.big-list > ul > li > a').on('click', function (event) {

        if($(this).next('.sub-menu').position()){
            event.preventDefault();
            if($(this).hasClass('sub-opened')){
                $(this).next('.sub-menu').slideUp(300);
                $(this).removeClass('sub-opened');
            }else{
                $('.big-list > ul > li > a').removeClass('sub-opened');
                $('.sub-menu').slideUp(300);
                $(this).next('.sub-menu').slideDown(300);
                $(this).addClass('sub-opened');
            }
        }
    });


    //more projects
    $('#more-projects').on('click', function (event) {
        event.preventDefault();
        var hiddenProject = $('.hidden-projects');
        var countHiddenProjects = hiddenProject.length;
        var count = 0;
        hiddenProject.eq(0).removeClass('hidden-projects');
        var interval = setInterval(function () {
            if(count < 3){
                hiddenProject.eq(count + 1).removeClass('hidden-projects');
                count++;
            }else{
                clearInterval(interval);
                count = 0;
            }
        }, 300);
        if(countHiddenProjects <= 4){
            $(this).fadeOut(300);
            $(this).parent('.more-projects').addClass('hidden-project-btn');
        }
        $(window).trigger('scroll');
    });


    //show all share links
    $('.show-all-share a').on('click', function (event) {
        event.preventDefault();
        $(this).parent('.show-all-share').slideUp(400);
        $(this).parent('.show-all-share').next('.hidden-share').slideDown(400);
    });
});