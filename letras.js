
const fs = require('fs');
const rxjs = require('rxjs');

function inicializarBDD() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                error: error;
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}

const arregloRespuesta = [
    {
        a: true
    },
    {
        b: true
    },
    {
        c: true
    },
    {
        d: true
    },
    {
        e: true
    },
    {
        f: true
    },
    {
        g: true
    },
    {
        h: true
    },
    {
        i: true
    },
    {
        j: false
    },
    {
        k: true
    },
    {
        l: true
    },
    {
        n: true
    },
    {
        o: false
    },
    {
        p: true
    },
    {
        q: true
    },
    {
        r: true
    },
    {
        s: true
    },
];
inicializarBDD().then(nombrePersonaje => {
    nombrePersonaje.bdd.forEach(valor => {
        const vectorNombres = valor.name.split('');
        vectorNombres.forEach((letraNombre, indice) => {
            arregloRespuesta.forEach(letra=>{
                valor.name
                if (letra[letraNombre]){

                    //console.log('tienes',letra,letra[letraNombre])

                }else{
                    //console.log('no tienes')
                }

            })

        });
    });
    console.log('ARREGLO LETRA',arregloRespuesta);
});
