// SEMANA 1


// //CARDÁPIO 
// característica string: nome do prato;
//                         descrição do prato;

// característica number: valor do prato;

// característica boolean: não contem gluten
//                          prato vegetariano



const prato01 = "Risoto de cogumelo"
const valor1 = 35.00
const semGluten1 = true
const vegetariano1 = true


const prato02 = "Frango no vinho"
const valor2 = 45.00
const semGluten2 = true
const vegetariano2 = false


const prato03 = "Sopa de feijão"
const valor3 = 45.00
const semGluten3 = true
const vegetariano3 = false



console.log(`A média dos valores dos pratos é ${(valor1 + valor2 + valor3) / 3}`)
const media = 41.60


// const allSemGluten = semGluten1 && semGluten2 && semGluten3
// const vegetarianos = vegetariano1 && vegetariano2 && vegetariano3

// console.log(`Todos os pratos são sem glúten: ${allSemGluten}`)
// console.log(`Todos os pratos são vegetarianos: ${vegetarianos}`)



// SEMANA 2 


// const descricao1 = ["arroz árbório", "mix de cogumelos", "aspargos na manteiga"]
// const descricao2 = ["frango", "vinho tinto", "purê de batata"]
// const descricao3 = ["feijão branco", "defumados", "carne de porco"]



//  console.log(`${prato1.toUpperCase()}  \n Descrição: ${descricao1} \n Valor: ${valor1} \n Sem gluten: ${semGluten1} \n Vegetarino: ${vegetariano1}`)
//  console.log(`${prato2.toUpperCase()}  \n Descrição: ${descricao2} \n Valor: ${valor2} \n Sem gluten: ${semGluten2} \n Vegetarino: ${vegetariano2}`)
//  console.log(`${prato3.toUpperCase()}  \n Descrição: ${descricao3} \n Valor: ${valor3} \n Sem gluten: ${semGluten3} \n Vegetarino: ${vegetariano3}`)




//SEMANA 3

objeto1 = {
    prato: "Risoto de cogumelo",
    descricao: ["arroz árbório", "mix de cogumelos", "aspargos na manteiga", "pesto de manjericão"],
    valor: 35.00,
    semGluten: true,
    vegetariano: true

}

objeto2 = {
    prato: "Frango no vinho",
    descricao: ["frango", "vinho tinto", "purê de batata"],
    valor: 45.00,
    semGluten: true,
    vegetariano: false
}

objeto3 = {
    prato: "Sopa de feijão",
    descricao: ["feijão branco", "defumados", "carne de porco"],
    valor: 45.00,
    semGluten: true,
    vegetariano: false
}

const objetos = []
// objetos.push(objeto1, objeto2, objeto3)

// console.log(objetos)




//SEMANA 4

if (objeto1.semGluten === true || objeto2.semGluten === false || objeto3.semGluten === true) {
    objetos.push(objeto1, objeto2, objeto3)
    console.log(objetos)
} else {
    alert('O item não foi adicionado')
}




//SEMANA 5

// PARTE 1

let frase1 = ""
const prato1 = objetos[0]

for (i = 0; i < prato1.descricao.length; i++) {
    frase1 = `${prato1.descricao}, `
}

const novoObjeto1 = {
    ...prato1,
    descricao: frase1
}
// console.log(novoObjeto1)



let frase2 = ""
const prato2 = objetos[1]

for (i = 0; i < prato2.descricao.length; i++) {
    frase2 = `${prato2.descricao}, `
}

const novoObjeto2 = {
    ...prato2,
    descricao: frase2
}
// console.log(novoObjeto2)



let frase3 = ""
const prato3 = objetos[2]

for (i = 0; i < prato3.descricao.length; i++) {
    frase3 = `${prato3.descricao}, `
}

const novoObjeto3 = {
    ...prato3,
    descricao: frase3
}
// console.log(objeto3)



