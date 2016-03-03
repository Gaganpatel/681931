//Javascript file 

var cars = '{"carDetails":[' +
'{"carName":"Audi","carModel":"2012","carColor":"Red","carMileage":"10","carImg":"1.jpg" },' +
'{"carName":"Skoda","carModel":"2013","carColor":"Grey","carMileage":"12","carImg":"2.jpg" },' +
'{"carName":"BMW","carModel":"2014","carColor":"White","carMileage":"8","carImg":"3.jpg" }]}';


alert('start JON');

var x=  localStorage.getItem("list_data_key");
alert(x);

alert('end');

function loadCarDetails(){
		
		obj = JSON.parse(cars);  
		
	 	for(i=0; i < obj.carDetails.length; i++){
		
			
		//Image dynamically
			var x = document.createElement("IMG");
			x.id = "img_"+obj.carDetails[i].carName;
			x.setAttribute("src", "img/"+obj.carDetails[i].carImg);
			x.setAttribute("alt", obj.carDetails[i].carName);
			document.getElementById("demo").appendChild(x);
			document.getElementById("demo").className = "classCar";
			document.getElementById("img_"+obj.carDetails[i].carName).addEventListener('click', function() {
										   openCarInfo(obj.carDetails[i].carName)
											//alert('hi')										   
								  });	

		//Name dynamically
			var node = document.createElement("h2");
			var textnode = document.createTextNode(obj.carDetails[i].carName);
			node.appendChild(textnode);
			document.getElementById("demo").appendChild(node);								  
		}		
}

function openCarInfo(id){
  alert(id);
}

// Add class script events
// Form validation code will come here.
      function validate()
      {
      
         if( document.myForm.carName.value == "" )
         {
            document.getElementById("validation").innerHTML = "Please provide your Car Name";
            document.myForm.carName.focus() ;
            return false;
         }
         
         if( document.myForm.carColor.value == "" )
         {
            document.getElementById("validation").innerHTML = "Please provide your Car Color";
            document.myForm.carColor.focus() ;
            return false;
         } 

		if( document.myForm.carimage.value == "" )
         {
            document.getElementById("validation").innerHTML = "Please provide your Car Image number";
            document.myForm.carimage.focus() ;
            return false;
         }

		alert(1);
		
		localStorage.carName = document.myForm.carName.value;
		localStorage.carModel = document.myForm.carModel.value;
		localStorage.carColor = document.myForm.carColor.value;
		localStorage.carMileage = document.myForm.carMileage.value;
		localStorage.carimage = document.myForm.carimage.value;
		
		var complexCardataJSON = [ localStorage.carName, localStorage.carModel, localStorage.carColor, localStorage.carMileage, localStorage.carimage ];
		// store array data to the localstorage
		localStorage.setItem("list_data_key",  JSON.stringify(complexCardataJSON));	
		
		document.write(complexCardataJSON);	
		
		alert(2);		
        
      }
  


	
