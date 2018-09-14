const blueColors = ["#a3daff", "#1ec0ff", "#0080ff", "#03a6ff"];
const redColors = ["#bf209f", "#d62a9d", "#ed317f", "#d64072"];
const orangeColors = ["#ede574", "#f9d423", "#fc913a", "#ff4e50"];
const greenColors = ["#cff09e", "#a8dba8", "#79bd9a", "#3b8686"];

const containerElement = document.getElementById("container");

const addContentBox = colorArray => {
  const loopAmount = Math.floor(Math.random() * 100) + 25;
  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  for (let i = 0; i < loopAmount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    const colorRand = Math.random();
    if (colorRand < 0.25) {
      box.style.backgroundColor = colorArray[0];
    } else if (colorRand < 0.5) {
      box.style.backgroundColor = colorArray[1];
    } else if (colorRand < 0.75) {
      box.style.backgroundColor = colorArray[2];
    } else {
      box.style.backgroundColor = colorArray[3];
    }

    let randWidth = 0;
    let randHeight = 0;
    if (i % 2 === 0) {
      randWidth = Math.floor(Math.random() * 150) + 100;
      randHeight = Math.floor(Math.random() * 150) + 100;
    } else {
      randWidth = Math.floor(Math.random() * 20) + 5;
      randHeight = Math.floor(Math.random() * 300) + 100;
    }
    const width = Math.floor(Math.random() * randWidth) + 1;
    const height = Math.floor(Math.random() * randHeight) + 1;
    const leftPercent = Math.floor(Math.random() * 100);
    const topPercent = Math.floor(Math.random() * 100);

    box.style.width = width;
    box.style.height = height;
    box.style.left = leftPercent + "%";
    box.style.top = topPercent + "%";

    contentElement.appendChild(box);
  }

  containerElement.appendChild(contentElement);
};

addContentBox(blueColors);
addContentBox(redColors);
addContentBox(orangeColors);
addContentBox(greenColors);
