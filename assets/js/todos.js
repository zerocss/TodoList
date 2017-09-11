$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {

    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {

    if(event.which === 13) {
        var text = $(this).val();
        $(this).val("");

        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>");
    }
});

$("h1").find("i").on("click", function() {
    $(this).toggleClass("fa-minus-square fa-plus-square");
    $("input[type='text']").fadeToggle();
})