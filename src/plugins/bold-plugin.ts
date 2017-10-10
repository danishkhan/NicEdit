import { AbstractPlugin } from "./abstract-plugin";

export class BoldPlugin extends AbstractPlugin {
	
	get command() { return "bold"; }
	get arguments() { return []; }

	constructor(){
		super("Bold", "bold");
	}
}