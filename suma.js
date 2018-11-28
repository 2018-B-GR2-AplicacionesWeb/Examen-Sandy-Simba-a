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
let acumulador=0;
inicializarBDD().then(valor=>{
        valor.bdd.forEach((valor,index)=>{
            //console.log(acumulador)
            if((valor.mass!="unknown")){
                acumulador += parseInt(valor.mass)
                console.log('SUMA: ',acumulador)
            }

        })

    }


)