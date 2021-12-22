let list = [];
let people= [];

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
      <h2>${data.name}</h2>

      <a href="#" id="${data.url}" class="btn btn-primary ">Add to list</a>
      </div>
      `;
  
      peopleEl.innerHTML = innerHtml;
      peopleContainer.appendChild(peopleEl)
    })

    document.querySelectorAll('.btn').forEach(item =>{
      item.addEventListener('click', event =>{
        //get id 
        let id = event.target.url;
        //search in array
        let p = people.find(el => el.id == id);
        console.log(p);
    
      })
    })
  }
}


