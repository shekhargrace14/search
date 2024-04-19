console.log("Api Search")
fetch("https://api.themoviedb.org/3/movie?&query=love&api_key=185c7d1fa7ff15b5023522fae491e666")
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
                <p ${item.overview}</p>
            </div>
        </div>
        `)

    })
})