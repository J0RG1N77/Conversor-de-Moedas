function converter() {
    let dolar = 5.7; // Valor do Dolar
    let reais = parseFloat(document.getElementById("valor").value);
    
   
    let valorDolares = reais / dolar;
    document.getElementById("resultado").innerText = `💰 Valor em dólares: $${valorDolares.toFixed(2)}`;
}