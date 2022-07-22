const name = document.getElementById('demo');
console.log(name)
const container = document.querySelectorAll('div')
console.log(typeof container);
let title = document.getElementById('main-heading')
document.getElementById('main-heading').innerHTML = "DOCUMENT OBJECT MODEL";
title.style.color = "green ";
title.style.fontSize = '3rem';
title.style.textAlign = 'center';
var contain = document.querySelectorAll('#list-items');
for(i = 0; i < contain.length; i++){
    contain[i].innerHTML = "This actually works";
    contain[i].style.border = '5px solid red';
    contain[i].style.padding = '15px';

    contain[i].style.marginBottom = '10px';
}