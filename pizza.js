const products = [
    {
        name: "Pizza",
        price: "13$",
        image: "foods/pizza.jpeg"
    },
    {
        name: "Tacos",
        price: "10$",
        image: "foods/pizza6.jpeg"
    },
    {
        name: "Burger",
        price: "12$",
        image: "foods/pizza2.jpeg"
    },
    {
        name: "Pasta",
        price: "15$",
        image: "foods/pizza3.jpeg"
    },
    {
        name: "Sushi",
        price: "18$",
        image: "foods/pizza4.jpeg"
    },
    {
        name: "Salad",
        price: "8$",
        image: "foods/pizza5.jpeg"
    }
    ,
];

const productsContainer = document.querySelector('.products');

function generateCards() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <p>${product.name}</p>
            <div class="price">
                <p>${product.price}</p> 
                <p class="buy-button">Buy</p>
            </div>
        `;
          
       productsContainer.appendChild(card);
       const buyButton = card.querySelector('.buy-button');
       buyButton.addEventListener('click', function(){
           buyButton.innerHTML='Bought';
           buyButton.style.color='green';
       });
    });
}
window.onload = generateCards;
