import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
// Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
// Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. Użyj CDN serwisu jsdelivr i dodaj do projektu linki do minimalizowania (.min) plików biblioteki.
// Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z dokumentacją i przykładami.
// Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.

// Change code below this line
const qs = (selector) => document.querySelector(selector);
const galleryElements = qs(".gallery");

const creatingItems = (item) => {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-photo="${original}"
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

const onClick = (event) => {
	event.preventDefault();

	if (event.target.classList.contains("gallery")) return;
	const source = event.target.dataset.photo;
	const instance = basicLightbox.create(
		`<img src="${source}" width="900" height="500">`,
	);

	instance.show();

	galleryElements.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			instance.close();
		}
	});
};

galleryElements.addEventListener("click", onClick);

// const onClick = (e) => {
// 	e.preventDefault();

// 	if (e.target.classList.contains("gallery")) return;
// 	const source = e.target.dataset.photo;

// 	const instance = basicLightbox.create(`
//     <img src="${source}"width="900" height="500">`);

// 	instance.show();
// };

// galleryElements.addEventListener("click", onClick);
