const userCardTemplate = document.querySelector("[data-user-template]")

fetch("https://jsonplaceholder.typicode.com/users")
.then(resolve=>resolve.json())
.then(data=>{
    console.log(data)
    data.array.forEach(element => {
        
    });
    const card = userCardTemplate.content.cloneNode(true).children[0];
    console.log(card)
})