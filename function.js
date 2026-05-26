//EJERCICIOS TEMA GRUPO #5
//funcion de tipo expresion 
const sumar = function(a, b) {
  return a + b;
};

console.log(sumar(3, 4));

//funcion de tipo Arrow
const restar = (a, b) => a - b;

console.log(restar(10, 5));

//funcion callback
function procesarOperacion(a, b, operacion) {
  return operacion(a, b);
}

console.log(procesarOperacion(6, 2, sumar));
console.log(procesarOperacion(6, 2, restar));
console.log('')







//GRUPO #1
const convertidor = function(a){
  console.log('EJERCICIO #1')
 console.log((a * 1.8)+32 + " °F");
 console.log('')
}

convertidor(45);


//GRUPO #2
console.log('EJERCICIO #2')
let animales = ["Perro", "Gatoo", "paloma", "Caballo", "vaca"]

console.log(animales[2]);
console.log(animales[3]);
animales [4] = "Cocodrilo"

console.log(animales)
console.log('')

//GRUPO #3
console.log('EJERCICIO #3')
class Usuario {
  constructor(nombre, email, contrasena) {
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
  }

  obtenerInformacion() {
    return `Nombre: ${this.nombre} | Email: ${this.email} | Contraseña: ${this.contrasena}`;
  }

  validarDatos() {    
    const regexContrasena = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const contrasenaValida = regexContrasena.test(this.contrasena);

    return {
      contrasenaOk: contrasenaValida
    };
  }
}

const usuario1 = new Usuario("Carlos Mendoza", "carlos@mail.com", "Admin123**");
console.log(usuario1.validarDatos()); 


const usuario2 = new Usuario("Carlos Mendoza", "carlos@mail.com", "admin123**");
console.log(usuario2.validarDatos());    
console.log('')


//GRUPO #4
console.log('EJERCICIO #4')
const calculadora = function(operacionC, numero1, numero2){
  switch(operacionC){

    case 1:
    console.log(numero1 + numero2)
    break;

    case 2:
    console.log(numero1 - numero2)
    break;

    case 3:
    console.log(numero1 * numero2)
    break;

    case 4:
    console.log(numero1 / numero2)
    break;
    
  }
}

calculadora(3, 60, 12)
console.log('')

//GRUPO #5
console.log('EJERCICIO #5')

const productos = [
    { nombre: "Laptop", enOferta: true },
    { nombre: "Mouse", enOferta: false },
    { nombre: "Teclado", enOferta: true },
    { nombre: "Monitor", enOferta: false },
    { nombre: "Audífonos", enOferta: true }
];

const filtrarEnOferta = (productos) => {
    
    return productos.filter(producto => producto.enOferta === true);
};

const productosEnOferta = filtrarEnOferta(productos);

console.log(productosEnOferta);

