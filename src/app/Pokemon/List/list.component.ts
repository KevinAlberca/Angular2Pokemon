import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { PokemonList } from '../List';
import 'rxjs/Rx';

@Component({
    selector: 'pokemon-list',
    templateUrl: './list.component.html',
})

export class PokemonListComponent {
    title = 'Which pokemon ?';
    private apiUrl: string = "https://pokeapi.co/api/v2/";

    pokemons: Array<PokemonList>;

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
                let result: Array<PokemonList> = []; // Define an empty array. It will be append with the fetched data
                if (pokemons) {
                    pokemons.forEach( (poke) => { // For each fetched pokemons, create new pokemon object
                        result.push(new PokemonList(poke.id, poke.name, poke.url)); // Push
                    });
                    return result;
                }
            })
            .subscribe( (res) => {
                this.pokemons = res
            });
    }
}
