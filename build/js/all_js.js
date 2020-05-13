"use strict";

window.addEventListener("DOMContentLoaded", preloaderHide, false);
var preloader = $("#preloader");

function preloaderHide() {
  window.setTimeout(function () {
    preloader.addClass("preloader-hide");
    preloader.css("opacity", "0");
    setTimeout(function () {
      preloader.css("display", "none");
    }, 500);
  }, 1000);
}

$(document).ready(function () {
  $(".apartments-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: "<div class='prev'></div>",
    nextArrow: "<div class='next'></div>"
  });
  $(".progress-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    // prevArrow: "<div class='prev'></div>",
    // nextArrow: "<div class='next'></div>",
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  $(".apart-img-block").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".apart-slider-nav"
  });
  $(".apart-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".apart-img-block",
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }]
  }); // mob-menu

  var $header = $("header");
  var $menuList = $(".nav-header");
  var $burger = $(".burger");
  $burger.click(function () {
    $header.toggleClass("header-mob");
    $menuList.toggleClass("nav-header-mob");
  }); // infrastructure

  var $infrastLink = $(".infrastructure-link");
  var $infoItem = $(".infrastructure-info-item");
  $infoItem.each(function (i) {
    $(this).css("display", "none");
  });
  $infrastLink.click(function () {
    var id = $(this).attr("id");
    $infoItem.each(function (i) {
      $(this).css("display", "none");

      if ($(this).hasClass(id)) {
        $(this).css("display", "block");
      }
    });
  }); // adding logo in menu

  var $itemMenu = $(".main-menu li");
});