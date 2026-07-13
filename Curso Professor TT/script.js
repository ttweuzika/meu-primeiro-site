function cumprimentar() {

    let nome = document.getElementById("nome").value;

    if (nome == "") {

        document.getElementById("resposta").innerHTML = "Digite seu nome primeiro! 👊";

    } else {

        document.getElementById("resposta").innerHTML = "Olá, " + nome + "! Bem-vindo ao meu site 🚀";

    }

}