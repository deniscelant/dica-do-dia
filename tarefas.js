const sortButton = document.getElementById("sortButton");
const hub = document.getElementById("hub");

const tarefas = [
  [
    "Biografia",
    "Romance",
    "Ficcão científica",
    "Aventura ficção",
    "Mistério e suspense",
    "Entreternimento",
    "Arte",
    "Negócios",
    "Economia",
    "Filosofia",
    "Ciências sociais",
    "Computação",
    "História",
    "Gramática",
    "Psicologia",
    "Esportes",
  ],

  [
    "App básico",
    "Site estático",
    "Ecommerce",
    "Portfolio",
    "Game dev",
    "Algoritmo",
    "Montagem photoshop",
    "Produto conceito",
    "Editorial",
    "Impresso",
  ],

  ["Futebol", "Arte", "Escrita", "Matemática", "Cálculo" , "Computação Gráfica", "LeetCode", "FreeCodeCamp" ],
];

sortButton.onclick = () => {
  let bookText = tarefas[0][Math.floor(Math.random() * tarefas[0].length)];
  let jobText = tarefas[1][Math.floor(Math.random() * tarefas[1].length)];
  let hobbieText = tarefas[2][Math.floor(Math.random() * tarefas[2].length)];
  let hubText = document.createElement("h3");
  hub.appendChild(hubText);

  sortButton.style.display = "none"
  hub.style.display = "initial"

  let restartButton = document.createElement("button")
  restartButton.innerHTML = "X"
  hub.appendChild(restartButton);

  
  hubText.innerHTML = `   
        <p>Livros</p>
        <h3>${bookText}</h3>
        <p>Criação</p>
        <h3>${jobText}</h3>
        <p>Hobbies</p>
        <h3>${hobbieText}</h3>
       
    `;
};
