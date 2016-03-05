var x = 0;
var soma = 0;
function somar() {	
for(x = 0; x <=100; x++){
	 soma = soma + x;
	
	}
	document.getElementById('inputValor').value = soma;
}	




function fechaPag(){
window.opener = window;
window.close("#");

}