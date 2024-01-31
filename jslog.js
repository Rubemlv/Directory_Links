function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar se o nome de usuário e senha são válidos
    if (username === "eto" && password === "eto@energisa") {
        // Login bem-sucedido, redirecionar ou fazer outras ações necessárias
        window.location.href = "index.html";
    } else {
        // Exibir mensagem de erro
        document.getElementById("error-message").innerText = "Usuário ou senha incorretos.";
    }
}
