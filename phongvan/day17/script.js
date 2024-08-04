console.log(document);
console.dir(document);

const titleElement = document.getElementById("title");
console.dir(titleElement);
titleElement.style.color = "red";
const mySpan = titleElement.querySelector("span");
mySpan.style.textTransform = "uppercase";
mySpan.innerText = "Phong Pro";
mySpan.innerHTML = "<b>Phong Pro</b>";
const contentEle = document.getElementsByClassName("content");
console.log(contentEle);
const pEle = document.getElementsByTagName("p");
console.log(pEle);

const myP1 = document.querySelector(".content.p1");
console.log(myP1);
const myPContent = document.querySelectorAll("p.content");

console.log(myPContent);

const btnClickMe = document.getElementById("btn-clickMe");
const btnClickYou = document.getElementById("btn-clickYou");
const btnClearEvent = document.getElementById("clearEvent");
console.dir(btnClearEvent);
const logST = (e) => {
  console.log(e);
  console.log("Im doing something");
};
const doJob1 = (e) => {
  console.log("Im doing doJob1");
};
const doJob2 = (e) => {
  console.log("Im doing doJob2");
};
const doJob3 = (e) => {
  console.log("Im doing doJob3");
};
btnClickMe.onclick = logST;
btnClickYou.onclick = logST;

btnClickMe.addEventListener("click", doJob1);
btnClickMe.addEventListener("click", doJob2);
btnClickMe.addEventListener("click", doJob3);
btnClickMe.addEventListener("click", (e) => {
  console.log("Im doing doJob4");
});

const clearEvent = () => {
  console.log("Clearing events");
  btnClickMe.onclick = null;
  btnClickYou.onclick = null;
  btnClickMe.removeEventListener("click", doJob1);
  btnClickMe.removeEventListener("click", doJob2);
  btnClickMe.removeEventListener("click", doJob3);
  //Will Not work
  btnClickMe.removeEventListener("click", (e) => {
    console.log("Im doing doJob4");
  });
};

const inputName = document.querySelector('input[name="name"]');
const inputDes = document.querySelector('textarea[name="description"]');
const inputMarried = document.querySelector('input[name="isMarried"]');
const inputAvatar = document.querySelector('input[name="avatar"]');
const favoriteSelect = document.querySelector('select[name="favorite"]');
const genderRadios = document.querySelectorAll('input[name="gender"]');
const submit = () => {
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
};
