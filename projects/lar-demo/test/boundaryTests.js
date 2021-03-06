/**
* boundary tests
*
* @author Fabio Cumbo, Elisa Lamberti and Andrea Somma
* @copyright 2013 Fabio Cumbo, Elisa Lamberti and Andrea Somma
*
*/

//due quadrati con celle triangolari
var m = new lar.Model([[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]],[[0,1,3],[1,3,4],[1,4,5],[1,2,5]]);
var b = m.boundary(2, [ [0,1,3],[1,3,4],[1,4,5],[1,2,5] ], false);
b.draw();

//due quadrati con celle quadrate - CON LE CELLE QUADRATE NON FUNZIONA
var m = new lar.Model([[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]],[[0,1,3,4],[1,2,4,5]]);
var b = m.boundary(2, [ [0,1,3,4],[1,2,4,5] ], false);
b.draw();

//cubo con 12 facce triangolari - NON HA SENSO
var c = new lar.Model([ [0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,1,1],[1,1,1],[1,0,1],[0,0,1] ], 
	[ [1,2,5],[1,5,6],[1,2,3],[1,0,3],[1,0,7],[1,6,7],[2,3,4],[2,4,5],[4,5,6],[4,6,7],[0,3,4],[0,4,7] ]);
var b = m.boundary(2, [ [1,2,5],[1,5,6],[1,2,3],[1,0,3],[1,0,7],[1,6,7],[2,3,4],[2,4,5],[4,5,6],[4,6,7],[0,3,4],[0,4,7] ], false);
b.draw();

//cubo formato da 6 piramidi
var c = new lar.Model([ [0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,1,1],[1,1,1],[1,0,1],[0,0,1] ], 
	[ [6,5,2,4],[1,2,6,3],[6,2,3,4],[6,7,4,3],[6,7,1,3],[0,7,1,3] ]);
var b = c.boundary(3, [ [6,5,2,4],[1,2,6,3],[6,2,3,4],[6,7,4,3],[6,7,1,3],[0,7,1,3] ], false);
b.draw();