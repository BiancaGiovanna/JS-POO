function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(
      `Saldo insuficiente para saque \nSeu saldo atual: R$${this.saldo}`
    );
    return;
  }
  this.saldo -= valor;
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Agencia:${this.agencia}/Conta:${this.conta} \n` +
      `Saldo: R$ ${this.saldo.toFixed()}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.costructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(
      `Saldo insuficiente para saque \nSeu saldo atual: R$${this.saldo}`
    );
    return;
  }
  this.saldo -= valor;
};

const ContaCorrente1 = new ContaCorrente(11, 22, 0, 100);

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.costructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(
      `Saldo insuficiente para saque \nSeu saldo atual: R$${this.saldo}`
    );
    return;
  }
  this.saldo -= valor;
};

const ContaPoupanca1 = new ContaPoupanca(12, 33, 0);
