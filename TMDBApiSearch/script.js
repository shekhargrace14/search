console.log("Api Search")

let dataSearch = document.querySelector("[data-search]");
let submit = document.querySelector("[submit]");

console.log(submit)
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let value = dataSearch.value
    console.log(value)
    search(value)
    dataSearch.value = " "
})

function search(value){
    console.log(value)
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666`)
    .then(resolve=> resolve.json())
    .then(data=>{
        console.log(data)
        
        let movies = document.querySelector("[movies]")
        data.results.map(item=>{
            movies.insertAdjacentHTML("beforeend",`
            <div class="column card bg-gray-200">
            <img class="w-fit" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
            <div class="details p-4">
            <h3 class="font-bold" title>${item.title}</h3>
            <p> ${item.overview}</p>
            </div>
            </div>
            `)
        })
    })
}

// let newAim = <Mission Switch/>