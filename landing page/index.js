const idHref = document.querySelectorAll('a[href^="#"]');
const nav = document.querySelector("nav ul");
var navList = document.getElementById("nav-lists");

idHref.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = document.querySelector(this.getAttribute("href"));
    href.scrollIntoView({
      behavior: "smooth",
    });
  });
});

function Show() {
    navList.classList.add("_Menus-show");
}
  
function Hide() {
    navList.classList.remove("_Menus-show");
}
  

var messages = [
    "“Estar solo no tiene nada que ver con cuántas personas hay alrededor.” — 'Revolutionary Road', Richard Yates",
    "“Las personas libres jamás podrán concebir lo que los libros significan para quienes vivimos encerrados.” — 'El diario de Ana Frank', Ana Frank",
    "“Y cuando te hayas consolado (uno siempre termina por consolarse), te alegrarás de haberme conocido.” — 'El Principito', Antoine de Saint-Exupéry",
    "“Que cosa tan traicionera pensar que una persona es más que una persona.” — 'Paper Towns', John Green",
    "“Solo después de haber perdido todo, somos libres de hacer cualquier cosa.”- El club de la lucha Chuck Palahniuk",
    "“Nuestras vidas se definen por las oportunidades, incluso las que perdemos.” — El curioso caso de Benjamin Button, F. Scott Fitzgerald.",
    "“No puedo volver al pasado porque entonces era una persona diferente.” - 'Alicia en el País de las Maravillas', Lewis Carroll",
    "“No hay nada como regresar a un lugar que sigue igual para descubrir cuánto has cambiado.” - 'El gran Gatsby', F. Scott Fitzgerald",
    "“La felicidad solo es real cuando se comparte.” - 'Hacia rutas salvajes', Jon Krakauer"
    
];






















let Lista_citas = [
    ["Estar solo no tiene nada que ver con cuántas personas hay alrededor", 
    "Las personas libres jamás podrán concebir lo que los libros significan para quienes vivimos encerrados", 
    "Y cuando te hayas consolado (uno siempre termina por consolarse), te alegrarás de haberme conocido", 
    "Que cosa tan traicionera pensar que una persona es más que una persona", 
    "Nuestras vidas se definen por las oportunidades, incluso las que perdemos",
    
    ],
    [],
    []
]