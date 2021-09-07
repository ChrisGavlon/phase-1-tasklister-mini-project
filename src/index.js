document.addEventListener("DOMContentLoaded", () => {
// your code here
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    buildToDoList(event.target.new_task_description.value)
    form.reset()
})

function buildToDoList(newtask){
let p = document.createElement('p')
let delbttn = document.createElement('button')
delbttn.addEventListener('click', deletetask)
delbttn.textContent = 'x'
p.textContent = `${newtask} `
p.appendChild(delbttn)
console.log(p)
document.querySelector('#tasks').appendChild(p)
}
console.log('DOM has loaded')
});
console.log('DOM loads')

function deletetask(event){
  event.target.parentNode.remove()
}