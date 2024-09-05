const list = document.getElementById("list");
const input = document.getElementById("item");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const inputValue = document.getElementById("item").value;
  input.value = "";
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const newButton = document.createElement("button");
  listItem.appendChild(span);
  listItem.appendChild(newButton);
  span.textContent = inputValue;
  input.focus();
  newButton.textContent = "Delete";
  list.appendChild(listItem);

  newButton.addEventListener("click", () => {
    listItem.remove();
  });
});
