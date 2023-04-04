// bom
window.console.log(window)
console.log(document.body)
document.body.style.background = "yellow"
// children
console.log(document.body.firstChild)
console.log(document.body.lastChild)
let arr = Array.from(document.body.childNodes)
console.log(arr)
// sublings
console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)
// element only navigation
const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }
  
  let b = document.body
  console.log("First child of b is: ", b.firstChild)
  console.log("First Element child of b is: ", b.firstElementChild)
//   Selecting the dom 
// Change the card title to red
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))
// matches closest and contains
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
// inner htmk
let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" 
first.outerHTML 
first.outerHTML = "<div>hey</div>"
document.body.firstChild.data 
console.log(document.body.textContent)
first.hidden = false
// Attribute
let first = document.getElementById("first");
let ab = first.getAttribute("class")
console.log(ab)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
first.setAttribute("hidden", "true")
first.setAttribute("class", "true sachin")
first.removeAttribute("class")
console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
// insertion
let a = document.getElementsByTagName('div')[0]

a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
a.append(div);
a.prepend(div);
a.before(div);
a.after(div);
a.replaceWith(div);
// insertion adjacent
first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');
first.remove()
// Events 
let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}
let xs = function(event) {
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
    // alert("Hello World1!")
  }
  
  let ys = function(e) {
    console.log(e)
    alert("Hello World2!")
  }
  
  btn.addEventListener('click', xs)
  
  
  // btn.addEventListener('click', ys)
  
  // let a = prompt("What is your favorite number?");
  
  
  // if (a == "2") {
  //   btn.removeEventListener('click', xs)
  // }
  