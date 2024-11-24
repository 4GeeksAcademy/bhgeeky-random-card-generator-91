/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  let numCard = Math.floor(Math.random() * num.length);
  document.getElementById("num").innerHTML = num[numCard];
  
  const icon = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
  const icon2 = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
  let iconCard = Math.floor(Math.random() * icon.length, icon2.length);
  document.getElementById("icon").innerHTML = icon[iconCard];
  document.getElementById("icon2").innerHTML = icon2[iconCard]
  
};
//Temporizador//
setTimeout(() => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  let numCard = Math.floor(Math.random() * num.length);
  document.getElementById("num").innerHTML = num[numCard];
  
  const icon = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
  const icon2 = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
  let iconCard = Math.floor(Math.random() * icon.length, icon2.length);
  document.getElementById("icon").innerHTML = icon[iconCard];
  document.getElementById("icon2").innerHTML = icon2[iconCard]
  
}, 10000);

//botón cambiar carta//
const changeCard = document.querySelector(".changeCard")

  


  

  

  
  
  
  

  
  
  



