if (document.addEventListener) {
	window.addEventListener("load", inicio);
} else if (document.attachEvent) {
	window.attachEvent("onload", inicio);
}

function inicio(){
   let tema = document.getElementById("tema");

   if (document.addEventListener) {
		tema.addEventListener("click", cambio_tema);
	} else if (document.attachEvent) {
		tema.attachEvent("onclick", cambio_tema);
	}
}

function cambio_tema(){
	let tex = tema.getAttribute("color");
	let cuerpo = document.body;
	let titulos = document.getElementById("titulos");
	let a = document.getElementsByClassName("cartas");
	let ima = document.getElementById("imagenBtn");

	if(tex == "oscuro"){
		tema.setAttribute("color","claro");

		//cambio imagen
		ima.src = "img/sun.png";

		//aplicando estilos
		cuerpo.style.backgroundColor = "#3D405B";
		titulos.style.color="#F4F1DE";
		for (var i=0; i<a.length; i++) a[i].style.boxShadow = "0 0 10px #aaa";

	}else if(tex == "claro"){
		tema.setAttribute("color","oscuro");

		//cambio imagen
		ima.src = "img/moon.png";

		//aplicando estilos
		cuerpo.style.backgroundColor = "#81B29A";
		titulos.style.color="#202020";
		for (var i=0; i<a.length; i++) a[i].style.boxShadow = "0 0 10px #555";
	}
}