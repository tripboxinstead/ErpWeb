$(document).ready(function () {
  $(document).on("click", "button.wish", function () {
    $(this).toggleClass("on");
  });

  $(document).on("click", ".btn_drawer", function () {
    $("body").addClass("fixed");
    $(".asideWrap").addClass("on");
  });
  $(document).on("click", ".asideWrap .close", function () {
    $("body").removeClass("fixed");
    $(".asideWrap").removeClass("on");
  });

  $(document).on("click", ".componentWrap.nav.sub li p", function () {
    $(this).parent().toggleClass("on");
    $(this).next().slideToggle("fast");
  });

  $(document).on("click", "header .btn_search", function () {
    $("body").addClass("fixed");
    $(".searchWrap").addClass("on");
  });

  $(document).on("click", ".searchWrap .close", function () {
    $("body").removeClass("fixed");
    $(".searchWrap").removeClass("on");
  });

  $(document).on("click", ".profilePhotoWrap", function () {
    $("body").addClass("fixed");
    $(".bottomsheetWrap.photo").addClass("on");
  });

  $(document).on("click", ".bottomsheetWrap .dimmed", function () {
    $("body").removeClass("fixed");
    $(".bottomsheetWrap").removeClass("on");
  });

  $(document).on("click", ".bottomsheetWrap .close", function () {
    $("body").removeClass("fixed");
    $(".bottomsheetWrap").removeClass("on");
  });

  $(document).on("click", ".popupBtn", function () {
    $(".popupContainer").removeClass("on");
    $("body").addClass("fixed");
    var popupIndex = $(this).attr("id");
    $(".popupContainer." + popupIndex).addClass("on");
  });

  $(".popupContainer .popupDimmed").click(function () {
    $(".popupContainer").removeClass("on");
    $("body").removeClass("fixed");
  });

  $(".popupContainer .close").click(function () {
    $(".popupContainer").removeClass("on");
    $("body").removeClass("fixed");
  });

  $(".detail .menu.tab a").click(function (event) {
    $(".detail .menu.tab li").removeClass("on");
    $(this).parents("li").addClass("on");
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 300);
  });

  $(document).on("click", ".scheduleWrap > li > header", function () {
    $(this).toggleClass("on");
    $(this).next().slideToggle("");
  });

  // 2022-10-21 추가
  $(document).on("click", ".newTypesub .scheduleWrap > li > header", function () {
    $(this).toggleClass("onen");
    $(this).next("article").toggleClass("open");
  });

  $(document).on("click", ".previewWrap .font > li", function () {
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
    var theme = $(this).attr("id");
    $("body").removeClass("style_font_malgunGothic style_font_nanumSquare style_font_nanumPen");
    $("body").addClass(theme);
  });

  $(document).on("click", ".previewWrap .color > li", function () {
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
    var theme = $(this).attr("id");
    $("body").removeClass("style_color_blue style_color_red style_color_purple style_color_green");
    $("body").addClass(theme);
  });

  // 2022-10-06 추가
  $(document).on("click", ".previewWrap .bgcolor > li", function () {
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
    var theme = $(this).attr("id");
    $("body").removeClass("style_bg_orange style_bg_green style_bg_blue style_bg_dark");
    $("body").addClass(theme);
  });

  // 2022-06-07 추가&수정
  var dataselect;

  init();
});

// 2022-06-07 추가
function init() {
  var dataselect_JSON = new Array();

  jsonMaker(10, dataselect_JSON);

  dataselect = $("#dataselect").comboTree({
    source: dataselect_JSON,
    isMultiple: true,
    cascadeSelect: false,
  });
}

function jsonMaker(limit, arr) {
  for (i = 0; i < limit; i++) {
    arr.push({ id: "id" + i, title: "5/12" });
  }
}
