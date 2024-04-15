const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search ]")


fetch("https://jsonplaceholder.typicode.com/users")
.then(resolve=>resolve.json())
.then(data=>{
    console.log(data)
    data.forEach(element => { 
        const card = userCardTemplate.content.cloneNode(true).children[0];
        console.log(card)
        const header = card.querySelector('header');
        const body = card.querySelector('body');
        header.textContent


    });
})