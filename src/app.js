/* eslint-disable */
import "bootstrap";
import "./style.css";

  window.onload = function () {

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
    let numCard = Math.floor(Math.random() * num.length);
    document.getElementById("num").innerHTML = num[numCard];

    let icon = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
    let icon2 = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
    let iconCard = Math.floor(Math.random() * icon.length, icon2.length);
    document.getElementById("icon").innerHTML = icon[iconCard];
    document.getElementById("icon2").innerHTML = icon2[iconCard];

    const suit = icon[iconCard]

    if (suit == "&#9829;" || suit == "&#9830;") {
      document.getElementById("icon").style.color = "red";
      document.getElementById("icon2").style.color = "red";
    };
    //Temporizador//
    setInterval(() => {
      const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
      let numCard = Math.floor(Math.random() * num.length);
      document.getElementById("num").innerHTML = num[numCard];


      const icon = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
      const icon2 = ["&#9830;", "&#9829;", "&#9824;", "&#9827;"];
      let iconCard = Math.floor(Math.random() * icon.length, icon2.length);
      document.getElementById("icon").innerHTML = icon[iconCard];
      document.getElementById("icon2").innerHTML = icon2[iconCard]

      const suit = icon[iconCard]

      if (suit == "&#9829;" || suit == "&#9830;") {
        document.getElementById("icon").style.color = "red";
        document.getElementById("icon2").style.color = "red";
      } else if (suit == "&#9827;" || suit == "&#9824;") {
        document.getElementById("icon").style.color = "black";
        document.getElementById("icon2").style.color = "black";
      }
    }, 10000);
  };
