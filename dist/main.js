var NicEdit =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nic_editor_config_1 = __webpack_require__(1);
var nic_editor_panel_1 = __webpack_require__(4);
var NicEditor = /** @class */ (function () {
    function NicEditor(element) {
        // this.editorContainer = document.createElement('div')
        // this.editorContainer.setAttribute("style", "width: "+newX+"px; border: 1px solid #ccc; borderTop: 0; overflowY: auto; overflowX: hidden")
        // this.editor.insertAdjacentElement("beforebegin", this.editorContainer);
        this.element = element;
        // constructor(private _options: NicEditorConfig){
        // this.element = document.createElement("textarea");
        // editorContainer.appendChild(this.element);
        this._options = new nic_editor_config_1.NicEditorConfig();
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
        var newX = parseInt(this.element.style.width || "300", 10);
        var newY = parseInt(this.element.style.height || "300", 10);
        // let newX = 300;
        // let newY = 300;
        var initialHeight = newY - 8;
        //TODO
        // let isMSIE: (<any>navigator.appVersion.indexOf("MSIE") != -1)
        var isMSIE = false;
        var isTextarea = (this.element instanceof HTMLTextAreaElement);
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
            this.editorContainer = document.createElement('div');
            this.editorContainer.setAttribute("style", "width: " + newX + "px; border: 1px solid #ccc; borderTop: 0; overflowY: auto; overflowX: hidden");
            this.element.insertAdjacentElement("beforebegin", this.editorContainer);
            var editorElm = document.createElement('div');
            editorElm.setAttribute("style", "width: " + (newX - 8) + "px; margin: 4px; min-height: " + newY + "px");
            editorElm.setAttribute("class", "main");
            this.editorContainer.insertAdjacentElement("afterbegin", editorElm);
            this.element.setAttribute("style", "display: none");
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
        //panel instance
        // e = this.checkReplace($BK(e));
        var panelElm = document.createElement("div");
        panelElm.setAttribute("style", "width: " + (this.element.style.width ? parseInt(this.element.style.width, 10) : this.element.clientWidth) + "px;");
        this.editorContainer.insertAdjacentElement("afterbegin", panelElm);
        this.setPanel(panelElm);
        // return this.addInstance(this.element, o);
    }
    Object.defineProperty(NicEditor.prototype, "options", {
        get: function () { return this._options; },
        enumerable: true,
        configurable: true
    });
    NicEditor.prototype.getSel = function () {
        return window.getSelection();
    };
    NicEditor.prototype.disable = function () {
        this.element.setAttribute('contentEditable', 'false');
    };
    NicEditor.prototype.setPanel = function (element) {
        this.nicPanel = new nic_editor_panel_1.NicEditorPanel(element, this.options, this);
        // this.fireEvent('panel', this.nicPanel);
        return this;
    };
    return NicEditor;
}());
exports.NicEditor = NicEditor;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bold_plugin_1 = __webpack_require__(2);
var NicEditorConfig = /** @class */ (function () {
    function NicEditorConfig() {
        this.hasPanel = true;
        this.fullPanel = true;
        this.maxHeight = 500;
        // buttons: {
        // 	"bold": new BoldPlugin()
        // };
        // buttons: [string]: AbstractPlugin;
        this.buttons = {};
        this.buttons["bold"] = new bold_plugin_1.BoldPlugin();
    }
    return NicEditorConfig;
}());
exports.NicEditorConfig = NicEditorConfig;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_plugin_1 = __webpack_require__(3);
var BoldPlugin = /** @class */ (function (_super) {
    __extends(BoldPlugin, _super);
    function BoldPlugin() {
        return _super.call(this, "Bold", "bold") || this;
    }
    Object.defineProperty(BoldPlugin.prototype, "command", {
        get: function () { return "bold"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoldPlugin.prototype, "arguments", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    return BoldPlugin;
}(abstract_plugin_1.AbstractPlugin));
exports.BoldPlugin = BoldPlugin;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPlugin = /** @class */ (function () {
    function AbstractPlugin(title, name) {
        var _this = this;
        // this.button = new HTMLButtonElement();
        this.button = document.createElement("button");
        this.button.addEventListener("click", function (e) { return _this.run(); });
        this._name = name;
    }
    Object.defineProperty(AbstractPlugin.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    ;
    AbstractPlugin.prototype.run = function () {
        return document.execCommand(this.command, false, this.arguments);
    };
    return AbstractPlugin;
}());
exports.AbstractPlugin = AbstractPlugin;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NicEditorPanel = /** @class */ (function () {
    function NicEditorPanel(element, options, nicEditor) {
        this.element = element;
        this.options = options;
        this.nicEditor = nicEditor;
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
        var opt = this.nicEditor.options;
        var buttons = opt.buttons;
        for (var button in buttons) {
            this.addButton(button, opt, true);
        }
        this.reorder();
    }
    NicEditorPanel.prototype.addButton = function (buttonName, options, noOrder) {
        var button = options.buttons[buttonName];
        // let type = null;
        var type = true;
        // if (button['type']) {
        // 	type = typeof((<any>window)[button['type']]) === undefined ? null : (<any>window)[button['type']];
        // } else {
        // 	// type = nicEditorButton;
        // 	console.log("not implemented yet!");
        // }
        var hasButton = this.buttonList.indexOf(buttonName) != -1;
        if (type && (hasButton || this.nicEditor.options.fullPanel)) {
            // this.panelButtons.push(new type(this.panelElement, buttonName, options, this.nicEditor));
            this.panelButtons.push(button);
            if (!hasButton) {
                this.buttonList.push(buttonName);
            }
        }
        console.log(this.panelButtons);
    };
    NicEditorPanel.prototype.findButton = function (item) {
        for (var i = 0; i < this.panelButtons.length; i++) {
            if (this.panelButtons[i].name == item) {
                return this.panelButtons[i];
            }
        }
    };
    NicEditorPanel.prototype.reorder = function () {
        console.log("reorder");
        console.log(this.buttonList);
        var bl = this.buttonList;
        for (var i = 0; i < bl.length; i++) {
            var button = this.findButton(bl[i]);
            console.log("new button");
            console.log(button);
            if (button) {
                // 	this.panelElement.appendChild(button.margin);
                // button.button.insertAdjacentElement("beforeend", this.panelElement);
                this.panelElement.insertAdjacentElement("beforeend", button.button);
            }
        }
    };
    NicEditorPanel.prototype.remove = function () {
        this.element.remove();
    };
    return NicEditorPanel;
}());
exports.NicEditorPanel = NicEditorPanel;


/***/ })
/******/ ]);