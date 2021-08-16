let div = document.createElement('div');
let divContainer = document.querySelector('.container');
let button = document.querySelector('button');
let x = 16;
let tenPercent = true;
let tenR = tenG = tenB = 0;

const randomColor = () => {
        let r = Math.floor( Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b})`;
}


const buildGrid = () =>{
let color = randomColor();
for(let i = 0; i < (x * x); i++){
 let div = document.createElement('div');
    divContainer.appendChild(div);
    div.setAttribute('id', `item-${i.toString()}`);
    div.classList.add('items');
    div.addEventListener('mouseover', function(){
        if(div.style.backgroundColor === divContainer.style.backgroundColor){
            div.style.backgroundColor = color;

        }else{
            
            let c = div.style.backgroundColor;
            let rgb = c.match(/\d+/g);
            let r = rgb[0];
            let g = rgb[1];
            let b = rgb[2];
            let alpha = rgb[3];
            if(tenPercent){
            tenR =  r*10/100;
            tenG =  g*10/100;
            tenB =  b*10/100;
            tenPercent = false;
            }
            r -= tenR;
            g -= tenG;
            b -= tenB;
                        
           div.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
           
        }
 });
}
}
buildGrid();

const reset = () => {
     tenPercent = true;
     tenR = tenG = tenB = 0;
    for(let i = 0; i < (x * x); i++){
        let element = document.querySelector(`#item-${i}`);
        divContainer.removeChild(element);
    }
    while(true){
    x = Number(prompt("Type a number of square rows and colummns do you want to see!"));
    if(x > 1 && x <= 100){
        divContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        divContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;
        buildGrid();
        break;
    }else{
        alert('Erro! Type a number in 2 till 100!');
    }
    }
    
}
