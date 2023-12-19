export const renderCharacterItems = function (
  { results: characters },
  listItems
) {
  characters.forEach(({ image, name, id }) => {
    listItems.innerHTML += `
      <div class="card list-item">
        <div class="card-header">
          <img src="${image}" alt="Character">
        </div>
        <div class="card-body">
          <h2>Character: <a id="${id}" class="character-name">${name}</a></h2>
        </div>
      </div>
    `;
  });
};

export const openFeature = function (datas, characterBody) {
  characterBody.innerHTML = getFeature(datas);
};

const getFeature = function (datas) {
  const { image, name, gender, origin, species, status, location } = datas;
  const template = `
    <div class="character-grid">
      <div class="character-container">
        <div class="character-images">
        <img src="${image}" alt="Character">
        <a class ="back-button"><i class="fa-solid fa-arrow-left-long"></i></a>
        </div>
        <div class="character-feature">
          <h2>Character:<a>${name}</a></h2>
          <span>Gender: ${gender}</span>
          <span>Planet: ${origin.name}</span>
          <span>Species: ${species}</span>
          <span>Status: ${status}</span>
          <span>Location: ${location.name}</span>
        </div>
      </div>
    </div>
  `;
  return template;
};
