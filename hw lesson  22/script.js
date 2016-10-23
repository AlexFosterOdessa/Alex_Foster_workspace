var wrapCircl = document.getElementById('circle');
var elem = wrapCircl.getElementsByTagName('span');
for (var i = 0; i < elem.length; i++) {
 elem[i].addEventListener('click', countPlus)
}

function countPlus(){
 var text = event.target.innerHTML;
 event.target.innerHTML = +text+1;
}


var squareWrap = document.getElementById('square');
var elemSq = squareWrap.getElementsByTagName('div');
for (var j = 0; j < elem.length; j++) {
 elemSq[j].style.backgroundColor = 'lavender';
 elemSq[j].addEventListener('click', colorChange)
}

function colorChange(){
 var item = event.target; 
 var color = item.style.backgroundColor;
 if(color == 'lavender'){
  item.style.backgroundColor = 'yellow';
 }else if(color == 'yellow'){
   item.style.backgroundColor = '#2e1464';
 }else{
  item.style.backgroundColor = 'lavender';
 }
}
