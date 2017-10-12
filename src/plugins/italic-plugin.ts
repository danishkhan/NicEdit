import { AbstractPlugin } from "./abstract-plugin";

export class ItalicPlugin extends AbstractPlugin {
	
	get command() { return "italic"; }
	get arguments() { return []; }

	constructor(){
		super("Italic", "italic");
	}
}