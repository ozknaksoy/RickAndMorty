import { get } from "./request.js";
import { renderCharacterItems, openFeature } from "./ui.js";

document.addEventListener("DOMContentLoaded", async function () {
  const listItems = document.querySelector(".js-list-items");
  let page = document.querySelectorAll(".page");
  const characterListGeneral = document.querySelector(
    ".character-list-general"
  );
  const characterBody = document.querySelector(".character-body");
  const body = document.querySelector("body");

  const URL = {
    base_url: "https://rickandmortyapi.com/api/character",
  };

  const getBackButton = () => {
    const backButton = document.getElementsByClassName("back-button");

    return backButton;
  };

  console.log("12345");

  const updateCharacterNameSpans = () => {
    const characterNameSpans =
      document.getElementsByClassName("character-name");
    let characterNameSpansArray = [...characterNameSpans];
    characterNameSpansArray.forEach((characterNameSpan) => {
      characterNameSpan.addEventListener("click", () => {
        get(`${URL.base_url}/${characterNameSpan.getAttribute("id")}`)
          .then((characterDetailData) => {
            openFeature(characterDetailData, characterBody);
            characterBody.style.display = "block";
            body.style.overflow = "hidden";
            const backButton = getBackButton();
            backButton[0].addEventListener("click", () => {
              body.style.overflow = "scroll";
              characterBody.style.display = "none";
            });
          })
          .catch((error) => {
            console.error("invalid", error);
          });
      });
    });
  };

  const fetchCharactersAndRender = async function () {
    const characterData = await get(URL.base_url);

    renderCharacterItems(characterData, listItems);

    updateCharacterNameSpans();
  };
  await fetchCharactersAndRender();

  page.forEach((pageClick) => {
    pageClick.addEventListener("click", async (e) => {
      e.preventDefault();
      await get(`${URL.base_url}/?page=${pageClick.textContent}`).then(
        (data) => {
          listItems.innerHTML = "";
          renderCharacterItems(data, listItems);
          updateCharacterNameSpans();
        }
      );
    });
  });
});
