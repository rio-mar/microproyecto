// Realiza una solicitud a la API para obtener datos sobre el dólar
fetch("https://ve.dolarapi.com/v1/dolares/oficial")
  .then(response => response.json()) // Convierte la respuesta a formato JSON
  .then(data => {
  const d = data.promedio;
console.log(d);

  });
