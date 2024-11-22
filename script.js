document.querySelector("#send").addEventListener("click", function() {
    var ddd = document.querySelector("#name").value;
    if (ddd.length === 2) {
        fetch("https://brasilapi.com.br/api/ddd/v1/" + ddd)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.state) {document.querySelector("#estadonho").textContent = "O estado é: " + data.state; }
                else {document.querySelector("#estadonho").textContent = "DDD não encontrado";}
            })
            .catch(function() {
                document.querySelector("#estadonho").textContent = "Erro ao consultar API!!!";
 });}
     else { document.querySelector("#estadonho").textContent = "DDD inválido";}
});