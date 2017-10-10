import { NicEditorConfig } from "./nic-editor-config";
import { NicEditor } from "./main";

import { AbstractPlugin } from "./plugins/abstract-plugin";

export class NicEditorPanel {

	panelButtons: AbstractPlugin[];
	buttonList: any[];
	panelContainer: HTMLDivElement;
	panelElement: HTMLDivElement;

	constructor(private element: HTMLElement,
		private options: NicEditorConfig,
		private nicEditor: NicEditor) {
		this.panelButtons = [];
		this.buttonList = [];
		// this.buttonList = bkExtend([], this.nicEditor.options.buttonList);

		this.panelContainer = document.createElement("div");
		this.panelContainer.setAttribute("style", "overflow: hidden; width: 100%; border: 1px solid #cccccc; backgroundColor: #efefef");
		this.panelContainer.className += "panelContain";
		this.panelElement = document.createElement("div");
		this.panelElement.setAttribute("style", "margin: 2px; marginTop: 0px; zoom: 1; overflow: hidden");
		this.panelElement.className += "panel";
		this.panelContainer.insertAdjacentElement("beforeend", this.panelElement);
		this.element.insertAdjacentElement("beforeend", this.panelContainer);

		let opt = this.nicEditor.options;
		let buttons = opt.buttons;
		for (let button in buttons) {
			this.addButton(button, opt, true);
		}
		this.reorder();
	}

	addButton(buttonName: string,
		options: NicEditorConfig,
		noOrder: boolean
	) {
		let button = options.buttons[buttonName];
		// let type = null;
		let type = true;

		// if (button['type']) {
		// 	type = typeof((<any>window)[button['type']]) === undefined ? null : (<any>window)[button['type']];
		// } else {
		// 	// type = nicEditorButton;
		// 	console.log("not implemented yet!");
		// }

		let hasButton = this.buttonList.indexOf(buttonName) != -1;
		if (type && (hasButton || this.nicEditor.options.fullPanel)) {
			// this.panelButtons.push(new type(this.panelElement, buttonName, options, this.nicEditor));
			this.panelButtons.push(button);
			if (!hasButton) {
				this.buttonList.push(buttonName);
			}
		}
		console.log(this.panelButtons);
	}

	findButton(item: string) {
		for (const panelButton of this.panelButtons) {
			if (panelButton.name == item) {
				return panelButton;
			}
		}
	}

	reorder() {
		for (const buttonName of this.buttonList) {
			const button = this.findButton(buttonName);
			if (button) {
				this.panelElement.insertAdjacentElement("beforeend", button.button);
			}
		}
	}

	remove() {
		this.element.remove();
	}
}