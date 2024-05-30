
/*Função para mudar a cor do navbar ao fazer o scroll - associado ao css */
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
    });
});

/*Adicionado smooth scroll ao links do navbar - associado ao html */
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});

/* função de rolagem animada*/
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

function ScrollToInit() {
    $(document).on("click", "a[href^='#']", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
}

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


function animateNumbers(element, start, stop, commas, duration, ease) {
    var $this = element;
    commas = (commas === undefined) ? true : commas;
    $({value: start}).animate({value: stop}, {
        duration: duration == undefined ? 4000 : duration,
        easing: ease == undefined ? "swing" : ease,
        step: function() {
            $this.text(Math.floor(this.value));
            if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
        },
        complete: function() {
           if (parseInt($this.text()) !== stop) {
               $this.text(stop);
               if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
           }
        }
    });
}