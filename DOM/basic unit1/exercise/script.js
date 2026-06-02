//excercise 1:changing innertext and color change//
document.getElementById("main-heading").innerHTML="welcome to Dom!";
document.getElementById("para").style.color="green";
//excercise 2:replace with bold html//
document.getElementById("info").innerHTML="<strong>This is bold text now!</strong>";
//Style Multiple Elements//
document.querySelectorAll(".note").forEach(el => {
    el.style.fontStyle="italic";
});
// Add a new paragraph
document.getElementById("container").innerHTML+="<p>This paragraph was added using JavaScript!</p>";
//Change Image source
document.getElementById("hero").src="DOM diagram.webp";
//
const heading=document.getElementById("main-heading");
console.dir(heading.innerText);
heading.innerHTML="Welcome <span>Student</span>";
 let para =document.getElementsByClassName("description")[0]
 para.innerText="DOM is a powerfull";
para.style.color="blue";
let buttons=document.querySelectorAll("button");
buttons[1].innerText="clicked!"
const spanElement = document.querySelector("div span");
console.log("innerText:", spanElement.innerText);
console.log("textContent:", spanElement.textContent);
const table = document.createElement("table"); 
 table.border="1"
 for (let i = 1; i <= 5; i++) {
      const row = document.createElement("tr");
      for (let j = 1; j <= 5; j++) {
        const cell = document.createElement("td");
        cell.textContent = `${i},${j}`; 
          row.appendChild(cell);
      }
      table.appendChild(row);
    }
       document.body.appendChild(table);