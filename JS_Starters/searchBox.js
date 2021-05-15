document.addEventListener("DOMContentLoaded",function(){
    let searchbtn = document.querySelector('#searchbtn');
    let searchInput = document.querySelector('#searchbox');
    let list = document.querySelector('.output ul')
    let count = 0;
    searchInput.focus();
    let myHistory = [];
    searchbtn.onclick = function(){
        if(myHistory.length>4){
            list.removeChild(list.childNodes[4])
        }
        let val = searchInput.value;
        searchInput.value = '';
        searchInput.focus();
        if (val !== ""){
            myHistory.push(val);
            let listElement = document.createElement('li');
            listElement.textContent = myHistory[count];
            list.prepend(listElement);
            count++;
        }
    }
})