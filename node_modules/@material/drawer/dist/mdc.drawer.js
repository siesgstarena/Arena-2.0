/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["drawer"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["drawer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @template F
 */

var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDrawer", function() { return MDCDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_foundation__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_list_index__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_list_foundation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_focus_trap__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_focus_trap__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDismissibleDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCModalDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__modal_foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_7__util__; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */










/**
 * @extends {MDCComponent<!MDCDismissibleDrawerFoundation>}
 * @final
 */

var MDCDrawer = function (_MDCComponent) {
  _inherits(MDCDrawer, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCDrawer() {
    var _ref;

    _classCallCheck(this, MDCDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCDrawer.__proto__ || Object.getPrototypeOf(MDCDrawer)).call.apply(_ref, [this].concat(args)));

    _this.previousFocus_;

    /** @private {!Function} */
    _this.handleKeydown_;

    /** @private {!Function} */
    _this.handleTransitionEnd_;

    /** @private {!Function} */
    _this.focusTrapFactory_;

    /** @private {!FocusTrapInstance} */
    _this.focusTrap_;

    /** @private {?Element} */
    _this.scrim_;

    /** @private {?Function} */
    _this.handleScrimClick_;

    /** @private {?MDCList} */
    _this.list_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCDrawer}
   */


  _createClass(MDCDrawer, [{
    key: 'initialize',
    value: function initialize() {
      var focusTrapFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_8_focus_trap___default.a;
      var listFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_4__material_list_index__["MDCList"](el);
      };

      var listEl = /** @type {!Element} */this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_5__material_list_foundation__["a" /* default */].cssClasses.ROOT);
      if (listEl) {
        this.list_ = listFactory(listEl);
        this.list_.wrapFocus = true;
      }
      this.focusTrapFactory_ = focusTrapFactory;
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this2 = this;

      var MODAL = __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__["a" /* default */].cssClasses.MODAL;


      if (this.root_.classList.contains(MODAL)) {
        var SCRIM_SELECTOR = __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__["a" /* default */].strings.SCRIM_SELECTOR;

        this.scrim_ = /** @type {!Element} */this.root_.parentElement.querySelector(SCRIM_SELECTOR);
        this.handleScrimClick_ = function () {
          return (/** @type {!MDCModalDrawerFoundation} */_this2.foundation_.handleScrimClick()
          );
        };
        this.scrim_.addEventListener('click', this.handleScrimClick_);
        this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_7__util__["createFocusTrapInstance"](this.root_, this.focusTrapFactory_);
      }

      this.handleKeydown_ = function (evt) {
        return _this2.foundation_.handleKeydown(evt);
      };
      this.handleTransitionEnd_ = function (evt) {
        return _this2.foundation_.handleTransitionEnd(evt);
      };

      this.root_.addEventListener('keydown', this.handleKeydown_);
      this.root_.addEventListener('transitionend', this.handleTransitionEnd_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.root_.removeEventListener('keydown', this.handleKeydown_);
      this.root_.removeEventListener('transitionend', this.handleTransitionEnd_);

      if (this.list_) {
        this.list_.destroy();
      }

      var MODAL = __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__["a" /* default */].cssClasses.MODAL;

      if (this.root_.classList.contains(MODAL)) {
        this.scrim_.removeEventListener('click', /** @type {!Function} */this.handleScrimClick_);
        // Ensure drawer is closed to hide scrim and release focus
        this.open = false;
      }
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      /** @type {!MDCDrawerAdapter} */
      var adapter = /** @type {!MDCDrawerAdapter} */_extends({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this3.root_.classList.contains(className);
        },
        elementHasClass: function elementHasClass(element, className) {
          return element.classList.contains(className);
        },
        saveFocus: function saveFocus() {
          _this3.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          var previousFocus = _this3.previousFocus_ && _this3.previousFocus_.focus;
          if (_this3.root_.contains(document.activeElement) && previousFocus) {
            _this3.previousFocus_.focus();
          }
        },
        focusActiveNavigationItem: function focusActiveNavigationItem() {
          var activeNavItemEl = _this3.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_5__material_list_foundation__["a" /* default */].cssClasses.LIST_ITEM_ACTIVATED_CLASS);
          if (activeNavItemEl) {
            activeNavItemEl.focus();
          }
        },
        notifyClose: function notifyClose() {
          return _this3.emit(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* strings */].CLOSE_EVENT, {}, true /* shouldBubble */);
        },
        notifyOpen: function notifyOpen() {
          return _this3.emit(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* strings */].OPEN_EVENT, {}, true /* shouldBubble */);
        },
        trapFocus: function trapFocus() {
          return _this3.focusTrap_.activate();
        },
        releaseFocus: function releaseFocus() {
          return _this3.focusTrap_.deactivate();
        }
      });

      var _MDCDismissibleDrawer = __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__["a" /* default */].cssClasses,
          DISMISSIBLE = _MDCDismissibleDrawer.DISMISSIBLE,
          MODAL = _MDCDismissibleDrawer.MODAL;

      if (this.root_.classList.contains(DISMISSIBLE)) {
        return new __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__["a" /* default */](adapter);
      } else if (this.root_.classList.contains(MODAL)) {
        return new __WEBPACK_IMPORTED_MODULE_2__modal_foundation__["a" /* default */](adapter);
      } else {
        throw new Error('MDCDrawer: Failed to instantiate component. Supported variants are ' + DISMISSIBLE + ' and ' + MODAL + '.');
      }
    }
  }, {
    key: 'open',


    /**
     * Returns true if drawer is in the open position.
     * @return {boolean}
     */
    get: function get() {
      return this.foundation_.isOpen();
    }

    /**
     * Toggles the drawer open and closed.
     * @param {boolean} isOpen
     */
    ,
    set: function set(isOpen) {
      if (isOpen) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCDrawer(root);
    }
  }]);

  return MDCDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);



