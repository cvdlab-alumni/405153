var manici = [[0,0],[10,0],[0,10],[10,10]]
var dominio = INTERVALS(1)(30);
var curva = CUBIC_HERMITE(S0)(manici)
var out = MAP(curva)(dominio);


var muro1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);

var muro2 = POLYLINE([[0,7],[9,7],[9,4],[8,4],[8,6],[5,6],[5,4],[4,4],[4,6],[1,6],[1,4],[0,4],[0,7]]);

var muri = STRUCT([muro1,muro2]);

var muri3d = EXTRUDE([2])(muri);

COLOR([1,2,3,0.5])(muri3d);

DRAW(muri3d);