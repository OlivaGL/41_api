//puse este alert sólo como una foma de comprobar que está bien hecho el link de js
//alert("Si funcionó");

function agregaBoton(){//primer paso crear la función que agregue el botón, el input y el X para eliminar
	var divPapa = document.getElementById("divPapa");//mando llamar al div donde se van a agregar los elementos
	var boton = document.createElement("button");//Agrega un botón en el Textarea
	boton.setAttribute("class", "btn btn-info");//Atributos del botón
	boton.setAttribute("id", "agregaTarea");//Atributos del botón
	var textoBoton = document.createTextNode("GUARDAR TAREA")//Agrega texto al bótón
	boton.appendChild(textoBoton);//Inserta el texto dentro del botón
	divPapa.appendChild(boton);//Indica que el botón va a insertarse dentro del divPapa
	
	var texTarea = document.getElementById("texTarea");//Variable para identificar a textarea
	document.boton.onclick = function(){//con esta función pretendo que al dar click en el botón se guarde el texto
	var textoGuardado = document.createTextNode(texTarea.value);//.value convierte en string
	divPapa.appendChild(textoGuardado);//Inserta el texto en el divPapa
	


	}
	
}


//FUENTE
//draggable = "true"
//PRIMER EVENTO  data Transfer.setData(tipo "TEXT", dato ID);

//DESTINO
//SEGUNDO EVENTO  data Transfer.getData(tipo);
//ondragover
//ondrop... SEGUNDO

//FUENTE
//ondragstart


//el.id="" + (new Date()).getTime();