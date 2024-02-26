// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png

function cargarPokemones (){
  const pokemones = $("#pokemones")
  let i = 1 
  while(i<=150){
    pokemones.append(`
      <div class="col-3">
        <img id="`+i+`" class="poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/`+i+`.png" class="d-block w-100" alt="">
      </div>
    `)
    i=i+1
  }
}

cargarPokemones()

$(".poke").on("click", function() {
  const id=$(this).attr("id")
  console.log("cargando al pokémon..." + id);
})



