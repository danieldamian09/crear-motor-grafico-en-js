var loop = {

  idEjecucion: null,
  ultimoRegistro: 0,
  aps: 0,
  fps: 0,
  iterar: function(registroTemporal) {
    // requestAnimationFrame funcion que viene con windows que se encarga de hacer un bucle infinito que se repite 60 frames por segundo
    loop.idEjecucion = window.requestAnimationFrame(loop.iterar);
    loop.update(registroTemporal);
    loop.play();
    if(registroTemporal - loop.ultimoRegistro > 999){

      console.log(loop.fps);

      loop.aps = 0;
      loop.fps = 0;

    }
  },
  // esta funcion se va a encargar de contarnos los aps
  update: function(){
    loop.aps++;
  },

  play: function(){
    loop.fps++;
    borrarCanvas();
  }
}

var canvas = document.getElementById("canvas");
console.log(canvas)

// creamos el contexto al canvas
var ctx = document.getElementById("canvas").getContext("2d");
console.log(ctx);

// posicionar el canvas
var margen = 10;
var canvasTop = (margen/2);
var canvasLeft = (margen/2);
var canvasWidth = window.innerWidth-margen;
var canvasHeight = window.innerHeight-margen;

// borrar el canvas
function borrarCanvas(){
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}


// redimenzionar el canvas
function ResizeWindow(){
  canvas.style.top = canvasTop + "px";
  canvas.style.left = canvasLeft + "px";
  canvas.style.width = canvasWidth + "px";
  canvas.style.height = canvasHeight + "px";
}

// agregamos un evento para que ejecute la redimensión de mi canvas 
window.addEventListener("load", function(e){
  ResizeWindow();
  loop.iterar();
})

// agregamos un evento al objeto windows que es resize para redimensionar nuestro canvas cuando cambie el tamaño del navegador
window.addEventListener("resize", function(e){
  ResizeWindow();
})

