import { Component, OnInit } from '@angular/core';
import { EMTHY_VECTOR } from 'app/data/vectors';

import Vectors from 'app/data/vectors';

import { Vector } from 'app/models/vector';
import { Result, ResultItem } from 'app/models/result';

import euclidean from 'app/distance/euclidean';
import minkowski from 'app/distance/minkowski';
import canberra from 'app/distance/canberra';
import chebyshev from 'app/distance/chebyshev';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
    title = 'app';

    /**
     * vectors
     */
    vectors: Vector[];

    vector = EMTHY_VECTOR;

    results: Array<Result>[];

    /**
     *
     * @method ngOnInit
     * @return {null}
     */
    ngOnInit() {
        this.getVectors();
    }

    /**
     *
     * @method getVectors
     */
    getVectors(): void {
        this.vectors = Vectors;
    }

    calculate() {
        const newResult = [];
        const euclideanResults = new Result();
        euclideanResults.name = 'Euclidean';

        const minkowskiResults = new Result();
        minkowskiResults.name = 'Minkowski';

        const canberraResults = new Result();
        canberraResults.name = 'Canberra';

        const chebyshevResults = new Result();
        chebyshevResults.name = 'Chebyshev';

        // euclidean
        this.vectors.forEach((item) => {
            const result = new ResultItem();
            result.name = item.name;
            result.result = euclidean(item.items, this.vector.items);

            euclideanResults.results.push(result);

            const mResult = new ResultItem();
            mResult.name = item.name;
            mResult.result = minkowski(item.items, this.vector.items);

            minkowskiResults.results.push(mResult);

            const cResult = new ResultItem();
            cResult.name = item.name;
            cResult.result = canberra(item.items, this.vector.items);

            canberraResults.results.push(cResult);

            const chResult = new ResultItem();
            chResult.name = item.name;
            chResult.result = chebyshev(item.items, this.vector.items);

            chebyshevResults.results.push(chResult);
        });

        newResult.push(euclideanResults);
        newResult.push(minkowskiResults);
        newResult.push(canberraResults);
        newResult.push(chebyshevResults);

        this.results = newResult;
    }
}
