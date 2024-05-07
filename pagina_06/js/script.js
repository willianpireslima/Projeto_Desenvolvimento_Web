/*Função para mudar a cor do navbar ao fazer o scroll - associado ao css */
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
    });
});


/*Funcao o para que tenha uma rolgagem suave (smooth scroll)*/
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
   
          window.location.hash = hash;
        });
      }
    });
});

/* Funcao pra extracao do input, calculo e envio de output para a pagina */
function calcular() {
    const valorInput = document.getElementById("valorCarro");
    const taxaInput = document.getElementById("valorTaxa");
    const parcInput = document.getElementById("numeroParcela");
    
    const valorValue = parseFloat(valorInput.value);
    const taxaValue = parseFloat(taxaInput.value);
    const parcValue = parseFloat(parcInput.value);
    
    if (!isNaN(valorValue) && !isNaN(taxaValue) && !isNaN(parcValue)) {
        // Convertendo a taxa de juros anual para uma taxa de juros mensal decimal
        const taxaMensal = taxaValue / 100 / 12;
    
        // Calculando o pagamento mensal usando a fórmula de amortização
        const pagamentoMensal = valorValue * taxaMensal * 
        Math.pow(1 + taxaMensal, parcValue) / (Math.pow(1 + taxaMensal, parcValue) - 1);
    
        // Retornando o pagamento mensal arredondado para duas casas decimais
        const resultado = pagamentoMensal.toFixed(2);
        
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `
            <div class="result"> 
                <p>Pagamento Mensal: <span class="result-value">${resultado}</span></p> 
            </div>
        `;
    } else {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = '';
    }
}

/* função de rolagem animada que inicia funcoes de Animacao*/
$(document).ready(function() {
    ScrollToInit();
    ActiveSectionNavigation();
    
    InitWaypointAnimations({
        offset: "60%",
        animateClass: "wp-animated",
        animateGroupClass: "wp-animated-group"
    });
    InitCounterWayPointAnimation();
});

//função para a rolagem suave para links âncora dentro da página.
function ScrollToInit() {
    $(document).on("click", "a[href^='#']", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
}

//função que ativa a navegação na seção do navbar conforme a página é rolada
function ActiveSectionNavigation() {
    function getNavItemsMap() {
        const navItemsMap = $("#main-nav").find(".nav-item").map((index, item) => {
            const $item = $(item);
            const name = $item.find(".nav-link").attr("href").substring(1);
            return {
                key: name,
                val: $item
            };
        })
        .toArray()
        .reduce((map, obj) => {
            map[obj.key] = obj.val;
            return map;
        }, {});

        return navItemsMap;
    }

    function deactivateCurrentNavItem() {
        $("#main-nav").find(".nav-item.active").removeClass("active");
    }
    
    const navItemsMap = getNavItemsMap();
    $("section").each((index, element) => {
        const $element = $(element);
        const sectionName = $element.attr("id");
        if(sectionName in navItemsMap) {
            
            $element.waypoint((direction) => {
                if(direction === "down") {
                    deactivateCurrentNavItem();
                    navItemsMap[sectionName].addClass("active");
                }
            },{
                offset: "50%"
            });
            
            $element.waypoint((direction) => {
                if(direction === "up") {
                    deactivateCurrentNavItem();
                    navItemsMap[sectionName].addClass("active");
                }
            },{
                offset: "-20%"
            })
        }
    });
}

/* função de animação de contadores */
function InitCounterWayPointAnimation() {
    $('.counter').each(function () {
        var $this = $(this);
        var stop = parseInt($this.text().replace(/,/g, ""));
        $this.text(0);
        $this.waypoint(function (direction) {
            animateNumbers($this, 0, stop);
            this.destroy();
        },{
            triggerOnce: true,
            offset: "80%"
        });
    });  
}