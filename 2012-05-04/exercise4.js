



var latodx = BEZIER(S0)([[1,0,0],[0.2,10,0.5]]);
var dom = INTERVALS(1)(20);
var o1 = MAP(latodx)(dom);

//DRAW(o1);

var latosx = BEZIER(S0)([[-1,0,0],[-0.2,10,0.5]]);
var o2 = MAP(latosx)(dom);

//DRAW(o2);


var latodx2 = BEZIER(S0)([[1,0,2],[0.2,10,2]]);
var o3 = MAP(latodx2)(dom);
//DRAW(o3);

var latosx2 = BEZIER(S0)([[-1,0,2],[-0.2,10,2]]);
var o4 = MAP(latosx2)(dom);
//DRAW(o4);

var latosxm = BEZIER(S0)([[-1.5,0,1],[-0.2,10,1]]);
var o5 = MAP(latosxm)(dom);
//DRAW(o5);

var latodxm = BEZIER(S0)([[1.5,0,1],[0.2,10,1]]);
var o6 = MAP(latodxm)(dom);
//DRAW(o6);

var latosotto1 = BEZIER(S0)([[0.5,0,-0.5],[0,10,0.5]]);
var o7 = MAP(latosotto1)(dom);
//DRAW(o7);

var latosotto2 = BEZIER(S0)([[-0.5,0,-0.5],[0,10,0.5]]);
var o8 = MAP(latosotto2)(dom);

var ls1 = BEZIER(S0)([[-1,0,2],[-0.68,4,2]]);
var o9 = MAP(ls1)(dom);
//DRAW(o9);

var ls2 = BEZIER(S0)([[-0.5,0,2.5],[-0.22,4,2.5]]);
var o10 = MAP(ls2)(dom);
//DRAW(o10);

var ls3 = BEZIER(S0)([[0.5,0,2.5],[0.22,4,2.5]]);
var o11 = MAP(ls3)(dom);
//DRAW(o11);

var ls4 = BEZIER(S0)([[1,0,2],[0.68,4,2]]);
var o12 = MAP(ls4)(dom);
//DRAW(o12);

var ls5 = BEZIER(S0)([[-0.6,5,2],[-0.2,10,2]]);
var o13 = MAP(ls5)(dom);
//DRAW(o13);

var ls6 = BEZIER(S0)([[-0.15,5,2.5],[-0.2,10,2]]);
var o14 = MAP(ls6)(dom);
//DRAW(o14);

var ls7 = BEZIER(S0)([[0.15,5,2.5],[0.2,10,2]]);
var o15 = MAP(ls7)(dom);
//DRAW(o15);

var ls8 = BEZIER(S0)([[0.6,5,2],[0.2,10,2]]);
var o16 = MAP(ls8)(dom);
//DRAW(o16);


//DRAW(o8);

var dd = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(20)]);
var fuss = MAP(BEZIER(S1)([latosx2, latosxm,latosx,latosotto2,latosotto1,latodx, latodxm,latodx2]))(dd);
var fus1 = COLOR([1.13,1.12,0.81,1])(fuss);

var fus2 = COLOR([0.4,0.4,0.4,1])(MAP(BEZIER(S1)([latosx2,latodx2]))(dd));

var fuss1 = MAP(BEZIER(S1)([ls1,ls2,ls3,ls4]))(dd);
var fus3 = COLOR([0.91,0.59,0.28,1])(fuss1);


var fuss2= MAP(BEZIER(S1)([ls5,ls6,ls7,ls8]))(dd);

var fus4 = COLOR([0.91,0.59,0.28,1])(fuss2);

var anello = function(r,n,color){
	var sphereDomain = DOMAIN([[PI/2,PI-1],[0,2*PI]])([n,n]);
	var sphere = MAP(function(p){
		var u = p[0]-PI/2;
		var v = p[1]-PI;
		return [r*Math.cos(u)*Math.sin(v),r*Math.cos(u)*Math.cos(v)];
	})(sphereDomain);
	var sphere =COLOR(color)(sphere);
	var sphere1 = EXTRUDE([0.8])(sphere);
    return sphere1;

};

