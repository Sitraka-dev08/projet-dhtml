$(function () {
    $("sliderlargeur").slider({
        min: 100,
        max: 600,
        value: 300,

        slider: function (envent,ui){
            $
            ("#image").css("width",ui.value + "px");
        }
    });
});

$(function () {
    $("sliderhauteur").slider({
        min: 100,
        max: 600,
        value: 300,

        slider: function (envent,ui){
            $
            ("#image").css("height",ui.value + "px");
        }
    });
});