const URL_API = "https://pokeapi.co/api/v2/pokemon/"

const callApi = async function (url) {
    let response = await fetch(url)
    let data = await response.json()
    showPokemons(data.results)
}

callApi(URL_API)

const getPokemon = async function (urlPokemon) {
    let response = await fetch(urlPokemon)
    let data = await response.json()
    return data
}

const showPokemons = async function (pokemons) {
    $("#pokemonsList").html("");
    Object.keys(pokemons).map((key) => {
        getPokemon(pokemons[key].url).then(res => {
            $("#pokemonsList").append(`
                <div class="card mb-4">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">${res.name}</h4>
                    </div>
                    <div class="card-body">
                        <img src="${res.sprites.front_default}">
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