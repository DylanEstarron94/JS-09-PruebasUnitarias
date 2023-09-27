/*

Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequenia que se puede "testear" o probar en una aplicacion, por ejemplo:

    - Ciclos
    - Funciones
    - Metodos
    - Etc.


Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma mucho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios

*/


//Escenario ficticio
/*function promedio (cal1, cal2, cal3){
    let promedio = (cal1 + cal2 + cal3) /3;

    if (promedio >= 6){
        console.log("Felicidades, estás aprobado");
    }
    else{
        console.log("Ya valiste morro, vas pa repe...");
    }

}

promedio (8, -8, 8);*/



//Creamos una calculadora básica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicación, división) para trabajar con pruebas unitarias


function suma (num1, num2){

    return num1 + num2;
}


function resta (num1, num2){

    return num1 - num2;
}


function mult (num1, num2){

    return num1 * num2;
}


function div (num1, num2){

    return num1 / num2;
}

module.exports = {suma, resta, mult, div};