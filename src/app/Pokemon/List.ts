export class PokemonList {
	id: number;
	name: string;
	apiUrl: string;

	constructor(id, name, apiUrl) {
		this.id = id;
		this.name = name;
		this.apiUrl = apiUrl;
	}

}