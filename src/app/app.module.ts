import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Personal import Here
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { PokemonListComponent } from './Pokemon/List/list.component';
import { PokemonDetailsComponent } from './Pokemon/Details/details.component';

const appRoutes: Routes = [
    { path: 'pokemon', component: PokemonListComponent },
    { path: 'pokemon/:name:', component: PokemonDetailsComponent }
];

@NgModule({
    declarations: [
        AppComponent, 
        PokemonListComponent,
        PokemonDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // Personal Import
        RouterModule.forRoot(appRoutes),
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
