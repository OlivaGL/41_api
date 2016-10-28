//puse este alert sólo como una foma de comprobar que está bien hecho el link de js
//alert("Si funcionó");

function agregaBoton(){//primer paso crear la función que agregue el botón, el input y el X para eliminar
	var divPapa = document.getElementById("divPapa");//mando llamar al div donde se van a agregar los elementos
	var boton = document.createElement("button");//<
	boton.setAttribute("class", "btn btn-info");
	boton.setAttribute("id", "agregaTarea");
	var textoBoton = document.createTextNode("GUARDAR TAREA")
	boton.appendChild(textoBoton);
	divPapa.appendChild(boton);
	var agregarTarea = document.getElementById("agregaTarea");
	
}
