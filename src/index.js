let list = [];
let people= [];

window.onload = () => {
  console.log("page loaded");
  getData();

  setTimeout(buildList, 1000);

  function buildList(){
    // people.forEach(data => {
    //   const peopleContainer = document.getElementById("list-data");

    //   const peopleEl = document.createElement('div');

    //   peopleEl.classList.add('people');
    //   const innerHtml = `
    //   <div class="swPerson">
    //   <h2>${data.name}</h2>
    //   <button id="add-button">Add</button>
    //   </div>
    //   `;

    //   peopleEl.innerHTML = innerHtml;
    //   peopleContainer.appendChild(peopleEl)
    // })

    // document.querySelector('.btn').forEach(item =>{
    //   item.addEventListener('click', event =>{
    //     //get id 
    //     let id = event.target.id;
    //     console.log(id);
    //     //search in array
    //     // let p = people.find(el => el.id == id);
    //     // console.log(p);
    //   })
    // })

    let html = '';
    // order the list
    people.sort(function(a,b){
      return a.id - b.id
    })
  }
}

console.log(people);

// async function getData() {
//   await fetch('https://swapi.dev/api/people')
//   .then(resp => resp.json())
//   .then (data => {
//       list = data.results;
//       // LOOP 
//       list.forEach(starWars =>{
//           fetch(starWars.url)
//           .then (resp => resp.json())
//           .then(dataObj => {
//               people.push(dataObj);
  
//           });
//       });
  
//   });
// }


async function getData(){
  //get the list
  await fetch('https://swapi.dev/api/people')
  .then(response => {
      return response.json();
  }).then(data => {
      list = data.results;
      //Loop over the list to get each pokemon
      for(let element of list){
          fetch(element.url).then(response => {
              return response.json();
           }).then(data => {
               people.push(data);
           })
      }
  });
}

