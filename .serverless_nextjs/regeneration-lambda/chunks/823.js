exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 2738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/PM7a8VqBojVxypkalodZb/_buildManifest.js","static/PM7a8VqBojVxypkalodZb/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-4777350f2a9ff73ea2b0.js","static/chunks/pages/index-def80064951631dd4fdc.js"],"/_app":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-4777350f2a9ff73ea2b0.js","static/chunks/pages/_app-4373647a1a8e748b3e8c.js"],"/_error":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-4777350f2a9ff73ea2b0.js","static/chunks/pages/_error-9faf4177fb4e528b4124.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 5706:
/***/ (function(module) {

"use strict";
module.exports = {"Dg":[]};

/***/ }),

/***/ 2138:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./src/styles/global.ts

/* harmony default export */ var global = (styled_components_cjs/* createGlobalStyle */.vJ`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({
  theme
}) => theme.colors.primary};
    color: ${({
  theme
}) => theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`);
;// CONCATENATED MODULE: ./src/styles/theme.ts
const theme = {
  colors: {
    background: '#121214',
    text: '#8257e6',
    primary: '#e1e1e6'
  }
};
/* harmony default export */ var styles_theme = (theme);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_components_cjs/* ThemeProvider */.f6, {
      theme: styles_theme,
      children: [/*#__PURE__*/jsx_runtime.jsx(global, {}), /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 7485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__.default {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__/* .ServerStyleSheet */ .qH();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2__.default.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
      lang: "pt",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "true"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "icon",
          href: ""
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 2308:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 2308;
module.exports = webpackEmptyContext;

/***/ })

};
;