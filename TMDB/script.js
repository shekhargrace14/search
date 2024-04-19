// fetch("https://api.themoviedb.org/3/movie/11?api_key=185c7d1fa7ff15b5023522fae491e666")

let movies = document.querySelector("[movies]");
const userCardContainer = document.querySelector("[data-user-cards-container]")

const searchInput  = document.querySelector("[data-search]")

let items=[];

searchInput.addEventListener('input', (e)=>{
    let value = e.target.value.toLowerCase()
    console.log(value)
    items.forEach(item=>{
        const isVisible = item.title.toLowerCase().includes(value) || item.overview.toLowerCase().includes(value)
        item.element.classList.toggle("hide",!isVisible)
    })

})

// console.log(movies)



fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then(resolve=> resolve.json())
.then(data=>{
    // console.log(data)
    items = data.results.map(item=>{
        let card = movies.content.cloneNode(true).children[0];
        // console.log(card)
        
        let title = card.querySelector("[title]");
        let overview = card.querySelector("[overview]");
        let imgSrc = card.querySelector("img")
        // console.log(imgSrc)
        title.textContent = item.title;
        overview.textContent = item.overview;
        imgSrc.src = `https://image.tmdb.org/t/p/w500${item.poster_path}` ;
        userCardContainer.append(card)
        return{title: item.title, overview: item.overview, element: card }
    })
})
