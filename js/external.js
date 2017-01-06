
function moveHands() {
    with(new Date()) {
        h = 30 * (getHours() % 12 + getMinutes() / 60);
        m = 6 * getMinutes();
        s = 6 * getSeconds();

        document.getElementById('js-seconds').style.cssText = "transform:rotate(" + s + "deg);";
        document.getElementById('js-minutes').style.cssText = "transform:rotate(" + m + "deg);";
        document.getElementById('js-hours').style.cssText = "transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000);

    }
}



window.onload = moveHands;


$(document).ready(function() {
  $(".icon-volume-high").click(function(){
    $(this).css("display", "none");
    $(audio).muted = true;
    $(".icon-volume-mute").css("display", "block");
});

$(".icon-volume-mute").click(function(){
  $(this).css("display", "none");
  $(".icon-volume-high").css("display", "block");
});
});
