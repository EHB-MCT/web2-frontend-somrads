window.onload = function () {
  getData();
}

 async function getData(){
  await fetch(`https://swapi.dev/api/people`)
  .then(resp => resp.json())
  .then(data => {
  console.log(data.results);
  showData(data)
  })
}

function showData(data){
  data.results.forEach(data => {
    let htmlString = `
  <h1>Title: ${data.name}</h1>
  <h2>Episode ${data.height}</h2>
  `
  document.getElementById('people').innerHTML= htmlString;
  });
  
}




