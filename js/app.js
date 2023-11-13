import { get } from "./request.js";
import { renderCharacterItems } from "./ui.js";

const listItems = document.querySelector('.js-list-items');
const BASE_URL = "https://rickandmortyapi.com/api/character";


let page = document.querySelectorAll(".page");


page.forEach(pageClick => {
    // console.log(pageClick.textContent);
    pageClick.addEventListener('click', () => {
        get(`${BASE_URL}/?page=${pageClick.textContent}`)
            .then((data) => {

                renderCharacterItems(data, listItems);
            })
    })
})



const getData = function () {
    get(BASE_URL)
        .then((datas) => {
            renderCharacterItems(datas, listItems);
        })
}
getData();





