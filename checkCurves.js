var checkBezierCurve = function(points){
	var interval = INTERVALS(1)(40);
	var curva = BEZIER(S0)(points);
	var out = MAP(curva)(interval);
	var poly = POLYLINE(points);

	var p = COLOR([1,0,0,1])(poly);

	var o = COLOR([0,1,0,1])(out);
	var c = STRUCT([o,p]);
	DRAW(c);

}


var checkCubicHermite = function(points){
	var interval = INTERVALS(1)(40);
	var curva = CUBIC_HERMITE(S0)(points);
	var out = MAP(curva)(interval);

	var t1 = POLYLINE([[0,0,0],points[2]]);
	var t2 = POLYLINE([[0,0,0],points[3]]);
	
	var t3 = T([0,1])([points[0][0],points[0][1]])(t1);
	var t4 = T([0,1])([points[1][0],points[1][1]])(t2);
	
	var o = COLOR([0,1,0,1])(out);
	var c = STRUCT([o,t3,t4]);
	DRAW(c);

}


var checkCubicCardinal = function(points){
	var interval = INTERVALS(1)(20);
	var curva = CUBIC_CARDINAL(interval);
	var out = SPLINE(curva)(points);

	var poly = POLYLINE(points);


	var p = COLOR([1,0,0,1])(poly);
	var o = COLOR([0,1,0,1])(out);
	var c = STRUCT([o,p]);
	DRAW(c);

}