const blueColors = ["#a3daff", "#1ec0ff", "#0080ff", "#03a6ff"];
const redColors = ["#bf209f", "#d62a9d", "#ed317f", "#d64072"];
const orangeColors = ["#ede574", "#f9d423", "#fc913a", "#ff4e50"];
const greenColors = ["#cff09e", "#a8dba8", "#79bd9a", "#3b8686"];

const containerElement = document.getElementById("container");

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const MIN_AMOUNT = 75;
const MAX_AMOUNT = 150;

const addContentBox = (colorArray) => {
  const loopAmount = Math.floor(Math.random() * MAX_AMOUNT) + MIN_AMOUNT;
  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  for (let i = 0; i < loopAmount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.zIndex = 1;
    box.id = `box-${i}`;
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
      randWidth = Math.floor(Math.random() * 10) + 4;
      randHeight = Math.floor(Math.random() * 10) + 4;
    } else {
      randWidth = Math.floor(Math.random() * 3) + 1;
      randHeight = Math.floor(Math.random() * 20) + 4;
    }
    const leftPercent = Math.floor(Math.random() * 100);
    const topPercent = Math.floor(Math.random() * 100);

    box.style.width = `${randWidth}vw`;
    box.style.height = `${randHeight}vh`;
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

const getRandomPx = () => {
  return `${randomIntFromInterval(-100, 100)}px`;
};

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const boxID = parseInt(box.id.substr(4, box.id.length - 1));

  if (boxID % 2 === 0) {
    box.style.setProperty(
      "animation-duration",
      `${randomIntFromInterval(5000, 10000)}ms`
    );
    box.style.setProperty(
      "animation-delay",
      `${randomIntFromInterval(300, 5000)}ms`
    );
    box.style.setProperty("--boxTranslateX", getRandomPx());
    box.style.setProperty("--boxTranslateY", getRandomPx());
  }
});
