/**
 * Created by danielstiven on 3/19/17.
 */
document.addEventListener("DOMContentLoaded", function(event) {

    /**
     * Dibujando formas básicas
     * **/
    var canvasBasic = document.getElementById('basic');
    if (canvasBasic.getContext) {
        //Cuadrado
        var ctx = canvasBasic.getContext('2d');
        ctx.fillStyle = "red";
        ctx.fillRect(100,10,200,200);

        //Circulo
        ctx.fillStyle ="blue";
        ctx.beginPath();
        ctx.arc(450,100,100,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();

        //Triangulo
        ctx.fillStyle ="purple";
        ctx.beginPath();
        ctx.moveTo(600,20);
        ctx.lineTo(800,200);
        ctx.lineTo(600, 200);
        ctx.fill();
    }

    /**
     * Animacion
     * */
    // Basado de :
    //http://juegos.canvas.ninja/2012/01/parte-2-animando-el-canvas.html
    var canvasAnimate = document.getElementById('animate');
    if (canvasAnimate.getContext) {
        var ctx = canvasAnimate.getContext('2d');
        var x = 1, y = 10;
        var img = new Image();
        img.src = '/images/logokometrender.png';

        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 17);
            };
        }());

        function paint(ctx) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvasAnimate.width, canvasAnimate.height);
            ctx.fillStyle = '#0f0';
            ctx.drawImage(img,x,y, 250, 160);
        }
        function act() {
          x += 2; if (x > canvasAnimate.width) { x = 0; }
        }
        function run() {
            window.requestAnimationFrame(run);
            act();
            paint(ctx);
        }
        img.onload = function() {
            run()
        }

    }
});