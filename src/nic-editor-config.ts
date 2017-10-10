import { AbstractPlugin } from "./plugins/abstract-plugin";
import { BoldPlugin } from "./plugins/bold-plugin";

export class NicEditorConfig {

	hasPanel = true;
	fullPanel = true;
	maxHeight = 500;
	// buttons: {
	// 	"bold": new BoldPlugin()
	// };
	// buttons: [string]: AbstractPlugin;
	buttons: { [key:string]:AbstractPlugin; } = {};

	constructor(){
		this.buttons["bold"] = new BoldPlugin();
	}
}