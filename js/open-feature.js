export const openFeature = function (character) {

    character.forEach(propertys => {
        let container = document.querySelector('container');
        container.innnerHTML = `
        <div class="character-container">
        <div class="character-images">
            <img src="${propertys.image}" alt="Character">
        </div>
        <div class="character-feature">
            <h2>Character:${propertys.name}</a></h2>
            <span>Gender: ${propertys.name}</span>
            <span>Episode: ${propertys.name}</span>
            <span>Species: ${propertys.species}</span>
            <span>Status: ${propertys.status}</span>
            <span>Location: ${propertys.location.name}</span>
        </div>
    </div>
        `
    });

}