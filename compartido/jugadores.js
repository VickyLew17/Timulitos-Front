/*fetch('')                         // Ruta al archivo JSON
  .then(response => response.json())        // Convertir la respuesta en JSON
  .then(data => {              // Aquí tienes acceso al JSON en formato de objeto JS
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
        juegosRepetidos: "Burbujero y Splash!",
        ultimaSesion: "18/09/2026",
        jugoCon: "Franchu",
        id: "0001",
        animal: "pollito",
        color: "rosa",
        puntos: 222,
        tiempoTotal: "2 horas y  30 minutos"   ,
        actividad: [
            { juego: "Burbujero", veces: 1, minutos: 4 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 4, minutos: 10 },
            { juego: "Tiro Libre", veces: 1, minutos: 4 },
            { juego: "Zoo", veces: 6, minutos: 15 },
            { juego: "Destellos", veces: 4, minutos: 10 },
            { juego: "Magia", veces: 1, minutos: 4 }            
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 30 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 40 },
            { fecha: "Octubre 04", minutos: 25 },
            { fecha: "Octubre 20", minutos: 30 }
        ]
    },
    {
        nombre: "Franchu",
        tiempo: "20 minutos",
        juegosRepetidos: "Banda Loca",
        ultimaSesion: "19/09/2026",
        jugoCon: "Liam_cht",
        id: "0002",
        animal: "conejo",
        color: "violeta",
        puntos: 456,
        tiempoTotal: "32 minutos"   ,
        actividad: [
            { juego: "Burbujero", veces: 8, minutos: 40 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 2, minutos: 10 },
            { juego: "Tiro Libre", veces: 4, minutos: 14 },
            { juego: "Zoo", veces: 3, minutos: 25 },
            { juego: "Destellos", veces: 6, minutos: 12 },
            { juego: "Magia", veces: 1, minutos: 4 }            
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 2 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 30 },
            { fecha: "Octubre 04", minutos: 28 },
            { fecha: "Octubre 20", minutos: 34 }
        ]

    },
    {
        nombre: "Coco",
        tiempo: "10 minutos",
        juegosRepetidos: "Zoo",
        ultimaSesion: "17/09/2026",
        jugoCon: "Delfi.67",
        id: "0003",
        animal: "conejo",
        color: "verde",
        puntos: 67,
        tiempoTotal: "2 horas y  30 minutos"   ,
        actividad: [
            { juego: "Burbujero", veces: 1, minutos: 7 },
            { juego: "Banda Loca", veces: 6, minutos: 23 },
            { juego: "Splash!", veces: 2, minutos: 53 },
            { juego: "Tiro Libre", veces: 16, minutos: 43 },
            { juego: "Zoo", veces: 4, minutos: 15 },
            { juego: "Destellos", veces: 2, minutos: 10 },
            { juego: "Magia", veces: 9, minutos: 4 }            
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 20 },
            { fecha: "Septiembre 17", minutos: 17 },
            { fecha: "Septiembre 21", minutos: 41 },
            { fecha: "Octubre 04", minutos: 53 },
            { fecha: "Octubre 20", minutos: 30 }
        ]

    },
    {
        nombre: "Delfi.67",
        tiempo: "25 minutos",
        juegosRepetidos: "Splash!",
        ultimaSesion: "16/09/2026",
        jugoCon: "Coco",
        id: "0004",
        animal: "cerdo",
        color: "celeste",
        tiempoTotal: "2 horas y  30 minutos"   ,
        actividad: [
            { juego: "Burbujero", veces: 1, minutos: 4 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 4, minutos: 10 },
            { juego: "Tiro Libre", veces: 1, minutos: 4 },
            { juego: "Zoo", veces: 6, minutos: 15 },
            { juego: "Destellos", veces: 4, minutos: 10 },
            { juego: "Magia", veces: 1, minutos: 4 }
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 15 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 56 },
            { fecha: "Octubre 04", minutos: 31 },
            { fecha: "Octubre 21", minutos: 42 }
        ]           

    },
    {
        nombre: "Kiky",
        tiempo: "15 minutos",
        juegosRepetidos: "Burbujero y Splash!",
        ultimaSesion: "18/09/2026",
        jugoCon: "Usuario 8",
        id: "0005",
        animal: "pollito",
        color: "violeta",
        tiempoTotal: "4 horas y  30 minutos",
        actividad: [
            { juego: "Burbujero", veces: 8, minutos: 40 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 2, minutos: 10 },
            { juego: "Tiro Libre", veces: 4, minutos: 14 },
            { juego: "Zoo", veces: 3, minutos: 25 },
            { juego: "Destellos", veces: 6, minutos: 12 },
            { juego: "Magia", veces: 1, minutos: 4 }            
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 30 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 40 },
            { fecha: "Octubre 04", minutos: 25 },
            { fecha: "Octubre 20", minutos: 30 }
        ]       
    },
    {
        nombre: "Cab.cata",
        tiempo: "20 minutos",
        juegosRepetidos: "Banda Loca",
        ultimaSesion: "19/09/2026",
        jugoCon: "Fede_Don_Satur",
        id: "0006",
        animal: "cerdo",
        color: "rosa",
        tiempoTotal: "1 hora y  30 minutos"   ,
        actividad: [
            { juego: "Burbujero", veces: 1, minutos: 4 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 4, minutos: 10 },
            { juego: "Tiro Libre", veces: 1, minutos: 4 },
            { juego: "Zoo", veces: 6, minutos: 15 },
            { juego: "Destellos", veces: 4, minutos: 10 },
            { juego: "Magia", veces: 1, minutos: 4 }
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 30 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 40 },
            { fecha: "Octubre   04", minutos: 25 },
            { fecha: "Octubre 20", minutos: 30 }
        ]           

    },
    {
        nombre: "Fede_Don_Satur",
        tiempo: "67 minutos",
        juegosRepetidos: "Zoo",
        ultimaSesion: "17/09/2026",
        jugoCon: "Cab.cata",
        id: "0007",
        animal: "conejo",
        color: "rosa",
        tiempoTotal: "2 horas y  30 minutos"   ,        
        actividad: [
            { juego: "Burbujero", veces: 1, minutos: 4 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 4, minutos: 10 },
            { juego: "Tiro Libre", veces: 1, minutos: 4 },
            { juego: "Zoo", veces: 6, minutos: 15 },
            { juego: "Destellos", veces: 4, minutos: 10 },
            { juego: "Magia", veces: 1, minutos: 4 }
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 30 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 40 },
            { fecha: "Octubre   04", minutos: 25 },
            { fecha: "Octubre 20", minutos: 30 }
        ]

    },

    {
        nombre: "Jochu",
        tiempo: "25 minutos",
        juegosRepetidos: "Splash!",
        ultimaSesion: "16/09/2026",
        jugoCon: "Usuario 7",
        id: "0008",
        animal: "cerdo",
        color: "verde",
        puntos: 15,
        tiempoTotal: "1 hora y  30 minutos"   ,
        actividad: [
            { juego: "Burbujero", veces: 1, minutos: 4 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 4, minutos: 10 },
            { juego: "Tiro Libre", veces: 1, minutos: 4 },
            { juego: "Zoo", veces: 6, minutos: 15 },
            { juego: "Destellos", veces: 4, minutos: 10 },
            { juego: "Magia", veces: 1, minutos: 4 }
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 30 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 40 },
            { fecha: "Octubre 04", minutos: 25 },
            { fecha: "Octubre 20", minutos: 30 }
        ]

    },
    {
        nombre: "user 9",
        tiempo: "15 minutos",
        juegosRepetidos: "Burbujero y Splash!",
        ultimaSesion: "18/09/2026",
        jugoCon: "Franchu",
        id: "0009",
        animal: "pollito",
        color: "celeste",
        puntos: 178,
        tiempoTotal: "2 horas y  30 minutos"   ,
        actividad: [
            { juego: "Burbujero", veces: 1, minutos: 4 },
            { juego: "Banda Loca", veces: 6, minutos: 15 },
            { juego: "Splash!", veces: 4, minutos: 10 },
            { juego: "Tiro Libre", veces: 1, minutos: 4 },
            { juego: "Zoo", veces: 6, minutos: 15 },
            { juego: "Destellos", veces: 4, minutos: 10 },
            { juego: "Magia", veces: 1, minutos: 4 }
        ],
        progreso: [
            { fecha: "Septiembre 10", minutos: 30 },
            { fecha: "Septiembre 17", minutos: 15 },
            { fecha: "Septiembre 21", minutos: 40 },
            { fecha: "Octubre 04", minutos: 25 },
            { fecha: "Octubre 20", minutos: 30 }
        ]

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


async function cargarJugadoresDelServidor(){
    try {
        const respuesta = await fetch(SERVIDOR + "/jugadores");

        if(!respuesta.ok){      
            return;
        }

        jugadores = await respuesta.json();

        guardarJugadores();
    }

    catch (error) {
        console.log("no se pudo conectar con el servidor, usa los jugadores q guarde");
    
    }
}
