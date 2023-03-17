export const distribuiteGiftVLG = (packOfGifs, reinDeers) => {
    // Lanza un error si el primer parametro no es un String
    if(typeof packOfGifs != 'string') throw new Error('El primer parametro debe ser una cadena de valores')
    // Lanza un error si el segundo parametro no es un String
    if(typeof reinDeers != 'string') throw new Error('El segundo parametro también debe ser una cadena de valores')

    /*
     Creamos 2 constantes, en una almacenaremos la longitud del nombre del regalo
     y en la otra almacenaremos la longitud del nombre del Reno y lo multiplicaremos por 4.
     Finalmente, devolveremos una operacion mátemica redondea que nos indicará la cantiddad de 
     regalos que puede llevar el reno
    */
    const gifWeigh = packOfGifs.length
    const reainDeerWeigh = reinDeers.length*4
    return Math.floor(reainDeerWeigh/gifWeigh)
}