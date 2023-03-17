export const canConfigureExamen = (from, to) =>{
    // Lanza un error si el primer parametro no es un String
    if(typeof from != 'string') throw new Error('El primer parametro debe ser una cade de valores.')
    // Lanza un error si el segundo parametro no es un String
    if(typeof to != 'string') throw new Error('El segundo parametro también debe ser una cadena de valores')

    // Creamos una constante, la cual verificará si el primer parametro tiene la mismo longitud qu el segundo
    const sameLength = from.length == to.length
    if(!sameLength) return false

    // Creamos una constante, la cual verificará que ambos paremetros tengan la misma cantidad de caracteres únicos
    const sameUniqueCharacters = new Set(from).size == new Set(to).size
    if(!sameUniqueCharacters) return false

    // Devolvemos true/verdadero
    return true
}