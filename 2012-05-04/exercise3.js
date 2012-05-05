var ala1 = BEZIER(S0)([[-4,1,0],[-3,0,0],[0,0,0],[3,0,0],[4,1,0]]);
var dom = INTERVALS(1)(20);
var o1 = MAP(ala1)(dom);
//DRAW(o1);

var ala2 = BEZIER(S0)([[-4,2,0],[-3,3,0],[0,3,0],[3,3,0],[4,2,0]]);
var o2 = MAP(ala2)(dom);
//DRAW(o2);

var alas1 = BEZIER(S0)([[-4,1,0],[-3,0,0.3],[0,0,0.3],[3,0,0.3],[4,1,0]]);
var alas2 = BEZIER(S0)([[-4,2,0],[-3,3,0.3],[0,3,0.3],[3,3,0.3],[4,2,0]]);
//DRAW(alas1);

var dd = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(14)]);

var alasup = MAP(BEZIER(S1)([ala1, alas1,alas2,ala2]))(dd);



var timone1 = S([0,1,2])([1/2,1/3,1/3])(alasup);
var timone = T([1,2])([9.2,2.02])(timone1);
//DRAW(timone);



var t1 = BEZIER(S0)([[0,0,0],[0,0,2]]);
var t1o = MAP(t1)(dom);
//DRAW(t1o);


var t2 = BEZIER(S0)([[0,0,0],[0.3,1.5,1.5],[0.3,1.5,2.5],[0.3,1,2.6],[0,0,2]]);
var t2o = MAP(t2)(dom);
//DRAW(t2o);

var t3 = BEZIER(S0)([[0,0,0],[-0.3,1.5,1.5],[-0.3,1.5,2.5],[-0.3,1,2.6],[0,0,2]]);
var t3o = MAP(t3)(dom);
//DRAW(t3o);

var barra1 = MAP(BEZIER(S1)([t1, t2,t3,t1]))(dd);
var barra = T([1,2])([10,0.5])(barra1);
//DRAW(barra);

var t4 = BEZIER(S0)([[0,0,0],[0,0,2]]);
var t4o = MAP(t4)(dom);
//DRAW(t4o);
var t5 = BEZIER(S0)([[0,0,0],[0.3,1.5,1.5],[0.3,1.5,2.5],[0.3,1,2.6],[0,0,2.6]]);
var t5o = MAP(t5)(dom);
//DRAW(t5o);
var t6 = BEZIER(S0)([[0,0,0],[-0.3,1.5,1.5],[-0.3,1.5,2.5],[-0.3,1,2.6],[0,0,2.6]]);
var t6o = MAP(t6)(dom);
//DRAW(t6o);

var tt = MAP(BEZIER(S1)([t4, t5,t6,t4]))(dd);
var tt1 = R([1,2])(PI/2)(tt);
var tt2 = S([1])([-1])(tt1);

var timone2 = T([1,2])([7.5,2])(tt2);




var tim = STRUCT([barra,timone,timone2]);
var timt =  T([1,2])([-10,-0.56])(tim);

DRAW(timt);
