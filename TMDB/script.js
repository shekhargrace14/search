// fetch("https://api.themoviedb.org/3/movie/11?api_key=185c7d1fa7ff15b5023522fae491e666")

let movies = document.querySelector("[movies]");
const userCardContainer = document.querySelector("[data-user-cards-container]")

console.log(movies)

fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then(resolve=> resolve.json())
.then(data=>{
    console.log(data)
    data.results.map(item=>{
        let card = movies.content.cloneNode(true).children[0];
        console.log(card)
        
        let title = card.querySelector("[title]");
        let overview = card.querySelector("[overview]");
        
        title.textContent = item.title;
        overview.textContent = item.overview;
        
        userCardContainer.append(card)
        
    })
})
