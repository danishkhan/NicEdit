import { AbstractPlugin } from "./plugins/abstract-plugin";
import { BoldPlugin } from "./plugins/bold-plugin";

export interface IButtons {
	[key: string]: AbstractPlugin;
}
export interface IIconList {
	[key: string]: number;
}
export interface IIconFiles {
	[key: string]: string;
}

export class NicEditorConfig {

	hasPanel = true;
	fullPanel = true;
	maxHeight = 500;
	buttons: IButtons = {
		'bold': new BoldPlugin()
	};
	buttonList = [ "bold" ];
	iconsPath = '../nicEditorIcons.gif';
	iconList: IIconList = {
		"xhtml": 1,
		"bgcolor": 2,
		"forecolor": 3,
		"bold": 4,
		"center": 5,
		"hr": 6,
		"indent": 7,
		"italic": 8,
		"justify": 9,
		"left": 10,
		"ol": 11,
		"outdent": 12,
		"removeformat": 13,
		"right": 14,
		"save": 25,
		"strikethrough": 16,
		"subscript": 17,
		"superscript": 18,
		"ul": 19,
		"underline": 20,
		"image": 21,
		"link": 22,
		"unlink": 23,
		"close": 24,
		"arrow": 26,
		"upload": 27
	};
	iconFiles: IIconFiles = {};
}
