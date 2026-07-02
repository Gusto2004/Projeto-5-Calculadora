const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const operacao = document.querySelector("#operacao");
const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

calcular.addEventListener("click", () => {
  const num1 = parseFloat(numero1.value);
  const num2 = parseFloat(numero2.value);
  const op = operacao.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = "Digite dois números válidos.";
    return;
  }

  let valor;

  switch (op) {
    case "somar":
      valor = num1 + num2;
      break;
    case "subtrair":
      valor = num1 - num2;
      break;
    case "multiplicar":
      valor = num1 * num2;
      break;
    case "dividir":
      if (num2 === 0) {
        resultado.textContent = "Não é possível dividir por zero.";
        return;
      }
      valor = num1 / num2;
      break;
    default:
      resultado.textContent = "Operação inválida.";
      return;
  }

  resultado.textContent = `Resultado: ${Number(valor.toFixed(4))}`;
});

const botaoTema = document.querySelector('#toggle-tema');
const body = document.body;

botaoTema.addEventListener('click', function () {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    botaoTema.textContent = '☀️';
  } else {
    botaoTema.textContent = '🌙';
  }
});