let mode = document.querySelector("#mode"); //sélectionne l'ID
let currMode = "light"; //mode actuel

mode.addEventListener("click", () => {
  let body = document.querySelector("body"); // Sélectionner le body avec querySelector
  let title = document.querySelector("title");

  if (currMode === "light") {
    currMode = "dark";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.filter = "drop-shadow(0 -6mm 4mm rgb(00, 00, 00)";
    body.style.bloc1 = "white";
    body.style.transition = "0.5s";
  } else {
    currMode = "light";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.filter = "drop-shadow(0 -6mm 4mm rgb(99, 99, 99)";
    body.style.bloc1 = "black";
    body.style.transition = "0.5s";
  }
})