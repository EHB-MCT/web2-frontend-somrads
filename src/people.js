let list = [];
let people= [];
let favPeople = [];

// fetch api
async function getData() {
  await fetch('https://swapi.dev/api/people')
  .then(resp => resp.json())
  .then (data => {
      list = data.results;
      // LOOP 
      list.forEach(starWars =>{
          fetch(starWars.url)
          .then (resp => resp.json())
          .then(dataObj => {
              people.push(dataObj);
  
          });
      });
  
  });
}
console.log(people);

window.onload = () => {
  console.log("page loaded");
  getData();

  setTimeout(buildList, 1000);

  function buildList(){
    people.forEach(data => {
      const peopleContainer = document.getElementById("list-data");

      const peopleEl = document.createElement('div');

      peopleEl.classList.add('people');
      const innerHtml = `
      <div class="swPerson">
      <img src="/docs/images/${data.name}.jpeg" alt="${data.name}">
      <h2>${data.name}</h2>
      <a href="#" id="${data.url}" class="btn btn-primary ">Add to list</a>
      </div>
      `;
      
      peopleEl.innerHTML = innerHtml;
      peopleContainer.appendChild(peopleEl)
    })

    document.querySelectorAll('.btn').forEach(item =>{
      item.addEventListener('click', event =>{
        //get url of target
        let id = event.target.id;
        //search in array based on url
        let p = people.find(el => el.url == id);
        favPeople.push(p);
        postData(favPeople)
      })
    })
  }
}

function postData(favPeople){
  const url = "https://web2-starwars-api.herokuapp.com/people"
 //post data
favPeople.forEach(element => {
  fetch(url, {
    method: "POST",
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: element.name,
      birthyear: element.birthyear,
      species: element.species,
      gender: element.gender
    })
  })
 

  .then(resp => {
    return resp.json();
  })
  .then(async data => {
    console.log('succes', data);
  })
  
});
}