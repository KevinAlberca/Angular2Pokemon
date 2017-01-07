export class Pokemon {
	id: number;
	name: string;
	abilities: Array<any>;
	types: Array<any>;
	imageUrl: string;

	constructor(id,
	            name,
	            abilities,
	            types,
	            imageUrl) {
		this.id = id;
		this.name = name;
		this.abilities = abilities;
		this.types = types;
		this.imageUrl = imageUrl;

	}
}