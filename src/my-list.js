window.onload = () => {
  console.log("loaded");
  const getMyData = async () => {
    const url = `https://web2-starwars-api.herokuapp.com/people`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    createData(data);
  };

  getMyData();

  function createData(data) {
    let allObjectsInnerHtml;
    data.forEach(element => {
    const allObjects = document.getElementById("list-data");
    const allObjectsEl = document.createElement('div');
    allObjectsEl.classList.add('my-list');
     allObjectsInnerHtml = `
    <h3 class="name">${element.name}</h3>
   

    `;  
    allObjectsEl.innerHTML = allObjectsInnerHtml;
    allObjects.appendChild(allObjectsEl);
    });
  }
};