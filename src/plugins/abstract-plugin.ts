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
		this.component = document.createElement("div");
		this.component.style.cssFloat = "left";
		this.component.style.marginTop = "2px";

		let contain = document.createElement("div");
		contain.style.width = "20px";
		contain.style.height = "20px";
		contain.className = "buttonContain";
		this.component.insertAdjacentElement("afterbegin", contain);
		let border = document.createElement("div");
		border.style.backgroundColor = "#efefef";
		border.style.border = "1px solid #efefef";
		border.className = "button-border";
		contain.insertAdjacentElement("afterbegin", border);
		let button = document.createElement("button");
		button.className = "button tooltip";
		button.addEventListener("click", (e:Event) => {
			console.log("asd");
			console.log(this.command);
			console.log(this.arguments);
			console.log(this.run());
		});
		border.insertAdjacentElement("afterbegin", button);
		this.setIcon(options, button);

		let tooltip = document.createElement("span");
		tooltip.className = "tooltiptext";
		tooltip.innerText = this._title;
		button.insertAdjacentElement("afterbegin", tooltip);
		return this.component;
		// let button2 = document.createElement("button");
		// button2.style.width = "18px";
		// button2.style.height = "18px";
		// button2.addEventListener("click", (e:Event) => {
		// 	console.log("asd");
		// 	console.log(this.command);
		// 	console.log(this.arguments);
		// 	console.log(this.run());
		// });
		// return button2;
	}

	private setIcon(options: NicEditorConfig, button: HTMLElement) {
		let icon = options.iconList[this._name];
		let file = (options.iconFiles) ? options.iconFiles[this._name] : '';
		button.style.backgroundImage = "url('" + ((icon) ? options.iconsPath : file) + "')";
		button.style.backgroundPosition = ((icon) ? ((icon - 1) * -18) : 0) + "px 0px";
	}
}