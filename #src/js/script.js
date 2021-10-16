// Lang 
$( document ).on( 'click', '.js-lang', function () {
    const $parent = $( this ).closest( '.lang' );
    $parent.toggleClass( 'show' );
  });


//   Burger
var burger = $('.js-burger'),
    navContent = $('.js-mob-menu'),
    activeClass ='is-active';

burger.on('click', function(e){
    if($(this).hasClass(activeClass)) {
        $(this).removeClass(activeClass)
        navContent.removeClass(activeClass)
    } else {
        $(this).addClass(activeClass)
        navContent.addClass(activeClass)
    }
});

// Header Scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("active");
    } else {
       $(".header").removeClass("active");
    }
});

if ($(window).scrollTop() > 100) {
    $(".header").addClass("active");
}


// MODALS
const openModalButtons = $('[data-modal-target]'),
      closeModalButtons = $('[data-close-button]'),
      overlay = $('#overlay');

openModalButtons.each(function(){
    $(this).on('click', function(){
     const modal = $(this).data('modalTarget')
        openModal(modal)
    })
})

closeModalButtons.each(function(){
    $(this).on('click', function(){
     const modal = $(this).closest('.modal')
        closeModal(modal)
    })
})

overlay.on('click', function(){
    const modals = $('.modal.active');
    modals.each(function(){
        closeModal(this)
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



// SWIPER For mobile
// const breakpoint = window.matchMedia( '(min-width: 768px)');
// let categorySwiper;

// const breakpointChecker = function() {
//     if ( breakpoint.matches === true ) {
//         console.log(categorySwiper)
//         if ( categorySwiper !== undefined ) categorySwiper.destroy( true, true );
//         return
//     } else if ( breakpoint.matches === false ) {
//         return enableSwiper();
//     }
// }


// const enableSwiper = function() {
    
//     categorySwiper = new Swiper('.category-swiper', {
//         slidesPerView: 3.5,
//         grabCursor: true,

//     })

    
// }

// breakpoint.addListener(breakpointChecker);
// breakpointChecker();