/////////////////////////////////
//////JavaScriopts for posts page
/////////////////////////////////

$(function () {
  //Executed when js-menu-icon js clicked

  $(".js-menu-icon").click(function () {
    // $(this) : Self element, namely div.js-menu-icon
    // next() : Next to div.js-menu, namely div.menu
    // toggle() : Switch show and hide
    $(this).next().toggle();
  });
});
