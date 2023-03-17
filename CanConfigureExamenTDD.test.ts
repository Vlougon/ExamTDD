import { describe, expect, it } from "vitest";
import { canConfigureExamen } from "./CanConfigureExamenTDD";

describe('canConfigureExamen', () => {
    // Comprobamos que sea una función
    it('Should be a function', () =>{
        expect(canConfigureExamen).toBeTypeOf('function')
    })
    // Comprobamos que el primer parametro sea un una cade de valores
    it('Should throw if the first parameter is not a string', () =>{
        expect(() => canConfigureExamen(1, 'b')).toThrow()
    })
    // Comprobamos que el segundo parametro sea un una cade de valores
    it('Should trhow if the second parameter is not a string', () =>{
        expect(() => canConfigureExamen('1', 2)).toThrow()
    })
    // Comprobar que devuelve un boleano, ya sea true or false
    it('Should return a boolean', () =>{
        expect(canConfigureExamen('a', 'b')).toBeTypeOf('boolean')
    })
    // Comprobar que tengan el mismo numero de letras
    it('Should have, both parameters, the same length', () =>{
        expect(canConfigureExamen('abc', 'de')).toBe(false)
    })
    // Comprobar que tienen el mimso número de caracteres únicos
    it('Should have, both parametrs, the same amount of unique characters', () =>{
        expect(canConfigureExamen('abc', 'ded')).toBe(false)
    })
})