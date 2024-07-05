//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola. 

let numeros = 1

while ( numeros  <= 10 ) {
    console.log(numeros);
    numeros++
    
}; 

/* Crea una variable "nota" y asígnale un valor numérico.
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. */

let nota = parseInt(Math.random()* 10) + 1; 

    if (nota >= 7) {
        console.log(` Has aprobado con un: ${nota} `)
    }
    else{
        console.log(` Has reprobado con un: ${nota} `)
        
    }; 

/* Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando
un if-else y muestra el mensaje correspondiente.  */

let number = -7;

if ( number === 0 ) {
    console.log(`El numero es: ${number}`);
    
} else if(number > 0) {
    console.log(` El numero ${number} es positivo `);
}
else{
    console.log(` El numero ${number} es negativo `);
}; 

/* Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un 
mensaje apropiado en la consola. */

let edad = 13; 

if (edad >= 18) {
    console.log(`Tienes la edad permitida. Edad de usuario: ${edad} `);
} else {
    console.log(`No tienes la edad permitida. Tu edad es: ${edad}`);
};

/* 
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

let valor1 = 323;  

let valor2 = 76; 

let result = valor1 - valor2;
 
console.log(` La diferencia entre ${valor1} y ${valor2} es: ${result} `);  


/* Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */

const dia = "Lunes"
 
 
if (dia == "Sábado" || "Domingo") {
    console.log("Ten un buen fin de semana"); 
} else {
    console.log("Es semana"); 
    
} 
   

