!(function (exports) {




  var myButtonGreets = $('#mybuttonGreets');
  var buttonGray = $('#buttonGray');
  var buttonWhite = $('#buttonWhite');
  var buttonclear = $('#buttonclear');
  var containers = $('.container');

  var r = $('#r');
  var g = $('#g');
  var b = $('#b');

  var rm = $('#rm');
  var gm = $('#gm');
  var bm = $('#bm');

  var rmm = 192;
  var gmm = 192;
  var bmm = 192;


  var rc = $('#rc');
  var gc = $('#gc');
  var bc = $('#bc');

  var rcm = $('#rcm');
  var gcm = $('#gcm');
  var bcm = $('#bcm');

  var rcmm = 192;
  var gcmm = 192;
  var bcmm = 192;

var arr = new Array();

  var raggio = $('#raggio');
  var raggioM = $('#raggioM');
  var rr = 15;

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");


  var width = canvas.width();
  var height = canvas.height();

  var drawCircle = function (x, y, radius,rgb) {
    ctx.beginPath();
    
    var info = {X:x,Y:y,R:radius,C:rgb};
    arr.push(info);
    ctx.arc(x, y, radius, 0, 2*Math.PI, true);
    ctx.fillStyle = 'rgb('+rgb+')';
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.fill();
  };

  canvas.on('mousedown',function(e){
    var str = ''+rcmm+','+gcmm+','+bcmm+'';
  	drawCircle(e.offsetX,e.offsetY,rr,str);
  });


  var greets = function (e) {
    alert('Ciao:)');
  }

  var drawOldCircles = function(){
    for(var i=0;i<arr.length;i++)
    {
    ctx.beginPath();
    ctx.arc(arr[i].X, arr[i].Y, arr[i].R, 0, 2*Math.PI, true);
    ctx.lineWidth = 8;
    ctx.fillStyle = 'rgb('+arr[i].C+')';
    ctx.stroke();
    ctx.fill();
    }
  }


var changeColor = function () {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgb('+rmm+','+gmm+','+bmm+')';
    ctx.fillRect(0, 0, width, height);
    drawOldCircles();
    //ctx.fillStyle = 'rgb(0,0,0)';
    //ctx.lineWidth = 2;
  };
  var initCanvas = function () {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgb('+rmm+','+gmm+','+bmm+')';
    ctx.fillRect(0, 0, width, height);
    arr = new Array();
    
    //ctx.fillStyle = 'rgb(0,0,0)';
    //ctx.lineWidth = 2;
  };

  buttonclear.on('click',function(e){
  	initCanvas();
  });


  myButtonGreets.on('click', greets);

  buttonGray.on('click',function(e){
  	containers.addClass('bg-gray');
  	containers.removeClass('bg-white');
  });




buttonWhite.on('click',function(e){
  	containers.addClass('bg-white');
  	containers.removeClass('bg-gray');
  });


raggio.on('change', function (e) {
    var rg = raggio.attr('value');

    rr = rg;
    raggioM.text(rg);
  });

r.on('change',function(e){
  var red = r.attr('value');
  rmm = red;

  rm.text(red);
  changeColor();
});

g.on('change',function(e){
  var green = g.attr('value');
  gmm = green;

  gm.text(green);
  changeColor();
});

b.on('change',function(e){
  var blue = b.attr('value');
  bmm = blue;

  bm.text(blue);
  changeColor();
});
rc.on('change',function(e){
  var red = rc.attr('value');
  rcmm = red;

  rcm.text(red);
  
});

gc.on('change',function(e){
  var green = gc.attr('value');
  gcmm = green;

  gcm.text(green);
});
bc.on('change',function(e){
  var blue = bc.attr('value');
  bmm = blue;

  bcm.text(blue);
  
});


}(this));