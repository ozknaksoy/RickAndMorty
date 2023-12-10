import { get } from './request.js';
import { renderCharacterItems, openFeature } from './ui.js';

const listItems = document.querySelector('.js-list-items');
const container = document.querySelector('.container');
const feature = document.querySelectorAll('.feature');
let page = document.querySelectorAll('.page');

const URL = {
    base_url:'https://rickandmortyapi.com/api/character'
   
}

const getData = function () {
    get(URL.base_url)
        .then((datas) => {
            renderCharacterItems(datas, listItems);
        })
}
getData();

page.forEach(pageClick => {
    // console.log(pageClick.textContent);
    pageClick.addEventListener('click', () => {
        get(`${URL.base_url}/?page=${pageClick.textContent}`)
            .then((data) => {
                listItems.innerHTML = '';
                renderCharacterItems(data, listItems);

            })
    })
})  
feature.forEach(addFeature => {
    // console.log(addFeature.textContent)
    addFeature.addEventListener('click', () => {
        const featureText = addFeature.textContent;
        get(`${URL.base_url}/${featureText}`)
        .then((datas) => {
            openFeature(datas, container)
        })
        .catch((error) => {
            console.error('basarisiz', error)
        })
    })
})