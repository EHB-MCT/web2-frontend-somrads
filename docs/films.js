(()=>{let t=[],e=[],n=[];console.log(e),window.onload=()=>{console.log("page loaded"),async function(){await fetch("https://swapi.dev/api/films").then((t=>t.json())).then((n=>{t=n.results,t.forEach((t=>{fetch(t.url).then((t=>t.json())).then((t=>{e.push(t)}))}))}))}(),setTimeout((function(){e.forEach((t=>{const e=document.getElementById("list-data"),n=document.createElement("div");n.classList.add("films");const s=`\n      <div class="swFilm">\n      <img src="/docs/images/${t.title}.jpeg" alt="${t.title}">\n      <div class="card">\n      <h2>${t.title}</h2>\n      <a href="#" id="${t.url}" class="btn btn-primary ">Add to list</a>\n      </div>\n      </div>\n      `;n.innerHTML=s,e.appendChild(n)})),document.querySelectorAll(".btn").forEach((t=>{t.addEventListener("click",(t=>{let s=t.target.id,i=e.find((t=>t.url==s));n.push(i),function(t){t.forEach((t=>{fetch("https://web2-starwars-api.herokuapp.com/films",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify({title:t.title,episode_id:t.episode_id})}).then((t=>t.json())).then((async t=>{console.log("succes",t)}))}))}(n)}))}))}),1e3)}})();