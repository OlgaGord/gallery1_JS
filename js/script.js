   window.addEventListener("load", function (){
  
	//Garder tous les classes avec le nom standart à tableau oImage 
		var oImage = document.querySelectorAll(".standart");

	//Garder element avec id="imgG à variable ogImage"
		var ogImage = document.getElementById("imgG");

	//trier les elements de tableau et choisir un élément comme paramètre de fonction()
		oImage.forEach(function(element){
			
			element.addEventListener("mouseover", function (){
			//Utiliser patamètre element et id choisi avec event "mouseover" pour le nom de fichier
	    	element.setAttribute("src",`images/image_${element.id}c.jpg`);	
		 	element.setAttribute("alt","fond gris");
		});
            element.addEventListener("mouseout", function (){
            //Utiliser patamètre element et id choisi avec event "mouseout" pour le nom de fichier
		    element.setAttribute("src",`images/image_${element.id}P.jpg`);	
		 	element.setAttribute("alt","fond blanc");
		});

		    element.addEventListener("click", function (){
		    //Utiliser patamètre element et id choisi avec event "click" pour le nom de fichier
		    ogImage.setAttribute("src",`images/image_${element.id}G.jpg`);	
		 	ogImage.setAttribute("alt","image grand fond blanc");
        });			
		})
 

 });
  
  