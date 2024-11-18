const soup =[
    {
        "name":"soup1",
        "price":"$15",
        "image":"foods/pizza.jpeg"
    },
    {
        "name":"soup1",
        "price":"$15",
        "image":"foods/pizza.jpeg"
    },
    {
        "name":"soup1",
        "price":"$15",
        "image":"foods/pizza.jpeg"
    },
    {
        "name":"soup1",
        "price":"$15",
        "image":"foods/pizza.jpeg"
    },
    {
        "name":"soup1",
        "price":"$15",
        "image":"foods/pizza.jpeg"
    },
    {
        "name":"soup1",
        "price":"$15",
        "image":"foods/pizza.jpeg"
    }
];


const soup_container = document.querySelector('.products');
  
function display_card(){
    soup.forEach(soup=>{
        
        const card= document.createElement('div');
        card.classList.add('card');
        card.innerHTML=`
        <div class='image'>
        <img src=r='${soup.image}' alt="${soup.name}">
        </div>
        <p>${soup.name}</p>
        <div class='price'> <p >${soup.price}</p> 
                <p class="buy-button">Buy</p>
                </div>
        `;

        soup_container.appendChild(card);
       
    });
}


window.onload(display_card)
