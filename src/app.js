function ThingsToDo() {
  let group = prompt("How many in your group");
  if (group > 4) {
    alert("10% Off");
  } else {
    alert("No discount Available");
  }
  let email = prompt("What is your email address");

  alert("Thank you!" + "will contact you shortly");
}
let ThingsToDobutton = document.querySelector("button");
ThingsToDobutton.addEventListener("click", ThingsToDo);
