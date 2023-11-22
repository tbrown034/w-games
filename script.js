console.log("test");

// selectors

const playInput = document.getElementById("play-input");
const playInputButton = document.getElementById("play-input-button");

const mainElement = document.querySelector("main");

// functions

const clickPlay = () => {
  if (playInput.value === "y") {
    console.log("let's go");
  } else if (playInput.value === "n") {
    console.log("so long");
  } else {
    alert("Please enter 'y' or 'no' to continue");
  }
};
const enterPlay = (e) => {
  if (e.key === "Enter") {
    if (playInput.value === "y") {
      console.log("let's go");
    } else if (playInput.value === "n") {
      console.log("so long");
    } else {
      alert("Please enter 'y' or 'no' to continue");
    }

    console.log("entered");
  }
};

// event listeners

playInputButton.addEventListener("click", clickPlay);

playInput.addEventListener("keyup", enterPlay);
