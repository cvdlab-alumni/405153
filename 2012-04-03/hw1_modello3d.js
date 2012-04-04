var cubetto1 = SIMPLEX_GRID([[-0.05,0.90,-0.05],[-0.05,0.9,-0.05],[0.2]]);
var cubetto2 = SIMPLEX_GRID([[0.05,-0.9,0.05],[1],[0.2]]);
var cubetto3 = SIMPLEX_GRID([[-0.05,0.9,-0.05],[0.05,-0.9,0.05],[0.2]]);
COLOR([0,0,0])(cubetto2);
COLOR([0,0,0])(cubetto3);


var sempliceMattonella = STRUCT([cubetto1,cubetto2,cubetto3]);

var a = REPLICA(2)([sempliceMattonella,T([0])([1])])
var b = STRUCT(a);

var c = REPLICA(2)([b,T([1])([1])])

var mattonella4 = STRUCT( c )

var d= REPLICA(3)([sempliceMattonella,T([0])([1])])
var e = STRUCT(d);

var f = REPLICA(3)([e,T([1])([1])])

var mattonella9 = STRUCT( f )

var striscia1 = STRUCT(REPLICA(21)([sempliceMattonella,T([0])([1])]) )
var striscia2 = STRUCT(REPLICA(20)([sempliceMattonella,T([0])([1])]) )
var striscia3 = STRUCT(REPLICA(8)([sempliceMattonella,T([0])([1])]) )
var striscia4 = STRUCT(REPLICA(18)([sempliceMattonella,T([0])([1])]) )

var m3x3 = STRUCT(REPLICA(6)([mattonella9,T([0])([3])]))

var trasl = T([0])([21])(m3x3)

var p1 = STRUCT([striscia1])

var m1 = REPLICA(5)([trasl,T([1])([3])])

var p2 = STRUCT(m1)

var m2 = STRUCT(REPLICA(7)([striscia2,T([1])([1])]))
var p3 = T([0,1])([1,10])(m2)

var m3 = STRUCT(REPLICA(5)([striscia3,T([1])([1])]))
var p4 = T([0,1])([1,17])(m3)

var m4 = STRUCT(REPLICA(5)([striscia4,T([1])([1])]))
var p5 = T([0,1])([21,12])(m4)

var m5 = STRUCT(REPLICA(12)([striscia3,T([1])([1])]))
var p6 = T([0,1])([39,4])(m5)

var m7 = STRUCT(REPLICA(5)([sempliceMattonella,T([0])([1])]) )
var p7 = T([0,1])([47,4])(m7)

var p8 = T([0,1])([0,1])(sempliceMattonella)
var p9 = T([0,1])([51,5])(sempliceMattonella)

var mattoni = STRUCT([p1,p2,p3,p4,p5,p6,p7,p8,p9])
DRAW(mattoni)

var muro = SIMPLEX_GRID([[0.2],[1],[-0.2,3]])
var muroor = SIMPLEX_GRID([[1],[0.2],[-0.2,3]])
var finestra1 = SIMPLEX_GRID([[1],[0.2],[-0.2,0.2]])
var finestra2 = SIMPLEX_GRID([[0.2,-0.6,0.2],[0.2],[-0.2,-0.2,2.6]])
var finestra3 = SIMPLEX_GRID([[1],[0.2],[-0.2,-0.2,-2.6,0.2]])

var internoFin1 = SIMPLEX_GRID([[-0.2,0.8,-0.2],[0.2],[-0.2,-0.2,2.6,-0.2]])
COLOR([0.8,0.7,0.6])(finestra1)
COLOR([0.8,0.7,0.6])(finestra2)
COLOR([0.8,0.7,0.6])(finestra3)
COLOR([0.7,1,1])(internoFin1)


var f1 = SIMPLEX_GRID([[0.2],[1],[-0.2,0.2]])
var f2 = SIMPLEX_GRID([[0.2],[0.2,-0.6,0.2],[-0.2,-0.2,2.6]])
var f3 = SIMPLEX_GRID([[0.2],[1],[-0.2,-0.2,-2.6,0.2]])
var internoFin2 =SIMPLEX_GRID([[0.2],[-0.2,0.6,-0.2],[-0.2,-0.2,2.6,-0.2]])
COLOR([0.8,0.7,0.6])(f1)
COLOR([0.8,0.7,0.6])(f2)
COLOR([0.8,0.7,0.6])(f3)
COLOR([0.7,1,1])(internoFin2)


