let input= document.querySelector(".input")
let submit= document.querySelector(".supmit")
let container_tasxs= document.querySelector(".container-tasxs")
let arrayoftasks= [];


arrayoftasks =localStorage.tasks || []
getDataFromLocalStorage()
submit.onclick=function(){
    if(input.value !=""){
        addTaskToArray(input.value)
        input.value =""
    }
    else{
        alert("please enter  a task..")
    }
}
function addTaskToArray(taskText){
const task= {
    id: Date.now(),
    title:taskText,
    completed:false,

}
arrayoftasks.push(task)
addElementToPageFrom(arrayoftasks)
adddatafromaeeaytoLocalStorage(arrayoftasks)

}
function addElementToPageFrom(arrayoftasks){
    container_tasxs.innerHTML= ""
   arrayoftasks.forEach(task => {
    let div= document.createElement("div")
    div.className= "task"
    div.setAttribute("data-id" , task.id)
    div.appendChild(document.createTextNode(task.title))
    let span = document.createElement("span")
    span.className= "span"
    span.appendChild(document.createTextNode("Delete"))
    div.appendChild(span)

    container_tasxs.appendChild(div)
    

   });
}
 function adddatafromaeeaytoLocalStorage(arrayoftasks){
  window.localStorage.setItem("tasks ",JSON.stringify(arrayoftasks))

 }
function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        let tasks= JSON.Parse(data)
        console.log(tasks)
        addElementToPageFrom(tasks)
    }
}
