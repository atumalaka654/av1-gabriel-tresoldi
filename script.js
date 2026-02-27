/**
 * PROJETO LISTA DE TAREFAS - AV1
 * Organização: Seleção -> Estado -> Funções -> Eventos
 */

// 1. Seleção de Elementos (querySelector)
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const message = document.querySelector('#message');

// 2. Estado da Aplicação (Array de Tarefas)
const tarefas = [];

// 3. Função de Validação (Critério 3.4)
function validarTarefa(texto) {
    if (texto === "") {
        message.textContent = "Erro: Campo vazio!";
        message.classList.add('error-text');
        input.classList.add('input-error');
        return false;
    }
    return true;
}

// 4. Função de Renderização (Critério 3.4)
function renderTarefas() {
    todoList.innerHTML = ""; // Limpa interface

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa; // textContent (Critério 3.3)

        const btnRemover = document.createElement('button');
        btnRemover.textContent = "X";
        btnRemover.classList.add('btn-del');

        // Evento via JS (Critério 3.3/3.4)
        btnRemover.addEventListener('click', () => {
            tarefas.splice(index, 1);
            renderTarefas();
        });

        li.appendChild(btnRemover);
        todoList.appendChild(li);
    });
}

// 5. Função Principal de Adição
function adicionar(event) {
    event.preventDefault(); // Prevenção de padrão (Critério 2.4)

    const valorInput = input.value.trim(); // trim() (Critério 2.5/3.2)

    // Chamada da função de validação (Critério 3.4)
    if (!validarTarefa(valorInput)) return;

    // Sucesso: Limpa erros e atualiza dados
    message.textContent = "";
    message.classList.remove('error-text');
    input.classList.remove('input-error');

    tarefas.push(valorInput);
    input.value = "";
    renderTarefas(); // Atualização imediata
}

// 6. Registro de Eventos (addEventListener)
form.addEventListener('submit', adicionar);