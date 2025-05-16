let fName = document.querySelector(".fName");
let Btn = document.querySelector(".btn");
let ul = document.querySelector(".names");
let massiv = [];

if (localStorage.getItem("tasks") == null) {
  massiv = [];
} else {
  massiv = JSON.parse(localStorage.getItem("tasks"));
  console.log(massiv);
}

fName.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fName.value !== "" ? massiv.push(fName.value) : "";
    fName.value = "";
    localStorage.setItem("tasks", JSON.stringify(massiv));

    ul.textContent = "";

    massiv.forEach((item) => {
      let list = document.createElement("li");
      list.textContent = item;
      ul.appendChild(list);
    });
  }
});

Btn.addEventListener("click", () => {
  if (fName.value !== "") {
    massiv.push(fName.value);
    fName.value = "";
    localStorage.setItem("tasks", JSON.stringify(massiv));

    ul.textContent = "";

    massiv.forEach((item) => {
      let list = document.createElement("li");
      list.textContent = item;
      ul.appendChild(list);
    });
  }
});

massiv.forEach((item) => {
  let list = document.createElement("li");
  list.textContent = item;
  list.classList.add("task-item");
  ul.appendChild(list);
});
