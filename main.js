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
const arregloF = [];
const arregloM = [];
const arregloN = [];
inicializarBDD().then(re => {
    //console.log(re)
    re.bdd.forEach(valor => {
        switch (valor.gender) {
            case 'female':
                arregloF.push(valor.gender);
                break;
            case 'male':
                arregloM.push(valor.gender);
                //console.log(arregloM);
                break;
            case 'n/a':
                arregloN.push(valor.gender);
                //console.log(arregloN);
                break;
        }
    });
    console.log('Arreglo FEMALE ',arregloF);
    console.log('ARREGLO MALE',arregloM);
    console.log('ARREGLO NINGUNO',arregloN);
});

const arregloY = [];
const arregloB = [];
const arregloR= [];
const arregloBr= [];
const arregloBg= [];
const arregloBk= [];
const arregloOr= [];
const arregloHa= [];
const arregloPin= [];

inicializarBDD().then(re => {
    //console.log(re)
    re.bdd.forEach(valor => {
        switch (valor.eye_color) {
            case 'yellow':
                arregloY.push(valor.eye_color);
                break;
            case 'blue':
                arregloB.push(valor.eye_color);
                
                break;
            case 'red':
            arregloR.push(valor.eye_color);
           
            break;

            case 'brown':
                arregloBr.push(valor.eye_color);
              
                break;


                case 'blue-gray':
                arregloBg.push(valor.eye_color);
                //console.log(arregloN);
                break;

            case 'black':
                arregloBk.push(valor.eye_color);
                //console.log(arregloN);
                break;
            case 'orange':
                arregloOr.push(valor.eye_color);
                //console.log(arregloN);
                break;

            case 'hazel':
                arregloHa.push(valor.eye_color);
                //console.log(arregloN);
                break;
                
                case 'pink':
                arregloPin.push(valor.eye_color);
                //console.log(arregloN);
                break;   
                
        }
    });
    console.log(arregloY);
    console.log(arregloB);
    console.log(arregloR);
    console.log(arregloBr);
    console.log(arregloBg);
    console.log(arregloBk);
    console.log(arregloOr);
    console.log( arregloHa);
    console.log(arregloPin);
    
});

inicializarBDD().then(re => {
    //console.log(re)
    re.bdd.forEach(valor => {
        switch (valor.hair_color) {
            case 'yellow':
                arregloY.push(valor.eye_color);
                break;
            case 'blue':
                arregloB.push(valor.eye_color);

                break;
            case 'red':
                arregloR.push(valor.eye_color);

                break;

            case 'brown':
                arregloBr.push(valor.eye_color);

                break;


            case 'blue-gray':
                arregloBg.push(valor.eye_color);
                //console.log(arregloN);
                break;

        }
    });
    console.log(arregloY);
    console.log(arregloB);
    console.log(arregloR);
    console.log(arregloBr);
    console.log(arregloBg);
});








