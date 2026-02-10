const input=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const list=document.getElementById("list");

const initialItems=[
    {text:"First item",done:true},
    {text:"Second item",done:false},
    {text:"Third item",done:false}
];

function trashIcon(){
    return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v10h-2V9zm4 0h2v10h-2V9zM7 9h2v10H7V9zm-1 12h12a2 2 0 0 0 2-2V7H4v12a2 2 0 0 0 2 2z"/>
    </svg>
  `;
}

function createTodoItem(text,done=false){
    const li=document.createElement("li");
    li.className="item"+(done?" done":"");

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.className="item__check";
    checkbox.checked=done;

    const span=document.createElement("span");
    span.className="item__text";
    span.textContent=text;

    const delBtn=document.createElement("button");
    delBtn.type="button";
    delBtn.className="item__del";
    delBtn.title="Delete";
    delBtn.setAttribute("aria-label","Delete item");
    delBtn.innerHTML=trashIcon();

    checkbox.addEventListener("change",()=>{
        li.classList.toggle("done",checkbox.checked);
    });

    delBtn.addEventListener("click",()=>{
        list.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    return li;
}

function addTask(){
    const text=input.value.trim();
    if(!text){input.focus();return;}
    list.appendChild(createTodoItem(text,false));
    input.value="";
    input.focus();
}

addBtn.addEventListener("click",addTask);
input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter") addTask();
});

initialItems.forEach(i=>list.appendChild(createTodoItem(i.text,i.done)));
