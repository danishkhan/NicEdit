"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function () {
    function Main(editorContainer) {
        this.editorContainer = editorContainer;
        var teaxtarea = document.createElement("textarea");
        editorContainer.appendChild(teaxtarea);
    }
    return Main;
}());
exports.Main = Main;
