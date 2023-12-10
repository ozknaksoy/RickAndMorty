
export const renderCharacterItems = function ({ results: characters }, listItems) {
  
  characters.forEach((data) => {
    if (listItems !== null) {
      // item null değilse işlemleri yap
      // console.log(listItems);
    listItems.innerHTML += getCharacters(data)
    }
  })
}
const getCharacters = function (data) {

  const { image, name, species, location } = data
  const template = `
      <div class="card list-item">
        <div class="card-header">
          <img
          src="${image}"
         alt="Character">
        </div>
        <div class="card-body">
          <h2>Character: <a href="/character.html" class="feature">${name}</a></h2>
          <span>Species: ${species}</span>
          <span>Location: ${location.name}</span>
       </div>
      </div>
 `;
  return template;
}

export const openFeature = function (datas, container) {
  container.innerHTML = getFeature(datas);
}
const getFeature = function (datas, event) {
  event.preventDefault()

  const { image, name, gender, episode, species, status, location } = datas;
  const template = `
      <div class="character-container">
        <div class="character-images">
          <img src="${image}" alt="Character">
        </div>
        <div class="character-feature">
          <h2>Character:${name}</a></h2>
          <span>Gender: ${gender}</span>
          <span>Episode: ${episode}</span>
          <span>Species: ${species}</span>
          <span>Status: ${status}</span>
          <span>Location: ${location.name}</span>
        </div>
     </div>
      `;
  return template;
}