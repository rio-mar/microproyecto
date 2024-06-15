// Realiza una solicitud a la API para obtener datos sobre el dólar
fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar?page=bcv')
  .then(response => response.json())
  .then(data => {

//Se pide el valor del euro que se encuentra en el atributo promedio 
const dolaroficial  = data.monitors.usd.price;
console.log(dolaroficial);
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
//tipos de plan
const basico = 300;
const premium = 800;

//calcular precio para dolares
const dolarBasico =  basico / dolaroficial;
const dolarPremium = premium / dolaroficial;

//para yuanes
const yenBasico =  basico / yenoficial;
const yenPremium = premium / yenoficial;
console.log(yenBasico);
//para euros
const euroBasico =  basico * eurooficial;
const euroPremium = premium / eurooficial;
console.log(euroBasico);

// Actualiza los valores en la tabla
//document.getElementById("unMes").textContent = valorBasico;
//document.getElementById("seisMeses").textContent = valorMedio;
//document.getElementById("unAnio").textContent = valorPremium;