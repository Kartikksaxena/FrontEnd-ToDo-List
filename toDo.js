const addBtn = document.querySelector("#addTodoBtn");
var BoxNo= 0;
const makeDiv=()=>{
    const texts = document.querySelector("#newTodoInput");
    if(texts.value != ""){
        const  lists = document.querySelector("#todoList");
        const newelem = document.createElement("LI");
        newelem.id = ++BoxNo;
        newelem.innerHTML = texts.value;
        lists.append(newelem);
        texts.value="";
    }
    // console.log(newelem,"Kartik");
};
addBtn.addEventListener("click",makeDiv);