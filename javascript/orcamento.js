document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cakeForm');
    const massaOptions = document.getElementById('massaOptions').children;
    const recheio1Options = document.getElementById('recheio1Options').children;
    const recheio2Options = document.getElementById('recheio2Options').children;
    const coberturaOptions = document.getElementById('coberturaOptions').children;

    function handleOptionClick(event) {
        const options = event.currentTarget.parentNode.children;
        for (let option of options) {
            option.classList.remove('selected');
        }
        event.currentTarget.classList.add('selected');
        console.log('Option selected:', event.currentTarget.dataset.value); // Log de depuração
    }

    for (let option of massaOptions) {
        option.addEventListener('click', handleOptionClick);
    }

    for (let option of recheio1Options) {
        option.addEventListener('click', handleOptionClick);
    }

    for (let option of recheio2Options) {
        option.addEventListener('click', handleOptionClick);
    }

    for (let option of coberturaOptions) {
        option.addEventListener('click', handleOptionClick);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        const massa = document.querySelector('#massaOptions .selected')?.dataset.value;
        const recheio1 = document.querySelector('#recheio1Options .selected')?.dataset.value;
        const recheio2 = document.querySelector('#recheio2Options .selected')?.dataset.value;
        const cobertura = document.querySelector('#coberturaOptions .selected')?.dataset.value;
        const frase = document.getElementById('frase').value;
        const email = document.getElementById('email').value;

        // Verificação se todas as opções obrigatórias foram selecionadas
        if (!massa) {
            alert('Por favor, selecione o sabor da massa.');
            return;
        }

        if (!recheio1) {
            alert('Por favor, selecione o primeiro recheio.');
            return;
        }

        if (!recheio2) {
            alert('Por favor, selecione o segundo recheio.');
            return;
        }

        if (!cobertura) {
            alert('Por favor, selecione a cobertura.');
            return;
        }

        // Preparar os dados para envio
        const formData = {
            massa,
            recheio1,
            recheio2,
            cobertura,
            frase,
            email
        };

        console.log('Dados do formulário:', formData); // Log de depuração
        console.log(JSON.stringify(formData));

        // Enviando o formulário com FormSubmit
       fetch('https://formsubmit.co/ajax/pita.juliano@aluno.ifsp.edu.br', {            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            //body: formData
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Pedido enviado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao enviar o pedido:', error);
            alert('Ocorreu um erro ao enviar o pedido.');
        });
    });
});
