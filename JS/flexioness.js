var flexiones = [];
	flexiones[0] = "flexion1.jpg";
	flexiones[1] = "flexion2.jpg";
	flexiones[2] = "flexion3.jpg";
	flexiones[3] = "flexion4.jpg";
	flexiones[4] = "flexion5.jpg";

 /*["flexion1.jpg","flexion2.jpg","flexion3.jpg","flexion4.jpg","flexion5.jpg"];*/

var cont = parseInt(0);

var intervalo = setInterval ("adelante()", 2000);



/*
function slider(){
	if (cont >= flexiones.length){
		cont= 0;
	}
	document.getElementById("slider").src = flexiones[cont];
	cont++;
}

setInterval("slider()", 5000);

function adelante() {
	cont++;
	
	document.getElementById("slider").src = flexiones[cont];
	cont++;
		if (cont >= flexiones.length) {
			cont = 0;
		}

	}

	

function atras() {
	document.getElementById("slider").src = flexiones[cont];
	cont--;

	
 }*/


 function adelante(){

 	slider.src = "imagenes/"+flexiones[cont];

 	if (cont < 4) {
 		cont++;
 	}
 	else if (cont == 4) {
 		cont = 0;
 	}
 }

 function atras(){
 	slider.src = "imagenes/"+flexiones[cont];

 	if (cont == 0) {
 		cont = 4;
 	}
 	else if (cont > 0) {
 		cont--;
 	}
 }

