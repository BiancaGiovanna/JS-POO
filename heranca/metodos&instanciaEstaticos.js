class ControleRemoto {
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }
  //Metodo de Instancia 
  aumentarVolume(){
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }
  //Metodo estático
  static trocaPilha(){
    console.log("Troca de pilha")
    }
}

const Controle1 = new ControleRemoto("LG");
Controle1.aumentarVolume();
Controle1.aumentarVolume();
Controle1.aumentarVolume();

console.log(Controle1);

ControleRemoto.trocaPilha();