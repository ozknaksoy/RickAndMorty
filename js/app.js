import { get } from "./request.js";
import { renderCharacterItems } from "./ui.js";

const listItems = document.querySelector('.js-list-items');
const BASE_URL = "https://rickandmortyapi.com/api/character";
const BASE_URL2 = "https://rickandmortyapi.com/api/character/?page=2";

let page = document.querySelectorAll(".page");

page.forEach(pageClick => {
    pageClick.addEventListener('click', (event) => {
        // let change = event.target.tagName;
     
    })
})

const rickAndMorty = (function () {
    const getData = function () {
        get(BASE_URL)
            .then((datas) => {
                renderCharacterItems(datas, listItems);
            })
    }

    const getData2 = function () {
        get(BASE_URL2)
            .then((datas) => {
                renderCharacterItems(datas, listItems);
            })
    }

    return {
        init: function () {
            getData();
            getData2();
        }
    };
})();

rickAndMorty.init();


