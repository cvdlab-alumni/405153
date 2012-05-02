//VASOOO
var a = BEZIER(S0)([[0.1,0,0],[2,0,0],[0,0,4],[1,0,5]]);
var b = BEZIER(S0)([[0,0.1,0],[0,2,0],[0,0,4],[0,1,5]]);
var c = BEZIER(S0)([[-0.1,0,0],[-2,0,0],[0,0,4],[-1,0,5]]);
var d = BEZIER(S0)([[0,-0.1,0],[0,-2,0],[0,0,4],[0,-1,5]]);
var e = BEZIER(S0)([[0,0,0],[1,1,0],[1,1,4],[1,1,5]]);
var f = BEZIER(S0)([[0,0,0],[-1,1,0],[-1,1,4],[-1,1,5]]);
var g = BEZIER(S0)([[0,0,0],[-1,-1,0],[-1,-1,4],[-1,-1,5]]);
var h = BEZIER(S0)([[0,0,0],[1,-1,0],[1,-1,4],[1,-1,5]]);
var dom = INTERVALS(1)(20);
var o1 = T([0])([2])(MAP(a)(dom));
var o2 = T([0])([2])(MAP(b)(dom));
var o3 = T([0])([2])(MAP(c)(dom));
var o4 = T([0])([2])(MAP(d)(dom));

//DRAW(STRUCT([o1,o2,o3,o4]));

var dd = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(14)]);

var oo1 = MAP(BEZIER(S1)([a,e,b]))(dd);
var oo2 = MAP(BEZIER(S1)([b,f,c]))(dd);
var oo3 = MAP(BEZIER(S1)([c,g,d]))(dd);
var oo4 = MAP(BEZIER(S1)([d,h,a]))(dd);
DRAW(STRUCT([oo1,oo2,oo3,oo4]))