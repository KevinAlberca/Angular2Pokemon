import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from '../Pokemon';
import 'rxjs/Rx';

@Component({
    selector: 'pokemon-detail',
    templateUrl: './details.component.html',
})

export class PokemonDetailsComponent {
    private sub:any;
    pokemon_watched: string;
    private apiUrl: string = "https://pokeapi.co/api/v2/";

    constructor(private route: ActivatedRoute, private http: Http) {}

    ngOnInit() {
        /*
         *
         */
        this.sub = this.route.params.subscribe(params => {
            this.pokemon_watched = params['name'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
