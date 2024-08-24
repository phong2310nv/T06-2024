// Dom
console.log(document);
console.dir(document);

const titleElement = document.getElementById('title')
console.dir(titleElement)
titleElement.style.color = 'red'
const mySpan = titleElement.querySelector('span')
mySpan.style.textTransform = "uppercase"
const contenElement = document.getElementsByClassName("content");
console.log(contenElement);

const pEle = document.getElementsByTagName("p")
console.log(pEle)
const logST = (e) =>{
    console.log(e);
    console.log("I'm doing somthing")
}
const myP1 = document.querySelector('.content.p1')
console.log(myP1)

const inputName = document.querySelector('input[name = "name"]')

const submit= ()=>{
    console.log(`Name: ${inputName.value}`)
}