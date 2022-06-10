// requireds
const fs = require('fs');
const { resolve } = require('path');

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            ///console.log(`${i} * ${base} = ${i*base}`);
            data += `${i} * ${base} = ${i*base}\n`;
        }


        fs.writeFile(`tablasMultiplicar/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i*base}\n`;
            console.log(`${i} * ${base} = ${i*base}`);
        }
        resolve: data;

    })

}

module.exports = { crearArchivo, listarTabla }