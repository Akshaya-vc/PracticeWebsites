document.addEventListener("DOMContentLoaded",function(){

    let monthEl = document.querySelector('#monthSelector');
    
    //console.log("month is",monthEl.value)
    //onchange eventlis
    let dayscount = 0;
    let list = document.querySelector('#days'); 
    for(let i = 1; i<=31 ; i++){
        let pEl = document.createElement('p');
        list.appendChild(pEl);
        pEl.innerHTML = i;
    }
    //onchange fun
    function monthChanger(){

        let x = monthEl.selectedIndex;   //index
        let monthVal =  Number(document.getElementById("monthSelector")[x].value); //month number

        list.innerHTML = '';
        console.log("monthvak",monthVal)
        if((monthVal === 1)||(monthVal === 3)||(monthVal === 5)||(monthVal === 7)||(monthVal === 8)||(monthVal === 10)||(monthVal === 12)){
            dayscount = 31;
        }
        else if((monthVal === 4)||(monthVal === 6)||(monthVal === 9)||(monthVal === 11)){
            dayscount = 30;
        }
        else{
            dayscount = 28;
        }
        for(let i = 1; i<=dayscount ; i++){
            let pEl = document.createElement('p');
            list.appendChild(pEl);
            pEl.innerHTML = i;
        }
        
        
       
        console.log("changed month is",monthEl.value); 
        console.log(document.getElementById("monthSelector")[x].innerHTML)
        console.log(x)
    }

    monthEl.addEventListener("change",monthChanger);

    //Displaying month in #month h2
    //adding 31 / 30 / 28 span el to #days

    //let month = document.querySelector('')
});


