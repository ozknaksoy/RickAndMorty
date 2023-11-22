import { get } from './request.js';
import { renderCharacterItems } from './ui.js';
import { openFeature } from './open-feature.js';


const listItems = document.querySelector('.js-list-items');
let page = document.querySelectorAll('.page');
// let feature = document.querySelectorAll('.feature');
let container = document.querySelector('.container');


const BASE_URL = 'https://rickandmortyapi.com/api/character';

  


const getData = function () {
    get(BASE_URL)
    .then((datas) => {
        renderCharacterItems(datas, listItems);
    })
}
getData();


feature.forEach(featureElement =>{
    console.log('asadas')
});



page.forEach(pageClick => {
    // console.log(pageClick.textContent);
    pageClick.addEventListener('click', () => {
        get(`${BASE_URL}/?page=${pageClick.textContent}`)
        .then((data) => {
            listItems.innerHTML = '';
            renderCharacterItems(data, listItems);
            
        })
    })
})





