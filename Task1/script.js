//Javascript file 

var cars = {"carDetails":[
		{"carName":"Audi","carModel":"2012","carColor":"Red","carMileage":"10","carImg":"1.jpg" },
		{"carName":"Skoda","carModel":"2013","carColor":"Grey","carMileage":"12","carImg":"2.jpg" },
		{"carName":"BMW","carModel":"2014","carColor":"White","carMileage":"8","carImg":"3.jpg" }
	]
}


console.log('start JON');

var x=  localStorage.getItem("cars");
if( x ){
	cars = JSON.parse( x ) //restore app
} else {
	localStorage.setItem( 'cars', cars ) //initialise
}
console.log(x);

console.log('end');

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
  console.log(id);
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

		console.log(1);
		var car = {}
		car.carName = document.myForm.carName.value;
		car.carModel = document.myForm.carModel.value;
		car.carColor = document.myForm.carColor.value;
		car.carMileage = document.myForm.carMileage.value;
		car.carimage = document.myForm.carimage.value;
		
		//add to global data
		cars.push( car );
		// store array data to the localstorage
		localStorage.setItem("cars",  JSON.stringify(cars));
		
		console.log(2);		
        
      }
  


	
