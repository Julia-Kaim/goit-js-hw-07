import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
// Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
// Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. Użyj CDN serwisu jsdelivr i dodaj do projektu linki do minimalizowania (.min) plików biblioteki.
// Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z dokumentacją i przykładami.
// Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.

// Change code below this line
const qs = (selector) => 
	document.querySelector(selector);
;
const galleryElements = qs(".gallery");

const creatingItems = (item) => {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
		})
		.join("");
};
console.log(galleryItems);
const imagesMarkup = creatingItems(galleryItems);
galleryElements.insertAdjacentHTML("beforeend", imagesMarkup);

// const qs = (s) => 
// 	document.querySelector(s);
// ;

// const galleryContainerEl = qs(".gallery");
// const imagesMarkup = createItemsMarkup(galleryItems);
// galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

// function createItemsMarkup(item) {
// 	return galleryItems
// 		.map(({ preview, original, description }) => {
// 			return `<div class="gallery__item">
//       <a class="gallery__link" href="${original.value}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>`;
// 		})
// 		.join("");
// }
// const onContainerClick = (e) => {
// 	e.preventDefault();

// 	if (e.target.classList.contains("gallery")) return;
// 	const source = e.target.dataset.source;

// 	const instance = basicLightbox.create(`
//     <img src="${source}"width="800" height="600">`);

// 	instance.show();
// };

// galleryContainerEl.addEventListener("click", onContainerClick);
