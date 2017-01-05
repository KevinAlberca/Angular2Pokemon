export class Pokemon {
	id: number;
	name: string;
	abilities: Array<any>;
	imageUrl: string;

	constructor(id,
	            name,
	            abilities,
	            imageUrl) {
		this.id = id;
		this.name = name;
		this.abilities = abilities;
		this.imageUrl = imageUrl;

	}
}