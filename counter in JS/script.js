const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const countElement = document.getElementById("count");

let count = 0;

// display count

const updateDisplay = () => {
  countElement.textContent = `Count: ${count}`;
};

increase.addEventListener("click", () => {
  count = count + 1;
  updateDisplay();
});

decrease.addEventListener("click", () => {
  if (count === 0) {
    count += 0;
  } else {
    count -= 1;
  }
  updateDisplay();
});
