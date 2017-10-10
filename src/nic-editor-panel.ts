import { NicEditorConfig } from "./nic-editor-config";
import { NicEditor } from "./main";

import { AbstractPlugin } from "./plugins/abstract-plugin";

export class NicEditorPanel {

	panelButtons: AbstractPlugin[];
	// buttonList: any[];
	panelContainer: HTMLDivElement;
	panelElement: HTMLDivElement;

	constructor(private element: HTMLElement,
		private options: NicEditorConfig
	) {
		this.panelButtons = [];
		// this.buttonList = [];
		// this.buttonList = bkExtend([], this.nicEditor.options.buttonList);

		this.panelContainer = document.createElement("div");
		this.panelContainer.setAttribute("style", "overflow: hidden; width: 100%; border: 1px solid #cccccc; backgroundColor: #efefef");
		this.panelContainer.className += "panelContain";
		this.panelElement = document.createElement("div");
		this.panelElement.setAttribute("style", "margin: 2px; marginTop: 0px; zoom: 1; overflow: hidden");
		this.panelElement.className += "panel";
		this.panelContainer.insertAdjacentElement("beforeend", this.panelElement);
		this.element.insertAdjacentElement("beforeend", this.panelContainer);

		for (let button in this.options.buttons) {
			this.addButton(button);
		}
		this.render();
	}

	addButton(buttonName: string) {
		let hasButton = this.options.buttonList.indexOf(buttonName) != -1;
		if (hasButton || this.options.fullPanel) {
			this.panelButtons.push(this.options.buttons[buttonName]);
		}
	}

	render() {
		for (const buttonName of this.options.buttonList) {
			let button = this.options.buttons[buttonName].button;
			if(button) {
				this.panelElement.insertAdjacentElement("beforeend", this.options.buttons[buttonName].button);
			}
		}
	}

	remove() {
		this.element.remove();
	}
}