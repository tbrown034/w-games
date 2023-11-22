// selectors
const mainElement = document.querySelector("main");
const mainBody = document.body;
const playInput = document.getElementById("play-input");

// helper functions

const askName = () => {
  let newDiv = document.createElement("div");
  let newP = document.createElement("p");
  let newInput = document.createElement("input");
  let newEnter = document.createElement("button");
  newP.innerText =
    "Glad to hear it. Please, now enter your name or what I should call you!";
  newInput.setAttribute("placeholder", "Your name here");
  newInput.setAttribute("id", "name-input");
  newEnter.setAttribute("id", "name-enter");
  newEnter.innerText = "Enter";
  newDiv.append(newP);
  newDiv.append(newInput);
  newDiv.append(newEnter);
  mainElement.append(newDiv);
  mainBody.style.backgroundColor = "lightblue";
};

const noPlay = () => {
  let newP = document.createElement("p");
  newP.innerText = "Awww, shucks. Your Loss.";
  mainBody.append(newP);
  mainBody.style.backgroundColor = "gray";
};

// functions

const clickClear = () => {
  playInput.value = "";
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.lastChild);
  }
  const startDiv = document.createElement("div");
  startDiv.setAttribute("id", "start");
  startDiv.innerHTML = `
    <p>Shall we play a game?</p>
    <input placeholder="y/n" type="text" id="play-input" />
    <button id="play-input-button">Enter</button>
    <button id="clear-button">Clear</button>
  `;
  mainElement.appendChild(startDiv);

  // Reset the background color of the main body
  mainBody.style.backgroundColor = ""; // or set to the original color if it's not white

  // Re-attach event listeners to the new elements
  document
    .getElementById("play-input-button")
    .addEventListener("click", clickPlay);
  document.getElementById("play-input").addEventListener("keyup", enterPlay);
  document.getElementById("clear-button").addEventListener("click", clickClear);
};

// Function to handle play input button click
const clickPlay = () => {
  const playInput = document.getElementById("play-input");
  if (playInput.value.toLowerCase() === "y") {
    askName();
  } else if (playInput.value.toLowerCase() === "n") {
    noPlay();
  } else {
    alert("Please enter 'y' or 'no' to continue");
  }
};

// Function to handle 'Enter' key press in play input
const enterPlay = (e) => {
  if (e.key === "Enter") {
    clickPlay(); // Use clickPlay function to handle logic
  }
};

// Attach event listeners to initial elements
document
  .getElementById("play-input-button")
  .addEventListener("click", clickPlay);
document.getElementById("play-input").addEventListener("keyup", enterPlay);
document.getElementById("clear-button").addEventListener("click", clickClear);
