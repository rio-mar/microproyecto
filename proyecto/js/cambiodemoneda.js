// Realiza una solicitud a la API para obtener datos sobre el dólar
fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar?page=bcv')
  .then(response => response.json())
  .then(data => {

//Se pide el valor del euro que se encuentra en el atributo promedio 
const dolarficial  = data.monitors.usd.price;
console.log(dolarficial);
});


  //api para valor del euro y yen chino en bs

  fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar?page=bcv')
  .then(response => response.json())
  .then(data => {

//Se pide el valor del euro que se encuentra en el atributo promedio 
const eurooficial  = data.monitors.eur.price;
console.log(eurooficial);

  });


  fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar?page=bcv')
  .then(response => response.json())
  .then(data => {

//Se pide el valor del euro que se encuentra en el atributo promedio 
const yenoficial  = data.monitors.cny.price;
console.log(yenoficial);
});

  