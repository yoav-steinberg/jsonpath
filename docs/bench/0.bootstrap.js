(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../browser_pkg/jsonpath_wasm.js":
/*!***************************************!*\
  !*** ../browser_pkg/jsonpath_wasm.js ***!
  \***************************************/
/*! exports provided: compile, reader, read, testa, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_is_string, __wbindgen_string_get, __wbindgen_cb_forget, __wbindgen_json_parse, __wbindgen_json_serialize, __wbindgen_closure_wrapper33, __wbindgen_closure_wrapper35, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return compile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reader\", function() { return reader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testa\", function() { return testa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return __wbindgen_is_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return __wbindgen_cb_forget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return __wbindgen_json_parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return __wbindgen_json_serialize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper33\", function() { return __wbindgen_closure_wrapper33; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper35\", function() { return __wbindgen_closure_wrapper35; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonpath_wasm_bg */ \"../browser_pkg/jsonpath_wasm_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n* @param {string} arg0\n* @returns {any}\n*/\nfunction compile(arg0) {\n    const ptr0 = passStringToWasm(arg0);\n    const len0 = WASM_VECTOR_LEN;\n    try {\n        return takeObject(_jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](ptr0, len0));\n\n    } finally {\n        _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n\n    }\n\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n/**\n* @param {any} arg0\n* @returns {any}\n*/\nfunction reader(arg0) {\n    return takeObject(_jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"reader\"](addHeapObject(arg0)));\n}\n\n/**\n* @param {any} arg0\n* @param {string} arg1\n* @returns {any}\n*/\nfunction read(arg0, arg1) {\n    const ptr1 = passStringToWasm(arg1);\n    const len1 = WASM_VECTOR_LEN;\n    try {\n        return takeObject(_jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"read\"](addHeapObject(arg0), ptr1, len1));\n\n    } finally {\n        _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr1, len1 * 1);\n\n    }\n\n}\n\n/**\n* @returns {void}\n*/\nfunction testa() {\n    return _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"testa\"]();\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_is_string(i) {\n    return typeof(getObject(i)) === 'string' ? 1 : 0;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const ptr = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\n    return ptr;\n}\n\nconst __wbindgen_cb_forget = dropObject;\n\nfunction __wbindgen_json_parse(ptr, len) {\n    return addHeapObject(JSON.parse(getStringFromWasm(ptr, len)));\n}\n\nfunction __wbindgen_json_serialize(idx, ptrptr) {\n    const ptr = passStringToWasm(JSON.stringify(getObject(idx)));\n    getUint32Memory()[ptrptr / 4] = ptr;\n    return WASM_VECTOR_LEN;\n}\n\nfunction __wbindgen_closure_wrapper33(a, b, _ignored) {\n    const f = _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(5);\n    const d = _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(6);\n    const cb = function(arg0) {\n        this.cnt++;\n        try {\n            return takeObject(f(this.a, b, addHeapObject(arg0)));\n\n        } finally {\n            if (this.cnt-- == 1) d(this.a, b);\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_closure_wrapper35(a, b, _ignored) {\n    const f = _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(3);\n    const d = _jsonpath_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(4);\n    const cb = function(arg0) {\n        this.cnt++;\n        const ptr0 = passStringToWasm(arg0);\n        const len0 = WASM_VECTOR_LEN;\n        try {\n            return takeObject(f(this.a, b, ptr0, len0));\n\n        } finally {\n            if (this.cnt-- == 1) d(this.a, b);\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../browser_pkg/jsonpath_wasm.js?");

/***/ }),

/***/ "../browser_pkg/jsonpath_wasm_bg.wasm":
/*!********************************************!*\
  !*** ../browser_pkg/jsonpath_wasm_bg.wasm ***!
  \********************************************/
/*! exports provided: memory, compile, reader, read, testa, __wbindgen_malloc, __wbindgen_free, __wbg_function_table */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./jsonpath_wasm */ \"../browser_pkg/jsonpath_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../browser_pkg/jsonpath_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _browser_jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @browser/jsonpath-wasm */ \"../browser_pkg/jsonpath_wasm.js\");\n/* harmony import */ var jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonpath/jsonpath.js */ \"./node_modules/jsonpath/jsonpath.js\");\n/* harmony import */ var jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction run(message, iter, cb) {\n    let d = Date.now();\n    for (let i = 0; i < iter; i++) {\n        cb();\n    }\n    msg([message, Date.now() - d].join(\", \"));\n}\n\nfunction msg(msg) {\n    console.log(msg);\n    let div = document.createElement(\"div\");\n    div.innerText = msg;\n    document.body.appendChild(div);\n}\n\nlet json = {\n    \"store\": {\n        \"book\": [\n            {\n                \"category\": \"reference\",\n                \"author\": \"Nigel Rees\",\n                \"title\": \"Sayings of the Century\",\n                \"price\": 8.95\n            },\n            {\n                \"category\": \"fiction\",\n                \"author\": \"Evelyn Waugh\",\n                \"title\": \"Sword of Honour\",\n                \"price\": 12.99\n            },\n            {\n                \"category\": \"fiction\",\n                \"author\": \"Herman Melville\",\n                \"title\": \"Moby Dick\",\n                \"isbn\": \"0-553-21311-3\",\n                \"price\": 8.99\n            },\n            {\n                \"category\": \"fiction\",\n                \"author\": \"J. R. R. Tolkien\",\n                \"title\": \"The Lord of the Rings\",\n                \"isbn\": \"0-395-19395-8\",\n                \"price\": 22.99\n            }\n        ],\n        \"bicycle\": {\n            \"color\": \"red\",\n            \"price\": 19.95\n        }\n    },\n    \"expensive\": 10\n};\n\nsetTimeout(function() {\n    let path = '$..book[?(@.price<30 && @.category==\"fiction\")]';\n    let template = _browser_jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](path);\n    let reader = _browser_jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__[\"reader\"](json);\n    run('jsonpath', 1000, function() { jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1__[\"query\"](json, path) });\n    run('jsonpath-wasm- reader', 1000, function() { reader(path) });\n    run('jsonpath-wasm- compile', 1000, function() { template(json) });\n    run('jsonpath-wasm- read', 1000, function() { _browser_jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__[\"read\"](json, path) });\n}, 0);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);