var m1 = anello(1.3,30,[0.57,0.57,0.57,1]);
var m2 = R([1,2])([PI/2])(m1);
var m3 = T([1,2])([0.3,1.2])(m2);;
var m4 = CUBOID([0.25,0.1,0.1]);
var m5 = T([0,1,2])([0.1,-1,0.95])(m4);
var m6 = REPLICA(20)([m5,R([0,2])([PI/10])]);
var m7 = COLOR([0,0,0,1])(STRUCT(m6));
var m8 = T([1,2])([0.5,1.2])(m7);




var m9 = BEZIER(S0)([[0,0,0],[0,0.5,0.5]]);
var o20 = MAP(m9)(dom);
//DRAW(o20);

var m10 = BEZIER(S0)([[0.35,0.3,0],[0,0.5,0.5]]);
var o21 = MAP(m10)(dom);
//DRAW(o21);

var m11 = BEZIER(S0)([[0.5,0.5,0],[0,0.5,0.5]]);
var o22 = MAP(m11)(dom);
//DRAW(o22);

var m12 = BEZIER(S0)([[0.35,0.8,0],[0,0.5,0.5]]);
var o23 = MAP(m12)(dom);
//DRAW(o23);

var m13 = BEZIER(S0)([[0,1,0],[0,0.5,0.5]]);
var o24 = MAP(m13)(dom);
//DRAW(o24);

var m14 = BEZIER(S0)([[-0.35,0.8,0],[0,0.5,0.5]]);
var o25 = MAP(m14)(dom);
//DRAW(o25);

var m15 = BEZIER(S0)([[-0.5,0.5,0],[0,0.5,0.5]]);
var o26 = MAP(m15)(dom);
//DRAW(o26);

var m16 = BEZIER(S0)([[-0.35,0.3,0],[0,0.5,0.5]]);
var o27 = MAP(m16)(dom);
//DRAW(o27);


var mm = MAP(BEZIER(S1)([m9,m10]))(dd);
var mm1 = MAP(BEZIER(S1)([m10,m11]))(dd);
var mm2 = MAP(BEZIER(S1)([m11,m12]))(dd);
var mm3 = MAP(BEZIER(S1)([m12,m13]))(dd);
var mm4 = MAP(BEZIER(S1)([m13,m14]))(dd);
var mm5 = MAP(BEZIER(S1)([m14,m15]))(dd);
var mm6 = MAP(BEZIER(S1)([m15,m16]))(dd);
var mm7 = MAP(BEZIER(S1)([m16,m9]))(dd);
var mmm = STRUCT([mm,mm1,mm2,mm3,mm4,mm5,mm6,mm7]);
var mmm1 = R([1,2])(PI/2)(mmm);
var mmm2 = COLOR([0.25,0.25,0.25,1])(T([1,2])([-0.6,0.69])(mmm1));
//DRAW(mmm2);

var e1 = BEZIER(S0)([[0.05,0,0],[0.1,-0.1,0.2],[0.2,-0.1,0.5],[0.5,-0.2,0.7],[0.2,-0.1,1],[0,0,1.2],[-0.2,-0.1,1],[-0.5,-0.2,0.7],[-0.2,-0.1,0.5],[-0.1,-0.1,0.2],[-0.05,0,0]]);
var e1o = MAP(e1)(dom);
//DRAW(e1o);
var e2 = BEZIER(S0)([[0.05,0,0],[0.1,0.1,0.2],[0.2,0.1,0.5],[0.5,0.2,0.7],[0.2,0.1,1],[0,0,1.2],[-0.2,0.1,1],[-0.5,0.2,0.7],[-0.2,0.1,0.5],[-0.1,0.1,0.2],[-0.05,0,0]]);
var e2o = MAP(e2)(dom);
//DRAW(e2o);
var e3 = BEZIER(S0)([[-0.05,0,0],[0.05,0,0]]);
var e3o = MAP(e3)(dom);
//DRAW(e3o);

