import { Component, Input } from '@angular/core';

import { Vector } from 'app/models/vector';

@Component({
    selector: 'app-vector',
    templateUrl: './vector.component.html',
    styleUrls: ['./vector.component.css']
})
export class VectorComponent {
    @Input() vector: Vector;

    @Input() editable = false;

    cellClick(i: number, j: number, value: number) {
        const items = this.vector.items;

        this.vector.items[(i * (items.length / 5)) + j] = value === 2 ? 1 : 2;
    }

    get matrix(): Array<number>[] {
        if (this.vector) {
            const result = [];
            const separate = 5;
            const items = this.vector.items;

            let line = [];

            items.forEach((item, index) => {
                if (index % separate === 0 && index !== 0 || index === items.length - 1) {
                    if (index === items.length - 1) {
                        line.push(item);
                    }

                    result.push(line);
                    line = [];
                }

                line.push(item);
            });

            return result;
        }
    }
}
