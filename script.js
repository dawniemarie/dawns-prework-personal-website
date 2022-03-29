const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = "I am a third level Header";
h3.style.fontFamily="Myriad Pro";
h3.style.textTransform="Uppercase";
h3.style.color="lightblue";
document.querySelector("body").appendChild(h3);