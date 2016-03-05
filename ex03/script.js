var n1,n2,n3,n4,cmedia;
function calcularmedia() {	
n1 =  frmMedia.txtn1.value;
n1 = parseFloat(n1);

n2 =  frmMedia.txtn2.value;
n2 = parseFloat(n2);

n3 =  frmMedia.txtn3.value;
n3 = parseFloat(n3);

n4 =  frmMedia.txtn4.value;
n4 = parseFloat(n4);

cmedia = ((n1 + n2 + n3 + n4)/4	);
frmMedia.media.value = cmedia;

} 





function fechaPag(){
window.opener = window;
window.close("#");

}