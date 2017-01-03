import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Pokemon } from './Pokemon';
import 'rxjs/Rx';

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon_list.component.html',
    styleUrls: ['./pokemon_list.component.css']
})

export class PokemonListComponent {
    title = 'Which pokemon ?';
    private apiUrl: string = "https://pokeapi.co/api/v2/";

    pokemons: Array<Pokemon>;

    constructor(private http: Http) {
        /*
         * @strRequest: string - the url needed to fetch data on pokeapi
         * @response.json().results: JSON Object - Return the returned data["results"] to JSON
         */
        let strRequest: string =  this.apiUrl + 'pokemon';

        console.log('strRequest : ', strRequest)
        this.http.get(strRequest)
            .map( (response) => {
                return response.json().results;
            })
            .map((pokemons: Array<any>) => {
                let result: Array<Pokemon> = []; // Define an empty array. It will be append with the fetched data
                if (pokemons) {
                    pokemons.forEach( (poke) => { // For each fetched pokemons, create new pokemon object
                        result.push(new Pokemon(poke.id, poke.name, poke.url)); // Push
                    });
                    return result;
                }
            })
            .subscribe( (res) => {
                this.pokemons = res
            });
    }
}
