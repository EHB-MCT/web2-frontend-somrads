let list = [];
let people= [];

window.onload = () => {
  console.log("page loaded");
  getData();

  setTimeout(buildList, 1000);

  function buildList(){
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

    for (let p of people) {
      html += 
     ` <div class="swPerson">
        <h2>${p.name}</h2>
         <button id="add-button">Add</button>
         </div>`
    }
    document.getElementById('list-data').innerHTML = html;
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

