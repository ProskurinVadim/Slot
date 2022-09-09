import { items } from "../consts";

const length: number = items.length;

const generateArray = (oldArray: string[]): string[] => {

    const generated: string[] = [...oldArray];

    for (let i = 0; i < 17; i++) {
        const i: number = Math.floor(Math.random() * length);
        generated.push(items[i]);
    }

    return generated
}

export { generateArray }