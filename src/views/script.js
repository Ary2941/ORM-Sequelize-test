        // Array para armazenar clientes (simulando um banco de dados)
        let clientes = [];

        // Função para exibir clientes na tabela
        function exibirClientes() {
            const tabela = document.getElementById("clienteTableBody");
            tabela.innerHTML = "";

            clientes.forEach(cliente => {
                const row = tabela.insertRow();
                row.innerHTML = `
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td><button onclick="editarCliente(${clientes.indexOf(cliente)})">Editar</button>
                        <button onclick="removerCliente(${clientes.indexOf(cliente)})">Remover</button></td>
                `;
            });
        }

        // Função para adicionar ou atualizar um cliente
        function adicionarOuAtualizarCliente(event) {
            event.preventDefault(); // Impede o comportamento padrão do formulário

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            if (nome && email) {
                const clienteExistente = clientes.find(cliente => cliente.email === email);

                if (clienteExistente) {
                    // Atualiza o cliente existente
                    clienteExistente.nome = nome;
                } else {
                    // Adiciona um novo cliente
                    clientes.push({ nome, email });
                }

                // Limpa os campos do formulário
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";

                // Exibe novamente os clientes na tabela
                exibirClientes();
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        }

        // Função para editar um cliente
        function editarCliente(index) {
            const cliente = clientes[index];
            document.getElementById("nome").value = cliente.nome;
            document.getElementById("email").value = cliente.email;

            // Remove o cliente da lista para evitar duplicatas durante a atualização
            clientes.splice(index, 1);

            // Exibe novamente os clientes na tabela
            exibirClientes();
        }

        // Função para remover um cliente
        function removerCliente(index) {
            clientes.splice(index, 1);

            // Exibe novamente os clientes na tabela
            exibirClientes();
        }

        // Adiciona o evento de submit para o formulário
        document.getElementById("clienteForm").addEventListener("submit", adicionarOuAtualizarCliente);

        // Exibe inicialmente os clientes na tabela (vazio no início)
        exibirClientes();
