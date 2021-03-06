/*
	In this file are defined functions and variables useful to do tests and degubbing
*/

var getTime = function(date){
	return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"."+date.getMilliseconds();
}

var log = function(string){
	if (string === undefined){
		console.log();
		return;
	}	
	console.log("["+getTime(new Date())+"] "+string);
}

var print = function(string){
	if (string === undefined){
		return;
	}	
	console.log(string);
}

log("====================================");
log("You are executing test.js");
log("====================================");

// do some quick test here

/*

log("Generate matrix with ones");

var matrixWithOnes = lar.utils.ones(6,5);
print(matrixWithOnes);

log("Change first row");
matrixWithOnes[0] = [1,2,3,4,5];
print(matrixWithOnes);

log("test: utils.select");
var selectedRow = lar.utils.select(matrixWithOnes,[1]);
print(selectedRow);

var selectedRows = lar.utils.select(matrixWithOnes,[1,1]);
print(selectedRows);

*/
