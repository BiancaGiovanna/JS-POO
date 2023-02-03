class Dispositivo {
  constructor (nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if(this.ligado) {
      console.log(this.nome + 'esta ligado')
      return
    }
    this.ligado = true;
  }
  desligar() {
    if(!this.ligado) {
      console.log(this.nome + 'esta desligado')
      return
    }
    this.ligado = false;
  }

}

class Smartphone extends Dispositivo {
  constructor (nome, cor) {
    super(nome);
    this.cor = cor
  }
}

const s1 = new Smartphone('Xiaomi', 'Preto fosco')
console.log(s1)