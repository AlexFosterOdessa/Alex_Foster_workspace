var presentYear = 2016;
var year = +prompt('Какого ты года рождения?');
var age = presentYear - year;
var correctAge;


 while (age < 0 || !year || '') {
	var year = +prompt('Какого ты года рождения?');
	var age = presentYear - year;
 } if (age >= 0) {
 	if (age%10 == 1 && age!=11) {
 			alert(age + ' '+ 'год');
 	    } 	else if (age%10 >=2 && age%10 <=4 && age!=12 && age!=13 && age!=14) {
  	   		alert(age + ' '+ 'года');
 	    	} 	else  {
 					alert(age + ' '+ 'лет');
				} 
	} 	

