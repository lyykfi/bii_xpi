import { Component, OnInit } from '@angular/core';

import { Vector } from 'app/models/vector';
import Vectors from 'app/data/vectors';

@Component({
    selector: 'app-vectors',
    templateUrl: './vectors.component.html',
    styleUrls: ['./vectors.component.css'],
})
export class VectorsComponent implements OnInit {
    /**
     * vectors
     */
    vectors: Vector[];

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
}
