let list = [];
let people= [];

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
      
      <h2>${data.name}</h2>
      <h2>${data.height}</h2>
      `;

      peopleEl.innerHTML = innerHtml;
      peopleContainer.appendChild(peopleEl)
    })
  }
}

async function getData() {
  await fetch('https://swapi.dev/api/people/')
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