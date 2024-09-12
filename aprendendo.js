// hello, world
// Comentário que não é interpretado

// variáveis
let mensagem = 2
mensagem = "olá, luisa!!!"
console.log(mensagem)

// arrays, objeto
let metas = [2, 3]

console.log(metas[0] + metas[1]) // interpreta como número
console.log(metas[0] + " " + metas[1]) // interpreta como string

let meta = {
    value : "ler um livro por mês",
    checked : false,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "não é mais ler um livro"
meta.log(meta.value + "\n")

// function
//const criarMeta() = () => {}
//function criarmeta() {}

let metass = [
    meta, 
    {
        value : "caminhar 20 minutos tosos os dias",
        checked : false,
    }
]

console.log(metass[0].value + "\n" + metass[1].value)