/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__ = __webpack_require__(69);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/**
 * @extends {MDCDismissibleDrawerFoundation}
 */

var MDCModalDrawerFoundation = function (_MDCDismissibleDrawer) {
  _inherits(MDCModalDrawerFoundation, _MDCDismissibleDrawer);

  function MDCModalDrawerFoundation() {
    _classCallCheck(this, MDCModalDrawerFoundation);

    return _possibleConstructorReturn(this, (MDCModalDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCModalDrawerFoundation)).apply(this, arguments));
  }

  _createClass(MDCModalDrawerFoundation, [{
    key: 'opened',

    /**
     * Called when drawer finishes open animation.
     * @override
     */
    value: function opened() {
      this.adapter_.trapFocus();
    }

    /**
     * Called when drawer finishes close animation.
     * @override
     */

  }, {
    key: 'closed',
    value: function closed() {
      this.adapter_.releaseFocus();
    }

    /**
     * Handles click event on scrim.
     */

  }, {
    key: 'handleScrimClick',
    value: function handleScrimClick() {
      this.close();
    }
  }]);

  return MDCModalDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__dismissible_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCModalDrawerFoundation);

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrapInstance", function() { return createFocusTrapInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @param {!Element} surfaceEl
 * @param {!Function} focusTrapFactory
 * @return {!FocusTrapInstance}
 */
function createFocusTrapInstance(surfaceEl) {
  var focusTrapFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;

  return focusTrapFactory(surfaceEl, {
    clickOutsideDeactivates: true,
    initialFocus: false, // Navigation drawer handles focusing on active nav item.
    escapeDeactivates: false, // Navigation drawer handles ESC.
    returnFocusOnDeactivate: false });
}



/***/ }),

/***/ 105:
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (
    !isNodeMatchingSelectorFocusable(node, untouchabilityChecker)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (
    node.disabled
    || isHiddenInput(node)
    || untouchabilityChecker.isUntouchable(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node === this.doc.documentElement) return false;

    // Search for a cached result.
    var cached = find(this.cache, function(item) {
      return item === node;
    });
    if (cached) return cached[1];

    nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = this.hasDisplayNone(node.parentNode);
    }

    this.cache.push([node, result]);

    return result;
}

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element}
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;
  while (el) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {boolean}
 */
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}



