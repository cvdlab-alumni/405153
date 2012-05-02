var manici = [[1,0],[1,1],[1,0],[1,1]];
var interval = INTERVALS(1)(20)
var curva = CUBIC_HERMITE(S0)(manici);
var out = MAP(curva)(interval);

//DRAW(out);



var manici = [[0,0,0],[1,3,1],[3,2,2],[3,0,2],[5,-1,4],[6,1,3]];
var interval = INTERVALS(1)(20);
var curva = BEZIER(S0)(manici);
var out = MAP(curva)(interval);

//DRAW(out);


var manici = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var interval = INTERVALS(1)(20);
var curva = CUBIC_CARDINAL(interval);
var out = SPLINE(curva)(manici);
//DRAW(out);
