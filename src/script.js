// Cache references to elements
const bodys = document.getElementById("right");

const selects = [
  document.querySelector("#p00"),
  document.querySelector("#p01"),
  document.querySelector("#p02"),
  document.querySelector("#p03"),
  document.querySelector("#p04"),
  document.querySelector("#p05")
];

const boxarray = [
  [document.getElementById("o1"), document.getElementById("fg1"), document.getElementById("fs1"), document.getElementById("as1")],
  [document.getElementById("o2"), document.getElementById("fg2"), document.getElementById("fs2"), document.getElementById("as2")],
  [document.getElementById("o3"), document.getElementById("fg3"), document.getElementById("fs3"), document.getElementById("as3")],
  [document.getElementById("o4"), document.getElementById("fg4"), document.getElementById("fs4"), document.getElementById("as4")]
];

const boxclassarray = [
  ["0", "order-1", "order-2", "order-3", "order-4", "order-first", "order-last"],
  ["0", "grow-0", "grow"],
  ["0", "shrink-0", "shrink"],
  ["0", "self-auto", "self-start", "self-end", "self-center", "self-stretch", "self-baseline"]
];

const box = [
  document.getElementById("b1"),
  document.getElementById("b2"),
  document.getElementById("b3"),
  document.getElementById("b4")
];

const flexProperties = [
  ["0", "flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse"],
  ["0", "justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly"],
  ["0", "flex-wrap", "flex-nowrap", "flex-wrap-reverse"],
  ["0", "items-start", "items-end", "items-center", "items-baseline", "items-stretch"],
  ["0", "content-center", "content-start", "content-end", "content-between", "content-around", "content-evenly", "content-baseline"]
];

// Event listener function
function submit() {
  bodys.className = 'flex';
  selects.slice(1).forEach((select, index) => {
    const value = select.value;
    if (value !== "0") {
      bodys.classList.add(flexProperties[index][value]);
    }
  });

  box.forEach((b, row) => {
    boxarray[row].forEach((select, index) => {
      const value = select.value;
      if (value !== "0") {
        b.classList.add(boxclassarray[index][value]);
      }
    });
  });
}

// Add event listeners to all select elements
selects.forEach(select => {
  select.addEventListener('change', submit);
});

function rotatefun(e, i) {
  document.getElementById(`i${e}`).style.transform = i ? "rotate(0deg)" : "rotate(90deg)";
}

// Hide functionality
const hidearray = [
  document.getElementById("bodyhide"),
  document.getElementById("block1hide"),
  document.getElementById("block2hide"),
  document.getElementById("block3hide"),
  document.getElementById("block4hide")
];

const counter = Array(hidearray.length).fill(0);

hidearray.forEach((element, index) => {
  element.style.display = "none";
  document.getElementById(`i${index}`).addEventListener('click', () => {
    counter[index]++;
    element.style.display = counter[index] % 2 === 0 ? "block" : "none";
    rotatefun(index, counter[index] % 2);
  });
});