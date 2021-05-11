/*console.log("YOU ARE INSIDE CONSOLE");
document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
      if (count%2==0){
        let para = document.createElement(tag1);
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
        console.log("satisfies");
      }
      
      else{
        let para = document.createElement(tag2);
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
      }
      
      count++;
    }
    let tag1 = 'h3'
    let tag2 = 'p'
    const buttons = document.querySelectorAll('.divcon');
    count = 0
    console.log(buttons)
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
  });*/
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('after').style.display = "none";
    function submit(){
        document.getElementById('after').style.display = "block";
        document.getElementById('all').style.display = 'block';
        let n = document.getElementById('input').value;  
        color = 'red';
        array.push(n);
          
        if(count<10){
            if(n>ran){
                message = "Wrong!"       
                document.getElementById('mag').textContent = "Last guess was too high!";
            }
            else if(n<ran){
                message = "Wrong!";
                document.getElementById('mag').textContent = "Last guess was too low!";
    
            }
            else{
                message = "Congratulations! You got it right";
                color = 'green'
                refresh();
            }  
        }
        else{
            message = "game over"
            refresh();     
        }
        count++;
        console.log("count value:",count)
        document.getElementById("arrPrint").innerHTML = array;
        document.getElementById('result').textContent = message;
        document.getElementById('result').style.backgroundColor = color;
    }
    function refresh(){
        ran = getRandomInt(1,100);
        document.getElementById('all').style.display = 'none';
        array = []
        count = 0;
        
    }
    let count = 0;
    let array = [];
    let message = null; 
    let color = 'red';
    const buttons = document.querySelectorAll('.sub');
    const newgame = document.querySelectorAll('.newgame');
    console.log(buttons);
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    let ran = getRandomInt(1,100);
    console.log(ran)
    function over(){
        document.getElementById("arrPrint").innerHTML = array;
        document.getElementById('after').style.display = "none";
        refresh()
    }
    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', submit);
    }
    for(let i = 0; i < newgame.length ; i++) {
        newgame[i].addEventListener('click', over);
    }
})

