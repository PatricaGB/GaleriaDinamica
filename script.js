/*Name this external file gallery.js*/

function upDate(previewPic){
    const imagen = previewPic.src
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage=`url('${imagen}')`
	}

 
function unDo(){
    document.getElementById("image").style.backgroundImage=`url('')`
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
	}

		
	