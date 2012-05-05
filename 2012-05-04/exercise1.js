//ala


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
var alainf = T([2])([-0.8])(alasup);

//var alacompl = STRUCT([alasup,alainf]);
var alasopra = T([2])([3])(alasup);
var alasotto = alainf;

var aa1 = S([0])([1.5])(alasopra);
var aa2 = S([0])([1.5])(alasotto);

var asse1 = BEZIER(S0)([[0,0,-0.7],[0.1,0,0],[0.1,0,2.2],[0,0,3.1]]);
var asse2 = MAP(asse1)(dom);
//DRAW(asse2);

var asse3 = BEZIER(S0)([[0,0,-0.7],[-0.1,0,0],[-0.1,0,2.2],[0,0,3.1]]);
var asse4 = MAP(asse3)(dom);
//DRAW(asse4);

var asse5 = BEZIER(S0)([[0,0,-0.7],[0,0.1,0],[0,0.1,2.2],[0,0,3.1]]);
var asse6 = MAP(asse5)(dom);
//DRAW(asse6);

var asse7 = BEZIER(S0)([[0,0,-0.7],[0,-0.1,0],[0,-0.1,2.2],[0,0,3.1]]);
var asse8 = MAP(asse7)(dom);
//DRAW(asse8);

var as1 = MAP(BEZIER(S1)([asse1, asse5]))(dd);
//DRAW(as1);
var as2 = MAP(BEZIER(S1)([asse5, asse3]))(dd);
//DRAW(as2);
var as3 = MAP(BEZIER(S1)([asse3, asse7]))(dd);
//DRAW(as3);
var as4 = MAP(BEZIER(S1)([asse7, asse1]))(dd);
//DRAW(as4);


var asse = STRUCT([as1,as2,as3,as4]);
//DRAW(asse);

var assedx = R([0,2])([PI/18])(asse);
//DRAW(assedx);

var assedx1 = T([0,1])([4.5,1])(assedx);
//DRAW(assedx1);

var assedx2 = T([0,1])([4.5,2])(assedx);
//DRAW(assedx2);

var assesx = R([0,2])([-PI/18])(asse);
//DRAW(assesx);

var assesx1 = T([0,1])([-4.5,1])(assesx);
//DRAW(assesx1);

var assesx2 = T([0,1])([-4.5,2])(assesx);
//DRAW(assesx2);


var assepdx = S([2])([1/2])(assedx);
var assepdx1 = T([0,1,2])([1,1,1.65])(assepdx);
var assepdx2 = T([0,1,2])([1,2,1.65])(assepdx);

var assepsx = S([2])([1/2])(assesx);
var assepsx1 = T([0,1,2])([-1,1,1.65])(assepsx);
var assepsx2 = T([0,1,2])([-1,2,1.65])(assepsx);

var assi = STRUCT([assedx1,assedx2,assesx1,assesx2,assepdx1,assepdx2,assepsx1,assepsx2]);
DRAW(assi);

var ali = STRUCT([aa1,aa2]);
DRAW(ali);



