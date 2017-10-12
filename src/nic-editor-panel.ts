import { NicEditorConfig } from "./nic-editor-config";
import { NicEditor } from "./main";

import { AbstractPlugin } from "./plugins/abstract-plugin";

export class NicEditorPanel {

	panelButtons: AbstractPlugin[];
	// buttonList: any[];
	// panelContainer: HTMLDivElement;
	// panelElement: HTMLDivElement;

	constructor(private element: HTMLElement,
		private options: NicEditorConfig
	) {
		this.panelButtons = [];
		// this.buttonList = [];
		// this.buttonList = bkExtend([], this.nicEditor.options.buttonList);

		// this.panelContainer = document.createElement("div");
		// this.panelContainer.style.overflow = "hidden";
		// this.panelContainer.style.width = "100%";
		// this.panelContainer.style.border = "1px solid #cccccc";
		// this.panelContainer.style.backgroundColor = "#efefef";
		// this.panelContainer.className += "panelContain";
		// this.panelElement = document.createElement("div");
		// this.panelElement.style.margin = "2px";
		// this.panelElement.style.marginTop = "0px";
		// this.panelElement.style.zoom = "1";
		// this.panelElement.style.overflow = "hidden";
		// this.panelElement.className += "panel";
		// this.panelContainer.insertAdjacentElement("beforeend", this.panelElement);
		// this.element.insertAdjacentElement("beforeend", this.panelContainer);

		// this.panelElement = document.createElement("div");
		// this.panelElement.className += "panel";
		// this.element.insertAdjacentElement("beforeend", this.panelElement);

		for (let button in this.options.buttons) {
			this.addButton(button);
		}
		this.render();
	}

	addButton(buttonName: string) {
		let button = this.options.buttons[buttonName];
		let hasButton = this.options.buttonList.indexOf(buttonName) != -1
		if (hasButton || this.options.fullPanel) {
			this.panelButtons.push(button);
		}
	}

	render() {
		for (const button of this.panelButtons) {
			this.element.insertAdjacentElement("beforeend", button.createButton(this.options));
		}
	}

	remove() {
		this.element.remove();
	}
}