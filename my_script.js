function showWhenClicked() {
    $("#pig").show();
}

function hideWhenClicked() {
      var pig = $("#pig");
      var pig2 = $("#pig2");
      pig2.animate({left:'600px'}, "slow");
      pig.click(window.setTimeout(function(){pig.animate({left:'100px'},"slow")},1500))
      pig2.click(window.setTimeout(function(){pig2.hide()}, 1500));
      pig.click(window.setTimeout(function(){pig.hide()}, 2500));

}
function setup() {
    $("#pig").click(showWhenClicked);
    $("#pig").click(hideWhenClicked);
}
/*$("#pig").click(hideWhenClicked());*/
$(document).ready(setup);
