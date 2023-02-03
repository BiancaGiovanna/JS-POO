class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`${this.nome} esta falando`);
  }
  comer() {
    console.log(`${this.nome} esta comendo`);
  }
  beber() {
    console.log(`${this.nome} esta bebendo`);
  }
}

const pessoa1 = new Pessoa("Bianca", "20");

console.log(pessoa1.falar());
