/* fetch('RUTA DEL JSON')                         // Ruta al archivo JSON
  .then(response => response.json())        // Convertir la respuesta en JSON
  .then(datata => {              // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Jugadores cargados desde JSON:');
    console.log(data);
    jugadores = data;                    // Asignar el JSON a la variable comidas
  })
  .catch(error => {                 // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });


const jugadores = [];*/


const jugadoresIniciales = [
    {
        nombre: "Liam_cht",
        tiempo: "15 minutos",
        juegosRepetidos: "Burbujas y Pesca",
        ultimaSesion: "18/09/2026",
        jugoCon: "Franchu",
        id: "0001",
        animal: "pollito",
        color: "rosa"
    },
    {
        nombre: "Franchu",
        tiempo: "20 minutos",
        juegosRepetidos: "Banda Loca",
        ultimaSesion: "19/09/2026",
        jugoCon: "Liam_cht",
        id: "0002",
        animal: "conejo",
        color: "violeta"

    },
    {
        nombre: "Coco",
        tiempo: "10 minutos",
        juegosRepetidos: "Granja Sonora",
        ultimaSesion: "17/09/2026",
        jugoCon: "Delfi.67",
        id: "0003",
        animal: "conejo",
        color: "verde"

    },
    {
        nombre: "Delfi.67",
        tiempo: "25 minutos",
        juegosRepetidos: "Pesca",
        ultimaSesion: "16/09/2026",
        jugoCon: "Coco",
        id: "0004",
        animal: "cerdo",
        color: "celeste"

    },
    {
        nombre: "Kiky",
        tiempo: "15 minutos",
        juegosRepetidos: "Burbujas y Pesca",
        ultimaSesion: "18/09/2026",
        jugoCon: "Usuario 8",
        id: "0005",
        animal: "pollito",
        color: "violeta"

    },
    {
        nombre: "Cab.cata",
        tiempo: "20 minutos",
        juegosRepetidos: "Banda Loca",
        ultimaSesion: "19/09/2026",
        jugoCon: "Fede_Don_Satur",
        id: "0006",
        animal: "cerdo",
        color: "rosa"

    },
    {
        nombre: "Fede_Don_Satur",
        tiempo: "67 minutos",
        juegosRepetidos: "Granja Sonora",
        ultimaSesion: "17/09/2026",
        jugoCon: "Cab.cata",
        id: "0007", 
        animal: "conejo",
        color: "rosa"

    },
    
    {
        nombre: "Jochu",
        tiempo: "25 minutos",
        juegosRepetidos: "Pesca",
        ultimaSesion: "16/09/2026",
        jugoCon: "Usuario 7",
        id: "0008",
        animal: "cerdo",
        color: "verde"

    },
    {
        nombre: "user 9",
        tiempo: "15 minutos",
        juegosRepetidos: "Burbujas y Pesca",
        ultimaSesion: "18/09/2026",
        jugoCon: "Franchu",
        id: "0009",
        animal: "pollito",
        color: "celeste"

    }
];

const jugadoresGuardados = localStorage.getItem('jugadores');

let jugadores;

if (jugadoresGuardados === null) {
    jugadores = jugadoresIniciales;
} else {
    jugadores = JSON.parse(jugadoresGuardados);
}

function guardarJugadores() {
    localStorage.setItem('jugadores', JSON.stringify(jugadores));
}