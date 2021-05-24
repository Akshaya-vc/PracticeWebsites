let select = document.querySelector('#theme')
const html = document.querySelector('html')
let box = document.getElementsByClassName('box')
let toptxt = document.querySelector('h4');
toptxt.style.color = 'white';
html.style.backgroundColor = '#1A1C1D';

function update(bg){
    
    if(bg === 'black'){
        for(let i = 0; i<box.length;i++){
        box[i].classList.remove('box1')
        box[i].classList.add('box2')      
    }
    html.style.backgroundColor = '#1A1C1D';
    toptxt.style.color = 'white';
    console.log("if")
    }
    else{
        for(let i = 0; i<box.length;i++){
            box[i].classList.remove('box2')
            box[i].classList.add('box1')   
        }
        html.style.backgroundColor = 'white';
        toptxt.style.color = 'black'; 
        console.log("else")
    }
}

select.onchange = function(){
    (select.value === 'black') ? update('black'): update('white');
}