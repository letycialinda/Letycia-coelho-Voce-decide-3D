const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(caixa-perguntas);
const caixaPerguntas = document.querySelector(caixa-perguntas);
const caixaAlternativas = document.querySelector(caixa-alternativas);
const caixaResultados = document.querySelector(caixa-resultado);
const textoResultado = document.querySelector(caixa-resultado);
const perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas: [
      "Alternativa1",
      "Alternativa 2"
    ]
  },

  {
    enunciado: "Pergunta 2",
    alternativas: [
      "Alternativa1",
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Alternativa1",
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Alternativa1",
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Alternativa1",
      "Alternativa 2"
    ]
  },
];

let atual = 0;
let perguntas;

function mostraPerguntas() {Already have an account? S
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPerguntas();
