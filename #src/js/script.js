// HUMBURGER
$('.humburger').click(function(event) {

    let showMenu = false;

    if(!showMenu) {
        $('.humburger').toggleClass('close');
        $(`
            .menu,
            .menu__branding,
            .menu__list,
            .menu__item,
            .social
        `).toggleClass('show');
        $('body, html').toggleClass('lock');
        showMenu = true;
    } else {
        $('.humburger').removeClass('close');
        $(`
            .menu,
            .menu__branding,
            .menu__list,
            .menu__item,
            .social
        `).removeClass('show');
        $('body, html').removeClass('lock'); 
        showMenu = false;
    }
});

$('.menu__item').click(function(event){
    $(`
        .menu,
        .menu__branding,
        .menu__list,
        .menu__item,
        .social
    `).removeClass('show');
    $('body, html').removeClass('lock');
    $('.humburger').removeClass('close'); 
});

// 

$('.achievement__counter').each(function() {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        dutation: 9000,
        easing: 'linear',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('.skill__per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
    });
});


//SCROLL MENU
$('.menu__item a').click(function(event) {

    var itemID = $(this).attr('href');
    var sectionoffset = -2;
    if ($(window).width() <= 860) {
        sectionoffset =50;
    }
    
    $("body,html").animate({
        scrollTop: $(itemID).offset().top - sectionoffset
    }, 100);

    $('.humburger,.menu,.menu__item').removeClass('active');
    $('body, html').removeClass('lock');
});

(function() {

    var navLinks = $('.menu__list .menu__item');
    var sections = $('section');
    var documentEl = $(document);

        documentEl.on('scroll', function() {
            var currentScrollPos = documentEl.scrollTop();

            sections.each(function() {

                var self = $(this);
                var targetClass = self.attr('class');
                var selfHeight = self.height();
                var selfPosTop = self.offset().top;

                if (selfPosTop < currentScrollPos && (selfPosTop + selfHeight) >= currentScrollPos) {
                    navLinks.removeClass('active');
                    $('.' + targetClass + '_marker').addClass('active');
                }
            });
            
        });

})();



// MODALS
const openModalButtons = $('[data-modal-target]'),
    closeModalButtons = $('[data-close-button]'),
    overlay = $('#overlay');

    openModalButtons.each(function(){
        $(this).on('click', function(){
        const modal = $(this).data('modalTarget')
        openModal(modal)
        $('body, html').toggleClass('lock'); 
    })
})

closeModalButtons.each(function(){
    $(this).on('click', function(){
        const modal = $(this).closest('.modal')
        closeModal(modal)
        $('body, html').toggleClass('lock'); 
    })
})

overlay.on('click', function(){
    const modals = $('.modal.active');
    modals.each(function(){
        closeModal(this)
        $('body, html').toggleClass('lock'); 
    })
})

function openModal(modal) {
    if(modal == null) {
        return
    }
    $(modal).addClass('active')
    overlay.addClass('active')
}

function closeModal(modal) {
    if(modal == null) {
        return
    }
    $(modal).removeClass('active')
    overlay.removeClass('active')
}


// SWIPER
const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    autoHeight: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngel: 45,
    slideToClickedSlide: true,
    watchOverflow: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    mousewheel: {
        sensitivity: 2,
        eventsTarget: ".image-slider__wrapper"
    },

    breakpoints: {
        1440: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 2,
            paceBetween: 20
        },
        550: {
            slidesPerView: 1,
            paceBetween: 10
        },
    },

});
