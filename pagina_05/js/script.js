/*Funcao de Mostrar e Esconder Elementos*/
$(document).ready(function(){
    $("#hide").click(function(){
    $("#rastreio_mapa").hide();
    });

    $("#show").click(function(){
    $("#rastreio_mapa").show();
    });
});

$(document).ready(function(){
    $("#distasi").click(function(){
    $("#paragraf").show();
    });
});

/*Funcao scroll de um elemento para outro animado*/
$(document).ready(function(){
        $("#scrollRastreio").click(function(){
        $('html, body').animate({
        scrollTop: $(".rastreio").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#scrollServicos").click(function(){
    $('html, body').animate({
    scrollTop: $(".servicos").offset().top
    }, 1000);
});
});

$(document).ready(function(){
    $("#scrollSobreNos").click(function(){
    $('html, body').animate({
    scrollTop: $(".sobreNos").offset().top
    }, 1000);
});
});

$(document).ready(function(){
    $("#scrollcontateNos").click(function(){
    $('html, body').animate({
    scrollTop: $(".contateNos").offset().top
    }, 1000);
});
});
 
/*Funcao fade in*/
$(document).ready(function(){
    $("#bntFadeIn").click(function(){
    $("#rastreioBand1").fadeIn();
    $("#rastreioBand2").fadeIn("slow");
    $("#rastreioBand3").fadeIn(3000);
    });
});

/*Funcao fade out*/
$("#bntFadeOut").click(function(){
    $("#rastreioBand1").fadeOut();
    $("#rastreioBand2").fadeOut("slow");
    $("#rastreioBand3").fadeOut(3000);
});

/*Funcao Animacao*/
$(document).ready(function(){
    $("#distasi").click(function(){
    $("#rastreioEntr").animate({left: '780px'});
    });    
});

/*Funcao de flip*/
$(document).ready(function(){
    $("#flip").click(function(){
    $("#panel").slideToggle("slow");
    });
});

/*Codigo Modal*/
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

