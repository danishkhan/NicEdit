import { AbstractPlugin } from "./abstract-plugin";

export class UnderlinePlugin extends AbstractPlugin {
	
	get command() { return "underline"; }
	get arguments() { return []; }

	constructor(){
		super("Underline", "underline");
	}
}