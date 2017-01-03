export class Pokemon {
	id: number;
	name: string;
	apiUrl: string;

	constructor(id, name, link) {
		this.id = id;
		this.name = name;
		this.apiUrl = link;
	}

}