var e4 = MAP(BEZIER(S1)([e3,e1,e2,e3]))(dd);
var e5 = S([2])([4])(e4);
var e6 = R([0,2])(PI)(e5);

var e7 = T([1,2])([-0.57,1])(e6);
var e8 = T([1,2])([-0.57,1.5])(e5);
//DRAW(e6);

var c1 = BEZIER(S0)([[0,0,-0.7],[0.1,0,0],[0.1,0,2.2],[0,0,3.1]]);
var c2 = MAP(c1)(dom);


var c3 = BEZIER(S0)([[0,0,-0.7],[-0.1,0,0],[-0.1,0,2.2],[0,0,3.1]]);
var c4 = MAP(c3)(dom);


var c5 = BEZIER(S0)([[0,0,-0.7],[0,0.1,0],[0,0.1,2.2],[0,0,3.1]]);
var c6 = MAP(c5)(dom);


var c7 = BEZIER(S0)([[0,0,-0.7],[0,-0.1,0],[0,-0.1,2.2],[0,0,3.1]]);
var c8 = MAP(c7)(dom);


var cs1 = MAP(BEZIER(S1)([c1, c5]))(dd);

var cs2 = MAP(BEZIER(S1)([c5, c3]))(dd);

var cs3 = MAP(BEZIER(S1)([c3, c7]))(dd);

var cs4 = MAP(BEZIER(S1)([c7, c1]))(dd);

var cs5 = STRUCT([cs1,cs2,cs3,cs4]);
var cc = S([2])([1/2])(cs5);

//DRAW(cc);

var ccp1 = R([1,2])(PI/6)(cc);
//DRAW(ccp1);
var ccp2 = T([1])([0.3])(R([1,2])(-PI/6)(cc));


var ccp = STRUCT([ccp1,ccp2]);
var carrellop1 = T([0,1,2])([0.6,0.5,-1])(ccp);
//DRAW(carrellop1);
var carrellop2 = T([0,1,2])([-0.6,0.5,-1])(ccp);


var ruota1 = BEZIER(S0)([[-1,0,0],[-1,1,0],[0,1,0]]);

var ruota2 = BEZIER(S0)([[0,1,0],[1,1,0],[1,0,0]]);


var ruota3 = BEZIER(S0)([[1,0,0],[1,-1,0],[0,-1,0]]);
var ruota4 = BEZIER(S0)([[0,-1,0],[-1,-1,0],[-1,0,0]]);

var x = BEZIER(S0)([[0,0,0],[1,0,0]]);
var y = BEZIER(S0)([[0,0,0],[0,1,0]]);
var z = BEZIER(S0)([[0,0,0],[-1,0,0]]);
var w = BEZIER(S0)([[0,0,0],[0,-1,0]]);

var curvac1 = MAP(BEZIER(S1)([ruota1,y]))(dd);
var curvac2 = MAP(BEZIER(S1)([ruota2,z]))(dd);
var curvac3 = MAP(BEZIER(S1)([ruota3,w]))(dd);
var curvac4 = MAP(BEZIER(S1)([ruota4,x]))(dd);

var ruota = STRUCT([curvac1,curvac2,curvac3,curvac4]);
//DRAW(ruota);




var ruotadx = R([0,2])(PI/2)(ruota);
var ruotadx2 = S([0,1,2])([1/2,1/2,1/2])(ruotadx);
var ruotadx1 = T([0,1,2])([0.7,0.7,-1.3])(ruotadx2);

var ruotasx = R([0,2])(PI/2)(ruota);
var ruotasx2 = S([0,1,2])([1/2,1/2,1/2])(ruotasx);
var ruotasx1 = T([0,1,2])([-0.7,0.7,-1.3])(ruotasx2);

