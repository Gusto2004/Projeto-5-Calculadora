const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const operacao = document.querySelector("#operacao");
const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");
const listaHistorico = document.querySelector("#historico");

const sinais = {
  somar: "+",
  subtrair: "−",
  multiplicar: "×",
  dividir: "÷",
};

let historico = JSON.parse(localStorage.getItem("historico")) || [];

function fazerCalculo() {
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

  const valorFinal = Number(valor.toFixed(4));
  resultado.textContent = `Resultado: ${valorFinal}`;

  // Guardar no histórico (no início do array)
  const registo = `${num1} ${sinais[op]} ${num2} = ${valorFinal}`;
  historico.unshift(registo);
  historico = historico.slice(0, 5); // manter só os últimos 5
  localStorage.setItem("historico", JSON.stringify(historico));
  mostrarHistorico();
}

function mostrarHistorico() {
  listaHistorico.innerHTML = "";
  historico.forEach(function (linha) {
    const li = document.createElement("li");
    li.textContent = linha;
    listaHistorico.appendChild(li);
  });
}

calcular.addEventListener("click", fazerCalculo);

// Calcular ao carregar Enter em qualquer um dos campos
[numero1, numero2].forEach(function (campo) {
  campo.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      fazerCalculo();
    }
  });
});

mostrarHistorico();

// ===== TEMA (com memória) =====
const botaoTema = document.querySelector("#toggle-tema");
const body = document.body;

const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "claro") {
  body.classList.remove("dark");
  botaoTema.textContent = "🌙";
} else {
  body.classList.add("dark");
  botaoTema.textContent = "☀️";
}

botaoTema.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    botaoTema.textContent = "☀️";
    localStorage.setItem("tema", "escuro");
  } else {
    botaoTema.textContent = "🌙";
    localStorage.setItem("tema", "claro");
  }
});