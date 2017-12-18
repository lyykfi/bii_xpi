/**
 *
 * @method Result
 * @param  {number[]} items
 * @return {null}
 */
export class Result {
    name: string;

    results: ResultItem[] = [];
}

export class ResultItem {
    name: string;

    result: number;
}
