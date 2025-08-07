function upDate(previewPic){
    const imagen = previewPic.src
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage=`url('${imagen}')`
	}

 
function unDo(){
    document.getElementById("image").style.backgroundImage=`url('')`
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
	}

function cambioImg(){
  cambiarImag= document.querySelectorAll("image")
  for (var i=0; i<cambiarImag.legth;i++){
    cambiarImag[i].setAttribute("tabindex", "0")
  }
  
}

/* Otra forma de hacer el codigo, desarrollado por otra persona:

// Se ejecuta cuando la página ha cargado
window.onload = function() {
  // Selecciona todas las imágenes con clase "preview"
  const images = document.querySelectorAll(".preview");

  // Recorre cada imagen
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0"); // Hacerlas accesibles por teclado
    console.log("tabindex agregado a imagen:", images[i].alt); // Confirmación

    // Eventos para ratón
    images[i].addEventListener("mouseover", function () {
      upDate(this);
    });

    images[i].addEventListener("mouseout", function () {
      unDo();
    });

    // Eventos para accesibilidad por teclado
    images[i].addEventListener("focus", function () {
      console.log("focus activado para:", this.alt);
      upDate(this);
    });

    images[i].addEventListener("blur", function () {
      console.log("blur activado para:", this.alt);
      unDo();
    });
  }
};

// Muestra imagen en el contenedor principal
function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.innerHTML = previewPic.alt;
}

// Restaura el texto e imagen original
function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Mueve el cursor por las imágenes";
}*/
