
function convertir() {
let valorInput = document.getElementById('valor');
let resultado = 0;
const dolar = 187;
const euro = 254;

if (document.getElementById("uno").checked){
    resultado = parseInt(valorInput.value) / dolar;
    alert("El cambio de pesos a dolares es: $" + resultado);
}

else if (document.getElementById("dos").checked) {
    resultado = parseInt(valorInput.value) / euro;
    alert("El cambio de pesos a euros es: " + resultado);
}

else{
    alert("Tienes que completar todos los campos requeridos")
}

}


