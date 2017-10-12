import { NicEditorConfig } from "./nic-editor-config"
import { NicEditorPanel } from "./nic-editor-panel"

export class NicEditor {

	private nicInstances: any[];
	private loadedPlugins: any[];

	private editorContainer: HTMLDivElement;
	private _options: NicEditorConfig;
	get options() { return this._options; }

	private nicPanel: NicEditorPanel;


	constructor(private element: HTMLElement){
		// this.editorContainer = document.createElement('div')
		// this.editorContainer.setAttribute("style", "width: "+newX+"px; border: 1px solid #ccc; borderTop: 0; overflowY: auto; overflowX: hidden")
		// this.editor.insertAdjacentElement("beforebegin", this.editorContainer);



	// constructor(private _options: NicEditorConfig){
		// this.element = document.createElement("textarea");
		// editorContainer.appendChild(this.element);
		this._options = new NicEditorConfig();

		// this._options = new nicEditorConfig();
		// bkExtend(this._options, o);
		this.nicInstances = [];
		this.loadedPlugins = [];

		// var plugins = nicEditors.nicPlugins;
		// for (var i = 0; i < plugins.length; i++) {
		// 	this.loadedPlugins.push(new plugins[i].p(this, plugins[i].o));
		// }
		// nicEditors.editors.push(this);
		//bkLib.addEvent(document.body, 'mousedown', this.selectCheck.closureListener(this));


		// let newX = parseInt(this.element.style.width, 10) || this.element.clientWidth;
		// let newY = parseInt(this.element.style.height, 10) || this.element.clientHeight;
		let newX = parseInt(this.element.style.width || "300", 10);
		let newY = parseInt(this.element.style.height || "300", 10);
		// let newX = 300;
		// let newY = 300;
		let initialHeight = newY - 8;

		//TODO
		// let isMSIE: (<any>navigator.appVersion.indexOf("MSIE") != -1)
		let isMSIE = false;

		let isTextarea = (this.element instanceof HTMLTextAreaElement);
		if (isTextarea || this._options.hasPanel) {
			var ie7s = (isMSIE && !((typeof document.body.style.maxHeight != "undefined") && document.compatMode == "CSS1Compat"));
			// var s = {
			// 	width: newX + 'px',
			// 	border: '1px solid #ccc',
			// 	borderTop: 0,
			// 	overflowY: 'auto',
			// 	overflowX: 'hidden'
			// };
			// s[(ie7s) ? 'height' : 'maxHeight'] = (this._options.maxHeight) ? this._options.maxHeight + 'px' : null;
			this.editorContainer = document.createElement('div')
			this.editorContainer.className = "editorContainer";
			this.element.insertAdjacentElement("beforebegin", this.editorContainer);

			let editorElm = document.createElement('div')
			editorElm.className = "editorElement";
			this.editorContainer.insertAdjacentElement("afterbegin", editorElm);

			this.element.className = "originalElement";

			editorElm.innerHTML = this.element.innerHTML;
			// if (isTextarea) {
			// 	this.copyElm = e;
			// 	var f = e.parentTag('FORM');
			// 	if (f) {
			// 		bkLib.addEvent(f, 'submit', this.saveContent.closure(this));
			// 	}
			// }
			// editorElm.setStyle((ie7s) ? {
			// 	height: newY + 'px'
			// } : {
			// 	overflow: 'hidden'
			// });
			this.element = editorElm;
		}


		this.element.setAttribute('contentEditable', 'true');
		var panelElm = document.createElement("div");
		panelElm.className = "panelElement";
		this.editorContainer.insertAdjacentElement("afterbegin", panelElm);
		this.setPanel(panelElm);
	}

	getSel(): Selection {
		return window.getSelection();
	}

	disable() {
		this.element.setAttribute('contentEditable', 'false');
	}

	setPanel(element: HTMLElement) {
		this.nicPanel = new NicEditorPanel(element, this.options);
		// this.fireEvent('panel', this.nicPanel);
	}
}