
troca = 1;

function trocarcores() {
	
if(troca == 1){
	
document.getElementById("cabecalho").style.background = "Cyan";
document.getElementById("conteudo").style.background = "margenta";
document.getElementById("rodape").style.background = "Yellow";

troca = 0;	
}else{
	
document.getElementById("cabecalho").style.background = "blue";
document.getElementById("conteudo").style.background = "red";
document.getElementById("rodape").style.background = "#FFA500";
troca = 1;	
}

}


function fechaPag(){
window.opener = window;
window.close("#");

}