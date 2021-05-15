document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('after').style.display = "none";
    function submit(){
        cur.focus();
        document.getElementById('after').style.display = "block";
        document.getElementById('all').style.display = 'block';

        let n = Number(document.getElementById('input').value);
        document.getElementById('input').value = ''
        color = 'red';
        console.log(typeof n)
        if(n!=''){
            array.push(n);
            count++;
        }
          
        if(count<10){
            if(n>ran){
                message = "Wrong!"       
                document.getElementById('mag').textContent = "Last guess was too high!";
            }
            else if(n<ran){
                message = "Wrong!";
                document.getElementById('mag').textContent = "Last guess was too low!";
    
            }
            else if(n===ran){
                message = "Congratulations! You got it right";
                color = 'green'

                refresh();
            }  
            else{
                message = "Careful! Wrong input"
            }
        }
        else{
            message = "game over"
            refresh();     
        }
        
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
    let cur = document.getElementById('input')
    //cur.focus();
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

