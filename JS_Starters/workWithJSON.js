const header = document.querySelector('.workwithJSON header');
const section = document.querySelector('.workwithJSON section');

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
//get this url

request.responseType = 'json';
//of return type json

request.send();
//send it

request.onload = function () {
  const superHeros = request.response;
  populateHeader(superHeros);
  showHeroes(superHeros);
}


function populateHeader(obj) {
  const sqName = obj["squadName"];
  let title = document.createElement('h2');
  title.textContent = sqName;
  header.appendChild(title);
  let subtitle = document.createElement('p');
  subtitle.textContent = `Hometown: ${obj["homeTown"]} // Formed ${obj["formed"]}`
  header.appendChild(subtitle);
}

function showHeroes(obj) {

  for (let i in obj["members"]) {
    let member = document.createElement('article');
    let membertitle = document.createElement('h3');
    let name = document.createElement('p');
    let age = document.createElement('p');
    let superpowers = document.createElement('p');
    superpowers.textContent = "Superpowers";
    let list = document.createElement('ul');
    
    membertitle.textContent = obj["members"][i]["name"];
    name.textContent = obj["members"][i]["secretIdentity"];
    age.textContent = obj["members"][i]["age"];

    for (let j in obj["members"][i]["powers"]) {
      let listEl = document.createElement('li');
      listEl.textContent = obj["members"][i]["powers"][j];
      list.appendChild(listEl);
      console.log(obj["members"][i]["powers"][j])
    }
    section.appendChild(member);
    member.append(membertitle, name, age,superpowers,list);

  }
}