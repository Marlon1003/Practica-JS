//Ejercicio 1

//*A
class Empleado {
    constructor(nombre, edad, salario) {
      this._nombre = nombre;
      this._edad = edad;
      this._salario = salario;
    }
    get detallesEmpleado(){
      return `Nombre: ${this._nombre},
      Edad: ${this._edad}, 
      Salario: ${this._salario}`;
    }
  }
  
  //*B
  class Gerente extends Empleado {
    constructor(nombre, edad, salario, departamento, empleados) {
      super(nombre, edad, salario);
      this._departamento = departamento;
      this._empleados = empleados;
    }
    get detallesGerente(){
      return `Nombre: ${this._nombre},
      Edad: ${this._edad}, 
      Salario: ${this._salario}, Departamento: ${this._departamento}, Empleados asignados: ${this._empleados}`;
    }
  }
  
  //*C
  class Desarrollador extends Empleado {
    constructor(nombre, edad, salario, lenguaje, proyectos) {
      super(nombre, edad, salario);
      this._lenguaje = lenguaje;
      this._proyectos = proyectos;
    }
    get detallesDesarrollador(){
      return `Nombre: ${this._nombre},
      Edad: ${this._edad}, 
      Salario: ${this._salario}, Lenguaje: ${this._lenguaje}, Proyectos asignados: ${this._proyectos}`;
    }
  }
  
  //* F
  
  // Creación de instancias
  let empleado1 = new Empleado("Marlon Daza", 30, 3000);
  let gerente1 = new Gerente("Gabriel Díaz", 40, 5000, "Ventas", 10);
  let desarrollador1 = new Desarrollador(
    "Jose Barboza",
    25,
    3500,
    "JavaScript",
    5
  );
  
  console.log(empleado1.detallesEmpleado);
  console.log(gerente1.detallesGerente);
  console.log(desarrollador1.detallesDesarrollador);


//* 2 Funcion para calcular la tabla de multiplicar

function tablaMultiplicacion(num) {
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

//Preguntar por un numero al usuario
let userNumber = parseInt(prompt("Ingrese un número para calcular su tabla de multiplicar del 1 al 10:"));

//Imprimir resultados llamando a la función
tablaMultiplicacion(userNumber);


//* 3

let numero = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

while (true) {
  let adivinanza = parseInt(prompt("Adivina el numero entre 1 y 100"));
  intentos+=1;

  if (adivinanza === numero) {
    alert(
      `Felicitaciones! Adivinaste el numero en ${intentos} intentos.`
    );
    break;

  } else if (adivinanza < numero) {
    alert("Muy bajo, intentalo otra vez.");
  } else {
    alert("Muy alto, intentalo otra vez.");
  }
}