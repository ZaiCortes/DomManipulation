
//Se crea un arreglo para agregar usuarios
const usersList = [
    {
        id: 1,
        user_name: 'Lola',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: ['Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'],
        },
    },
    {
        id: 2,
        user_name: 'Fer',
        description: 'Me gusta dormir',
        age: '23',
        fav_music: {
            bands: ['Radiohead', 'The Beatles', 'Pink Floyd'],
        },
    },
  
];
//Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container");
function createImageElement() {
    const IMAGE_URL = "https://placehold.co/200";

    // Crear elemento img
    const imageElement = document.createElement("img");
    imageElement.src = IMAGE_URL;
    imageElement.alt = "Foto de perfil del usuario";

    return imageElement;
}

//const userImage = createImageElement();

function populateCardElements(user) {
    const { user_name, age, description } = user;

    // Selecciona los elementos HTML
    const cardTitleElement = document.createElement("h3");
    const cardAgeElement = document.createElement("p");
    const cardDescElement = document.createElement("p");

    // Pobla los elementos con la información del usuario
    cardTitleElement.textContent = user_name;
    cardAgeElement.textContent = age;
    cardDescElement.textContent = description;

    // Devuelve los elementos
    return { cardTitleElement, cardAgeElement, cardDescElement };
}
//const { cardTitleElement, cardAgeElement, cardDescElement } = populateCardElements(usersList);
function renderCard(cardImgContainer, user) {
    
    const userImage = createImageElement();
    const { cardTitleElement, cardAgeElement, cardDescElement } = populateCardElements(user);
    
    cardImgContainer.appendChild(userImage); //Agrega la imagan y la información en el mismo contenedor
    cardImgContainer.append(cardTitleElement, cardAgeElement, cardDescElement);
    

    
    //card.appendChild(lineBreak);
}

// Llama a la función 
//renderCard(cardImgContainer, cardTitleElement, cardAgeElement, cardDescElement);
usersList.forEach((user) => {
    renderCard(cardImgContainer, user);
});