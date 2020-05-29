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
<<<<<<< HEAD
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
=======
  pkmPlaceholder.innerHTML = "";
  const pkmNome = input.value.toLowerCase();
  const request = new XMLHttpRequest();
  
  request.open("GET", `https://pokeapi.co/api/v2/pokemon/${pkmNome}/`, true);
  
  request.addEventListener("readystatechange", function () {
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.response);
      const p = document.createElement('p');
      const img = document.createElement('img');

      p.textContent = data.species.name;
      img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`)

      pkmPlaceholder.appendChild(p).appendChild(img);
    }
  })
  
  request.send();
>>>>>>> 39ec0a28fa69ea389d0b54c36665ff30ae0af9e3
}

form.addEventListener('submit', (e) => chamarRequisicao(e));
