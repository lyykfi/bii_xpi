/**
 *
 * @method Vector
 * @param  {number[]} items
 * @return {null}
 */
export class Vector {
    items: number[];

    name: string;

    constructor(name: string, items: number[]) {
        this.name = name;
        this.items = items;
    }
}
