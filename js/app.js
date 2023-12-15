import { get } from './request.js';
import { renderCharacterItems, openFeature } from './ui.js';

document.addEventListener('DOMContentLoaded', async function () {
    const listItems = document.querySelector('.js-list-items');
    const characterNameSpans = document.getElementsByClassName('character-name');
    let page = document.querySelectorAll('.page');
    const characterListGeneral = document.querySelector('.character-list-general');
    const characterBody = document.querySelector('.character-body');

    const URL = {
        base_url: 'https://rickandmortyapi.com/api/character'
    }

    const fetchCharactersAndRender = async function () {
        const characterData = await get(URL.base_url);
        renderCharacterItems(characterData, listItems);
    }
    await fetchCharactersAndRender();

    page.forEach(pageClick => {
        // console.log(pageClick.textContent);
        pageClick.addEventListener('click', async (e) => {
            e.preventDefault()
           await get(`${URL.base_url}/?page=${pageClick.textContent}`)
                .then((data) => {
                    listItems.innerHTML = '';
                    renderCharacterItems(data, listItems);
                })
        })
    })


    const characterNameSpansArray = [...characterNameSpans];
    characterNameSpansArray.forEach((characterNameSpan) => {
        // console.log({ id: characterNameSpan.getAttribute('id') })
        characterNameSpan.addEventListener('click', () => {
            get(`${URL.base_url}/${characterNameSpan.getAttribute('id')}`)
                .then((characterDetailData) => {
                    console.log({ characterDetailData })
                    characterListGeneral.style.display = 'none';
                    openFeature(characterDetailData, characterBody);
                    characterBody.style.display = 'block';
                })
                .catch((error) => {
                    console.error('basarisiz', error)
                })
        })
    })

})
