import { phrase, winCombination } from "../consts";

const condition = (a: string, b: string, c: string) : boolean => a === b && a === c;

const length: number = phrase.length;

const check = (array: string[][]): string => {

    let win : boolean = winCombination.some(elem => {
        const [a, b, c] = elem;
        return (condition(array[a.i][a.j], array[b.i][b.j], array[c.i][c.j]))
    })

    return win ? phrase[Math.floor(Math.random() * length)] : ""
}

export { check }