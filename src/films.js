let list = [];
let films= [];
let favFilms = [];

// fetch api
async function getData() {
  await fetch('https://swapi.dev/api/films')
  .then(resp => resp.json())
  .then (data => {
      list = data.results;
      // LOOP 
      list.forEach(starWars =>{
          fetch(starWars.url)
          .then (resp => resp.json())
          .then(dataObj => {
              films.push(dataObj);
  
          });
      });
  });
}

console.log(films);

window.onload = () => {
  console.log("page loaded");
  getData();

  setTimeout(buildList, 1000);

  function buildList(){
    films.forEach(data => {
      const filmsContainer = document.getElementById("list-data");

      const filmsEl = document.createElement('div');

      filmsEl.classList.add('films');
      const innerHtml = `
      <div class="swFilm">
      <img src="/docs/images/${data.title}.jpeg" alt="${data.title}">
      <div class="card">
      <h2>${data.title}</h2>
      <a href="#" id="${data.url}" class="btn btn-primary ">Add to list</a>
      </div>
      </div>
      `;
      
     filmsEl.innerHTML = innerHtml;
      filmsContainer.appendChild(filmsEl)
    })

    document.querySelectorAll('.btn').forEach(item =>{
      item.addEventListener('click', event =>{
        //get url of target
        let id = event.target.id;
        //search in array based on url
        let p = films.find(el => el.url == id);
        favFilms.push(p);
        postData(favFilms)
      })
    })
  }
}

function postData(favFilms){
  const url = "https://web2-starwars-api.herokuapp.com/films"
 //post data
favFilms.forEach(element => {
  fetch(url, {
    method: "POST",
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: element.title,
      episode_id: element.episode_id,
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


