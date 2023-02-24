import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii. Użyj gotowego kodu z zadania pierwszego.
// Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs. Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js i simple-lightbox.min.css.
// Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich do div.gallery. Aby to zrobić, zapoznaj się z dokumentacją SimpleLightbox - najpierw sekcje «Usage» i «Markup».
// W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów do obrazków z atrybutu alt. Niech podpis będzie pod spodem i pojawia się po 250 milisekundach po otwarciu obrazka.

const qs = (selector) => document.querySelector(selector);
const galleryElements = qs(".gallery");

const itemsMarkup = (item) => {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>
     
    </ul>`;
		})
		.join("");
};

const imagesMarkup = itemsMarkup(galleryItems);
galleryElements.insertAdjacentHTML("beforeend", imagesMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	captionType: "alt",
});
