let contadorEdad =0;
for (let i =0; i<=10; i++){
    
    txt=parseInt(prompt("Por favor ingrese su edad: "));
if (txt>=18)

{
    contadorEdad++;
    alert("Sos mayor de edad, podes acceder");
}

else{
    alert("Sos menor de edad, no podes acceder");
}

}

console.log("La cantidad de personas mayores de edad es: " + contadorEdad)

console.log("La cantidad de personas menores de edad es: " + contadorEdad)


