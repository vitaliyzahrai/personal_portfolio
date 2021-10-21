"use strict";

// HUMBURGER
$('.humburger').click(function (event) {
  var showMenu = false;

  if (!showMenu) {
    $('.humburger').toggleClass('close');
    $("\n            .menu,\n            .menu__branding,\n            .menu__list,\n            .menu__item,\n            .social\n        ").toggleClass('show');
    $('body, html').toggleClass('lock');
    showMenu = true;
  } else {
    $('.humburger').removeClass('close');
    $("\n            .menu,\n            .menu__branding,\n            .menu__list,\n            .menu__item,\n            .social\n        ").removeClass('show');
    $('body, html').removeClass('lock');
    showMenu = false;
  }
});
$('.menu__item').click(function (event) {
  $("\n        .menu,\n        .menu__branding,\n        .menu__list,\n        .menu__item,\n        .social\n    ").removeClass('show');
  $('body, html').removeClass('lock');
  $('.humburger').removeClass('close');
}); // 

$('.achievement__counter').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    dutation: 9000,
    easing: 'linear',
    step: function step(now) {
      $(this).text(Math.ceil(now));
    }
  });
}); // MODALS

var openModalButtons = $('[data-modal-target]'),
    closeModalButtons = $('[data-close-button]'),
    overlay = $('#overlay');
openModalButtons.each(function () {
  $(this).on('click', function () {
    var modal = $(this).data('modalTarget');
    openModal(modal);
    $('body, html').toggleClass('lock');
  });
});
closeModalButtons.each(function () {
  $(this).on('click', function () {
    var modal = $(this).closest('.modal');
    closeModal(modal);
    $('body, html').toggleClass('lock');
  });
});
overlay.on('click', function () {
  var modals = $('.modal.active');
  modals.each(function () {
    closeModal(this);
    $('body, html').toggleClass('lock');
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }

  $(modal).addClass('active');
  overlay.addClass('active');
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }

  $(modal).removeClass('active');
  overlay.removeClass('active');
}