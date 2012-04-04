var gambe = SIMPLEX_GRID([[-0.3,0.05,-0.4,0.05],[-0.3,0.05,-0.4,0.05],[0.45]]);
COLOR([0.545,0.27,0.05])(gambe);

var telaio1 = SIMPLEX_GRID([[-0.3,0.5],[-0.3,0.05,-0.4,0.05],[-0.45,0.02]]);
COLOR([0.545,0.27,0.05])(telaio1);

var telaio2 = SIMPLEX_GRID([[-0.3,0.05,-0.4,0.05],[-0.35,0.4,-0.05],[-0.45,0.02]]);
COLOR([0.545,0.27,0.05])(telaio2);

var schienale1 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,0.05,-0.4,0.05],[-0.47,0.45]]);
COLOR([0.545,0.27,0.05])(schienale1);

var schienale2 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,0.5],[-0.47,-0.1,0.02,-0.33,0.02]]);
COLOR([0.545,0.27,0.05])(schienale2);

var schienalegrid1 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,-0.05,-0.15,0.1],[-0.47,-0.1,-0.02,0.33]])
COLOR([0.545,0.27,0.05])(schienalegrid1);

var schienalegrid20 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,-0.05,0.15],[-0.47,-0.1,-0.02,0.20]])
var schienalegrid21 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,-0.05,0.15],[-0.47,-0.1,-0.02,-0.20,0.13]])

var schienalegrid22 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,-0.05,-0.15,-0.1,0.15],[-0.47,-0.1,-0.02,0.1]])
var schienalegrid23 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,-0.05,-0.15,-0.1,0.15],[-0.47,-0.1,-0.02,-0.1,0.23]])

COLOR([0.8,0.46,0.13])(schienalegrid20);
COLOR([1,0.92,0.84])(schienalegrid21);
COLOR([0.72,0.49,0.19])(schienalegrid22);
COLOR([0.8,0.52,0.24])(schienalegrid23);

//abc

var strutturaSedile1 = SIMPLEX_GRID([[-0.3,-0.05,-0.1,0.05,-0.1,0.05],[-0.3,-0.05,0.4],[-0.45,0.02]]);
COLOR([0.545,0.27,0.05])(strutturaSedile1);

var strutturaSedile2 = SIMPLEX_GRID([[-0.3,-0.05,0.1,-0.05,0.1,-0.05,0.1],[-0.3,-0.05,-0.1,0.05,-0.1,0.05],[-0.45,0.02]]);
COLOR([0.545,0.27,0.05])(strutturaSedile2);

var sedileLegno1 = T([0])([0.35])(SIMPLEX_GRID([REPLICA(35)([-0.01,0.001]),[-0.3,0.05,0.45],[-0.47,0.01]]));
var sedileLegno2 = T([1])([0.35])(SIMPLEX_GRID([[-0.3,0.05,0.45],REPLICA(35)([-0.01,0.001]),[-0.47,0.01]]));
COLOR([0.5,0.5,0.5])(sedileLegno1);
COLOR([0.5,0.5,0.5])(sedileLegno2);

var braccioli1 = SIMPLEX_GRID([[-0.3,-0.05,0.45],[-0.3,0.05,-0.4,0.05],[-0.45,-0.02,-0.15,0.02]]);
var braccioli2 = SIMPLEX_GRID([[-0.3,-0.05,-0.40,0.05],[-0.3,0.05,-0.4,0.05],[-0.45,-0.02,0.15]]);
COLOR([0.545,0.27,0.05])(braccioli1);
COLOR([0.545,0.27,0.05])(braccioli2);

var telaio = STRUCT([gambe,telaio2,telaio1,schienale1,schienale2,
	strutturaSedile2,strutturaSedile1,sedileLegno1,sedileLegno2,braccioli1,braccioli2,schienalegrid1,schienalegrid20,
	schienalegrid21,schienalegrid22,schienalegrid23]);

DRAW(telaio);


