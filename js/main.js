const element = document.querySelector('i.fas.fa-bars');
const element2 = document.querySelector('.hamburger-menu');
const closeHamburger = document.querySelector(".close");

console.log(element);
console.log(element2);
console.log(closeHamburger);

element.addEventListener('click' , function(){
  element2.style.display = "block";
});

closeHamburger.addEventListener('click' , function(){
  element2.style.display = "none";
});