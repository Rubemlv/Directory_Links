function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar se o nome de usuário e senha são válidos
    if (username === "user" && password === "*****") {
        // Login bem-sucedido, redirecionar ou fazer outras ações necessárias
        window.location.href = "direct.html";
    } else {
        // Exibir mensagem de erro
        document.getElementById("error-message").innerText = "Usuário ou senha incorretos.";
    }
}
