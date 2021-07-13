window.addEventListener('load', ()=>{
    const requestURL= 'js/temples2.json'
    fetch(requestURL)
    .then((response)=>{
        return response.json();
    })
    .then((jsonObject)=>{
        console.log(jsonObject);
        Object.entries(jsonObject).forEach(([key,temple])=>{
            buildTempleCard(temple);
        });
    });
});
function buildTempleCard(temple) {
    console.log(temple);
    let card= document.createElement('section');
    card.classList.add('temple');
    card.innerHTML= `<h2>${temple.name}</h2>
                    <img src='${temple.imageurl}' loading='lazy'>
                    <p> <b>Services: </b>${temple.services}</p>
                    <p> <b>Closures: </b>${temple.closures}</p>`;
    document.querySelector('#temples').appendChild(card);
}