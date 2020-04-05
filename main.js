let size = 10;
let orderElement = 1;


const init = () =>{
    /*Button Create*/
const btn = document.createElement('button');
btn.innerText = "Would you mind clicking me";
btn.style.position = "fixed";
btn.style.top = '50px';
btn.style.left = '45%';
btn.style.paddingTop = '10px';
btn.style.paddingBottom = '10px';
btn.style.paddingInlineStart = '10px';
btn.style.paddingInlineEnd = '10px';
btn.style.fontWeight = 800;
document.body.appendChild(btn);
btn.addEventListener('click', createLiElement);

/*Button Remove - does not work yet*/
// const btnRemove = document.createElement('button');
// btnRemove.innerText = "Could you remove me, please?";

// btnRemove.style.position = "fixed";
// btnRemove.style.top = '150px';
// btnRemove.style.left = '45%';
// btnRemove.style.paddingTop = '10px';
// btnRemove.style.paddingBottom = '10px';
// btnRemove.style.paddingInlineStart = '10px';
// btnRemove.style.paddingInlineEnd = '10px';
// btnRemove.style.marginTop = "15px";
// btnRemove.style.fontWeight = 800;
// document.body.appendChild(btnRemove);
// btnRemove.addEventListener('click', removeLiElement);

}

const createLiElement = () =>{
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    
for( let i = 0; i<10; i++){
   
let li = document.createElement('li');
li.style.listStyle = "none";
li.style.fontSize = size + "px";
size++;
li.innerText = "Element " + orderElement;
orderElement++;
ul.appendChild(li)


}

}


init()
