"use strict";

$(function () {
  //The color of the selected value changed
  jQuery("#state-list").on("change", function () {
    if (jQuery(this).val()) {
      let colorselect = jQuery(this).find("option:selected").attr("id");
      jQuery(".bi-circle-fill option").css("color", "#919ca1");
      jQuery(".bi-circle-fill")
        .find("option:selected")
        .css("color", colorselect);
      jQuery(".bi-circle-fill").css("color", colorselect);
    } else {
      jQuery(".bi-circle-fill").css("color", "#919ca1");
      jQuery(".bi-circle-fill option").css("color", "#919ca1");
    }
  });
});

$(function () {
  //The color of the selected value changed
  jQuery("#state").on("change", function () {
    if (jQuery(this).val()) {
      let colorselect = jQuery(this).find("option:selected").attr("id");
      jQuery(".bi-circle-fill option").css("color", "#919ca1");
      jQuery(".bi-circle-fill")
        .find("option:selected")
        .css("color", colorselect);
      jQuery(".bi-circle-fill").css("color", colorselect);
    } else {
      jQuery(".bi-circle-fill").css("color", "#919ca1");
      jQuery(".bi-circle-fill option").css("color", "#919ca1");
    }
  });
});

$(function () {
  //The color of the selected value changed
  jQuery("#state-link").on("change", function () {
    if (jQuery(this).val()) {
      let colorselect = jQuery(this).find("option:selected").attr("id");
      jQuery(".bi-circle-fill option").css("color", "#919ca1");
      jQuery(".bi-circle-fill")
        .find("option:selected")
        .css("color", colorselect);
      jQuery(".bi-circle-fill").css("color", colorselect);
    } else {
      jQuery(".bi-circle-fill").css("color", "#919ca1");
      jQuery(".bi-circle-fill option").css("color", "#919ca1");
    }
  });
});
