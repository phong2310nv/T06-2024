const changeColor = document.getElementById("changeColor");
const inputName = document.querySelector('input[name="name"]');
const inputDes = document.querySelector('textarea[name="description"]');
const inputMarried = document.querySelector('input[name="isMarried"]');
const inputAvatar = document.querySelector('input[name="avatar"]');
const favoriteSelect = document.querySelector('select[name="favorite"]');
const genderRadios = document.querySelectorAll('input[name="gender"]');
const submit = (data) => {
  console.log(data);
  console.log(`Name: ${inputName.value}`);
  console.log(`Description: ${inputDes.value}`);
  console.log(`Is Married: ${inputMarried.checked}`);
  console.log(inputAvatar.files);
  console.log(`Favorite: ${favoriteSelect.value}`);
  let currentGender = "";
  genderRadios.forEach((item) => {
    if (item.checked) {
      currentGender = item.value;
    }
  });
  console.log(`Gender: ${currentGender}`);
  const checkedGenderEle = document.querySelector(
    'input[name="gender"]:checked'
  );
  console.log(`Gender: ${checkedGenderEle.value}`);

  const userDisplay = document.getElementById("user-display");

  let fileData = "";
  if (inputAvatar.files[0]) {
    console.log(URL.createObjectURL(inputAvatar.files[0]));
    fileData = `
    <li>
     <img width='100' src='${URL.createObjectURL(inputAvatar.files[0])}' />
    </li>
    `;
  }

  userDisplay.innerHTML = `
  <li>Name: ${inputName.value}</li>
  <li>Married: ${inputMarried.checked ? "YES" : "NO"}</li>
  ${fileData}
  <li>
  Favorite: ${favoriteSelect.value}
  </li>
  <li>
  Gender: ${checkedGenderEle.value}
  </li>
  `;
};

const changeColorTo = (color) => {
  // console.log(color);
  changeColor.style.color = color;
};
const changeColorByEvent = (event) => {
  const btnClicked = event.target;
  const targetColor = btnClicked.getAttribute("data-color");
  changeColor.style.color = targetColor;
};

const changeToRed = () => {
  changeColor.style.color = "red";
};
const mainImg = document.getElementById("imgMain");
const btnRed = document.getElementById("btn-red");
btnRed.addEventListener("click", changeColorByEvent);
const imgItems = document.querySelectorAll(".myImg");
imgItems.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    const src = event.target.getAttribute("src");
    mainImg.src = src;
  });
});

let todoList = [
  {
    label: "Quet nha",
    id: 1,
  },
  {
    label: "Nau com",
    id: 2,
  },
];
const todoInput = document.getElementById("todoInput");
const todoDisplay = document.getElementById("todoDisplay");
const addTodo = () => {
  const label = todoInput.value;
  todoList.push({
    label,
    id: Date.now(),
  });
  display();
  todoInput.value = "";
};
const display = () => {
  let todoString = "";
  todoList.forEach((item) => {
    todoString += `<li onclick='removeItem(${item.id})'>${item.label}</li>`;
  });
  todoDisplay.innerHTML = todoString;
};
display();

const removeItem = (id) => {
  console.log(id);
  todoList = todoList.filter((todo) => todo.id !== id);
  display();
};
