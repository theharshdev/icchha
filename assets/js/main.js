$(".openMenu").click(function(){
    $(".menu").addClass("right-0");
    $(".menu").removeClass("-right-full");
    $(".closeMenu").addClass("flex");
    $(".closeMenu").removeClass("hidden");
    $(".openMenu").removeClass("flex");
    $(".openMenu").addClass("hidden");
});

$(".closeMenu, .navLinks").click(function(){
    $(".menu").removeClass("right-0");
    $(".menu").addClass("-right-full");
    $(".closeMenu").removeClass("flex");
    $(".closeMenu").addClass("hidden");
    $(".openMenu").addClass("flex");
    $(".openMenu").removeClass("hidden");
});