

var Application = ( function () {
    var canvas;
    var ctx;
    var imgData;
    var pix;
    var WIDTH;
    var HEIGHT;
    var flickerInterval;

    var init = function () {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        canvas.width = WIDTH = 700;
        canvas.height = HEIGHT = 500;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fill();
        imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
        pix = imgData.data;
        flickerInterval = setInterval(flickering, 30);
    };

    var flickering = function () {
        for (var i = 0; i < pix.length; i += 4) {
            var color = (Math.random() * 255) + 50;
            pix[i] = color;
            pix[i + 1] = color;
            pix[i + 2] = color;
        }
        ctx.putImageData(imgData, 0, 0);
    };

    return {
        init: init
    };
}());

Application.init();


function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  }
  
  
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0, len = links.length; i < len; i++) {
      links[i].addEventListener("click",function(event) {
        
        window.setTimeout(function() {
          offsetAnchor();
        }, 0);
      });
  }
  
  
  window.setTimeout(offsetAnchor, 0);
  
 
  
  
  
  var toggle = document.getElementsByClassName('navbar-toggle')[0],
      collapse = document.getElementsByClassName('navbar-collapse')[0],
      dropdowns = document.getElementsByClassName('dropdown');;
  
  
  function toggleMenu() {
      collapse.classList.toggle('collapse');
      collapse.classList.toggle('in');
  }
  
  
  function closeMenus() {
      for (var j = 0; j < dropdowns.length; j++) {
          dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
          dropdowns[j].classList.remove('open');
      }
  }
  
  
  for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener('click', function() {
          if (document.body.clientWidth < 768) {
              var open = this.classList.contains('open');
              closeMenus();
              if (!open) {
                  this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                  this.classList.toggle('open');
              }
          }
      });
  }
  
  
  function closeMenusOnResize() {
      if (document.body.clientWidth >= 768) {
          closeMenus();
          collapse.classList.add('collapse');
          collapse.classList.remove('in');
      }
  }
  
  
  window.addEventListener('resize', closeMenusOnResize, false);
  toggle.addEventListener('click', toggleMenu, false);