const objetosNovos = []
objetosNovos.push(novoObjeto1, novoObjeto2, novoObjeto3)
console.log(objetosNovos)

//TESTE DA PARTE 2
// novoObjeto4 ={prato : "Macarrão com carne",
// descricao: ["massa fresca", "carne ao molho", "queijo parmesão"],
// valor : 45.00,
// semGluten : true,
// vegetariano : false
// }

// objetosNovos.push(novoObjeto4)


// PARTE 2

for (objeto of objetosNovos) {
    for (propriedade in objeto) {
        console.log(`${propriedade} : ${objeto[propriedade]}`)
    }
}




// SEMANA 6

//PARTE 1
const transdormaEmString = objetosNovos.map((item, index, array) => {
    return `O prato "${item.prato}" custa R$${item.valor}`
})

console.log(transdormaEmString)


//PARTE 2

function filtraPrato (objetosNovos, valorString){
    let objetoARetornar = {}

    for(let i=0; i<objetosNovos.length; i++){
        if(objetosNovos[i].prato === valorString){
            objetoARetornar.prato = objetosNovos[i].prato
            objetoARetornar.descricao = objetosNovos[i].descricao
            objetoARetornar.valor =objetosNovos[i].valor
            objetoARetornar.semGluten =objetosNovos[i].semGluten
            objetoARetornar.vegetariano = objetosNovos[i].vegetariano
        }
    }

    if (objetoARetornar.prato !== valorString){
        alert("Nenhum item foi encontrado")
    }else{
        return objetoARetornar
    }
}

//SEMANA 7 - HTML
//SEMANA 8 - html
//SEMNA 9 - FLEX
//SEMANA 10 - GRID E RESPONSIVIDADE

//SEMANA 11

const cardapioCompleto = document.getElementById("todosOsPratos")
console.log(cardapioCompleto.innerHTML)

const primeiroPrato = document.createElement("li")
primeiroPrato.innerHTML = "Prato individual"
const chamandoPrimeiroPrato = document.getElementById("risoto")
chamandoPrimeiroPrato.insertAdjacentElement("beforeend", primeiroPrato)
console.log(chamandoPrimeiroPrato.innerHTML)


const segundoPrato = document.createElement("li")
segundoPrato.innerHTML = "Prato idividual"
const chamandoSegundoPrato = document.getElementById('frango')
chamandoSegundoPrato.insertAdjacentElement("beforeend", segundoPrato)
console.log(chamandoSegundoPrato.innerHTML)


const terceiroPrato = document.createElement("li")
terceiroPrato.innerHTML = "Prato idividual"
const chamandoTerceiroPrato = document.getElementById('feijao')
chamandoTerceiroPrato.insertAdjacentElement("beforeend", terceiroPrato)
console.log(chamandoTerceiroPrato.innerHTML)


const informacao = document.createElement('ul')
informacao.innerHTML = "<li>Obs*: Não fazemos troca de ingredientes</li> <li> Aceitamos cartões, pix e dinheiro</li>"
informacaoRodape = document.getElementById('todosOsPratos')
informacaoRodape.insertAdjacentElement("beforeend", informacao)
console.log(informacaoRodape.innerHTML)


//SEMANA 12

function buscarPrato(){
    const menu = document.getElementById('todosOsPratos')
    const textoDigitado = document.getElementById("digitar")
    const textoABuscar = textoDigitado.value
    const pratoRetornado = filtraPrato(objetosNovos, textoABuscar)
    console.log(pratoRetornado)

    //  menu.innerHTML = pratoRetornado.prato 
    //  menu.innerHTML += pratoRetornado.descricao
    //  menu.innerHTML += pratoRetornado.valor
     
    // if(pratoRetornado.prato){
    //     const menu = document.getElementById('todosOsPratos')
    //     menu.innerHTML = pratoRetornado
    //     console.log(pratoRetornado)
    // } 
}
