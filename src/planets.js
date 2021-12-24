let list = [];
let planets= [];
let favPlanets = [];

// fetch api
async function getData() {
  await fetch('https://swapi.dev/api/planets')
  .then(resp => resp.json())
  .then (data => {
      list = data.results;
      // LOOP 
      list.forEach(starWars =>{
          fetch(starWars.url)
          .then (resp => resp.json())
          .then(dataObj => {
              planets.push(dataObj);
  
          });
      });
  });
}

console.log(planets);

window.onload = () => {
  console.log("page loaded");
  getData();

  setTimeout(buildList, 1000);

  function buildList(){
    planets.forEach(data => {
      const planetsContainer = document.getElementById("list-data");

      const planetsEl = document.createElement('div');

      planetsEl.classList.add('planets');
      const innerHtml = `
      <div class="swPlanet">
      <img src="/docs/images/${data.name}.jpeg" alt="${data.name}">
      <h2>${data.name}</h2>
      <a href="#" id="${data.url}" class="btn btn-primary ">Add to list</a>
      </div>
      `;
      
     planetsEl.innerHTML = innerHtml;
      planetsContainer.appendChild(planetsEl)
    })

    document.querySelectorAll('.btn').forEach(item =>{
      item.addEventListener('click', event =>{
        //get url of target
        let id = event.target.id;
        //search in array based on url
        let p = planets.find(el => el.url == id);
        favPlanets.push(p);
        postData(favPlanets)
      })
    })
  }
}

function postData(favPlanets){
  const url = "https://web2-starwars-api.herokuapp.com/planets"
 //post data
favPlanets.forEach(element => {
  fetch(url, {
    method: "POST",
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: element.name,
      population: element.population,
      terrain: element.terrain
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