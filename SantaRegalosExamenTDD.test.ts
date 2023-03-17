import { describe, expect, it } from "vitest";
import { distribuiteGiftVLG } from "./SantaRegalosExamenTDD";

describe('distribuiteGiftVLG', () => {
    // Comprobamos que sea una función
    it('Should be a functioin', () => {
        expect(distribuiteGiftVLG).toBeTypeOf('function')
    })
    // Comprobamos que el primer parametro sea un una cade de valores
    it('Should throw if the first parameter is not a string', () => {
        expect(() => distribuiteGiftVLG(1, 'b')).toThrow()
    })
    // Comprobamos que el segundo parametro sea un una cade de valores
    it('Should trhow if the second parameter is not a string', () =>{
        expect(()=> distribuiteGiftVLG('a', 1)).toThrow()
    })
    // Comprobamos de que el reno pueda llevar hasta 4 veces el peso de regalos en base a su peso,
    // es decir, en base a la longitud de su nombre y el del regalo
    it('Should the reindeers transport 4 times the legnth of the gifs', () => {
        expect(distribuiteGiftVLG('pistola', 'Antonio')).toBe(4)
    })
})