var ruote = COLOR([0,0,0,1])(STRUCT([ruotasx1,ruotadx1]));


var car = STRUCT([carrellop1,carrellop2,ruote]);
var car2 = T([1,2])([0.5,-0.5])(car);
var carrello = COLOR([0,0,0,1])(car2);



var curva1 = BEZIER(S0)([[-1,-0.25,0],[-0.5,-1.25,0],[0.5,-1.2,0],[1,-0.25,0]]);
var dom = INTERVALS(1)(20);
var curvao1 = MAP(curva1)(dom);
//DRAW(curvao1);
var curva2 = BEZIER(S0)([[-1,0.25,0],[-0.5,1.25,0],[0.5,1.25,0],[1,0.25,0]]);
var dom = INTERVALS(1)(20);
var curvao2 = MAP(curva2)(dom);
//DRAW(curvao2);

var curva3 = BEZIER(S0)([[-1,-0.25,0],[-1,0.25,0]]);
var curva4 = BEZIER(S0)([[1,-0.25,0],[1,0.25,0]]);
var curvao3 = MAP(curva3)(dom);
//DRAW(curvao3);
var curvao4 = MAP(curva4)(dom);
//DRAW(curvao4);

var dd = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(20)]);

var curva = MAP(BEZIER(S1)([curva1,curva2]))(dd);



var spost = R([1,2])(PI/2)(curva);
var spost1 = COLOR([0.65,0.65,0.65,1])(T([1,2])([-0.4,1.2])(spost));


var v1 = BEZIER(S0)([[-0.68,4,2],[-0.22,4,2.5],[0.22,4,2.5],[0.68,4,2]]);
var v2 = BEZIER(S0)([[-0.68,4,2],[-0.22,4.2,2.8],[0.22,4.2,2.8],[0.68,4,2]]);
var dd = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(20)]);
var vetrino = COLOR([153/255,203/255,1,0.8])(MAP(BEZIER(S1)([v1,v2]))(dd));


var com1 = BEZIER(S0)([[-0.68,4,2],[-0.22,4,2.5],[0.22,4,2.5],[0.68,4,2]]);
var com2 = BEZIER(S0)([[-0.68,4,2],[0.68,4,2]]);
var dd = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(20)]);
var comandi = COLOR([150/255,0/255,24/255,1])(MAP(BEZIER(S1)([com1,com2]))(dd));

var com3 = BEZIER(S0)([[-0.6,5,2],[-0.15,5,2.5],[0.15,5,2.5],[0.6,5,2]]);
var com4 = BEZIER(S0)([[-0.6,5,2],[0.6,5,2]]);
var dd = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(20)]);
var schienale = COLOR([150/255,0,24/255,1])(MAP(BEZIER(S1)([com3,com4]))(dd));


var elica = COLOR([0.25,0.25,0.25,1])(STRUCT([e7,e8]));

var motore = STRUCT([m3,m8,mmm2,spost1]);

var fuso = STRUCT([fus1,fus2,fus3,fus4,motore,elica,carrello,vetrino,comandi,schienale]);
var fusoliera = T([2])([-0.56])(fuso);


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
var timone = COLOR([0,49/255,83/255,1])(T([1,2])([9.2,2.02])(timone1));
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
var barra = COLOR([0.48,27/255,2/255,1])(T([1,2])([10,0.5])(barra1));
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

var timone2 = COLOR([1/255,50/255,32/255,1])(T([1,2])([7.5,2])(tt2));




var tim = STRUCT([barra,timone,timone2]);
var timt =  T([2])([-0.56])(tim);



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


var assi = COLOR([0.58,0.29,0,1])(STRUCT([assedx1,assedx2,assesx1,assesx2,assepdx1,assepdx2,assepsx1,assepsx2]));
DRAW(assi);

var ali = COLOR([0.30,0.30,0.30,1])(STRUCT([aa1,aa2]));



var aereo = STRUCT([fusoliera,timt,ali]);
DRAW(aereo);








