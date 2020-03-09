$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/",
    type: 'GET',
    context: document.body,
    success: data => {
        console.log(data)
        showPokemons(data.results)
    },
    error: err => {
        console.log(err)
    }
})

function showPokemons(pokemons) {
    $("#pokemonsList").html("");
    Object.keys(pokemons)
        .map((key) => {
            let pokemon = getPokemon(pokemons[key].url).then(function (data) {
                console.log(data)
                $("#pokemonsList").append(`
                    <div class="card mb-4">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">${data.name}</h4>
                        </div>
                        <div class="card-body">
                            <img src="${data.sprites.front_default}">
                            <p>Here we have 256-color icons from Windows 98. In png. <br>
                            All icons can be viewed at <a href="https://win98icons.alexmeub.com/"> <img src="assets/icons/search_web-1.png" class="icon-16-4"> win98icons.alexmeub.com</a></p>
                            <img src="assets/icons/msie1-4.png">
                            <img src="assets/icons/laptop_small-0.png">
                            <img src="assets/icons/help_book_cool-1.png">
                        </div>
                    </div>
                `)
            })
        })
}

function getPokemon(urlPokemon) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: urlPokemon,
            type: 'GET',
            context: document.body,
            success: data => {
                resolve(data)
            },
            error: err => {
                reject(err)
            }
        })
    })

}