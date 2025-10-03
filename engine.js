const allButtons=document.querySelectorAll('.button')
const body=document.querySelector("body") 

allButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // if(e.target.id==='grey'){
        //     body.style.backgroundColor=e.target.id
        // }
        // if(e.target.id==='white'){
        //     body.style.backgroundColor=e.target.id
        // }
        // if(e.target.id==='blue'){
        //     body.style.backgroundColor=e.target.id
        // }
        // if(e.target.id==='yellow'){
        //     body.style.backgroundColor=e.target.id
        // }
        body.style.backgroundColor=e.target.id
    });
});

const randomPicker=document.querySelector('random');
function getRandomColor(){
    const letters='0123456789abcdef';
    let color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
random.addEventListener('click',()=>{
    const color=getRandomColor();
    body.style.backgroundColor=color;
    random.style.backgroundColor=color;
});