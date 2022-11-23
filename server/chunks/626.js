"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 6030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ FILE_PATHS)
/* harmony export */ });
var FILE_PATHS;
(function(FILE_PATHS) {
    FILE_PATHS["demos"] = "./app/demos/(documents)/";
    FILE_PATHS["showcase"] = "./app/showcase/(documents)/";
    FILE_PATHS["blog"] = "./app/blog/(documents)/";
})(FILE_PATHS || (FILE_PATHS = {}));


/***/ }),

/***/ 7874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getAllFilesInFolder)
/* harmony export */ });
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_1__);


async function getAllFilesInFolder(folder) {
    const folderPath = relativeToAbsolutePath(folder);
    try {
        const files = await node_fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(folderPath);
        return removeFileExtensions(files);
    } catch (error) {
        console.error(error);
        return [
            ""
        ];
    }
}
function relativeToAbsolutePath(relativePath) {
    return (0,node_path__WEBPACK_IMPORTED_MODULE_1__.resolve)(relativePath);
}
function removeFileExtensions(files) {
    return files.map((file)=>file.split(".")[0]);
}


/***/ }),

/***/ 2685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getParsedFileContent),
/* harmony export */   "x": () => (/* binding */ serialiseMarkdownContent)
/* harmony export */ });
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4580);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__]);
next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function getParsedFileContent(fileName, filePath, fileExtension = ".html.md") {
    const markdownFilePath = (0,node_path__WEBPACK_IMPORTED_MODULE_0__.join)(filePath, `${fileName}${fileExtension}`);
    const fileContent = node_fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(markdownFilePath);
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);
    return {
        frontMatter: data,
        content
    };
}
async function serialiseMarkdownContent(markdownContent) {
    return await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(markdownContent ?? "");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;