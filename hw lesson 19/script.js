console.log('Task 1');
var numbers = '12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964';
console.log('Create variable - \"numbers\" -->  ' + numbers);
console.log('Check the type of \"numbers\" : ' + typeof(numbers));
var arr = numbers.split(',');

console.log('After that this variable transform an array and show it in next string of concole.log ');
console.log(arr);
console.log('Check the type of \"arr\" : '+ typeof(arr));
console.log('Show the array length :' +  arr.length);
console.log('and also last index of this array : ' + (arr.length-1));


console.log('\nTask 2');
var newArr = arr.filter(function (num) {
	return num%2==0;
}); 

console.log('And to the end of this homework create new array and called it - \"newArr\". Took data from array \"arr\" and desided to see only even numbers. Also show it in next string of concole.log ');
console.log(newArr);

console.log('\nAlso as a bonus for reading all this text. You can find a picture of beautiful Scarlett in body of the page ;-) ');