function validaForm(event, form) {
    event.preventDefault();

    const firstName = form.querySelector('input[name="firstName"]').value.trim();
    const username = form.querySelector('input[name="username"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();

    if (!firstName) {
        alert("Por favor, preencha o primeiro nome.");
        return false;
    }
    if (!username) {
        alert("Por favor, preencha o nome de usuário.");
        return false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor, preencha um email válido.");
        return false;
    }

    form.submit();
}