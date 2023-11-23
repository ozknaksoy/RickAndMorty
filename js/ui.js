export const renderCharacterItems = function ({ results: characters }, element) {


  characters.forEach(character => {
    element.innerHTML += `
    <div class="card list-item">
    <div class="card-header">
    <img src="${character.image}" alt="Character">
    </div>
    <div class="card-body">
    <h2>Character: <a href="#" class="feature">${character.name}</a></h2>
    <span>Species: ${character.species}</span>
    <span>Location: ${character.location.name}</span>
    </div>
    </div>
    `
    
  });
 
}