document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos DOM
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    // 2. Estado da Calculadora
    let currentInput = '0';
    let previousInput = null;
    let operator = null;
    let waitForNewInput = false;

    // 3. Funções de Atualização
    function updateDisplay() {
        // Limita o tamanho do texto no visor para evitar estouro
        display.textContent = currentInput.length > 15 ? currentInput.substring(0, 15) : currentInput;
    }

    function clear() {
        currentInput = '0';
        previousInput = null;
        operator = null;
        waitForNewInput = false;
        updateDisplay();
    }

    // 4. Função de Cálculo
    function calculate(n1, op, n2) {
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        if (isNaN(num1) || isNaN(num2)) return n2;

        switch (op) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                if (num2 === 0) return 'Erro: Div/0';
                return (num1 / num2).toString();
            case '%':
                // Calcula a porcentagem de n2 em relação a n1
                return (num1 * (num2 / 100)).toString();
            default:
                return num2.toString();
        }
    }

    // 5. Manipulador de Eventos
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const { number, operator: op, action } = e.target.dataset;
            const buttonText = e.target.textContent;

            // Lógica de Números e Ponto Decimal
            if (number) {
                if (currentInput === '0' || waitForNewInput || currentInput.includes('Erro')) {
                    // Prepara para um novo número ou limpa o erro
                    currentInput = number === '.' ? '0.' : number;
                    waitForNewInput = false;
                } else if (number === '.') {
                    // Adiciona ponto decimal apenas se não existir
                    if (!currentInput.includes('.')) {
                        currentInput += number;
                    }
                } else {
                    // Concatena o número
                    currentInput += number;
                }
            }
            
            // Lógica de Operadores (+, -, *, /)
            else if (op && op !== '%' && action !== 'calculate') {
                if (previousInput && operator) {
                    // Encadeia operações: calcula o resultado e o armazena como previousInput
                    currentInput = calculate(previousInput, operator, currentInput);
                }
                
                // Armazena a operação atual e o valor
                previousInput = currentInput;
                operator = op;
                waitForNewInput = true; // Indica que o próximo número será o segundo operando
            }
            
            // Lógica do Igual (=)
            else if (action === 'calculate') {
                if (previousInput && operator) {
                    currentInput = calculate(previousInput, operator, currentInput);
                    previousInput = null;
                    operator = null;
                    waitForNewInput = true;
                }
            }
            
            // Lógica do "AC" (Clear)
            else if (action === 'clear') {
                clear();
            }

            // Lógica do Porcentagem (%)
            else if (op === '%') {
                 // Trata o número atual como porcentagem (n / 100)
                if (!waitForNewInput) {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                }
            }

            // Lógica de Inversão de Sinal (+/-)
            else if (action === 'negate') {
                currentInput = (parseFloat(currentInput) * -1).toString();
            }

            updateDisplay();
        });
    });

    // Inicia a calculadora
    clear();
});