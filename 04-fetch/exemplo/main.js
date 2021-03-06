const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const complementoInput = document.getElementById("complemento");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");

cepInput.addEventListener("blur", () => {
    fetch(`https://viacep.com.br/ws/${cep_input.value}/json/`)
    .then((dadoJSON) => dadoJSON.json()) 
    .then( (dadoObj) => {
            logradouro_input.value = dadoObj.logradouro
            bairro_input.value = dadoObj.bairro
            localidade_input.value = dadoObj.localidade
            uf_input.value = dadoObj.uf
    })
    .catch((erro) => {
        console.log(erro)
    })
 
});



// cep_input.addEventListener('change', () => {
//     console.log(cep_input.value)
    
//     get_data(`https://viacep.com.br/ws/${cep_input.value}/json/`)
//         .then( (dadoJSON) => {
    
//             const dadoParseado = JSON.parse(dadoJSON)
           
//             return dadoParseado
//         })
        // .then( (dadoObj) => {
        //     logradouro_input.value = dadoObj.logradouro
        //     bairro_input.value = dadoObj.bairro
        //     localidade_input.value = dadoObj.localidade
        //     uf_input.value = dadoObj.uf
        // })
//         .catch((erro) => {
//             console.log(erro)
//         })
// })

// cep_input.addEventListener("blur", function () {
//     const cep = this.value.replace(/\D/g, "")

//     logradouro_input.value = "..."
//     complemento_input.value = "..."
//     bairro_input.value = "..."
//     localidade_input.value = "..."
//     uf_input.value = "..."

//     get_data(`https://viacep.com.br/ws/${cep}/json/`)
//         .then(function(data) {
//             data = JSON.parse(data)
//             if (data.erro) {
//                 cep_input.classList.add("error")
//                 cep_error.style.display = "block"

//                 logradouro_input.value = ""
//                 complemento_input.value = ""
//                 bairro_input.value = ""
//                 localidade_input.value = ""
//                 uf_input.value = ""
//             } else {
//                 logradouro_input.value = data.logradouro
//                 complemento_input.value = data.complemento
//                 bairro_input.value = data.bairro
//                 localidade_input.value = data.localidade
//                 uf_input.value = data.uf
//             }
//         })
//         .catch(function(error) {
//             cep_input.classList.add("error")
//             cep_error.style.display = "block"

//             logradouro_input.value = ""
//             complemento_input.value = ""
//             bairro_input.value = ""
//             localidade_input.value = ""
//             uf_input.value = ""
//         })
// })

