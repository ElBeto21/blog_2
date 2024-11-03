


// Array de preguntas para el quiz
const quizQuestions = [
    {
        question: "¿En qué año comenzó a implementarse el modelo de desarrollo compartido en México?",
        options: ["1970", "1973", "1980", "1985"],
        answer: "1973"
    },
    {
        question: "¿Cuál fue uno de los principales objetivos del modelo de desarrollo compartido?",
        options: ["Reducir la inflación", "Incrementar la inversión extranjera", "Distribuir la riqueza", "Privatizar empresas estatales"],
        answer: "Distribuir la riqueza"
    },
    {
        question: "¿Qué presidente de México promovió el modelo de desarrollo compartido?",
        options: ["Luis Echeverría", "Carlos Salinas", "Gustavo Díaz Ordaz", "José López Portillo"],
        answer: "Luis Echeverría"
    },
    {
        question: "¿Cuál fue una de las consecuencias del modelo de desarrollo compartido?",
        options: ["Aumento de la pobreza", "Reducción de la desigualdad", "Crecimiento económico sostenido", "Mejora en la educación"],
        answer: "Aumento de la pobreza"
    },
    {
        question: "¿Qué acción tomó el gobierno de Echeverría respecto a la economía?",
        options: ["Aumentó la inversión extranjera", "Privatizó empresas estatales", "Intervino más en la economía", "Eliminó impuestos"],
        answer: "Intervino más en la economía"
    },
    {
        question: "¿Qué era uno de los objetivos del desarrollo compartido?",
        options: ["Incentivar la deuda externa", "Reforzar el proteccionismo", "Fomentar el ahorro interno", "Reducir el gasto público"],
        answer: "Fomentar el ahorro interno"
    },
    {
        question: "¿Cómo se llamó el periodo de crisis tras el modelo de desarrollo compartido?",
        options: ["Crisis del 82", "Crisis de la deuda", "Crisis del 94", "Crisis económica"],
        answer: "Crisis de la deuda"
    },
    {
        question: "¿Qué medida se implementó para controlar la inflación?",
        options: ["Aumento de precios", "Controles de precios", "Reducción de impuestos", "Eliminación de subsidios"],
        answer: "Controles de precios"
    },
    {
        question: "¿Qué sector se fortaleció con la creación de empresas paraestatales?",
        options: ["Sector agrícola", "Sector energético", "Sector de servicios", "Sector turístico"],
        answer: "Sector energético"
    },
    {
        question: "¿Cuál fue un objetivo del proteccionismo comercial?",
        options: ["Aumentar importaciones", "Proteger la industria nacional", "Reducir tarifas", "Fomentar la competencia internacional"],
        answer: "Proteger la industria nacional"
    }
];

// Función para mostrar las preguntas en el HTML
function displayQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar preguntas

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionTitle = document.createElement("h3");
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        q.options.forEach(option => {
            const optionLabel = document.createElement("label");
            optionLabel.classList.add("option-label");

            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${index}`; // Nombre del grupo de opciones
            optionInput.value = option;

            optionLabel.appendChild(optionInput);
            optionLabel.append(option);
            questionDiv.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionDiv);
    });
}

// Función para calcular el puntaje del quiz
function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Obtuviste ${score} de ${quizQuestions.length} preguntas correctas.</p>`;
    resultDiv.style.fontWeight = "bold";
    resultDiv.style.marginTop = "1rem";

    if (score === quizQuestions.length) {
        resultDiv.innerHTML += `<p>¡Excelente! Conoces muy bien el tema.</p>`;
        resultDiv.style.color = "green";
    } else if (score > quizQuestions.length / 2) {
        resultDiv.innerHTML += `<p>¡Buen intento! Puedes mejorar con un poco más de estudio.</p>`;
        resultDiv.style.color = "orange";
    } else {
        resultDiv.innerHTML += `<p>No te preocupes, ¡inténtalo de nuevo para mejorar!</p>`;
        resultDiv.style.color = "red";
    }
}

// Llamada inicial para mostrar las preguntas
displayQuiz();

// Evento para el botón de resultados
document.getElementById("submit-button").addEventListener("click", submitQuiz);


/*obtener el boton y el estado del modo*/
const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    /*funcion para alternar el modo oscuro*/
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');

        /*cambiar el texto del boton segun el estado*/
        if (body.classList.contains('dark-mode')) {
            toggleButton.innerText = 'Desactivar Modo Oscuro';
        } else {
            toggleButton.innerText = 'Activar Modo Oscuro';
        }
    }
 
    /*añadir el evento de click al boton*/
    toggleButton.addEventListener('click', toggleDarkMode);