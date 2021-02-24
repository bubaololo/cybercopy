$('select').styler();

function calc() {

    var type = document.getElementById("type"),
        spk = document.getElementById("spk"),
        svc = document.getElementById("svc"),
        fonts = document.getElementById("fonts"),
        lang = document.getElementById("lang"),
        alph = document.getElementById("alph"),
        t_fonts = document.getElementById("t_fonts"),
        graph = document.getElementById("graph"),
        bord = document.getElementById("bord"),
        bg = document.getElementById("bg"),
        mtext = document.getElementById("mtext"),
        prot = document.getElementById("prot"),
        srok = document.getElementById("srok");


    var price = 20;

    price += Number(type.options[type.selectedIndex].value);
    price += Number(spk.options[spk.selectedIndex].value);
    price += Number(svc.options[svc.selectedIndex].value);
    price += Number(fonts.options[fonts.selectedIndex].value);
    price *= Number(lang.options[lang.selectedIndex].value);
    price *= Number(alph.options[alph.selectedIndex].value);
    price *= Number(t_fonts.options[t_fonts.selectedIndex].value);
    price += Number(graph.options[graph.selectedIndex].value);
    price += Number(bord.options[bord.selectedIndex].value);
    price += Number(bg.options[bg.selectedIndex].value);
    price += Number(mtext.options[mtext.selectedIndex].value);
    price += Number(prot.options[prot.selectedIndex].value);
    price *= Number(srok.options[srok.selectedIndex].value);

    result.innerHTML = Math.floor(price);

};
$(document).ready(function() {
    $("#type").change(function() {
        var $val = document.getElementById("type").options.selectedIndex;
        var $spk = $('#spk');
        var $bord = $('#bord');
        var $all = $(".seal__options").find("select");
        if ($val == 2) {
            $bord.prop('selectedIndex', 0);
            $spk.prop('selectedIndex', 0);
            $(".round__strings, .border").hide();
            $(".seal__options").show();
        } else if ($val == 3) {
            $bord.prop('selectedIndex', 0);
            $spk.prop('selectedIndex', 0);
            $(".round__strings, .border").hide();
            $(".seal__options").show();
        } else if ($val >= 4) {
            $all.prop('selectedIndex', 0);
            $(".seal__options").hide();
        } else {
            $(".seal__options, .round__strings, .border").show();
        }
        console.log($val);
    });
});