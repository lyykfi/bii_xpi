import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VectorComponent } from 'app/components/vector/vector.component';
import { VectorsComponent } from 'app/components/vectors/vectors.component';

@NgModule({
    declarations: [
        AppComponent, VectorComponent, VectorsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
