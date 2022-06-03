console.log( Date())
tasks=[]
if (localStorage.getItem("tasks")){
    add_completed()
}
if (localStorage.getItem("tasks")){
    tasks=localStorage.getItem("tasks")
    tasks=JSON.parse(tasks)
    add(tasks);
}
function timestamp(){
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return time;
}
document.getElementById("btn").addEventListener("click",retrieve_data)
function retrieve_data(){
    var object={}
    object["title"]=document.querySelector(".titlee").value
    object["ID"]="ID:-"+Math.floor(Math.random()*20)+1
    object["Description"]=document.querySelector(".Description").value
    object["Point"]="Point Assigned:-"+document.querySelector(".Point").value
    object["createdAt"]="Time Added:-"+timestamp();
    tasks.push(object);
    // console.log(tasks);
    // localStorage.setItem("tasks",tasks)
    add(tasks);
    location.reload()
}
function add(tasks){

    for (let i=0 ; i<tasks.length ; i++){
        var myDiv=document.querySelector(".container");
        var divClone = myDiv.cloneNode(true);
        divClone.querySelector(".number").innerHTML= tasks[i]["Point"];
        divClone.querySelector(".title").innerHTML= tasks[i]["title"];
        divClone.querySelector(".Date").innerHTML= tasks[i]["createdAt"];
        divClone.querySelector(".id").innerHTML= tasks[i]["ID"];
        divClone.querySelector(".checkmark").innerHTML= tasks[i]["Description"];
        
        document.querySelector("#append").appendChild(divClone);
        divClone.id="foo"
    } 
    localStorage.removeItem("tasks")
    localStorage.setItem("tasks",JSON.stringify(tasks))
    console.log(tasks)
    
}
function add_completed(){
    completed=localStorage.getItem("completed")
    completed=JSON.parse(completed)
    console.log(completed)
    for (let i=0 ; i<completed.length ; i++){
        var myDiv=document.querySelector(".done");
        var divClone = myDiv.cloneNode(true);
        divClone.querySelector(".gg").innerHTML=completed[i][0]["Description"];
        document.querySelector("#append_completed").appendChild(divClone);
        divClone.id="foo"
    } 
}
set=document.getElementsByClassName("check")
for (let i=0; i<set.length;i++){
    set[i].addEventListener("click",function(){
        completed=localStorage.getItem("completed")
        completed=JSON.parse(completed)
        completed.push(tasks.splice(i,1))
        localStorage.setItem("tasks",JSON.stringify(tasks))
        localStorage.setItem("completed",JSON.stringify(completed))
        location.reload()

    })
}
set1=document.getElementsByClassName("done")
for (let i=0;i<set1.length;i++){
    set1[i].addEventListener("click",function(){
        completed=localStorage.getItem("completed")
        completed=JSON.parse(completed)
        console.log(completed.length)
        completed.splice(i,1)
        console.log(completed.length)
        localStorage.setItem("completed",JSON.stringify(completed))
        location.reload()
    })}
document.querySelector(".Search").addEventListener("click",function(){
    tasks=localStorage.getItem("tasks")
    tasks=JSON.parse(tasks)
    title=document.querySelector(".bar").value
    initialiser=0
    for (let i=0; i<tasks.length;i++){
        debugger
        if (tasks[i]["title"]==title){
            alert(tasks[i]["Description"])
            initialiser=1
        }
        if ( tasks[i]["Description"]==title){
            alert(tasks[i]["title"])
            initialiser=1
        }
        
    }
    if (initialiser==0)alert("Not Found")
})

function sort(tasks){
    task={}
    sorted_arr=[]
    for (let i=0;i<tasks.length;i++){
        sorted_arr.push(tasks[i]["Point"])
    }
    sorted_arr.sort();
    sorted_arr.reverse();
    while (sorted_arr){
        for (let i=0;i<tasks.length;i++){
            if 
        }
    }
}