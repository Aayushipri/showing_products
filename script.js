const products = [
  {
    id: 1,
    description: "Cocktail Juice",
    price: 10.99,
    imageSrc: "https://source.unsplash.com/yIE7pZUmT_s",
  },
  {
    id: 2,
    description: "Pomegranate  juice",
    price: 20.49,
    imageSrc: "https://source.unsplash.com/IKaFDABbfFY",
  },
  {
    id: 3,
    description: "Passion Juice",
    price: 15.79,
    imageSrc: "https://source.unsplash.com/KUT4HK3-Z5s",
  },
  {
    id: 3,
    description: "Mixed Juice",
    price: 15.79,
    imageSrc: "https://source.unsplash.com/ktMU5IS407s",
  },
];
const productsCard = document.querySelector(".products");
const productList = products
  .map((product, index) => {
    console.log(index);
    return `<div class="card">
     <img src="${product.imageSrc}" width=60px height=60px  data-id="${product.id}" alt="${product.description}" />
     <p> ${product.description}</p>
     <span> ${product.price}</span>
    </div>`;
  })
  .join("");

productsCard.innerHTML = productList;
