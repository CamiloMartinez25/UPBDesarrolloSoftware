var arreglo = [
  {
    username: "Skywalker",
    contrasena: "MmNnOo09",
    PreguntaSeg: "¿Cuál es el apellido de soltera de tu mamá?",
    RespuestaSeg: "Soltera",
  },
  {
    username: "Sabine Wren",
    contrasena: "LlKkJj87",
    PreguntaSeg: "¿En qué ano se casaron tus padres?",
    RespuestaSeg: "1980",
  },
  {
    username: "Orellios",
    contrasena: "PpOoIi65",
    PreguntaSeg: "¿Cuál fue tu primer número de teléfono?",
    RespuestaSeg: "2145507",
  },
  {
    username: "Ezra Bridger",
    contrasena: "BbVvCc43",
    PreguntaSeg: "¿Cuál era el nombre de tu primera profesora?",
    RespuestaSeg: "Victoria",
  },
  {
    username: "Caleb Dume",
    contrasena: "HhGgFf21",
    PreguntaSeg: "¿Cuál era el modelo de tu primer carro?",
    RespuestaSeg: "Zastava",
  },
];

function filtrarUsername(arreglo) {
  return arreglo.filter(function (registro) {return registro.username.length > 10 })
    
}
console.log(arreglo);

console.log(filtrarUsername(arreglo));


