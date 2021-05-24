const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('.contactresult'); 
const input = document.querySelector('.contact input');
const contactbtn = document.querySelector('.contact button');
contactbtn.addEventListener("click",function(){
  let givenname = input.value.toLowerCase();
  input.value = '';
  for(let i=0; i<contacts.length;i++){
    if(contacts[i].toLowerCase().indexOf(givenname)!==-1){
      para.innerHTML = `${contacts[i].slice(0,contacts[i].indexOf(":"))}'s Contact is ${contacts[i].slice(contacts[i].indexOf(":")+1)}`;
      break;
    }
    else{
      console.log("not there");
    }
  }
});