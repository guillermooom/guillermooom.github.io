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
	let ima = document.getElementById("imagenBtn");
	//let foot = document.getElementById('footer');
	let foot = document.querySelector('footer');

	if(tex == "oscuro"){
		tema.setAttribute("color","claro");

		//cambio imagen
		ima.src = "img/sun.png";

		//aplicando estilos
		cuerpo.style.backgroundColor = "#E2DAD6";
		titulos.style.color="#202020";
		foot.style.backgroundColor="#6482AD";

	}else if(tex == "claro"){
		tema.setAttribute("color","oscuro");

		//cambio imagen
		ima.src = "img/moon.png";

		//aplicando estilos
		cuerpo.style.backgroundColor = "#1C1678";
		titulos.style.color="#fff";
		foot.style.backgroundColor="#8576FF";
	}
}