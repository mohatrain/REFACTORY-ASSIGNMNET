document.getElementById('demo').innerHTML = "See how far i have gone with coding";
document.getElementById('demo').name ="new";

document.getElementById('heading').innerText= 'DOCUMENT OBJECT MODEL';
document.getElementsByTagName('h1').innerHTML = "This is a new heading to my documnet";
let select = document.querySelectorAll('p.intro');
select[0].innerHTML = "I am currently in the first div";
select[1].innerHTML = "Date: " + Date();
