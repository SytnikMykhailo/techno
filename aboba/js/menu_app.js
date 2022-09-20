$(function() {
    /* Menu nav toggle */
    $("#nav_menu").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});
function soundClick() {
let audio = document.getElementById("audio");
console.log(audio);
if(audio.paused){
audio.play();
}
else{
audio.pause();
}
}