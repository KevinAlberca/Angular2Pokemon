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
    pokemon: Pokemon;

    constructor(private route: ActivatedRoute, private http: Http) {}

    ngOnInit() {
        /*
         *
         */
        this.sub = this.route.params.subscribe(params => {
            this.pokemon_watched = params['name'];
        });
        this.getPokemonInformations(this.pokemon_watched);

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPokemonInformations(pokemon_name: string) {
        /*
         * @strRequest: string - the url needed to fetch data on pokeapi, concatenate with pokemon passed in params
         * @response.json().results: JSON Object - Return the returned data["results"] to JSON
         */
        let strRequest: string =  this.apiUrl + 'pokemon/' + pokemon_name;
        console.log('strRequest : ', strRequest)
        this.http.get(strRequest)
            .map( (response) => {
                // console.log('Response : ', response.json());
                return response.json();
            })
            .map((pokemon: Array<any>) => {
                console.log('Pokemon Response : ');
                console.log(pokemon);
                console.log('Types : ', pokemon['types']);

                // let types = pokemon['types'];
                // for (var i = 0; i < types.length; i++) {
                //     console.log(types[i].type.name);
                // }

                let poke_result: Pokemon = new Pokemon(
                                   pokemon['id'], // id
                                   pokemon['name'], // name
                                   pokemon['abilities'], // abilities
                                   pokemon['types'], // types
                                   pokemon['sprites']['front_default'] // imageUrl
                                );
                return poke_result;
            })
            .subscribe( (res) => {
                this.pokemon = res
            });
    }
}
