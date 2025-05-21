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

function createList() {
  massiv.forEach((item) => {
    let list = document.createElement("li");
    list.innerHTML = `${item} <span>
          <i class="fa-solid fa-pen"></i>
          <i class="fa-solid fa-trash"></i>
        </span>`;
    ul.appendChild(list);
  });
}

fName.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    fName.value !== "" ? massiv.push(fName.value) : "";
    fName.value = "";
    localStorage.setItem("tasks", JSON.stringify(massiv));

    ul.textContent = "";

    createList();
  }
});

Btn.addEventListener("click", () => {
  if (fName.value !== "") {
    massiv.push(fName.value);
    fName.value = "";
    localStorage.setItem("tasks", JSON.stringify(massiv));

    ul.textContent = "";

    createList();
  }
});

createList();
