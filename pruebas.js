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

inicializarBDD().then(re => {
        //console.log(re)
        re.bdd.forEach(valor => {
                //console.log (valor.gender)
            console.log (valor.eye_color)
            //console.log (valor.hair_color)
            }
        )
    }
);