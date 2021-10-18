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
