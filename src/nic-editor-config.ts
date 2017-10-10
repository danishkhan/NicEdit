import { AbstractPlugin } from "./plugins/abstract-plugin";
import { BoldPlugin } from "./plugins/bold-plugin";

export interface IButtons {
	[key: string]: AbstractPlugin;
}

export class NicEditorConfig {

	hasPanel = true;
	fullPanel = true;
	maxHeight = 500;
	buttons: IButtons = {
		'bold': new BoldPlugin()
	};
	buttonList = ["bold"];
}
