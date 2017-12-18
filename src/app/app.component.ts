import { Component } from '@angular/core';
import { EMTHY_VECTOR } from 'app/data/vectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    vector = EMTHY_VECTOR;
}
