export default function FormMoudule() {
  if ($(".js-password-icon").length) {
    $(".js-password-icon").click(function () {
      $(this).toggleClass("is-active");
      let input = $(this).closest(".js-password").find(".form-input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
}
