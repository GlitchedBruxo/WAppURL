function toggleMensagem() {
    var mensagemContainer = document.getElementById("mensagemContainer");
    var mensagemCheckbox = document.getElementById("mensagemCheckbox");
    if (mensagemCheckbox.checked) {
        mensagemContainer.style.display = "block";
    } else {
        mensagemContainer.style.display = "none";
    }
}

function gerarLink() {
    var ddd = document.getElementById("ddd").value;
    var numero = document.getElementById("numero").value;
    var mensagemCheckbox = document.getElementById("mensagemCheckbox").checked;
    var mensagemTexto = document.getElementById("mensagemTexto").value;
    var link = "https://wa.me/" + ddd + numero;
    
    if (mensagemCheckbox && mensagemTexto.trim() !== "") {
        link += "?text=" + encodeURIComponent(mensagemTexto);
    }

    var resultadoContainer = document.getElementById("resultado");
    resultadoContainer.innerHTML = '<a href="' + link + '" target="_blank">' + link + '</a>';
}
