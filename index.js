import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(500);

const ContaCorrenteAlice = new ContaCorrente(102, cliente2);

let valor = 200;
ContaCorrenteRicardo.transferir(valor, ContaCorrenteAlice);

console.log(ContaCorrente.numeroDeContas);
console.log(ContaCorrenteAlice);