(()=>{let n=[],e=[],t=[];console.log(e),window.onload=()=>{console.log("page loaded"),async function(){await fetch("https://swapi.dev/api/planets").then((n=>n.json())).then((t=>{n=t.results,n.forEach((n=>{fetch(n.url).then((n=>n.json())).then((n=>{e.push(n)}))}))}))}(),setTimeout((function(){e.forEach((n=>{const e=document.getElementById("list-data"),t=document.createElement("div");t.classList.add("planets");const a=`\n      <div class="swPlanet">\n      <img src="/docs/images/${n.name}.jpeg" alt="${n.name}">\n      <div class="card">\n      <h2>${n.name}</h2>\n      <a href="#" id="${n.url}" class="btn btn-primary ">Add to list</a>\n      </div>\n      </div>\n\n      `;t.innerHTML=a,e.appendChild(t)})),document.querySelectorAll(".btn").forEach((n=>{n.addEventListener("click",(n=>{let a=n.target.id,o=e.find((n=>n.url==a));t.push(o),function(n){n.forEach((n=>{fetch("https://web2-starwars-api.herokuapp.com/planets",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify({name:n.name,population:n.population,terrain:n.terrain})}).then((n=>n.json())).then((async n=>{console.log("succes",n)}))}))}(t)}))}))}),1e3)}})();