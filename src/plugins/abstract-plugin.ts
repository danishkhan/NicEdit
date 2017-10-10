

export abstract class AbstractPlugin {
	
	private _name: string;
	get name() { return this._name; };
	
	abstract get command(): string;
	abstract get arguments(): string[];

	button: HTMLButtonElement;

	constructor(title: string, name: string){
		// this.button = new HTMLButtonElement();
		this.button = document.createElement("button");
		this.button.addEventListener("click", (e:Event) => this.run());
		this._name = name;
	}

	run(): boolean {
		return document.execCommand(this.command, false, this.arguments);
	}
}