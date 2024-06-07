
    


let citas = [

  [
    "Estar solo no tiene nada que ver con cuántas personas hay alrededor", "Revolutionary Road", "Richard Yates"
  ],
  [
    "Las personas libres jamás podrán concebir lo que los libros significan para quienes vivimos encerrados", "El diario de Ana Frank", "Ana Frank"
  ],
  [
    "Y cuando te hayas consolado (uno siempre termina por consolarse), te alegrarás de haberme conocido", "El Principito", "Antoine de Saint-Exupéry"
  ],
  [
    "Que cosa tan traicionera pensar que una persona es más que una persona", "Paper Towns", "John Green"
  ],
  [
    "“No puedo volver al pasado porque entonces era una persona diferente.” - 'Alicia en el País de las Maravillas', Lewis Carroll",
  ],
  [
    "“No hay nada como regresar a un lugar que sigue igual para descubrir cuánto has cambiado.” - 'El gran Gatsby', F. Scott Fitzgerald",
  ],
  [
    "“La felicidad solo es real cuando se comparte.”",  'Hacia rutas salvajes', "Jon Krakauer"
  ], 
  [
    "Solo después de haber perdido todo, somos libres de hacer cualquier cosa.", "El club de la lucha", "Chuck Palahniuk"
  ]
  

];
  
// Obtener un índice aleatorio del array de citas
var indiceAleatorio = Math.floor(Math.random() * citas.length);
  
// Obtener la cita aleatoria usando el índice aleatorio
var citaAleatoria = citas[indiceAleatorio];
  
// Mostrar la cita en la página
document.getElementById("cita").innerHTML = citaAleatoria[0];
document.getElementById("autor").innerHTML = citaAleatoria[1];
document.getElementById("libro").innerHTML = citaAleatoria[2];












// let Lista_citas = [
//     ["Estar solo no tiene nada que ver con cuántas personas hay alrededor", 
//     "Las personas libres jamás podrán concebir lo que los libros significan para quienes vivimos encerrados", 
//     "Y cuando te hayas consolado (uno siempre termina por consolarse), te alegrarás de haberme conocido", 
//     "Que cosa tan traicionera pensar que una persona es más que una persona", 
//     "Solo después de haber perdido todo, somos libres de hacer cualquier cosa.",
//     "Nuestras vidas se definen por las oportunidades, incluso las que perdemos",
//     "No puedo volver al pasado porque entonces era una persona diferente",
//     "No hay nada como regresar a un lugar que sigue igual para descubrir cuánto has cambiado.",
//     "La felicidad solo es real cuando se comparte"
//     ],
//     [
//       "Revolutionary Road",
//       "El diario de Ana Frank",
//       "El Principito",
//       "Paper Towns",
//       "El club de la lucha", 
//       "El curioso caso de Benjamin Button",
//       "Alicia en el País de las Maravillas",
//       "El gran Gatsby",
//       "Hacia rutas salvajes",

//     ],
//     [
//       "Richard Yates",
//       "Ana Frank",
//       "Antoine de Saint-Exupéry",
//       "John Green",
//       "Chuck Palahniuk",
//       "F. Scott Fitzgerald",
//       "Lewis Carroll",
//       "F. Scott Fitzgerald",
//       "Jon Krakauer"
//     ]
// ]
// function Cita_azar(Maximo) {
//   let i = Math.floor(Math.random()*Maximo)
//   document.getElementById("cita-texto").innerHTML = Lista_citas
//   alert(i)
// }
// Cita_azar(8)
