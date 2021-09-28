var arreglo = [
  {
    Username: "Skywalker",
    Contrasena: "MmNnOo09",
    PreguntaSeg: "¿Cuál es el apellido de soltera de tu mamá?",
    RespuestaSeg: "Soltera",
  },
  {
    Username: "Sabine Wren",
    Contrasena: "LlKkJj87",
    PreguntaSeg: "¿En qué ano se casaron tus padres?",
    RespuestaSeg: "1980",
  },
  {
    Username: "Orellios",
    Contrasena: "PpOoIi65",
    PreguntaSeg: "¿Cuál fue tu primer número de teléfono?",
    RespuestaSeg: "2145507",
  },
  {
    Username: "Ezra Bridger",
    Contrasena: "BbVvCc43",
    PreguntaSeg: "¿Cuál era el nombre de tu primera profesora?",
    RespuestaSeg: "Victoria",
  },
  {
    Username: "Caleb Dume",
    Contrasena: "HhGgFf21",
    PreguntaSeg: "¿Cuál era el modelo de tu primer carro?",
    RespuestaSeg: "Zastava",
  },
];

function filtrarUsername(arreglo) {
  return arreglo.filter(function (registro) {return registro.Username.length > 10 })
    
}
console.log(arreglo);

console.log(filtrarUsername(arreglo));


