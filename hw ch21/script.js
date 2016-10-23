//var easyArray = [1, 2, 3, 4];
//var testArray = [5, 6, 8, 12];
var hardTestArray = [1, 2, [3.1, 3.2, 3.3], 4, 5];

function generateList(array) {
	var newDiv = document.createElement('div'); //
	var newUl = document.createElement('ul');
	newDiv.appendChild(newUl); //

	for (var i = 0; i < array.length; i++) {

		var newLi = document.createElement('li');
  		if(array[i].length){
  		 	var array2 = array[i];
  		 	var newUl2 = document.createElement('ul');
   			for(var j = 0; j < array2.length; j++) {
   				var newLi2 = document.createElement('li');
   				newLi2.innerHTML = array2[j];
   				newUl2.appendChild(newLi2);
   				newUl.appendChild(newUl2);
   			} 	
  		}  else {
   				newLi.innerHTML = array[i];
   				newUl.appendChild(newLi);
   			}
		document.body.appendChild(newDiv);
	}
	return newDiv;
}

//console.log(generateList(easyArray));
//console.log(generateList(testArray));
console.log(generateList(hardTestArray));