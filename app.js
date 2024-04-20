const textBox = document.querySelector(".textBox");
const submitBut = document.querySelector(".submitBut");
const listContent = document.querySelector(".list");

function getTextBoxContent() {
  const listContentSubContainer = document.createElement("div");
  const para = document.createElement("p");
  const trashBut = document.createElement("button");

  listContent.appendChild(listContentSubContainer);
  listContentSubContainer.appendChild(para);
  listContentSubContainer.appendChild(trashBut);

  listContentSubContainer.style = "display:flex";
  para.style.cssText = `color: whitesmoke; background: #3f3f3f; width: 70%; padding: 5px;`;

  trashBut.textContent = "trash";
  para.textContent = textBox.value;

  trashBut.addEventListener("click", () => {
    listContent.removeChild(listContentSubContainer);
  });
}

submitBut.addEventListener("click", getTextBoxContent);

textBox.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    getTextBoxContent();
    textBox.value = "";
  }
});

submitBut.addEventListener("mouseenter", () => {
  submitBut.value = "submit ➤";
});

submitBut.addEventListener("mouseleave", () => {
  submitBut.value = "submit";
});
