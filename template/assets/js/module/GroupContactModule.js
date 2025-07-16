export default function GroupContactModule() {
  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        if ($(".js-contact").length) {
          $(".js-contact").addClass("is-active");
        }
      } else {
        if ($(".js-contact").length) {
          $(".js-contact").removeClass("is-active");
          $(".js-contact").removeClass("is-expand");
        }
      }
    });

    if ($(".js-top").length) {
      $(".js-top").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
      });
    }

    if ($(".select2").length) {
      $(".select2").on("click", function () {
        if ($(window).width() <= 1200) {
          $(".js-contact").removeClass("is-active");
        }
      });
    }

    if ($(".js-expand").length) {
      $(".js-expand").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".js-contact").toggleClass("is-expand");
      });

      jQuery(document).on("click", function ($, event) {
        if (!$(event.target).closest(".js-contact").length) {
          $(".js-contact").removeClass("is-expand");
        }

        $(".js-contact .group-contact_item:not(:first-child)").on(
          "click",
          function (event) {
            event.stopPropagation();
          }
        );
      });
    }
  });
}
