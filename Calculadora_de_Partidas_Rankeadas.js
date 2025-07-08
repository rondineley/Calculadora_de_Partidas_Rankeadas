function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function determinarNivel(saldo) {
  if (saldo < 10) {
    return "Ferro";
  } else if (saldo <= 20) {
    return "Bronze";
  } else if (saldo <= 50) {
    return "Prata";
  } else if (saldo <= 80) {
    return "Ouro";
  } else if (saldo <= 90) {
    return "Diamante";
  } else if (saldo <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

function exibirResultado(vitorias, derrotas) {
  const saldo = calcularSaldo(vitorias, derrotas);
  const nivel = determinarNivel(saldo);
  console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);
}

// Exemplo de uso:
exibirResultado(75, 23); // Saldo = 52 → Ouro