/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC List. Provides an interface for managing focus.
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCListAdapter = function () {
  function MDCListAdapter() {
    _classCallCheck(this, MDCListAdapter);
  }

  _createClass(MDCListAdapter, [{
    key: "getListItemCount",

    /** @return {number} */
    value: function getListItemCount() {}

    /**
     * @return {number} */

  }, {
    key: "getFocusedElementIndex",
    value: function getFocusedElementIndex() {}

    /**
     * @param {number} index
     * @param {string} attribute
     * @param {string} value
     */

  }, {
    key: "setAttributeForElementIndex",
    value: function setAttributeForElementIndex(index, attribute, value) {}

    /**
     * @param {number} index
     * @param {string} attribute
     */

  }, {
    key: "removeAttributeForElementIndex",
    value: function removeAttributeForElementIndex(index, attribute) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "addClassForElementIndex",
    value: function addClassForElementIndex(index, className) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "removeClassForElementIndex",
    value: function removeClassForElementIndex(index, className) {}

    /**
     * Focuses list item at the index specified.
     * @param {number} index
     */

  }, {
    key: "focusItemAtIndex",
    value: function focusItemAtIndex(index) {}

    /**
     * Sets the tabindex to the value specified for all button/a element children of
     * the list item at the index specified.
     * @param {number} listItemIndex
     * @param {number} tabIndexValue
     */

  }, {
    key: "setTabIndexForListItemChildren",
    value: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}

    /**
     * If the given element has an href, follows the link.
     * @param {!Element} ele
     */

  }, {
    key: "followHref",
    value: function followHref(ele) {}

    /**
     * Toggles the checkbox or radio button within a list item.
     * @param {number} index
     * @return {boolean} true if a radio button or checkbox was present.
     */

  }, {
    key: "toggleCheckbox",
    value: function toggleCheckbox(index) {}
  }]);

  return MDCListAdapter;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (MDCListAdapter);

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-list',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
};

/** @enum {string} */
var strings = {
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_SELECTED: 'aria-selected',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' a',
  FOCUSABLE_CHILD_ELEMENTS: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled), .' + cssClasses.LIST_ITEM_CLASS + ' a,\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)',
  ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)'
};



/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

