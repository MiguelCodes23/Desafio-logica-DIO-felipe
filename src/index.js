class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ["Espada", "Shuriken", "Flechas", "Artes Marciais"]
    }


    atacar() {

        if (this.tipo === "arqueiro") {
            console.log(`O ${this.tipo} atacou usando ${this.ataque[2]}`);
        }
        else if (this.tipo === "guerreiro") {

            console.log(`O ${this.tipo} atacou usando ${this.ataque[0]}`);
        }

        else if (this.tipo === "monge") {
            console.log(`O ${this.tipo} atacou usando ${this.ataque[3]}`);
        }

        else if (this.tipo === "ninja") {
            console.log(`O ${this.tipo} atacou usando ${this.ataque[1]}`);
        }


    }

}

let saida = new heroi("Miguel",16,"guerreiro")
saida.atacar()