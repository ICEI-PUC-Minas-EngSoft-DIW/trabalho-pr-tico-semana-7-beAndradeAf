let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal:"));
while (isNaN(renda)) {
  renda = Number(prompt("Valor inválido. Digite um número para a renda:"));
}


let quantidadeDespesas = Number(prompt("Quantas despesas você deseja informar?"));
while (isNaN(quantidadeDespesas)) {
  quantidadeDespesas = Number(prompt("Valor inválido. Digite um número:"));
}

if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}


let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = Number(prompt("Digite o valor da despesa " + i + ":"));

  while (isNaN(despesa)) {
    despesa = Number(prompt("Valor inválido. Digite um número para a despesa " + i + ":"));
  }

  totalDespesas += despesa;
}

let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else if (sobra >= renda * 0.3) {
  mensagem = "✅ Ótimo: boa margem de sobra.";
} else {
  mensagem = "🙂 Ok: dá para melhorar a sobra.";
}

let resultado =
  "===== RESULTADO =====\n" +
  "Nome: " + nome + "\n" +
  "Renda: R$ " + renda.toFixed(2) + "\n" +
  "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n" +
  "Situação: " + mensagem;

alert(resultado);
console.log(resultado);


