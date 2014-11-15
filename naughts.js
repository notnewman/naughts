	var cell = new Array;
	var faira = new Array;
	var fairb = new Array;
	var fairc = new Array;
	var faird = new Array;
	var player = 1; var turns = 0; var winner = 0;
	var side; var delay;
	var row1 = 0; var row2 = 0; var row3 = 0;
	var col1 = 0; var col2 = 0; var col3 = 0;
	var dia1 = 0; var dia2 = 0; var cat0 = 0;
	var X = "<img style='border: 0px solid ; width: 45px; height: 45px;' alt='X' src='http://nosymotorist.com/images/2.gif'>";
	var O = "<img style='border: 0px solid ; width: 45px; height: 45px;' alt='O' src='http://nosymotorist.com/images/1.gif'>";
	var blank = "<img style='border: 0px solid ; width: 45px; height: 45px;' alt='blank' src='http://nosymotorist.com/images/0.gif'>";
//
function init(){
	cell = Array(0,0,0,0,0,0,0,0,0);
	faira = Array(0,0,0,0,0,0,0,0,0);
	fairb = Array(0,0,0,0,0,0,0,0,0);
	fairc = Array(0,0,0,0,0,0,0,0,0);
	faird = Array(0,0,0,0,0,0,0,0,0);
	player = 1; turns = 0; winner = 0;
	var row1 = 0; var row2 = 0; var row3 = 0;
	var col1 = 0; var col2 = 0; var col3 = 0;
	var dia1 = 0; var dia2 = 0; var cat0 = 0;
}
//
function xpr(){
	row1 = cell[0]*cell[1]*cell[2];
	row2 = cell[3]*cell[4]*cell[5];
	row3 = cell[6]*cell[7]*cell[8];
	col1 = cell[0]*cell[3]*cell[6];
	col2 = cell[1]*cell[4]*cell[7];
	col3 = cell[2]*cell[5]*cell[8];
	dia1 = cell[0]*cell[4]*cell[8];
	dia2 = cell[6]*cell[4]*cell[2];
	faira[0] = cell[1]*cell[2]; fairb[0] = cell[3]*cell[6]; fairc[0] = cell[4]*cell[8];
	faira[1] = cell[0]*cell[2]; fairb[1] = cell[4]*cell[7];
	faira[2] = cell[0]*cell[1]; fairb[2] = cell[5]*cell[8]; fairc[2] = cell[4]*cell[6];
	faira[3] = cell[4]*cell[5]; fairb[3] = cell[0]*cell[6];
	faira[4] = cell[5]*cell[3]; fairb[4] = cell[1]*cell[7]; fairc[4] = cell[0]*cell[8]; faird[4] = cell[2]*cell[6];
	faira[5] = cell[3]*cell[4]; fairb[5] = cell[2]*cell[8];
	faira[6] = cell[7]*cell[8]; fairb[6] = cell[0]*cell[3]; fairc[6] = cell[4]*cell[2];
	faira[7] = cell[6]*cell[8]; fairb[7] = cell[1]*cell[4];
	faira[8] = cell[6]*cell[7]; fairb[8] = cell[2]*cell[5]; fairc[8] = cell[0]*cell[4];
	cat0 = row1*row2*row3;
	if (row1 == 8||row2 == 8||row3 == 8||col1 == 8||col2 == 8||col3 == 8||dia1 == 8||dia2 == 8) {
	   winner = 2;}
	if (row1 == 1||row2 == 1||row3 == 1||col1 == 1||col2 == 1||col3 == 1||dia1 == 1||dia2 == 1) {
	   winner = 1;}
	if (winner > 0) {
	document.getElementById("fb").innerHTML="Player "+winner+" wins";
	}
	else {
	document.getElementById("fb").innerHTML="Player "+player+" go";
	}
	if (winner == 0&&cat0 !=0) {
	document.getElementById("fb").innerHTML="The cat wins";
	}
	return null;}
//
function flip(side){
  if (cell[(side)]==0 && winner == 0) {
	 if (player == 2) {
	   document.getElementById(side).innerHTML=O;
	   cell[(side)]=2;
	   player = 1;}
	 else {
	   document.getElementById(side).innerHTML=X;
	   cell[(side)]=1;
	   player = 2;}
	xpr();}
  else if (cat0 == 0) {
	 document.getElementById("fb").innerHTML="Player "+player+" try again"; 
  }
  if ((player == 2)&&(winner == 0)&&(cat0 == 0)) {
    document.getElementById("fb").innerHTML="Thinking ..."; 
    delay=setTimeout(function(){autoo()},1000);
  }
  return null;}
//
function autoo() {
clearTimeout(delay);
var picked;
var found = false;
if (cell[4] == 0) {
picked = 4;
found = true;
}
for (var j=2;j<=6;j=j+2){
for (var i=0;i<=8;i=i+1){
if ((j==2)&&(cell[(i)] == 0)&&(found != true)&&((faira[(i)] == 1)||(fairb[(i)] == 1)||(fairc[(i)] == 1)||(faird[(i)] == 1))){
picked = i;
found = true;
}
if ((j != 2)&&(cell[(i)] == 0)&&(found != true)){
picked = i;
found = true;
}
}
}
flip(picked);
  return null;}
  var norm = 1;
//
//