var MDCListFoundation = function (_MDCFoundation) {
  _inherits(MDCListFoundation, _MDCFoundation);

  _createClass(MDCListFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }

    /**
     * {@see MDCListAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCListAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCListAdapter} */{
          getListItemCount: function getListItemCount() {},
          getFocusedElementIndex: function getFocusedElementIndex() {},
          setAttributeForElementIndex: function setAttributeForElementIndex() {},
          removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
          addClassForElementIndex: function addClassForElementIndex() {},
          removeClassForElementIndex: function removeClassForElementIndex() {},
          focusItemAtIndex: function focusItemAtIndex() {},
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {},
          followHref: function followHref() {},
          toggleCheckbox: function toggleCheckbox() {}
        }
      );
    }

    /**
     * @param {!MDCListAdapter=} adapter
     */

  }]);

  function MDCListFoundation(adapter) {
    _classCallCheck(this, MDCListFoundation);

    /** {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCListFoundation.__proto__ || Object.getPrototypeOf(MDCListFoundation)).call(this, _extends(MDCListFoundation.defaultAdapter, adapter)));

    _this.wrapFocus_ = false;
    /** {boolean} */
    _this.isVertical_ = true;
    /** {boolean} */
    _this.isSingleSelectionList_ = false;
    /** {number} */
    _this.selectedIndex_ = -1;
    /** {boolean} */
    _this.useActivatedClass_ = false;
    return _this;
  }

  /**
   * Sets the private wrapFocus_ variable.
   * @param {boolean} value
   */


  _createClass(MDCListFoundation, [{
    key: 'setWrapFocus',
    value: function setWrapFocus(value) {
      this.wrapFocus_ = value;
    }

    /**
     * Sets the isVertical_ private variable.
     * @param {boolean} value
     */

  }, {
    key: 'setVerticalOrientation',
    value: function setVerticalOrientation(value) {
      this.isVertical_ = value;
    }

    /**
     * Sets the isSingleSelectionList_ private variable.
     * @param {boolean} value
     */

  }, {
    key: 'setSingleSelection',
    value: function setSingleSelection(value) {
      this.isSingleSelectionList_ = value;
    }

    /**
     * Sets the useActivatedClass_ private variable.
     * @param {boolean} useActivated
     */

  }, {
    key: 'setUseActivatedClass',
    value: function setUseActivatedClass(useActivated) {
      this.useActivatedClass_ = useActivated;
    }

    /** @param {number} index */

  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      if (index === this.selectedIndex_) {
        return;
      }

      var className = this.useActivatedClass_ ? __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS : __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS;

      if (this.selectedIndex_ >= 0) {
        this.adapter_.removeAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED);
        this.adapter_.removeClassForElementIndex(this.selectedIndex_, className);
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
      }

      if (index >= 0 && this.adapter_.getListItemCount() > index) {
        this.selectedIndex_ = index;
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, true);
        this.adapter_.addClassForElementIndex(this.selectedIndex_, className);
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', 0);

        if (this.selectedIndex_ !== 0) {
          this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
        }
      }
    }

    /**
     * Focus in handler for the list items.
     * @param evt
     * @param {number} listItemIndex
     */

  }, {
    key: 'handleFocusIn',
    value: function handleFocusIn(evt, listItemIndex) {
      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
      }
    }

    /**
     * Focus out handler for the list items.
     * @param {Event} evt
     * @param {number} listItemIndex
     */

  }, {
    key: 'handleFocusOut',
    value: function handleFocusOut(evt, listItemIndex) {
      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
      }
    }

    /**
     * Key handler for the list.
     * @param {Event} evt
     * @param {boolean} isRootListItem
     * @param {number} listItemIndex
     */

  }, {
    key: 'handleKeydown',
    value: function handleKeydown(evt, isRootListItem, listItemIndex) {
      var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
      var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
      var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
      var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
      var isHome = evt.key === 'Home' || evt.keyCode === 36;
      var isEnd = evt.key === 'End' || evt.keyCode === 35;
      var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
      var isSpace = evt.key === 'Space' || evt.keyCode === 32;

      var currentIndex = this.adapter_.getFocusedElementIndex();
      if (currentIndex === -1) {
        currentIndex = listItemIndex;
        if (currentIndex < 0) {
          // If this event doesn't have a mdc-list-item ancestor from the
          // current list (not from a sublist), return early.
          return;
        }
      }

      if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
        this.preventDefaultEvent_(evt);
        this.focusNextElement(currentIndex);
      } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
        this.preventDefaultEvent_(evt);
        this.focusPrevElement(currentIndex);
      } else if (isHome) {
        this.preventDefaultEvent_(evt);
        this.focusFirstElement();
      } else if (isEnd) {
        this.preventDefaultEvent_(evt);
        this.focusLastElement();
      } else if (isEnter || isSpace) {
        if (isRootListItem) {
          if (this.isSingleSelectionList_) {
            // Check if the space key was pressed on the list item or a child element.
            this.setSelectedIndex(currentIndex);
            this.preventDefaultEvent_(evt);
          }

          // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.
          this.adapter_.followHref(currentIndex);
        }

        var checkboxFound = this.adapter_.toggleCheckbox(listItemIndex);

        if (checkboxFound) {
          this.preventDefaultEvent_(evt);
        }
      }
    }

    /**
     * Click handler for the list.
     * @param {number} index
     * @param {boolean} toggleCheckbox
     */

  }, {
    key: 'handleClick',
    value: function handleClick(index, toggleCheckbox) {
      if (index === -1) return;

      if (toggleCheckbox) {
        this.adapter_.toggleCheckbox(index);
      }

      if (this.isSingleSelectionList_) {
        this.setSelectedIndex(index);
      }
    }

    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'preventDefaultEvent_',
    value: function preventDefaultEvent_(evt) {
      var tagName = ('' + evt.target.tagName).toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
      }
    }

    /**
     * Focuses the next element on the list.
     * @param {number} index
     */

  }, {
    key: 'focusNextElement',
    value: function focusNextElement(index) {
      var count = this.adapter_.getListItemCount();
      var nextIndex = index + 1;
      if (nextIndex >= count) {
        if (this.wrapFocus_) {
          nextIndex = 0;
        } else {
          // Return early because last item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(nextIndex);
    }

    /**
     * Focuses the previous element on the list.
     * @param {number} index
     */

  }, {
    key: 'focusPrevElement',
    value: function focusPrevElement(index) {
      var prevIndex = index - 1;
      if (prevIndex < 0) {
        if (this.wrapFocus_) {
          prevIndex = this.adapter_.getListItemCount() - 1;
        } else {
          // Return early because first item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(prevIndex);
    }
  }, {
    key: 'focusFirstElement',
    value: function focusFirstElement() {
      if (this.adapter_.getListItemCount() > 0) {
        this.adapter_.focusItemAtIndex(0);
      }
    }
  }, {
    key: 'focusLastElement',
    value: function focusLastElement() {
      var lastIndex = this.adapter_.getListItemCount() - 1;
      if (lastIndex >= 0) {
        this.adapter_.focusItemAtIndex(lastIndex);
      }
    }
  }]);

  return MDCListFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCListFoundation);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCList", function() { return MDCList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCListFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/**
 * @extends MDCComponent<!MDCListFoundation>
 */

var MDCList = function (_MDCComponent) {
  _inherits(MDCList, _MDCComponent);

  /** @param {...?} args */
  function MDCList() {
    var _ref;

    _classCallCheck(this, MDCList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Function} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCList.__proto__ || Object.getPrototypeOf(MDCList)).call.apply(_ref, [this].concat(args)));

    _this.handleKeydown_;
    /** @private {!Function} */
    _this.handleClick_;
    /** @private {!Function} */
    _this.focusInEventListener_;
    /** @private {!Function} */
    _this.focusOutEventListener_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCList}
   */


  _createClass(MDCList, [{
    key: 'destroy',
    value: function destroy() {
      this.root_.removeEventListener('keydown', this.handleKeydown_);
      this.root_.removeEventListener('click', this.handleClick_);
      this.root_.removeEventListener('focusin', this.focusInEventListener_);
      this.root_.removeEventListener('focusout', this.focusOutEventListener_);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.handleClick_ = this.handleClickEvent_.bind(this);
      this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
      this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
      this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
      this.root_.addEventListener('keydown', this.handleKeydown_);
      this.root_.addEventListener('focusin', this.focusInEventListener_);
      this.root_.addEventListener('focusout', this.focusOutEventListener_);
      this.root_.addEventListener('click', this.handleClick_);
      this.layout();
      this.initializeListType();
    }
  }, {
    key: 'layout',
    value: function layout() {
      var direction = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION);
      this.vertical = direction !== __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION_HORIZONTAL;

      // List items need to have at least tabindex=-1 to be focusable.
      [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
    }

    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'getListItemIndex_',
    value: function getListItemIndex_(evt) {
      var eventTarget = /** @type {HTMLElement} */evt.target;
      var index = -1;

      // Find the first ancestor that is a list item or the list.
      while (!eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS) && !eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].ROOT)) {
        eventTarget = eventTarget.parentElement;
      }

      // Get the index of the element if it is a list item.
      if (eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS)) {
        index = this.listElements.indexOf(eventTarget);
      }

      return index;
    }

    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleFocusInEvent_',
    value: function handleFocusInEvent_(evt) {
      var index = this.getListItemIndex_(evt);
      this.foundation_.handleFocusIn(evt, index);
    }

    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleFocusOutEvent_',
    value: function handleFocusOutEvent_(evt) {
      var index = this.getListItemIndex_(evt);
      this.foundation_.handleFocusOut(evt, index);
    }

    /**
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleKeydownEvent_',
    value: function handleKeydownEvent_(evt) {
      var index = this.getListItemIndex_(evt);

      if (index >= 0) {
        this.foundation_.handleKeydown(evt, evt.target.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS), index);
      }
    }

    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleClickEvent_',
    value: function handleClickEvent_(evt) {
      var index = this.getListItemIndex_(evt);

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      var toggleCheckbox = !Object(__WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__["matches"])( /** @type {!Element} */evt.target, __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
      this.foundation_.handleClick(index, toggleCheckbox);
    }
  }, {
    key: 'initializeListType',
    value: function initializeListType() {
      // Automatically set single selection if selected/activated classes are present.
      var preselectedElement = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS + ', .' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS);

      if (preselectedElement) {
        if (preselectedElement.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS)) {
          this.foundation_.setUseActivatedClass(true);
        }

        this.singleSelection = true;
        this.selectedIndex = this.listElements.indexOf(preselectedElement);
      }
    }

    /** @param {boolean} value */

  }, {
    key: 'getDefaultFoundation',


    /** @return {!MDCListFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]( /** @type {!MDCListAdapter} */_extends({
        getListItemCount: function getListItemCount() {
          return _this2.listElements.length;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return _this2.listElements.indexOf(document.activeElement);
        },
        setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
          var element = _this2.listElements[index];
          if (element) {
            element.setAttribute(attr, value);
          }
        },
        removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
          var element = _this2.listElements[index];
          if (element) {
            element.removeAttribute(attr);
          }
        },
        addClassForElementIndex: function addClassForElementIndex(index, className) {
          var element = _this2.listElements[index];
          if (element) {
            element.classList.add(className);
          }
        },
        removeClassForElementIndex: function removeClassForElementIndex(index, className) {
          var element = _this2.listElements[index];
          if (element) {
            element.classList.remove(className);
          }
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          var element = _this2.listElements[index];
          if (element) {
            element.focus();
          }
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
          var element = _this2.listElements[listItemIndex];
          var listItemChildren = [].slice.call(element.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
          listItemChildren.forEach(function (ele) {
            return ele.setAttribute('tabindex', tabIndexValue);
          });
        },
        followHref: function followHref(index) {
          var listItem = _this2.listElements[index];
          if (listItem && listItem.href) {
            listItem.click();
          }
        },
        toggleCheckbox: function toggleCheckbox(index) {
          var checkboxOrRadioExists = false;
          var listItem = _this2.listElements[index];
          var elementsToToggle = [].slice.call(listItem.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR));
          elementsToToggle.forEach(function (element) {
            var event = document.createEvent('Event');
            event.initEvent('change', true, true);

            if (!element.checked || element.type !== 'radio') {
              element.checked = !element.checked;
              element.dispatchEvent(event);
            }
            checkboxOrRadioExists = true;
          });
          return checkboxOrRadioExists;
        }
      }));
    }
  }, {
    key: 'vertical',
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    }

    /** @return Array<!Element>*/

  }, {
    key: 'listElements',
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ENABLED_ITEMS_SELECTOR));
    }

    /** @param {boolean} value */

  }, {
    key: 'wrapFocus',
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    }

    /** @param {boolean} isSingleSelectionList */

  }, {
    key: 'singleSelection',
    set: function set(isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    }

    /** @param {number} index */

  }, {
    key: 'selectedIndex',
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCList(root);
    }
  }]);

  return MDCList;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Drawer
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Drawer into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCDrawerAdapter = function () {
  function MDCDrawerAdapter() {
    _classCallCheck(this, MDCDrawerAdapter);
  }

  _createClass(MDCDrawerAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns true if the root Element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * @param {!Element} element target element to verify class name
     * @param {string} className class name
     */

  }, {
    key: "elementHasClass",
    value: function elementHasClass(element, className) {}

    /**
     * Saves the focus of currently active element.
     */

  }, {
    key: "saveFocus",
    value: function saveFocus() {}

    /**
     * Restores focus to element previously saved with 'saveFocus'.
     */

  }, {
    key: "restoreFocus",
    value: function restoreFocus() {}

    /**
     * Focuses the active / selected navigation item.
     */

  }, {
    key: "focusActiveNavigationItem",
    value: function focusActiveNavigationItem() {}

    /**
     * Emits a custom event "MDCDrawer:closed" denoting the drawer has closed.
     */

  }, {
    key: "notifyClose",
    value: function notifyClose() {}

    /**
     * Emits a custom event "MDCDrawer:opened" denoting the drawer has opened.
     */

  }, {
    key: "notifyOpen",
    value: function notifyOpen() {}

    /**
     * Traps focus on root element and focuses the active navigation element.
     */

  }, {
    key: "trapFocus",
    value: function trapFocus() {}

    /**
     * Releases focus trap from root element which was set by `trapFocus`
     * and restores focus to where it was prior to calling `trapFocus`.
     */

  }, {
    key: "releaseFocus",
    value: function releaseFocus() {}
  }]);

  return MDCDrawerAdapter;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (MDCDrawerAdapter);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(70);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCDrawerAdapter>}
 */

var MDCDismissibleDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCDismissibleDrawerFoundation, _MDCFoundation);

  _createClass(MDCDismissibleDrawerFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCDrawerAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          hasClass: function hasClass() /* className: string */{},
          elementHasClass: function elementHasClass() /* element: !Element, className: string */{},
          notifyClose: function notifyClose() {},
          notifyOpen: function notifyOpen() {},
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          focusActiveNavigationItem: function focusActiveNavigationItem() {},
          trapFocus: function trapFocus() {},
          releaseFocus: function releaseFocus() {}
        }
      );
    }
  }]);

  function MDCDismissibleDrawerFoundation(adapter) {
    _classCallCheck(this, MDCDismissibleDrawerFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCDismissibleDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCDismissibleDrawerFoundation)).call(this, _extends(MDCDismissibleDrawerFoundation.defaultAdapter, adapter)));

    _this.animationFrame_ = 0;

    /** @private {number} */
    _this.animationTimer_ = 0;
    return _this;
  }

  _createClass(MDCDismissibleDrawerFoundation, [{
    key: 'destroy',
    value: function destroy() {
      if (this.animationFrame_) {
        cancelAnimationFrame(this.animationFrame_);
      }
      if (this.animationTimer_) {
        clearTimeout(this.animationTimer_);
      }
    }

    /**
     * Function to open the drawer.
     */

  }, {
    key: 'open',
    value: function open() {
      var _this2 = this;

      if (this.isOpen() || this.isOpening() || this.isClosing()) {
        return;
      }

      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPEN);
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ANIMATE);

      // Wait a frame once display is no longer "none", to establish basis for animation
      this.runNextAnimationFrame_(function () {
        _this2.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING);
      });

      this.adapter_.saveFocus();
    }

    /**
     * Function to close the drawer.
     */

  }, {
    key: 'close',
    value: function close() {
      if (!this.isOpen() || this.isOpening() || this.isClosing()) {
        return;
      }

      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING);
    }

    /**
     * Extension point for when drawer finishes open animation.
     * @protected
     */

  }, {
    key: 'opened',
    value: function opened() {}

    /**
     * Extension point for when drawer finishes close animation.
     * @protected
     */

  }, {
    key: 'closed',
    value: function closed() {}

    /**
     * Returns true if drawer is in open state.
     * @return {boolean}
     */

  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPEN);
    }

    /**
     * Returns true if drawer is animating open.
     * @return {boolean}
     */

  }, {
    key: 'isOpening',
    value: function isOpening() {
      return this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING);
    }

    /**
     * Returns true if drawer is animating closed.
     * @return {boolean}
     */

  }, {
    key: 'isClosing',
    value: function isClosing() {
      return this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING);
    }

    /**
     * Keydown handler to close drawer when key is escape.
     * @param evt
     */

  }, {
    key: 'handleKeydown',
    value: function handleKeydown(evt) {
      var keyCode = evt.keyCode,
          key = evt.key;


      var isEscape = key === 'Escape' || keyCode === 27;
      if (isEscape) {
        this.close();
      }
    }

    /**
     * Handles a transition end event on the root element.
     * @param {!Event} evt
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      var OPENING = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING,
          CLOSING = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING,
          OPEN = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPEN,
          ANIMATE = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ANIMATE,
          ROOT = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ROOT;

      // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

      var isElement = evt.target instanceof Element;
      if (!isElement || !this.adapter_.elementHasClass( /** @type {!Element} */evt.target, ROOT)) {
        return;
      }

      if (this.isClosing()) {
        this.adapter_.removeClass(OPEN);
        this.adapter_.restoreFocus();
        this.closed();
        this.adapter_.notifyClose();
      } else {
        this.adapter_.focusActiveNavigationItem();
        this.opened();
        this.adapter_.notifyOpen();
      }

      this.adapter_.removeClass(ANIMATE);
      this.adapter_.removeClass(OPENING);
      this.adapter_.removeClass(CLOSING);
    }

    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     * @param {Function} callback
     * @private
     */

  }, {
    key: 'runNextAnimationFrame_',
    value: function runNextAnimationFrame_(callback) {
      var _this3 = this;

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = requestAnimationFrame(function () {
        _this3.animationFrame_ = 0;
        clearTimeout(_this3.animationTimer_);
        _this3.animationTimer_ = setTimeout(callback, 0);
      });
    }
  }]);

  return MDCDismissibleDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCDismissibleDrawerFoundation);

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-drawer',
  DISMISSIBLE: 'mdc-drawer--dismissible',
  MODAL: 'mdc-drawer--modal',
  OPEN: 'mdc-drawer--open',
  ANIMATE: 'mdc-drawer--animate',
  OPENING: 'mdc-drawer--opening',
  CLOSING: 'mdc-drawer--closing'
};

/** @enum {string} */
var strings = {
  APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
  SCRIM_SELECTOR: '.mdc-drawer-scrim',
  CLOSE_EVENT: 'MDCDrawer:closed',
  OPEN_EVENT: 'MDCDrawer:opened'
};



/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(105);
var xtend = __webpack_require__(106);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function() {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active || listeningFocusTrap !== trap) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ })

/******/ });
});
//# sourceMappingURL=mdc.drawer.js.map