var ff1 = SIMPLEX_GRID([[0.2],[7],[-0.2,0.2]])
var ff2 = SIMPLEX_GRID([[0.2],[0.2,-6.6,0.2],[-0.2,-0.2,2.6]])
var ff3 = SIMPLEX_GRID([[0.2],[7],[-0.2,-0.2,-2.6,0.2]])
var internoFin3 = SIMPLEX_GRID([[0.2],[-0.2,6.6,-0.2],[-0.2,-0.2,2.6,-0.2]])
COLOR([0.8,0.7,0.6])(ff1)
COLOR([0.8,0.7,0.6])(ff2)
COLOR([0.8,0.7,0.6])(ff3)
COLOR([0.7,1,1])(internoFin3)


var fn1 = SIMPLEX_GRID([[8],[0.2],[-0.2,0.2]])
var fn2 = SIMPLEX_GRID([[0.2,-7.6,0.2],[0.2],[-0.2,-0.2,2.6]])
var fn3 = SIMPLEX_GRID([[8],[0.2],[-0.2,-0.2,-2.6,0.2]])
var internoFin4 = SIMPLEX_GRID([[-0.2,7.6,-0.2],[0.2],[-0.2,-0.2,2.6,-0.2]])
COLOR([0.8,0.7,0.6])(fn1)
COLOR([0.8,0.7,0.6])(fn2)
COLOR([0.8,0.7,0.6])(fn3)
COLOR([0.7,1,1])(internoFin4)




var finestra = STRUCT([finestra1,finestra2,finestra3,internoFin1])
var finestraor = STRUCT([f1,f2,f3,internoFin2])
var finestrona = STRUCT([ff1,ff2,ff3,internoFin3])
var finestrasx = STRUCT([fn1,fn2,fn3,internoFin4])
var mm1 = STRUCT(REPLICA(21)([muro,T([1])([1])]) )
var n1 = T([0,1])([0.8,1])(mm1)

var mm2 = STRUCT(REPLICA(5)([muro,T([1])([1])]) )
var n2 = T([0,1])([9,17])(mm2)

var mm3 = STRUCT(REPLICA(2)([muro,T([1])([1])]) )
var n3 = T([0,1])([5,17])(mm3)

var n3_1 = T([0,1])([5,20])(mm3)

var mm4 = STRUCT(REPLICA(11)([muro,T([1])([1])]) )
var n4 = T([0,1])([51,5])(mm4)

var mm5 = STRUCT(REPLICA(13)([muroor,T([0])([1])]) )
var n5 = T([0,1])([38,16])(mm5)

var mm6 = STRUCT(REPLICA(9)([muroor,T([0])([1])]) )
var n6 = T([0,1])([42,5])(mm6)

var mm7 = STRUCT(REPLICA(10)([muroor,T([0])([1])]) )
var n7 = T([0,1])([25,7])(mm7)

var mm8 = STRUCT(REPLICA(6)([muroor,T([0])([1])]) )
var n8 = T([0,1])([37,11])(mm8)

var mm9 = STRUCT(REPLICA(19)([muroor,T([0])([1])]) )
var n9 = T([0,1])([8,15])(mm9)

var mm15 = STRUCT(REPLICA(10)([muroor,T([0])([1])]) )
var n15 = T([0,1])([30,14])(mm15)

var mm16 = STRUCT(REPLICA(8)([muroor,T([0])([1])]) )
var n16 = T([0,1])([1,22])(mm16)

var mm17 = STRUCT(REPLICA(2)([muroor,T([0])([1])]) )
var n17 = T([0,1])([7,21])(mm17)


var n18 = T([0,1])([5,21])(muroor)



var mm10 = STRUCT(REPLICA(12)([finestra,T([0])([1])]) )
var n10 = T([0,1])([30,5])(mm10)

