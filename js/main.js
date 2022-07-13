
function convertir() {
let valore = parseInt(document.getElementByid("valor").value);
let resultado = 0;
const dolar = 187;
const euro = 254;

if (document.getElementByid("uno").checked){
    resultado = valore / dolar;
    alert("El cambio de pesos a dolares es: $" + resultado);
}

else if (document.getElementByid("dos").checked) {
    resultado = valore / euro;
    alert("El cambio de pesos a euros es: " + resultado);
}

else{
    alert("Tienes que completar todos los campos requeridos")
}

}


