// fetch les projets dans une fonction asynchrone ( le reste de la page fonctionne en attendant le fetch )
async function genererProjet() {
  const workFetch = await fetch("http://localhost:5678/api/works");
  //convertir en json la réponse et l'attribuer à works
  const works = await workFetch.json();
  createGallery(works);
}

//créer la fonction qui intégrera les cards
function createGallery(works) {
  // créer une boucle qui parcoure la liste des réponses de "works"
  for (let i = 0; i < works.length; i++) {
    //intégrer toute la liste des travaux dans "selectedWorks"
    const selectedWorks = works[i];
    const sectionGallery = document.querySelector(".gallery");
    //créer la card HTML
    const worksElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    const figcaptionElement = document.createElement("figcaption");
    // intégration des img et text
    imageElement.src = selectedWorks.imageUrl;
    imageElement.alt = selectedWorks.title;
    figcaptionElement.innerText = selectedWorks.title;
    // ajout des éléments au DOM
    sectionGallery.appendChild(worksElement);
    worksElement.appendChild(imageElement);
    worksElement.appendChild(figcaptionElement);
  }
}
genererProjet();

/*async function genererProjet() {
  const workFetch = await fetch("http://localhost:5678/api/works");
  const works = await workFetch.json();
  const categorieFetch = await fetch("http://localhost:5678/api/categories");
  const categories = await categorieFetch.json();

  createGallery(works);
  noFilterButton(works);
  createFilterButton(categories, works);
}

genererProjet();

function createGallery(works) {
  for (let i = 0; i < works.length; i++) {
    const selectedWorks = works[i];
    const sectionGallery = document.querySelector(".gallery");
    // Creating the HTML tag
    const worksElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    const figcaptionElement = document.createElement("figcaption");
    // Setting img src and alt text and the caption text
    imageElement.src = selectedWorks.imageUrl;
    imageElement.alt = selectedWorks.title;
    figcaptionElement.innerText = selectedWorks.title;
    // Appending elements to the DOM
    sectionGallery.appendChild(worksElement);
    worksElement.appendChild(imageElement);
    worksElement.appendChild(figcaptionElement);
  }
}

function createFilterButton(categories, works) {
  //Creating buttons depending on the nbr of element in API/categories's path
  for (let i = 0; i < categories.length; i++) {
    const sectionFilter = document.querySelector(".filter");
    const button = document.createElement("button");
    button.classList.add("btn-filter");
    button.innerText = categories[i].name;
    sectionFilter.appendChild(button);

    button.addEventListener("click", () => {
      removeAllSelectedClass();
      button.classList.add("--selected");

      const worksFiltered = works.filter(function (worksFiltering) {
        if (worksFiltering.category.name == categories[i].name) {
          return worksFiltering;
        }
      });
      // Deleting all works...
      document.querySelector(".gallery").innerHTML = "";
      // and regenerating only corresponding works.
      createGallery(worksFiltered);
    });
  }
}

function removeAllSelectedClass() {
  const buttonList = document.querySelectorAll(".btn-filter, .btn-nofilter");
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("--selected");
  }
}

function noFilterButton(works) {
  const sectionFilter = document.querySelector(".filter");
  const noFilterButton = document.createElement("button");
  noFilterButton.classList.add("btn-nofilter");
  noFilterButton.classList.add("--selected");
  noFilterButton.innerText = "Tous";
  sectionFilter.appendChild(noFilterButton);
  // BUTTON "TOUS" EVENTLISTENER
  noFilterButton.addEventListener("click", (event) => {
    removeAllSelectedClass();
    document.querySelector(".gallery").innerHTML = "";
    event.target.classList.add("--selected");
    createGallery(works);
  });
}*/
