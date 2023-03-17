import {expect, describe, it } from "vitest";
import { FizzBuzzExamen } from "./FizzBuzzExamenTDD";


describe('FizzBuzzExamen', () =>{
    // Comprobamos que sea una función
    it('Should be a function', () =>{
        expect(FizzBuzzExamen).toBeTypeOf('function')
    })
    // Comprobamos que el primer parametro sea un numero
    it('Should throw error if the parameter is not a integer', () =>{
        expect(FizzBuzzExamen).toThrow()
    })
    // Si el numero es multiplo de 2, devlverá mi nombre
    it('Should retunr my name is the number is multiply of 2', () =>{
        expect(FizzBuzzExamen(2)).toBe('Victor')
    })
    // Si el numero es multiplo de 3, devlverá mi primer apellido
    it('Should return my first surname if the number is multiply of 3', () =>{
        expect(FizzBuzzExamen(3)).toBe('Lourenco')
    })
    // Si el numero es multiplo de 11, devlverá mi segundo apellido
    it('Should return my second surname if the number is multiply of 11', () =>{
        expect(FizzBuzzExamen(11)).toBe('González')
    })
    // Si todo lo demás falla, devolverá el número tal cual
    it('Should return the number if this is not multiple of 2, 3 nor 11', () =>{
        expect(FizzBuzzExamen(1)).toBe(1)
    })
})