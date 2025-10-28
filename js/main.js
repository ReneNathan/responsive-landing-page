document.addEventListener('DOMContentLoaded', () => {
  const hamburger_btn = document.getElementById('hamburger_btn');
  const nav_items = document.querySelectorAll('.nav-item');

  hamburger_btn.addEventListener('click', () => {
    nav_items.forEach(item => {
      const isHidden = getComputedStyle(item).display === 'none';
      item.style.display = isHidden ? 'block' : 'none';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const pkmn_img = document.getElementById("pkmn_img");

  pkmn_img.addEventListener("error", () => {
    pkmn_img.src = "/img/icons/pokeball.ico";
  });
});

document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById("get_random_pokemon").addEventListener("click", async () => {
    // Gera e mostra o código aleatório
    const code = getRandomPokemonCode();
    const url = "https://pokeapi.co/api/v2/pokemon/" + code;
    const response = await fetch(url);
    const pokemon_data = await response.json();

    console.log(pokemon_data);

    const pokemon_number_input = document.getElementById("pokemon_number_input");
    const pokemon_name_input = document.getElementById("pokemon_name_input");
    const pokemon_type_1_input = document.getElementById("pokemon_type_1_input");
    const pokemon_type_2_input = document.getElementById("pokemon_type_2_input");
    const pkmn_img = document.getElementById("pkmn_img");

    pokemon_number_input.value = pokemon_data.id;
    pokemon_name_input.value = pokemon_data.name;
    pokemon_type_1_input.value = pokemon_data.types[0].type.name;
    pokemon_type_2_input.value = pokemon_data.types[1] ? pokemon_data.types[1].type.name : "";

    pkmn_img.src = pokemon_data.sprites.front_default;
  });
});


// Função que gera um número válido aleatório
function getRandomPokemonCode() {
  // Existem dois intervalos válidos: 1–1025 e 10001–10303
  const firstRange = { min: 1, max: 1025 };
  const secondRange = { min: 10001, max: 10303 };

  // Escolhe aleatoriamente qual intervalo usar
  const useFirstRange = Math.random() < (1025 / (1025 + (10303 - 10001 + 1)));

  if (useFirstRange) {
    // sorteia no primeiro intervalo
    return Math.floor(Math.random() * (firstRange.max - firstRange.min + 1)) + firstRange.min;
  } else {
    // sorteia no segundo intervalo
    return Math.floor(Math.random() * (secondRange.max - secondRange.min + 1)) + secondRange.min;
  }
}
