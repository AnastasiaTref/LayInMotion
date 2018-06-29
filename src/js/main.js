(function($) {

    /**********************************************/
    /* masonry */
    /*******************************************/


    var $masonaryContainer = $('.masonry');

    $(window).on("load", function() {

        $masonaryContainer.masonry({
            itemSelector: '.masonry__item',
            fitWidth: true,
            gutter: 20
        });

        $masonaryContainer.masonry('reloadItems');

    });

    $(window).on("resize", function() {
        $masonaryContainer.masonry({
            itemSelector: '.masonry__item',
            fitWidth: true,
            gutter: 20
        });
        $masonaryContainer.masonry('reloadItems');

    });
    $(window).on("scroll", function() {
        if (!$masonaryContainer.find('.masonry__item').hasClass('wdportfolio')) {
            $masonaryContainer.masonry({
                itemSelector: '.masonry__item',
                fitWidth: true,
                gutter: 20
            });
            $masonaryContainer.masonry('reloadItems');
        }
    });


    /*******************************************/
    /* WAYPOINT */
    /*******************************************/

    /*$(function() {

    	$('.post').waypoint(function() {

    		$(this.element).addClass('animate');

    		//if browser less ie10
    		if($.browser.msie && $.browser.version < 10) {
    			$(this.element).css({
    				'opacity' : '1'
    			});
    		}
    	}, {
    		offset: '110%',
    		triggerOnce: false
    	});
    });
*/



})(jQuery);


jQuery(document).ready(function($) {
  var container = document.getElementById("particles");

  var width = $(container).width();
  var height = window.innerHeight;

  container.style.perspective = "800px";
  
  for (var i = 0; i < 1000; i++) {
    var r = Math.random();
    var nd = r * (2000 + 5000) - 5000;

    var left = Math.random() * width;
    var top = Math.random() * height;

    var circle = document.createElement("DIV");
    circle.className = "circle";
    circle.style.position = "absolute";
    circle.style.opacity = 1;
    circle.style.zIndex = -1000000;
    circle.style.borderRadius = "2.5px";
    circle.style.backgroundColor = "#ffff99";
    circle.style.left = left + "px";
    circle.style.top = top + "px";
    circle.style.width = "5px";
    circle.style.height = "5px";

    container.appendChild(circle);
    circle.init_dist = nd;
    
    $(container).css("perspective-origin", width/2 + "px " + height/2 + "px");
  }

  animateAll();

  function animateAll() {
   
    $(".circle").each(function(index, element) {
      my_animate(element);
    });
  }

  function my_animate(circle) {
    $(circle).velocity(
      {
        translateZ: [
          function() {
            
            var dist;
            if(circle.init_dist < 0){
              dist = 2000 + circle.init_dist*-1;
            }else{
              dist = 2000 - circle.init_dist;
            }
            return "+=" + dist + "px";
          },
          circle.init_dist
        ]
      },
      {
        duration: Math.round(Math.random() * (50000 - 10000) + 10000),
        complete: function() {
          circle.init_dist = Math.random()*(-500+5000)-5000;
          my_animate(circle);
        }
      }
    );
  }
});
