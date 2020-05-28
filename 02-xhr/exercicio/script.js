// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

const chamarRequisicao = (e) => {
  e.preventDefault();
  console.log('oi')
  const requisitoBatata = new XMLHttpRequest();
  const verbo = 'GET'
  const nomePokemon = input.value
const link = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
  requisitoBatata.open(verbo, link, true)

  requisitoBatata.addEventListener('readystatechange', ()=>{
    if(requisitoBatata.readyState === 4 && requisitoBatata.status === 200){
      const guardarJson = JSON.parse(requisitoBatata.response)
      pkmPlaceholder.innerText = guardarJson.name
      const img = document.createElement('img')
      img.setAttribute('src', `https:pokeres.bastionbot.org/images/pokemon/${guardarJson.id}.png`)
      pkmPlaceholder.appendChild(img)
    }
  })
  requisitoBatata.send();
}

form.addEventListener('submit', (e) => chamarRequisicao(e));
