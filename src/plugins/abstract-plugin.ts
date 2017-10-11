import { NicEditorConfig } from "../nic-editor-config";

export abstract class AbstractPlugin {
	
	private _title: string;
	private _name: string;
	
	get title() { return this._title; };
	get name() { return this._name; };
	
	abstract get command(): string;
	abstract get arguments(): string[];

	// button: HTMLButtonElement;
	private component: HTMLElement;

	constructor(title: string, name: string){
		this._title = title;
		this._name = name;
	}

	run(): boolean {
		return document.execCommand(this.command, false, this.arguments);
	}

	createButton(options: NicEditorConfig): HTMLElement {
		// this.component = document.createElement("div");
		let border = document.createElement("div");
		this.component = border;
		border.className = "button-border";
		// this.component.insertAdjacentElement("afterbegin", border);
		let button = document.createElement("button");
		button.className = "button tooltip";
		button.addEventListener("click", (e:Event) => {
			this.run();
		});
		// border.insertAdjacentElement("afterbegin", button);
		this.component = button;
		this.setIcon(options, button);

		let tooltip = document.createElement("span");
		tooltip.className = "tooltiptext";
		tooltip.innerText = this._title;
		button.insertAdjacentElement("afterbegin", tooltip);
		return this.component;
	}

	private setIcon(options: NicEditorConfig, button: HTMLElement) {
		let icon = options.iconList[this._name];
		let file = (options.iconFiles) ? options.iconFiles[this._name] : '';
		button.style.backgroundImage = "url('" + ((icon) ? options.iconsPath : file) + "')";
		button.style.backgroundPosition = ((icon) ? ((icon - 1) * -18) : 0) + "px 0px";
	}
}