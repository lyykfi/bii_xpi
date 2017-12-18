import { Component, Input } from '@angular/core';

import { Vector } from 'app/models/vector';

@Component({
    selector: 'app-vectors',
    templateUrl: './vectors.component.html',
    styleUrls: ['./vectors.component.css'],
})
export class VectorsComponent {
    @Input() vectors: Vector[];
}
