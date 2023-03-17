export const FizzBuzzExamen = (number) =>{
    // Lanza un error si se pone un valor no númerico
    if (typeof number != 'number') throw new Error('El parametro debe ser un número')
    // Si el numero es multiplo de 2 devuelve mi nombre
    if (number % 2 == 0) return ('Victor')
    // Si el numero es multiplo de 3 devuelve mi primer apellido
    if (number % 3 == 0) return ('Lourenco')
    // Si el numero es multiplo de 11 devuelve mi segundo apellido
    if (number % 11 == 0) return ('González')
    // Si no se cumple ninguna de las condiciones de arriba, devuelve el número tal cual
    return(number)
}