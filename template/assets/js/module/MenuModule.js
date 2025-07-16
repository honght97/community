export default function MenuModule() {
  let width = $(window).width();
  // if (width < 992) {
  //   if ($(".js-bar").length) {
  //     $(".js-bar").on("click", function () {
  //       $(".js-header-mobile").addClass("is-active");
  //       $(this).addClass("is-active");
  //       $(".overlay").addClass("is-active");
  //       $(".main").addClass("is-active");
  //       $(".js-header").addClass("is-active");
  //       $("html").off("touchmove");
  //       if ($(this).hasClass("is-active")) {
  //         $("body").css("overflow", "hidden");
  //       }
  //     });
  //   }

  //   if ($(".js-header-close").length) {
  //     $(".js-header-close").on("click", function () {
  //       $(".js-header-mobile").removeClass("is-active");
  //       $(".overlay").removeClass("is-active");
  //       $(".js-bar").removeClass("is-active");
  //       $(".main").removeClass("is-active");
  //       $(".js-header").removeClass("is-active");
  //       $("body").css("overflow", "hidden auto");
  //     });
  //   }

  //   if ($(".overlay").length) {
  //     $(".overlay").on("click", function () {
  //       $(".overlay").removeClass("is-active");
  //       $(".js-header-mobile").removeClass("is-active");
  //       $(".main").removeClass("is-active");
  //       $(".js-header").removeClass("is-active");
  //       $(".js-bar").removeClass("is-active");
  //       $("body").css("overflow", "hidden auto");
  //     });
  //   }

  //   if ($(".dropdown .child").length) {
  //     $(".dropdown:not(.header-account) .child").hide();
  //     $(".dropdown:not(.header-account)").click(function () {
  //       $(this).toggleClass("is-active");
  //       $(this).find(".child").stop().slideToggle();
  //     });
  //   }
  // }

  // onscroll
  let header;
  if ($(".js-header").length) {
    header = $(".js-header");
  }
  // $(window).scroll(function () {
  //   if ($(document).scrollTop() > 50) {
  //     header.addClass("is-fixed");
  //   } else {
  //     header.removeClass("is-fixed");
  //   }
  // });

  // $(document).ready(function () {
  //   if ($(this).scrollTop() > 50) {
  //     header.addClass("is-fixed");
  //   } else {
  //     header.removeClass("is-fixed");
  //   }
  // });

  // hide header
  // $(document).ready(function () {
  //   let lastScrollTop = 0;
  //   $(window).scroll(function () {
  //     let currentScroll = $(this).scrollTop();
  //     if (currentScroll > lastScrollTop && currentScroll > 100) {
  //       header.addClass("is-fixed");
  //       // if (width > 991) {
  //       //   if ($(".js-sidebar").length) {
  //       //     $(".js-sidebar").addClass("is-top");
  //       //   }
  //       // }
  //     } else {
  //       header.removeClass("is-fixed");
  //       // if (width > 991) {
  //       //   if ($(".js-sidebar").length) {
  //       //     $(".js-sidebar").removeClass("is-top");
  //       //   }
  //       // }
  //     }

  //     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  //   });
  // });

  // ================= get height of footer ==========
  function vh(percent) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (percent * h) / 100;
  }
  let heightFooter;
  if ($(".js-footer").length) {
    heightFooter = $(".js-footer").outerHeight(true);
  } else {
    heightFooter = 0;
  }
  let heightHeight;
  if ($(".js-header").length) {
    heightHeight = $(".js-header").outerHeight(true);
  } else {
    heightHeight = 0;
  }

  let mainHeight = vh(100) - heightFooter;
  if ($(".main").length) {
    // $(".main").css("padding-top", heightHeight);
    $(".main").css("min-height", mainHeight);
  }
}