var mm11 = STRUCT(REPLICA(7)([finestraor,T([1])([1])]) )
var n11 = T([0,1])([45,7])(mm11)

var mm12 = STRUCT(REPLICA(6)([finestraor,T([1])([1])]) )
var n12 = T([0,1])([43,5.2])(mm12)

var mm13 = STRUCT(REPLICA(6)([finestraor,T([1])([1])]) )
var n13 = T([0,1])([38,5])(mm13)

var mm14 = STRUCT(REPLICA(3)([finestrona,T([0])([0.5])]) )
var n14 = T([0,1])([31,7.2])(mm14)


var n19 = T([0,1])([1,17])(finestrasx)

//panca
var pp = SIMPLEX_GRID([[-8,15],[-14,0.6],[-0.2,-0.4,0.2]]);
var pp1 = SIMPLEX_GRID([[-9,0.3,-9.3,0.3],[-14,0.6],[-0.2,0.4]]);
var panca = STRUCT([pp,pp1])

//tetto1 e 2
var t1 = SIMPLEX_GRID([[-0.5,9.5],[-13.2,9.4],[-0.2,-3,+0.2]]);
var t2 = SIMPLEX_GRID([[-24.4,23],[-4,13],[-0.2,-3,0.2]]);

var tetto = STRUCT([t1,t2])

//vasca1
var vv1 = SIMPLEX_GRID([[-0.8,20.4],[-0.8,9.4],[0.2]]);
var vv2 = T([2])([-1.2])(vv1)
var vv3 = SIMPLEX_GRID([[-0.8,20.4],[-0.8,0.2,-9.2,0.2],[1]]);
var vv4 = T([2])([-1])(vv3)
var vv5 = SIMPLEX_GRID([[-0.8,0.2,-20.2,0.2],[-0.8,-0.2,9.2,-0.2],[1]]);
var vv6 = T([2])([-1])(vv5)


COLOR([0,1,1])(vv2)
COLOR([0,1,1])(vv6)
COLOR([0,1,1])(vv4)

var vasca1 = STRUCT([vv2,vv4,vv6]);


var vas = SIMPLEX_GRID([[-46.8,4.4],[-4.8,11.4],[0.2]]);
var vas2 = T([2])([-1.2])(vas)
var vas3 = SIMPLEX_GRID([[-46.8,4.4],[-4.8,0.2,-11.2,0.2],[1]]);
var vas4 = T([2])([-1])(vas3)
var vas5 = SIMPLEX_GRID([[-46.8,0.2,-4,0.2],[-0.8,-4.2,11.2,-0.2],[1]]);
var vas6 = T([2])([-1])(vas5)

COLOR([0,1,1])(vas2)
COLOR([0,1,1])(vas4)
COLOR([0,1,1])(vas6)

var vasca2 = STRUCT([vas2,vas4,vas6]);
var muri = STRUCT([n1,n2,n3,n3_1,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n15,n16,n17,n18,n19])

var sc1 = SIMPLEX_GRID([[-39,0.2],[-1,3],[0.2]])
var sc2 = REPLICA(5)([sc1,T([0,2])([0.2,-0.2])])
var sc3 = STRUCT(sc2)
var scale =T([2])([-0.2])(sc3)

var colonna1 = SIMPLEX_GRID([[1],[-0.3,0.4,-0.3],[-0.2,3]])
var colonna2 = SIMPLEX_GRID([[-0.3,0.4,-0.3],[1],[-0.2,3]])
var colonna = STRUCT([colonna1,colonna2])

var pillar1 = REPLICA(4)([colonna,T([0])([6+1/2])]);
var pillar = STRUCT(pillar1)
var pillar2 = T([0,1])([26,7])(pillar);

var pillar11 = REPLICA(4)([colonna,T([0])([6+1/2])]);
var pillar1 = STRUCT(pillar11)
var pillar21 = T([0,1])([26,14])(pillar1);

var pilastri = STRUCT([pillar21,pillar2])

COLOR([1,1,0])(tetto)

DRAW(STRUCT([muri,panca,vasca1,vasca2,tetto,scale,pilastri]))






