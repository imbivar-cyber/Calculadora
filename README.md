## 🧮 README para o Projeto "Calculadora Simples"

Este projeto consiste em uma calculadora web básica e funcional, desenvolvida com HTML, JavaScript e estilizada usando o framework Tailwind CSS.

---

### 🌟 Visão Geral

A calculadora possui uma interface simples e responsiva, com as operações matemáticas fundamentais, botões numéricos, e funções de limpar, porcentagem e inversão de sinal.

#### ⚙️ Tecnologias Utilizadas

* **HTML5:** Estrutura da calculadora (visor e botões).
* **Tailwind CSS (via CDN):** Estilização da interface para um design limpo e moderno.
* **JavaScript:** Lógica principal de cálculo, manipulação de eventos e atualização do visor.

---

### 🧱 Estrutura do Projeto

O projeto é composto por dois arquivos principais:

1.  **`index.html`**: Contém o esqueleto da calculadora (visor e teclado) e carrega os estilos Tailwind e o script JavaScript.
2.  **`calculator.js`**: Contém toda a lógica para processar as entradas do usuário e realizar os cálculos.

### 💻 Como Usar

1.  **Salve os Arquivos:** Crie uma pasta para o projeto. Salve o código HTML no arquivo `index.html` e o código JavaScript no arquivo `calculator.js`, ambos na mesma pasta.
2.  **Execute:** Abra o arquivo **`index.html`** em qualquer navegador web moderno.
3.  **Interaja:** Clique nos botões numéricos e operadores para realizar as operações.

### ✨ Funcionalidades

| Botão | Descrição |
| :---: | :--- |
| **0-9, .** | Entrada numérica e ponto decimal. |
| **+, -, x, ÷** | Operações básicas de adição, subtração, multiplicação e divisão. |
| **=** | Executa o cálculo da expressão atual. |
| **AC** | **All Clear** (Limpa totalmente a expressão, reiniciando o visor para `0`). |
| **+/-** | Inverte o sinal do número atualmente exibido (positivo para negativo, e vice-versa). |
| **%** | Calcula a porcentagem do número atual (divide o número por 100). |

### 🛠️ Detalhes da Implementação (JavaScript)

O script (`calculator.js`) gerencia o estado da calculadora através de três variáveis principais:

* `currentInput`: O número atualmente exibido no visor.
* `previousInput`: O primeiro operando (valor antes do operador ser pressionado).
* `operator`: O operador matemático selecionado (+, -, *, /).

A lógica utiliza a função `calculate(n1, op, n2)` para realizar as operações, permitindo o encadeamento de cálculos (ex: $5 + 3 \times 2$ seria calculado em etapas).

### 🎨 Estilo e Design

O design utiliza um esquema de cores simples e familiar de calculadoras:

* **Visor:** Fundo escuro (`bg-gray-800`) com texto claro.
* **Botões Numéricos:** Tons de cinza claro.
* **Operadores (÷, x, -, +):** Laranja (`bg-orange-500`) para destaque.
* **Botão Igual (=):** Azul (`bg-blue-600`) para o CTA principal.
* **Botão AC:** Vermelho (`bg-red-500`) para a função de limpar.
