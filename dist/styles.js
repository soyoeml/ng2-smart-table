(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/highlight.js/styles/dracula.css":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/styles/dracula.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../raw-loader!../../postcss-loader/lib??embedded!./dracula.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/highlight.js/styles/dracula.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/highlight.js/styles/dracula.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/highlight.js/styles/dracula.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\nDracula Theme v1.2.0\n\nhttps://github.com/zenorocha/dracula-theme\n\nCopyright 2015, All rights reserved\n\nCode licensed under the MIT license\nhttp://zenorocha.mit-license.org\n\n@author Éverton Ribeiro <nuxlli@gmail.com>\n@author Zeno Rocha <hi@zenorocha.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #282a36;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-section,\n.hljs-link {\n  color: #8be9fd;\n}\n\n.hljs-function .hljs-keyword {\n  color: #ff79c6;\n}\n\n.hljs,\n.hljs-subst {\n  color: #f8f8f2;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-name,\n.hljs-type,\n.hljs-attribute,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #f1fa8c;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-deletion,\n.hljs-meta {\n  color: #6272a4;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-title,\n.hljs-section,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/app/theme/theme.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/app/theme/theme.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n* {\n  box-sizing: border-box; }\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #606c71; }\na {\n  color: #1e6bb8;\n  text-decoration: none; }\na:hover {\n  text-decoration: underline; }\n.btn {\n  display: inline-block;\n  margin-bottom: 1rem;\n  color: rgba(255, 255, 255, 0.7);\n  background-color: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0.3rem;\n  transition: color 0.2s, background-color 0.2s, border-color 0.2s; }\n.with-source {\n  position: relative; }\n.with-source a.source {\n    position: absolute;\n    right: 0;\n    font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 0.875rem; }\ndiv.with-source a.source {\n  top: -40px; }\ninput.search {\n  margin-bottom: 20px;\n  line-height: normal;\n  padding: .375rem .75rem; }\nspan.highlight {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 0 .25rem;\n  border-radius: .125rem;\n  color: #1e6bb8; }\n.btn + .btn {\n  margin-left: 1rem; }\n.btn:hover, .btn.active {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.3); }\n@media screen and (min-width: 64em) {\n  .btn {\n    padding: 0.75rem 1rem; } }\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .btn {\n    padding: 0.6rem 0.9rem;\n    font-size: 0.9rem; } }\n@media screen and (max-width: 42em) {\n  .btn {\n    display: block;\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 0.9rem; }\n  .btn + .btn {\n    margin-top: 1rem;\n    margin-left: 0; } }\n.page-header {\n  color: #fff;\n  text-align: center;\n  background-color: #182978;\n  background-image: linear-gradient(120deg, #182978, #22A9B6); }\n.page-header h1 a {\n    color: #fff; }\n@media screen and (min-width: 64em) {\n  .page-header {\n    padding: 5rem 6rem; }\n    .page-header.internal {\n      padding: 3rem 4rem; } }\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .page-header {\n    padding: 3rem 4rem; }\n    .page-header.internal {\n      padding: 2rem 1rem; } }\n@media screen and (max-width: 42em) {\n  .page-header {\n    padding: 2rem 1rem; } }\n.project-name {\n  margin-top: 0;\n  margin-bottom: 0.1rem; }\n@media screen and (min-width: 64em) {\n  .project-name {\n    font-size: 3.25rem; }\n  .internal .project-name {\n    font-size: 2.25rem; } }\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .project-name {\n    font-size: 2.25rem; }\n  .internal .project-name {\n    font-size: 1.75rem; } }\n@media screen and (max-width: 42em) {\n  .project-name {\n    font-size: 1.75rem; } }\n.project-tagline {\n  margin-bottom: 2rem;\n  font-weight: normal;\n  opacity: 0.7; }\n@media screen and (min-width: 64em) {\n  .project-tagline {\n    font-size: 1.25rem; } }\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .project-tagline {\n    font-size: 1.15rem; } }\n@media screen and (max-width: 42em) {\n  .project-tagline {\n    font-size: 1rem; } }\n.main-content {\n  font-size: 1rem;\n  padding: 2rem 3rem; }\n.main-content :first-child {\n  margin-top: 0; }\n.main-content img {\n  max-width: 100%; }\n.main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  color: #22A9B6; }\n.main-content p {\n  margin-bottom: 1em; }\n.main-content code {\n  font-size: 0.9rem; }\n.main-content ul, .main-content ol {\n  margin-top: 0; }\n.main-content blockquote {\n  padding: 0 1rem;\n  margin-left: 0;\n  color: #819198;\n  border-left: 0.3rem solid #dce6f0; }\n.main-content blockquote > :first-child {\n  margin-top: 0; }\n.main-content blockquote > :last-child {\n  margin-bottom: 0; }\n.main-content table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n  word-break: normal;\n  word-break: keep-all; }\n.main-content table th {\n  font-weight: bold; }\n.main-content table th, .main-content table td {\n  padding: 0.5rem 1rem;\n  border: 1px solid #e9ebec; }\n.main-content table tr.section {\n  font-size: .75rem;\n  font-weight: bold; }\n.main-content dl {\n  padding: 0; }\n.main-content dl dt {\n  padding: 0;\n  margin-top: 1rem;\n  font-size: 1rem;\n  font-weight: bold; }\n.main-content dl dd {\n  padding: 0;\n  margin-bottom: 1rem; }\n.main-content hr {\n  height: 2px;\n  padding: 0;\n  margin: 1rem 0;\n  background-color: #eff0f1;\n  border: 0; }\n@media screen and (min-width: 64em) {\n  .main-content {\n    max-width: 82rem;\n    margin: 0 auto;\n    font-size: 1.1rem; } }\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .main-content {\n    padding: 2rem 4rem;\n    font-size: 1.1rem; } }\n.site-footer {\n  padding-top: 2rem;\n  margin-top: 2rem;\n  border-top: solid 1px #eff0f1; }\n.site-footer-owner {\n  display: block;\n  font-weight: bold; }\n.site-footer-credits {\n  color: #819198; }\n@media screen and (min-width: 64em) {\n  .site-footer {\n    font-size: 1rem; } }\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .site-footer {\n    font-size: 1rem; } }\n@media screen and (max-width: 42em) {\n  .site-footer {\n    font-size: 0.9rem; } }\n/*\nThe MIT License (MIT)\nCopyright (c) 2016 GitHub, Inc.\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n.pl-c {\n  color: #969896; }\n.pl-c1,\n.pl-s .pl-v {\n  color: #0086b3; }\n.pl-e,\n.pl-en {\n  color: #795da3; }\n.pl-smi,\n.pl-s .pl-s1 {\n  color: #333; }\n.pl-ent {\n  color: #63a35c; }\n.pl-k {\n  color: #a71d5d; }\n.pl-s,\n.pl-pds,\n.pl-s .pl-pse .pl-s1,\n.pl-sr,\n.pl-sr .pl-cce,\n.pl-sr .pl-sre,\n.pl-sr .pl-sra {\n  color: #183691; }\n.pl-v {\n  color: #ed6a43; }\n.pl-id {\n  color: #b52a1d; }\n.pl-ii {\n  color: #f8f8f8;\n  background-color: #b52a1d; }\n.pl-sr .pl-cce {\n  font-weight: bold;\n  color: #63a35c; }\n.pl-ml {\n  color: #693a17; }\n.pl-mh,\n.pl-mh .pl-en,\n.pl-ms {\n  font-weight: bold;\n  color: #1d3e81; }\n.pl-mq {\n  color: #008080; }\n.pl-mi {\n  font-style: italic;\n  color: #333; }\n.pl-mb {\n  font-weight: bold;\n  color: #333; }\n.pl-md {\n  color: #bd2c00;\n  background-color: #ffecec; }\n.pl-mi1 {\n  color: #55a532;\n  background-color: #eaffea; }\n.pl-mdr {\n  font-weight: bold;\n  color: #795da3; }\n.pl-mo {\n  color: #1d3e81; }\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app/theme/theme.scss":
/*!**********************************!*\
  !*** ./src/app/theme/theme.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/raw-loader!../../../node_modules/postcss-loader/lib??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--14-3!./theme.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/app/theme/theme.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*********************************************************************************************************!*\
  !*** multi ./node_modules/highlight.js/styles/dracula.css ./src/app/theme/theme.scss ./src/styles.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/leon.li/Documents/workspaces/ng2-smart-table/node_modules/highlight.js/styles/dracula.css */"./node_modules/highlight.js/styles/dracula.css");
__webpack_require__(/*! /Users/leon.li/Documents/workspaces/ng2-smart-table/src/app/theme/theme.scss */"./src/app/theme/theme.scss");
module.exports = __webpack_require__(/*! /Users/leon.li/Documents/workspaces/ng2-smart-table/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map