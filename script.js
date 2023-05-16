// Obtendo o elemento de exibição
var display = document.getElementById('display');

// Função para atualizar a exibição
function updateDisplay(value) {
  display.value += value;
}

// Função para calcular o resultado
function calculate() {
  var result = eval(display.value);
  display.value = result;
}

// Função para limpar a exibição
function clearDisplay() {
  display.value = '';
}

// Obtendo todos os botões
var buttons = document.getElementsByClassName('button');

// Adicionando um evento de clique a cada botão
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var value = this.getAttribute('data-value');

    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      updateDisplay(value);
    }
  });
}
