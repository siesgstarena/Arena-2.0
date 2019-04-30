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
		exports["tabBar"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["tabBar"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 144);
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

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(39);
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
 * @extends {MDCFoundation<!MDCTabIndicatorAdapter>}
 * @abstract
 */

var MDCTabIndicatorFoundation = function (_MDCFoundation) {
  _inherits(MDCTabIndicatorFoundation, _MDCFoundation);

  _createClass(MDCTabIndicatorFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /**
     * @see MDCTabIndicatorAdapter for typing information
     * @return {!MDCTabIndicatorAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabIndicatorAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          computeContentClientRect: function computeContentClientRect() {},
          setContentStyleProperty: function setContentStyleProperty() {}
        }
      );
    }

    /** @param {!MDCTabIndicatorAdapter} adapter */

  }]);

  function MDCTabIndicatorFoundation(adapter) {
    _classCallCheck(this, MDCTabIndicatorFoundation);

    return _possibleConstructorReturn(this, (MDCTabIndicatorFoundation.__proto__ || Object.getPrototypeOf(MDCTabIndicatorFoundation)).call(this, _extends(MDCTabIndicatorFoundation.defaultAdapter, adapter)));
  }

  /** @return {!ClientRect} */


  _createClass(MDCTabIndicatorFoundation, [{
    key: 'computeContentClientRect',
    value: function computeContentClientRect() {
      return this.adapter_.computeContentClientRect();
    }

    /**
     * Activates the indicator
     * @param {!ClientRect=} previousIndicatorClientRect
     * @abstract
     */

  }, {
    key: 'activate',
    value: function activate(previousIndicatorClientRect) {} // eslint-disable-line no-unused-vars

    /** @abstract */

  }, {
    key: 'deactivate',
    value: function deactivate() {}
  }]);

  return MDCTabIndicatorFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabIndicatorFoundation);

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBar", function() { return MDCTabBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_tab_index__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tab_scroller_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
 * @extends {MDCComponent<!MDCTabBarFoundation>}
 * @final
 */

var MDCTabBar = function (_MDCComponent) {
  _inherits(MDCTabBar, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTabBar() {
    var _ref;

    _classCallCheck(this, MDCTabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Array<!MDCTab>} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTabBar.__proto__ || Object.getPrototypeOf(MDCTabBar)).call.apply(_ref, [this].concat(args)));

    _this.tabList_;

    /** @type {(function(!Element): !MDCTab)} */
    _this.tabFactory_;

    /** @private {?MDCTabScroller} */
    _this.tabScroller_;

    /** @type {(function(!Element): !MDCTabScroller)} */
    _this.tabScrollerFactory_;

    /** @private {?function(?Event): undefined} */
    _this.handleTabInteraction_;

    /** @private {?function(?Event): undefined} */
    _this.handleKeyDown_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTabBar}
   */


  _createClass(MDCTabBar, [{
    key: 'initialize',


    /**
     * @param {(function(!Element): !MDCTab)=} tabFactory A function which creates a new MDCTab
     * @param {(function(!Element): !MDCTabScroller)=} tabScrollerFactory A function which creates a new MDCTabScroller
     */
    value: function initialize() {
      var _this2 = this;

      var tabFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_1__material_tab_index__["MDCTab"](el);
      };
      var tabScrollerFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_2__material_tab_scroller_index__["MDCTabScroller"](el);
      };

      this.tabFactory_ = tabFactory;
      this.tabScrollerFactory_ = tabScrollerFactory;

      this.tabList_ = this.getTabElements_().map(function (el) {
        return _this2.tabFactory_(el);
      });

      var tabScrollerElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_SCROLLER_SELECTOR);
      if (tabScrollerElement) {
        this.tabScroller_ = this.tabScrollerFactory_(tabScrollerElement);
      }
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this3 = this;

      this.handleTabInteraction_ = function (evt) {
        return _this3.foundation_.handleTabInteraction(evt);
      };
      this.handleKeyDown_ = function (evt) {
        return _this3.foundation_.handleKeyDown(evt);
      };

      this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_1__material_tab_index__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
      this.root_.addEventListener('keydown', this.handleKeyDown_);

      for (var i = 0; i < this.tabList_.length; i++) {
        if (this.tabList_[i].active) {
          this.scrollIntoView(i);
          break;
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTabBar.prototype.__proto__ || Object.getPrototypeOf(MDCTabBar.prototype), 'destroy', this).call(this);
      this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__material_tab_index__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
      this.root_.removeEventListener('keydown', this.handleKeyDown_);
      this.tabList_.forEach(function (tab) {
        return tab.destroy();
      });
      this.tabScroller_.destroy();
    }

    /**
     * @return {!MDCTabBarFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */](
      /** @type {!MDCTabBarAdapter} */{
        scrollTo: function scrollTo(scrollX) {
          return _this4.tabScroller_.scrollTo(scrollX);
        },
        incrementScroll: function incrementScroll(scrollXIncrement) {
          return _this4.tabScroller_.incrementScroll(scrollXIncrement);
        },
        getScrollPosition: function getScrollPosition() {
          return _this4.tabScroller_.getScrollPosition();
        },
        getScrollContentWidth: function getScrollContentWidth() {
          return _this4.tabScroller_.getScrollContentWidth();
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this4.root_.offsetWidth;
        },
        isRTL: function isRTL() {
          return window.getComputedStyle(_this4.root_).getPropertyValue('direction') === 'rtl';
        },
        setActiveTab: function setActiveTab(index) {
          return _this4.foundation_.activateTab(index);
        },
        activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
          return _this4.tabList_[index].activate(clientRect);
        },
        deactivateTabAtIndex: function deactivateTabAtIndex(index) {
          return _this4.tabList_[index].deactivate();
        },
        focusTabAtIndex: function focusTabAtIndex(index) {
          return _this4.tabList_[index].focus();
        },
        getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
          return _this4.tabList_[index].computeIndicatorClientRect();
        },
        getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
          return _this4.tabList_[index].computeDimensions();
        },
        getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
          for (var i = 0; i < _this4.tabList_.length; i++) {
            if (_this4.tabList_[i].active) {
              return i;
            }
          }
          return -1;
        },
        getFocusedTabIndex: function getFocusedTabIndex() {
          var tabElements = _this4.getTabElements_();
          var activeElement = document.activeElement;
          return tabElements.indexOf(activeElement);
        },
        getIndexOfTab: function getIndexOfTab(tabToFind) {
          return _this4.tabList_.indexOf(tabToFind);
        },
        getTabListLength: function getTabListLength() {
          return _this4.tabList_.length;
        },
        notifyTabActivated: function notifyTabActivated(index) {
          return _this4.emit(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_ACTIVATED_EVENT, { index: index }, true);
        }
      });
    }

    /**
     * Activates the tab at the given index
     * @param {number} index The index of the tab
     */

  }, {
    key: 'activateTab',
    value: function activateTab(index) {
      this.foundation_.activateTab(index);
    }

    /**
     * Scrolls the tab at the given index into view
     * @param {number} index THe index of the tab
     */

  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(index) {
      this.foundation_.scrollIntoView(index);
    }
  }, {
    key: 'getTabElements_',
    value: function getTabElements_() {
      return [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_SELECTOR));
    }
  }, {
    key: 'focusOnActivate',
    set: function set(focusOnActivate) {
      this.tabList_.forEach(function (tab) {
        return tab.focusOnActivate = focusOnActivate;
      });
    }
  }, {
    key: 'useAutomaticActivation',
    set: function set(useAutomaticActivation) {
      this.foundation_.setUseAutomaticActivation(useAutomaticActivation);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTabBar(root);
    }
  }]);

  return MDCTabBar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_tab_adapter__ = __webpack_require__(26);
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






/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @type {Set<string>}
 */
var ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].END_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].HOME_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ENTER_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].SPACE_KEY);

/**
 * @type {Map<number, string>}
 */
var KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].ARROW_LEFT_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].ARROW_RIGHT_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].END_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].END_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].HOME_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].HOME_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].ENTER_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ENTER_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].SPACE_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].SPACE_KEY);

/**
 * @extends {MDCFoundation<!MDCTabBarAdapter>}
 * @final
 */

var MDCTabBarFoundation = function (_MDCFoundation) {
  _inherits(MDCTabBarFoundation, _MDCFoundation);

  _createClass(MDCTabBarFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */];
    }

    /**
     * @see MDCTabBarAdapter for typing information
     * @return {!MDCTabBarAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabBarAdapter} */{
          scrollTo: function scrollTo() {},
          incrementScroll: function incrementScroll() {},
          getScrollPosition: function getScrollPosition() {},
          getScrollContentWidth: function getScrollContentWidth() {},
          getOffsetWidth: function getOffsetWidth() {},
          isRTL: function isRTL() {},
          setActiveTab: function setActiveTab() {},
          activateTabAtIndex: function activateTabAtIndex() {},
          deactivateTabAtIndex: function deactivateTabAtIndex() {},
          focusTabAtIndex: function focusTabAtIndex() {},
          getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex() {},
          getTabDimensionsAtIndex: function getTabDimensionsAtIndex() {},
          getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {},
          getFocusedTabIndex: function getFocusedTabIndex() {},
          getIndexOfTab: function getIndexOfTab() {},
          getTabListLength: function getTabListLength() {},
          notifyTabActivated: function notifyTabActivated() {}
        }
      );
    }

    /**
     * @param {!MDCTabBarAdapter} adapter
     * */

  }]);

  function MDCTabBarFoundation(adapter) {
    _classCallCheck(this, MDCTabBarFoundation);

    /** @private {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCTabBarFoundation.__proto__ || Object.getPrototypeOf(MDCTabBarFoundation)).call(this, _extends(MDCTabBarFoundation.defaultAdapter, adapter)));

    _this.useAutomaticActivation_ = false;
    return _this;
  }

  /**
   * Switches between automatic and manual activation modes.
   * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
   * @param {boolean} useAutomaticActivation
   */


  _createClass(MDCTabBarFoundation, [{
    key: 'setUseAutomaticActivation',
    value: function setUseAutomaticActivation(useAutomaticActivation) {
      this.useAutomaticActivation_ = useAutomaticActivation;
    }

    /**
     * Activates the tab at the given index
     * @param {number} index
     */

  }, {
    key: 'activateTab',
    value: function activateTab(index) {
      var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();
      if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
        return;
      }

      this.adapter_.deactivateTabAtIndex(previousActiveIndex);
      this.adapter_.activateTabAtIndex(index, this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex));
      this.scrollIntoView(index);

      this.adapter_.notifyTabActivated(index);
    }

    /**
     * Handles the keydown event
     * @param {!Event} evt
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(evt) {
      // Get the key from the event
      var key = this.getKeyFromEvent_(evt);

      // Early exit if the event key isn't one of the keyboard navigation keys
      if (key === undefined) {
        return;
      }

      // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple
      if (!this.isActivationKey_(key)) {
        evt.preventDefault();
      }

      if (this.useAutomaticActivation_) {
        if (this.isActivationKey_(key)) {
          return;
        }

        var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
        this.adapter_.setActiveTab(index);
        this.scrollIntoView(index);
      } else {
        var focusedTabIndex = this.adapter_.getFocusedTabIndex();
        if (this.isActivationKey_(key)) {
          this.adapter_.setActiveTab(focusedTabIndex);
        } else {
          var _index = this.determineTargetFromKey_(focusedTabIndex, key);
          this.adapter_.focusTabAtIndex(_index);
          this.scrollIntoView(_index);
        }
      }
    }

    /**
     * Handles the MDCTab:interacted event
     * @param {!Event} evt
     */

  }, {
    key: 'handleTabInteraction',
    value: function handleTabInteraction(evt) {
      this.adapter_.setActiveTab(this.adapter_.getIndexOfTab(evt.detail.tab));
    }

    /**
     * Scrolls the tab at the given index into view
     * @param {number} index The tab index to make visible
     */

  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(index) {
      // Early exit if the index is out of range
      if (!this.indexIsInRange_(index)) {
        return;
      }

      // Always scroll to 0 if scrolling to the 0th index
      if (index === 0) {
        return this.adapter_.scrollTo(0);
      }

      // Always scroll to the max value if scrolling to the Nth index
      // MDCTabScroller.scrollTo() will never scroll past the max possible value
      if (index === this.adapter_.getTabListLength() - 1) {
        return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
      }

      if (this.isRTL_()) {
        return this.scrollIntoViewRTL_(index);
      }

      this.scrollIntoView_(index);
    }

    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param {number} origin The original index from which to determine the destination
     * @param {string} key The name of the key
     * @return {number}
     * @private
     */

  }, {
    key: 'determineTargetFromKey_',
    value: function determineTargetFromKey_(origin, key) {
      var isRTL = this.isRTL_();
      var maxIndex = this.adapter_.getTabListLength() - 1;
      var shouldGoToEnd = key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].END_KEY;
      var shouldDecrement = key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY && !isRTL || key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY && isRTL;
      var shouldIncrement = key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY && !isRTL || key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY && isRTL;
      var index = origin;

      if (shouldGoToEnd) {
        index = maxIndex;
      } else if (shouldDecrement) {
        index -= 1;
      } else if (shouldIncrement) {
        index += 1;
      } else {
        index = 0;
      }

      if (index < 0) {
        index = maxIndex;
      } else if (index > maxIndex) {
        index = 0;
      }

      return index;
    }

    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param {number} index The index of the tab
     * @param {number} nextIndex The index of the next tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the Tab Bar
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateScrollIncrement_',
    value: function calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
      var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
      var leftIncrement = relativeContentRight - __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft + __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;

      if (nextIndex < index) {
        return Math.min(leftIncrement, 0);
      }

      return Math.max(rightIncrement, 0);
    }

    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param {number} index The index of the tab
     * @param {number} nextIndex The index of the next tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the Tab Bar
     * @param {number} scrollContentWidth The width of the scroll content
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateScrollIncrementRTL_',
    value: function calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
      var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
      var leftIncrement = relativeContentRight + __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft - __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;

      if (nextIndex > index) {
        return Math.max(leftIncrement, 0);
      }

      return Math.min(rightIncrement, 0);
    }

    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param {number} index The index of the tab
     * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the tab bar
     * @return {number}
     * @private
     */

  }, {
    key: 'findAdjacentTabIndexClosestToEdge_',
    value: function findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth) {
      /**
       * Tabs are laid out in the Tab Scroller like this:
       *
       *    Scroll Position
       *    +---+
       *    |   |   Bar Width
       *    |   +-----------------------------------+
       *    |   |                                   |
       *    |   V                                   V
       *    |   +-----------------------------------+
       *    V   |             Tab Scroller          |
       *    +------------+--------------+-------------------+
       *    |    Tab     |      Tab     |        Tab        |
       *    +------------+--------------+-------------------+
       *        |                                   |
       *        +-----------------------------------+
       *
       * To determine the next adjacent index, we look at the Tab root left and
       * Tab root right, both relative to the scroll position. If the Tab root
       * left is less than 0, then we know it's out of view to the left. If the
       * Tab root right minus the bar width is greater than 0, we know the Tab is
       * out of view to the right. From there, we either increment or decrement
       * the index.
       */
      var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
      var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
      var relativeRootDelta = relativeRootLeft + relativeRootRight;
      var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
      var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;

      if (leftEdgeIsCloser) {
        return index - 1;
      }

      if (rightEdgeIsCloser) {
        return index + 1;
      }

      return -1;
    }

    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param {number} index The index of the tab
     * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the tab bar
     * @param {number} scrollContentWidth The width of the scroller content
     * @return {number}
     * @private
     */

  }, {
    key: 'findAdjacentTabIndexClosestToEdgeRTL_',
    value: function findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
      var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
      var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
      var rootDelta = rootLeft + rootRight;
      var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
      var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;

      if (leftEdgeIsCloser) {
        return index + 1;
      }

      if (rightEdgeIsCloser) {
        return index - 1;
      }

      return -1;
    }

    /**
     * Returns the key associated with a keydown event
     * @param {!Event} evt The keydown event
     * @return {string}
     * @private
     */

  }, {
    key: 'getKeyFromEvent_',
    value: function getKeyFromEvent_(evt) {
      if (ACCEPTABLE_KEYS.has(evt.key)) {
        return evt.key;
      }

      return KEYCODE_MAP.get(evt.keyCode);
    }
  }, {
    key: 'isActivationKey_',
    value: function isActivationKey_(key) {
      return key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].SPACE_KEY || key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ENTER_KEY;
    }

    /**
     * Returns whether a given index is inclusively between the ends
     * @param {number} index The index to test
     * @private
     */

  }, {
    key: 'indexIsInRange_',
    value: function indexIsInRange_(index) {
      return index >= 0 && index < this.adapter_.getTabListLength();
    }

    /**
     * Returns the view's RTL property
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isRTL_',
    value: function isRTL_() {
      return this.adapter_.isRTL();
    }

    /**
     * Scrolls the tab at the given index into view for left-to-right useragents
     * @param {number} index The index of the tab to scroll into view
     * @private
     */

  }, {
    key: 'scrollIntoView_',
    value: function scrollIntoView_(index) {
      var scrollPosition = this.adapter_.getScrollPosition();
      var barWidth = this.adapter_.getOffsetWidth();
      var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
      var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

      if (!this.indexIsInRange_(nextIndex)) {
        return;
      }

      var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
      this.adapter_.incrementScroll(scrollIncrement);
    }

    /**
     * Scrolls the tab at the given index into view in RTL
     * @param {number} index The tab index to make visible
     * @private
     */

  }, {
    key: 'scrollIntoViewRTL_',
    value: function scrollIntoViewRTL_(index) {
      var scrollPosition = this.adapter_.getScrollPosition();
      var barWidth = this.adapter_.getOffsetWidth();
      var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
      var scrollWidth = this.adapter_.getScrollContentWidth();
      var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);

      if (!this.indexIsInRange_(nextIndex)) {
        return;
      }

      var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
      this.adapter_.incrementScroll(scrollIncrement);
    }
  }]);

  return MDCTabBarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabBarFoundation);

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
var strings = {
  TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
  TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
  TAB_SELECTOR: '.mdc-tab',
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
  END_KEY: 'End',
  HOME_KEY: 'Home',
  ENTER_KEY: 'Enter',
  SPACE_KEY: 'Space'
};

/** @enum {number} */
var numbers = {
  EXTRA_SCROLL_AMOUNT: 20,
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  HOME_KEYCODE: 36,
  ENTER_KEYCODE: 13,
  SPACE_KEYCODE: 32
};



/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(9);
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

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @abstract
 */

var MDCTabScrollerRTL = function () {
  /** @param {!MDCTabScrollerAdapter} adapter */
  function MDCTabScrollerRTL(adapter) {
    _classCallCheck(this, MDCTabScrollerRTL);

    /** @private */
    this.adapter_ = adapter;
  }

  /**
   * @param {number} translateX The current translateX position
   * @return {number}
   * @abstract
   */


  _createClass(MDCTabScrollerRTL, [{
    key: 'getScrollPositionRTL',
    value: function getScrollPositionRTL(translateX) {}

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     * @abstract
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {}

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     * @abstract
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {}

    /**
     * @param {number} scrollX The current scrollX position
     * @param {number} translateX The current translateX position
     * @return {number}
     * @abstract
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX, translateX) {}
  }]);

  return MDCTabScrollerRTL;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTL);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesProperty", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
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
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|!EventListenerOptions}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
          return isSupported;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {string}
 */
function getMatchesProperty(HTMLElementPrototype) {
  /**
   * Order is important because we return the first existing method we find.
   * Do not change the order of the items in the below array.
   */
  var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
  var method = 'matches';
  for (var i = 0; i < matchesMethods.length; i++) {
    var matchesMethod = matchesMethods[i];
    if (matchesMethod in HTMLElementPrototype) {
      method = matchesMethod;
      break;
    }
  }

  return method;
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    ev = /** @type {!TouchEvent} */ev;
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    ev = /** @type {!MouseEvent} */ev;
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}



/***/ }),

/***/ 24:
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
 * Adapter for MDC Tab Indicator.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Indicator into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTabIndicatorAdapter = function () {
  function MDCTabIndicatorAdapter() {
    _classCallCheck(this, MDCTabIndicatorAdapter);
  }

  _createClass(MDCTabIndicatorAdapter, [{
    key: "addClass",

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */
    value: function addClass(className) {}

    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns the client rect of the content element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeContentClientRect",
    value: function computeContentClientRect() {}

    /**
     * Sets a style property of the content element to the passed value
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setContentStyleProperty",
    value: function setContentStyleProperty(propName, value) {}
  }]);

  return MDCTabIndicatorAdapter;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTabIndicatorAdapter);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCTabDimensions */
/* unused harmony export MDCTabAdapter */
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
 * MDCTabDimensions provides details about the left and right edges of the Tab
 * root element and the Tab content element. These values are used to determine
 * the visual position of the Tab with respect it's parent container.
 * @typedef {{rootLeft: number, rootRight: number, contentLeft: number, contentRight: number}}
 */
var MDCTabDimensions = void 0;

/**
 * Adapter for MDC Tab.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabAdapter = function () {
  function MDCTabAdapter() {
    _classCallCheck(this, MDCTabAdapter);
  }

  _createClass(MDCTabAdapter, [{
    key: "addClass",

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */
    value: function addClass(className) {}

    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns whether the root element has the given className.
     * @param {string} className The className to remove
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets the given attrName of the root element to the given value.
     * @param {string} attr The attribute name to set
     * @param {string} value The value so give the attribute
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Activates the indicator element.
     * @param {!ClientRect=} previousIndicatorClientRect The client rect of the previously activated indicator
     */

  }, {
    key: "activateIndicator",
    value: function activateIndicator(previousIndicatorClientRect) {}

    /** Deactivates the indicator. */

  }, {
    key: "deactivateIndicator",
    value: function deactivateIndicator() {}

    /**
     * Emits the MDCTab:interacted event for use by parent components
     */

  }, {
    key: "notifyInteracted",
    value: function notifyInteracted() {}

    /**
     * Returns the offsetLeft value of the root element.
     * @return {number}
     */

  }, {
    key: "getOffsetLeft",
    value: function getOffsetLeft() {}

    /**
     * Returns the offsetWidth value of the root element.
     * @return {number}
     */

  }, {
    key: "getOffsetWidth",
    value: function getOffsetWidth() {}

    /**
     * Returns the offsetLeft of the content element.
     * @return {number}
     */

  }, {
    key: "getContentOffsetLeft",
    value: function getContentOffsetLeft() {}

    /**
     * Returns the offsetWidth of the content element.
     * @return {number}
     */

  }, {
    key: "getContentOffsetWidth",
    value: function getContentOffsetWidth() {}

    /**
     * Applies focus to the root element
     */

  }, {
    key: "focus",
    value: function focus() {}
  }]);

  return MDCTabAdapter;
}();



/***/ }),

/***/ 3:
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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
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
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (MDCRippleAdapter);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabIndicator", function() { return MDCTabIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sliding_foundation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fading_foundation__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabIndicatorFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSlidingTabIndicatorFoundation", function() { return __WEBPACK_IMPORTED_MODULE_3__sliding_foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFadingTabIndicatorFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__fading_foundation__["a"]; });
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
 * @extends {MDCComponent<!MDCTabIndicatorFoundation>}
 * @final
 */

var MDCTabIndicator = function (_MDCComponent) {
  _inherits(MDCTabIndicator, _MDCComponent);

  _createClass(MDCTabIndicator, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTabIndicator}
     */
    value: function attachTo(root) {
      return new MDCTabIndicator(root);
    }

    /**
     * @param {...?} args
     */

  }]);

  function MDCTabIndicator() {
    var _ref;

    _classCallCheck(this, MDCTabIndicator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTabIndicator.__proto__ || Object.getPrototypeOf(MDCTabIndicator)).call.apply(_ref, [this].concat(args)));

    _this.content_;
    return _this;
  }

  _createClass(MDCTabIndicator, [{
    key: 'initialize',
    value: function initialize() {
      this.content_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CONTENT_SELECTOR);
    }

    /**
     * @return {!ClientRect}
     */

  }, {
    key: 'computeContentClientRect',
    value: function computeContentClientRect() {
      return this.foundation_.computeContentClientRect();
    }

    /**
     * @return {!MDCTabIndicatorFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var adapter = /** @type {!MDCTabIndicatorAdapter} */_extends({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        computeContentClientRect: function computeContentClientRect() {
          return _this2.content_.getBoundingClientRect();
        },
        setContentStyleProperty: function setContentStyleProperty(prop, value) {
          return _this2.content_.style.setProperty(prop, value);
        }
      });

      if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].cssClasses.FADE)) {
        return new __WEBPACK_IMPORTED_MODULE_4__fading_foundation__["a" /* default */](adapter);
      }

      // Default to the sliding indicator
      return new __WEBPACK_IMPORTED_MODULE_3__sliding_foundation__["a" /* default */](adapter);
    }

    /**
     * @param {!ClientRect=} previousIndicatorClientRect
     */

  }, {
    key: 'activate',
    value: function activate(previousIndicatorClientRect) {
      this.foundation_.activate(previousIndicatorClientRect);
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }]);

  return MDCTabIndicator;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  NO_TRANSITION: 'mdc-tab-indicator--no-transition'
};

/** @enum {string} */
var strings = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content'
};



/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() { return RippleCapableSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
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
 * @extends MDCComponent<!MDCRippleFoundation>
 */

var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /**
     * @return {!MDCRippleFoundation}
     * @override
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }

    /** @override */

  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;



/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(14);
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
 * @extends {MDCTabIndicatorFoundation}
 * @final
 */

var MDCSlidingTabIndicatorFoundation = function (_MDCTabIndicatorFound) {
  _inherits(MDCSlidingTabIndicatorFoundation, _MDCTabIndicatorFound);

  function MDCSlidingTabIndicatorFoundation() {
    _classCallCheck(this, MDCSlidingTabIndicatorFoundation);

    return _possibleConstructorReturn(this, (MDCSlidingTabIndicatorFoundation.__proto__ || Object.getPrototypeOf(MDCSlidingTabIndicatorFoundation)).apply(this, arguments));
  }

  _createClass(MDCSlidingTabIndicatorFoundation, [{
    key: 'activate',

    /** @param {!ClientRect=} previousIndicatorClientRect */
    value: function activate(previousIndicatorClientRect) {
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
        return;
      }

      // This animation uses the FLIP approach. You can read more about it at the link below:
      // https://aerotwist.com/blog/flip-your-animations/

      // Calculate the dimensions based on the dimensions of the previous indicator
      var currentClientRect = this.computeContentClientRect();
      var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.NO_TRANSITION);
      this.adapter_.setContentStyleProperty('transform', 'translateX(' + xPosition + 'px) scaleX(' + widthDelta + ')');

      // Force repaint before updating classes and transform to ensure the transform properly takes effect
      this.computeContentClientRect();

      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.NO_TRANSITION);
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
      this.adapter_.setContentStyleProperty('transform', '');
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
    }
  }]);

  return MDCSlidingTabIndicatorFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSlidingTabIndicatorFoundation);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(14);
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
 * @extends {MDCTabIndicatorFoundation}
 * @final
 */

var MDCFadingTabIndicatorFoundation = function (_MDCTabIndicatorFound) {
  _inherits(MDCFadingTabIndicatorFoundation, _MDCTabIndicatorFound);

  function MDCFadingTabIndicatorFoundation() {
    _classCallCheck(this, MDCFadingTabIndicatorFoundation);

    return _possibleConstructorReturn(this, (MDCFadingTabIndicatorFoundation.__proto__ || Object.getPrototypeOf(MDCFadingTabIndicatorFoundation)).apply(this, arguments));
  }

  _createClass(MDCFadingTabIndicatorFoundation, [{
    key: 'activate',
    value: function activate() {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
    }
  }]);

  return MDCFadingTabIndicatorFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCFadingTabIndicatorFoundation);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
  ANIMATING: 'mdc-tab-scroller--animating',
  SCROLL_TEST: 'mdc-tab-scroller__test',
  SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll'
};

/** @enum {string} */
var strings = {
  AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
  CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
};



/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTab", function() { return MDCTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tab_indicator_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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



/* eslint-disable no-unused-vars */



/* eslint-enable no-unused-vars */



/**
 * @extends {MDCComponent<!MDCTabFoundation>}
 * @final
 */

var MDCTab = function (_MDCComponent) {
  _inherits(MDCTab, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTab() {
    var _ref;

    _classCallCheck(this, MDCTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTab.__proto__ || Object.getPrototypeOf(MDCTab)).call.apply(_ref, [this].concat(args)));

    _this.ripple_;
    /** @private {?MDCTabIndicator} */
    _this.tabIndicator_;
    /** @private {?Element} */
    _this.content_;

    /** @private {?Function} */
    _this.handleClick_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTab}
   */


  _createClass(MDCTab, [{
    key: 'initialize',
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
        return new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](el, foundation);
      };
      var tabIndicatorFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_2__material_tab_indicator_index__["MDCTabIndicator"](el);
      };

      var rippleSurface = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.RIPPLE_SELECTOR);
      var rippleAdapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"].createAdapter( /** @type {!RippleCapableSurface} */this), {
        addClass: function addClass(className) {
          return rippleSurface.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return rippleSurface.classList.remove(className);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return rippleSurface.style.setProperty(varName, value);
        }
      });
      var rippleFoundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRippleFoundation"](rippleAdapter);
      this.ripple_ = rippleFactory(this.root_, rippleFoundation);

      var tabIndicatorElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_INDICATOR_SELECTOR);
      this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);

      this.content_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.CONTENT_SELECTOR);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_);
      this.listen('click', this.handleClick_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.unlisten('click', /** @type {!Function} */this.handleClick_);
      this.ripple_.destroy();
      _get(MDCTab.prototype.__proto__ || Object.getPrototypeOf(MDCTab.prototype), 'destroy', this).call(this);
    }

    /**
     * @return {!MDCTabFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */](
      /** @type {!MDCTabAdapter} */{
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        activateIndicator: function activateIndicator(previousIndicatorClientRect) {
          return _this2.tabIndicator_.activate(previousIndicatorClientRect);
        },
        deactivateIndicator: function deactivateIndicator() {
          return _this2.tabIndicator_.deactivate();
        },
        notifyInteracted: function notifyInteracted() {
          return _this2.emit(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.INTERACTED_EVENT, { tab: _this2 }, true /* bubble */);
        },
        getOffsetLeft: function getOffsetLeft() {
          return _this2.root_.offsetLeft;
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this2.root_.offsetWidth;
        },
        getContentOffsetLeft: function getContentOffsetLeft() {
          return _this2.content_.offsetLeft;
        },
        getContentOffsetWidth: function getContentOffsetWidth() {
          return _this2.content_.offsetWidth;
        },
        focus: function focus() {
          return _this2.root_.focus();
        }
      });
    }

    /**
     * Getter for the active state of the tab
     * @return {boolean}
     */

  }, {
    key: 'activate',


    /**
     * Activates the tab
     * @param {!ClientRect=} computeIndicatorClientRect
     */
    value: function activate(computeIndicatorClientRect) {
      this.foundation_.activate(computeIndicatorClientRect);
    }

    /**
     * Deactivates the tab
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }

    /**
     * Returns the indicator's client rect
     * @return {!ClientRect}
     */

  }, {
    key: 'computeIndicatorClientRect',
    value: function computeIndicatorClientRect() {
      return this.tabIndicator_.computeContentClientRect();
    }

    /**
     * @return {!MDCTabDimensions}
     */

  }, {
    key: 'computeDimensions',
    value: function computeDimensions() {
      return this.foundation_.computeDimensions();
    }

    /**
     * Focuses the tab
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.root_.focus();
    }
  }, {
    key: 'active',
    get: function get() {
      return this.foundation_.isActive();
    }
  }, {
    key: 'focusOnActivate',
    set: function set(focusOnActivate) {
      this.foundation_.setFocusOnActivate(focusOnActivate);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTab(root);
    }
  }]);

  return MDCTab;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
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
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: (!Event|undefined),
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event=),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event=)} */
    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    /** @private {function(!Event=)} */
    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    /** @private {function(!Event=)} */
    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {!Event|undefined} */
    _this.previousActivationEvent_;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'supportsPressRipple_',
    value: function supportsPressRipple_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: undefined,
        isProgrammatic: false
      };
    }

    /** @override */

  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      var supportsPressRipple = this.supportsPressRipple_();

      this.registerRootHandlers_(supportsPressRipple);

      if (supportsPressRipple) {
        var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$.ROOT,
            UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

        requestAnimationFrame(function () {
          _this2.adapter_.addClass(ROOT);
          if (_this2.adapter_.isUnbounded()) {
            _this2.adapter_.addClass(UNBOUNDED);
            // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
            _this2.layoutInternal_();
          }
        });
      }
    }

    /** @override */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (this.supportsPressRipple_()) {
        if (this.activationTimer_) {
          clearTimeout(this.activationTimer_);
          this.activationTimer_ = 0;
          this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
        }

        if (this.fgDeactivationRemovalTimer_) {
          clearTimeout(this.fgDeactivationRemovalTimer_);
          this.fgDeactivationRemovalTimer_ = 0;
          this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
        }

        var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$2.ROOT,
            UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

        requestAnimationFrame(function () {
          _this3.adapter_.removeClass(ROOT);
          _this3.adapter_.removeClass(UNBOUNDED);
          _this3.removeCssVars_();
        });
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();
    }

    /**
     * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
     * @private
     */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_(supportsPressRipple) {
      var _this4 = this;

      if (supportsPressRipple) {
        ACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
        });
        if (this.adapter_.isUnbounded()) {
          this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
      }

      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {!Event=} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === undefined;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

      var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e !== undefined) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {!Event=} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {!Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate(event) {
      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = undefined;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_() {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */_extends({}, activationState);

      if (activationState.isProgrammatic) {
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(state);
          _this13.resetActivationState_();
        });
      }
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_();
    }

    /**
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(_ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      var _this16 = this;

      requestAnimationFrame(function () {
        return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this17 = this;

      requestAnimationFrame(function () {
        return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(54);
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



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */



/**
 * @extends {MDCFoundation<!MDCTabAdapter>}
 * @final
 */

var MDCTabFoundation = function (_MDCFoundation) {
  _inherits(MDCTabFoundation, _MDCFoundation);

  _createClass(MDCTabFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /**
     * @see MDCTabAdapter for typing information
     * @return {!MDCTabAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          activateIndicator: function activateIndicator() {},
          deactivateIndicator: function deactivateIndicator() {},
          notifyInteracted: function notifyInteracted() {},
          getOffsetLeft: function getOffsetLeft() {},
          getOffsetWidth: function getOffsetWidth() {},
          getContentOffsetLeft: function getContentOffsetLeft() {},
          getContentOffsetWidth: function getContentOffsetWidth() {},
          focus: function focus() {}
        }
      );
    }

    /** @param {!MDCTabAdapter} adapter */

  }]);

  function MDCTabFoundation(adapter) {
    _classCallCheck(this, MDCTabFoundation);

    /** @private {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCTabFoundation.__proto__ || Object.getPrototypeOf(MDCTabFoundation)).call(this, _extends(MDCTabFoundation.defaultAdapter, adapter)));

    _this.focusOnActivate_ = true;
    return _this;
  }

  /**
   * Handles the "click" event
   */


  _createClass(MDCTabFoundation, [{
    key: 'handleClick',
    value: function handleClick() {
      // It's up to the parent component to keep track of the active Tab and
      // ensure we don't activate a Tab that's already active.
      this.adapter_.notifyInteracted();
    }

    /**
     * Returns the Tab's active state
     * @return {boolean}
     */

  }, {
    key: 'isActive',
    value: function isActive() {
      return this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
    }

    /**
     * Sets whether the tab should focus itself when activated
     * @param {boolean} focusOnActivate
     */

  }, {
    key: 'setFocusOnActivate',
    value: function setFocusOnActivate(focusOnActivate) {
      this.focusOnActivate_ = focusOnActivate;
    }

    /**
     * Activates the Tab
     * @param {!ClientRect=} previousIndicatorClientRect
     */

  }, {
    key: 'activate',
    value: function activate(previousIndicatorClientRect) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
      this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'true');
      this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].TABINDEX, '0');
      this.adapter_.activateIndicator(previousIndicatorClientRect);
      if (this.focusOnActivate_) {
        this.adapter_.focus();
      }
    }

    /**
     * Deactivates the Tab
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      // Early exit
      if (!this.isActive()) {
        return;
      }

      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
      this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'false');
      this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].TABINDEX, '-1');
      this.adapter_.deactivateIndicator();
    }

    /**
     * Returns the dimensions of the Tab
     * @return {!MDCTabDimensions}
     */

  }, {
    key: 'computeDimensions',
    value: function computeDimensions() {
      var rootWidth = this.adapter_.getOffsetWidth();
      var rootLeft = this.adapter_.getOffsetLeft();
      var contentWidth = this.adapter_.getContentOffsetWidth();
      var contentLeft = this.adapter_.getContentOffsetLeft();

      return {
        rootLeft: rootLeft,
        rootRight: rootLeft + rootWidth,
        contentLeft: rootLeft + contentLeft,
        contentRight: rootLeft + contentLeft + contentWidth
      };
    }
  }]);

  return MDCTabFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabFoundation);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
  ACTIVE: 'mdc-tab--active'
};

/** @enum {string} */
var strings = {
  ARIA_SELECTED: 'aria-selected',
  RIPPLE_SELECTOR: '.mdc-tab__ripple',
  CONTENT_SELECTOR: '.mdc-tab__content',
  TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
  TABINDEX: 'tabIndex',
  INTERACTED_EVENT: 'MDCTab:interacted'
};



/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScroller", function() { return MDCTabScroller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
 * @extends {MDCComponent<!MDCTabScrollerFoundation>}
 * @final
 */

var MDCTabScroller = function (_MDCComponent) {
  _inherits(MDCTabScroller, _MDCComponent);

  _createClass(MDCTabScroller, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTabScroller}
     */
    value: function attachTo(root) {
      return new MDCTabScroller(root);
    }
  }]);

  function MDCTabScroller() {
    var _ref;

    _classCallCheck(this, MDCTabScroller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTabScroller.__proto__ || Object.getPrototypeOf(MDCTabScroller)).call.apply(_ref, [this].concat(args)));

    _this.content_;

    /** @private {?Element} */
    _this.area_;

    /** @private {?function(?Event): undefined} */
    _this.handleInteraction_;

    /** @private {?function(!Event): undefined} */
    _this.handleTransitionEnd_;
    return _this;
  }

  _createClass(MDCTabScroller, [{
    key: 'initialize',
    value: function initialize() {
      this.area_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.AREA_SELECTOR);
      this.content_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CONTENT_SELECTOR);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this2 = this;

      this.handleInteraction_ = function () {
        return _this2.foundation_.handleInteraction();
      };
      this.handleTransitionEnd_ = function (evt) {
        return _this2.foundation_.handleTransitionEnd(evt);
      };

      this.area_.addEventListener('wheel', this.handleInteraction_);
      this.area_.addEventListener('touchstart', this.handleInteraction_);
      this.area_.addEventListener('pointerdown', this.handleInteraction_);
      this.area_.addEventListener('mousedown', this.handleInteraction_);
      this.area_.addEventListener('keydown', this.handleInteraction_);
      this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTabScroller.prototype.__proto__ || Object.getPrototypeOf(MDCTabScroller.prototype), 'destroy', this).call(this);

      this.area_.removeEventListener('wheel', this.handleInteraction_);
      this.area_.removeEventListener('touchstart', this.handleInteraction_);
      this.area_.removeEventListener('pointerdown', this.handleInteraction_);
      this.area_.removeEventListener('mousedown', this.handleInteraction_);
      this.area_.removeEventListener('keydown', this.handleInteraction_);
      this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
    }

    /**
     * @return {!MDCTabScrollerFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      var adapter = /** @type {!MDCTabScrollerAdapter} */{
        eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
          var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);
          return evtTarget[MATCHES](selector);
        },
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        addScrollAreaClass: function addScrollAreaClass(className) {
          return _this3.area_.classList.add(className);
        },
        setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
          return _this3.area_.style.setProperty(prop, value);
        },
        setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
          return _this3.content_.style.setProperty(prop, value);
        },
        getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
          return window.getComputedStyle(_this3.content_).getPropertyValue(propName);
        },
        setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
          return _this3.area_.scrollLeft = scrollX;
        },
        getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
          return _this3.area_.scrollLeft;
        },
        getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
          return _this3.content_.offsetWidth;
        },
        getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
          return _this3.area_.offsetWidth;
        },
        computeScrollAreaClientRect: function computeScrollAreaClientRect() {
          return _this3.area_.getBoundingClientRect();
        },
        computeScrollContentClientRect: function computeScrollContentClientRect() {
          return _this3.content_.getBoundingClientRect();
        },
        computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
          return __WEBPACK_IMPORTED_MODULE_3__util__["computeHorizontalScrollbarHeight"](document);
        }
      };

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](adapter);
    }

    /**
     * Returns the current visual scroll position
     * @return {number}
     */

  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {
      return this.foundation_.getScrollPosition();
    }

    /**
     * Returns the width of the scroll content
     * @return {number}
     */

  }, {
    key: 'getScrollContentWidth',
    value: function getScrollContentWidth() {
      return this.content_.offsetWidth;
    }

    /**
     * Increments the scroll value by the given amount
     * @param {number} scrollXIncrement The pixel value by which to increment the scroll value
     */

  }, {
    key: 'incrementScroll',
    value: function incrementScroll(scrollXIncrement) {
      this.foundation_.incrementScroll(scrollXIncrement);
    }

    /**
     * Scrolls to the given pixel position
     * @param {number} scrollX The pixel value to scroll to
     */

  }, {
    key: 'scrollTo',
    value: function scrollTo(scrollX) {
      this.foundation_.scrollTo(scrollX);
    }
  }]);

  return MDCTabScroller;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rtl_scroller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rtl_default_scroller__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rtl_negative_scroller__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rtl_reverse_scroller__ = __webpack_require__(59);
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



/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */




/**
 * @extends {MDCFoundation<!MDCTabScrollerAdapter>}
 * @final
 */

var MDCTabScrollerFoundation = function (_MDCFoundation) {
  _inherits(MDCTabScrollerFoundation, _MDCFoundation);

  _createClass(MDCTabScrollerFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }

    /**
     * @see MDCTabScrollerAdapter for typing information
     * @return {!MDCTabScrollerAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabScrollerAdapter} */{
          eventTargetMatchesSelector: function eventTargetMatchesSelector() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          addScrollAreaClass: function addScrollAreaClass() {},
          setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {},
          setScrollContentStyleProperty: function setScrollContentStyleProperty() {},
          getScrollContentStyleValue: function getScrollContentStyleValue() {},
          setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {},
          getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {},
          getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {},
          getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {},
          computeScrollAreaClientRect: function computeScrollAreaClientRect() {},
          computeScrollContentClientRect: function computeScrollContentClientRect() {},
          computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {}
        }
      );
    }

    /** @param {!MDCTabScrollerAdapter} adapter */

  }]);

  function MDCTabScrollerFoundation(adapter) {
    _classCallCheck(this, MDCTabScrollerFoundation);

    /**
     * This boolean controls whether we should handle the transitionend and interaction events during the animation.
     * @private {boolean}
     */
    var _this = _possibleConstructorReturn(this, (MDCTabScrollerFoundation.__proto__ || Object.getPrototypeOf(MDCTabScrollerFoundation)).call(this, _extends(MDCTabScrollerFoundation.defaultAdapter, adapter)));

    _this.isAnimating_ = false;

    /**
     * The MDCTabScrollerRTL instance varies per browser and allows us to encapsulate the peculiar browser behavior
     * of RTL scrolling in it's own class.
     * @private {?MDCTabScrollerRTL}
     */
    _this.rtlScrollerInstance_;
    return _this;
  }

  _createClass(MDCTabScrollerFoundation, [{
    key: 'init',
    value: function init() {
      // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
      // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
      var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
      this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
      this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    }

    /**
     * Computes the current visual scroll position
     * @return {number}
     */

  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {
      if (this.isRTL_()) {
        return this.computeCurrentScrollPositionRTL_();
      }

      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return scrollLeft - currentTranslateX;
    }

    /**
     * Handles interaction events that occur during transition
     */

  }, {
    key: 'handleInteraction',
    value: function handleInteraction() {
      // Early exit if we aren't animating
      if (!this.isAnimating_) {
        return;
      }

      // Prevent other event listeners from handling this event
      this.stopScrollAnimation_();
    }

    /**
     * Handles the transitionend event
     * @param {!Event} evt
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      // Early exit if we aren't animating or the event was triggered by a different element.
      if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evt.target, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
        return;
      }

      this.isAnimating_ = false;
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    }

    /**
     * Increment the scroll value by the scrollXIncrement
     * @param {number} scrollXIncrement The value by which to increment the scroll position
     */

  }, {
    key: 'incrementScroll',
    value: function incrementScroll(scrollXIncrement) {
      // Early exit for non-operational increment values
      if (scrollXIncrement === 0) {
        return;
      }

      if (this.isRTL_()) {
        return this.incrementScrollRTL_(scrollXIncrement);
      }

      this.incrementScroll_(scrollXIncrement);
    }

    /**
     * Scrolls to the given scrollX value
     * @param {number} scrollX
     */

  }, {
    key: 'scrollTo',
    value: function scrollTo(scrollX) {
      if (this.isRTL_()) {
        return this.scrollToRTL_(scrollX);
      }

      this.scrollTo_(scrollX);
    }

    /**
     * Returns the appropriate version of the MDCTabScrollerRTL
     * @return {!MDCTabScrollerRTL}
     */

  }, {
    key: 'getRTLScroller',
    value: function getRTLScroller() {
      if (!this.rtlScrollerInstance_) {
        this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
      }

      return this.rtlScrollerInstance_;
    }

    /**
     * Returns the translateX value from a CSS matrix transform function string
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateCurrentTranslateX_',
    value: function calculateCurrentTranslateX_() {
      var transformValue = this.adapter_.getScrollContentStyleValue('transform');
      // Early exit if no transform is present
      if (transformValue === 'none') {
        return 0;
      }

      // The transform value comes back as a matrix transformation in the form
      // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
      // we're going to grab all the parenthesized values, strip out tx, and
      // parse it.
      var results = /\((.+)\)/.exec(transformValue)[1];
      var parts = results.split(',');
      return parseFloat(parts[4]);
    }

    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param {number} scrollX The distance to scroll
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'computeCurrentScrollPositionRTL_',
    value: function computeCurrentScrollPositionRTL_() {
      var translateX = this.calculateCurrentTranslateX_();
      return this.getRTLScroller().getScrollPositionRTL(translateX);
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: 0,
          right: contentWidth - rootWidth
        }
      );
    }

    /**
     * Internal scroll method
     * @param {number} scrollX The new scroll position
     * @private
     */

  }, {
    key: 'scrollTo_',
    value: function scrollTo_(scrollX) {
      var currentScrollX = this.getScrollPosition();
      var safeScrollX = this.clampScrollValue_(scrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_( /** @type {!MDCTabScrollerAnimation} */{
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    }

    /**
     * Internal RTL scroll method
     * @param {number} scrollX The new scroll position
     * @private
     */

  }, {
    key: 'scrollToRTL_',
    value: function scrollToRTL_(scrollX) {
      var animation = this.getRTLScroller().scrollToRTL(scrollX);
      this.animate_(animation);
    }

    /**
     * Internal increment scroll method
     * @param {number} scrollX The new scroll position increment
     * @private
     */

  }, {
    key: 'incrementScroll_',
    value: function incrementScroll_(scrollX) {
      var currentScrollX = this.getScrollPosition();
      var targetScrollX = scrollX + currentScrollX;
      var safeScrollX = this.clampScrollValue_(targetScrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_( /** @type {!MDCTabScrollerAnimation} */{
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    }

    /**
     * Internal incremenet scroll RTL method
     * @param {number} scrollX The new scroll position RTL increment
     * @private
     */

  }, {
    key: 'incrementScrollRTL_',
    value: function incrementScrollRTL_(scrollX) {
      var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
      this.animate_(animation);
    }

    /**
     * Animates the tab scrolling
     * @param {!MDCTabScrollerAnimation} animation The animation to apply
     * @private
     */

  }, {
    key: 'animate_',
    value: function animate_(animation) {
      var _this2 = this;

      // Early exit if translateX is 0, which means there's no animation to perform
      if (animation.scrollDelta === 0) {
        return;
      }

      this.stopScrollAnimation_();
      // This animation uses the FLIP approach.
      // Read more here: https://aerotwist.com/blog/flip-your-animations/
      this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
      this.adapter_.setScrollContentStyleProperty('transform', 'translateX(' + animation.scrollDelta + 'px)');
      // Force repaint
      this.adapter_.computeScrollAreaClientRect();

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        _this2.adapter_.setScrollContentStyleProperty('transform', 'none');
      });

      this.isAnimating_ = true;
    }

    /**
     * Stops scroll animation
     * @private
     */

  }, {
    key: 'stopScrollAnimation_',
    value: function stopScrollAnimation_() {
      this.isAnimating_ = false;
      var currentScrollPosition = this.getAnimatingScrollPosition_();
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
      this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
      this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
    }

    /**
     * Gets the current scroll position during animation
     * @return {number}
     * @private
     */

  }, {
    key: 'getAnimatingScrollPosition_',
    value: function getAnimatingScrollPosition_() {
      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
      if (this.isRTL_()) {
        return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
      }

      return scrollLeft - currentTranslateX;
    }

    /**
     * Determines the RTL Scroller to use
     * @return {!MDCTabScrollerRTL}
     * @private
     */

  }, {
    key: 'rtlScrollerFactory_',
    value: function rtlScrollerFactory_() {
      // Browsers have three different implementations of scrollLeft in RTL mode,
      // dependent on the browser. The behavior is based off the max LTR
      // scrollleft value and 0.
      //
      // * Default scrolling in RTL *
      //    - Left-most value: 0
      //    - Right-most value: Max LTR scrollLeft value
      //
      // * Negative scrolling in RTL *
      //    - Left-most value: Negated max LTR scrollLeft value
      //    - Right-most value: 0
      //
      // * Reverse scrolling in RTL *
      //    - Left-most value: Max LTR scrollLeft value
      //    - Right-most value: 0
      //
      // We use those principles below to determine which RTL scrollLeft
      // behavior is implemented in the current browser.
      var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
      var newScrollLeft = this.adapter_.getScrollAreaScrollLeft();

      // If the newScrollLeft value is negative,then we know that the browser has
      // implemented negative RTL scrolling, since all other implementations have
      // only positive values.
      if (newScrollLeft < 0) {
        // Undo the scrollLeft test check
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
        return new __WEBPACK_IMPORTED_MODULE_5__rtl_negative_scroller__["a" /* default */](this.adapter_);
      }

      var rootClientRect = this.adapter_.computeScrollAreaClientRect();
      var contentClientRect = this.adapter_.computeScrollContentClientRect();
      var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
      // Undo the scrollLeft test check
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);

      // By calculating the clientRect of the root element and the clientRect of
      // the content element, we can determine how much the scroll value changed
      // when we performed the scrollLeft subtraction above.
      if (rightEdgeDelta === newScrollLeft) {
        return new __WEBPACK_IMPORTED_MODULE_6__rtl_reverse_scroller__["a" /* default */](this.adapter_);
      }

      return new __WEBPACK_IMPORTED_MODULE_4__rtl_default_scroller__["a" /* default */](this.adapter_);
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isRTL_',
    value: function isRTL_() {
      return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
    }
  }]);

  return MDCTabScrollerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerFoundation);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(9);
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



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */

var MDCTabScrollerRTLDefault = function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLDefault, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLDefault() {
    _classCallCheck(this, MDCTabScrollerRTLDefault);

    return _possibleConstructorReturn(this, (MDCTabScrollerRTLDefault.__proto__ || Object.getPrototypeOf(MDCTabScrollerRTLDefault)).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLDefault, [{
    key: 'getScrollPositionRTL',

    /**
     * @return {number}
     */
    value: function getScrollPositionRTL() {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();

      var _calculateScrollEdges = this.calculateScrollEdges_(),
          right = _calculateScrollEdges.right;
      // Scroll values on most browsers are ints instead of floats so we round


      return Math.round(right - currentScrollLeft);
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {
      var edges = this.calculateScrollEdges_();
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX) {
      return scrollX;
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: 0,
          right: contentWidth - rootWidth
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    }
  }]);

  return MDCTabScrollerRTLDefault;
}(__WEBPACK_IMPORTED_MODULE_0__rtl_scroller__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTLDefault);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(9);
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



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */

var MDCTabScrollerRTLNegative = function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLNegative, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLNegative() {
    _classCallCheck(this, MDCTabScrollerRTLNegative);

    return _possibleConstructorReturn(this, (MDCTabScrollerRTLNegative.__proto__ || Object.getPrototypeOf(MDCTabScrollerRTLNegative)).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLNegative, [{
    key: 'getScrollPositionRTL',

    /**
     * @param {number} translateX The current translateX position
     * @return {number}
     */
    value: function getScrollPositionRTL(translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return Math.round(translateX - currentScrollLeft);
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(-scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @param {number} translateX
     * @return {number}
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX, translateX) {
      return scrollX - translateX;
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: rootWidth - contentWidth,
          right: 0
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.max(Math.min(edges.right, scrollX), edges.left);
    }
  }]);

  return MDCTabScrollerRTLNegative;
}(__WEBPACK_IMPORTED_MODULE_0__rtl_scroller__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTLNegative);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(9);
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



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */

var MDCTabScrollerRTLReverse = function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLReverse, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLReverse() {
    _classCallCheck(this, MDCTabScrollerRTLReverse);

    return _possibleConstructorReturn(this, (MDCTabScrollerRTLReverse.__proto__ || Object.getPrototypeOf(MDCTabScrollerRTLReverse)).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLReverse, [{
    key: 'getScrollPositionRTL',

    /**
     * @param {number} translateX
     * @return {number}
     */
    value: function getScrollPositionRTL(translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      // Scroll values on most browsers are ints instead of floats so we round
      return Math.round(currentScrollLeft - translateX);
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX, translateX) {
      return scrollX + translateX;
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: contentWidth - rootWidth,
          right: 0
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.right, scrollX), edges.left);
    }
  }]);

  return MDCTabScrollerRTLReverse;
}(__WEBPACK_IMPORTED_MODULE_0__rtl_scroller__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTLReverse);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
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

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 };



/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHorizontalScrollbarHeight", function() { return computeHorizontalScrollbarHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesProperty", function() { return getMatchesProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(42);
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
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 * @private {number|undefined}
 */
var horizontalScrollbarHeight_ = void 0;

/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 * @param {!Document} documentObj
 * @param {boolean=} shouldCacheResult
 * @return {number}
 */
function computeHorizontalScrollbarHeight(documentObj) {
  var shouldCacheResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
    return horizontalScrollbarHeight_;
  }

  var el = documentObj.createElement('div');
  el.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].SCROLL_TEST);
  documentObj.body.appendChild(el);

  var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);

  if (shouldCacheResult) {
    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
  }
  return horizontalScrollbarHeight;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}



/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_tab_adapter__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_tab_index__ = __webpack_require__(45);
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

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * Adapter for MDC Tab Bar.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabBarAdapter = function () {
  function MDCTabBarAdapter() {
    _classCallCheck(this, MDCTabBarAdapter);
  }

  _createClass(MDCTabBarAdapter, [{
    key: 'scrollTo',

    /**
     * Scrolls to the given position
     * @param {number} scrollX The position to scroll to
     */
    value: function scrollTo(scrollX) {}

    /**
     * Increments the current scroll position by the given amount
     * @param {number} scrollXIncrement The amount to increment scroll
     */

  }, {
    key: 'incrementScroll',
    value: function incrementScroll(scrollXIncrement) {}

    /**
     * Returns the current scroll position
     * @return {number}
     */

  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {}

    /**
     * Returns the width of the scroll content
     * @return {number}
     */

  }, {
    key: 'getScrollContentWidth',
    value: function getScrollContentWidth() {}

    /**
     * Returns the root element's offsetWidth
     * @return {number}
     */

  }, {
    key: 'getOffsetWidth',
    value: function getOffsetWidth() {}

    /**
     * Returns if the Tab Bar language direction is RTL
     * @return {boolean}
     */

  }, {
    key: 'isRTL',
    value: function isRTL() {}

    /**
     * Sets the tab at the given index to be activated
     * @param {number} index The index of the tab to activate
     */

  }, {
    key: 'setActiveTab',
    value: function setActiveTab(index) {}

    /**
     * Activates the tab at the given index with the given client rect
     * @param {number} index The index of the tab to activate
     * @param {!ClientRect} clientRect The client rect of the previously active Tab Indicator
     */

  }, {
    key: 'activateTabAtIndex',
    value: function activateTabAtIndex(index, clientRect) {}

    /**
     * Deactivates the tab at the given index
     * @param {number} index The index of the tab to deactivate
     */

  }, {
    key: 'deactivateTabAtIndex',
    value: function deactivateTabAtIndex(index) {}

    /**
     * Focuses the tab at the given index
     * @param {number} index The index of the tab to focus
     */

  }, {
    key: 'focusTabAtIndex',
    value: function focusTabAtIndex(index) {}

    /**
     * Returns the client rect of the tab's indicator
     * @param {number} index The index of the tab
     * @return {!ClientRect}
     */

  }, {
    key: 'getTabIndicatorClientRectAtIndex',
    value: function getTabIndicatorClientRectAtIndex(index) {}

    /**
     * Returns the tab dimensions of the tab at the given index
     * @param {number} index The index of the tab
     * @return {!MDCTabDimensions}
     */

  }, {
    key: 'getTabDimensionsAtIndex',
    value: function getTabDimensionsAtIndex(index) {}

    /**
     * Returns the length of the tab list
     * @return {number}
     */

  }, {
    key: 'getTabListLength',
    value: function getTabListLength() {}

    /**
     * Returns the index of the previously active tab
     * @return {number}
     */

  }, {
    key: 'getPreviousActiveTabIndex',
    value: function getPreviousActiveTabIndex() {}

    /**
     * Returns the index of the focused tab
     * @return {number}
     */

  }, {
    key: 'getFocusedTabIndex',
    value: function getFocusedTabIndex() {}

    /**
     * Returns the index of the given tab
     * @param {!MDCTab} tab The tab whose index to determin
     * @return {number}
     */

  }, {
    key: 'getIndexOfTab',
    value: function getIndexOfTab(tab) {}

    /**
     * Emits the MDCTabBar:activated event
     * @param {number} index The index of the activated tab
     */

  }, {
    key: 'notifyTabActivated',
    value: function notifyTabActivated(index) {}
  }]);

  return MDCTabBarAdapter;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTabBarAdapter);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCTabScrollerAnimation */
/* unused harmony export MDCTabScrollerHorizontalEdges */
/* unused harmony export MDCTabScrollerAdapter */
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
 * MDCTabScrollerAnimation contains the values required for animating from the
 * current scroll position to the new scroll position. The "finalScrollPosition"
 * value represents the new scroll position while the "scrollDelta" value is the
 * corresponding transformation that is applied to the scroll content. Together,
 * they create the animation by first updating the scroll value then applying
 * the transformation and animating the transition. Both pieces are necessary
 * for the scroll animation to work. The values are used as-is by the tab
 * scroller animation method, ensuring that all logic for determining scroll
 * position or transformation is abstracted away from the animation method.
 * @typedef {{finalScrollPosition: number, scrollDelta: number}}
 */
var MDCTabScrollerAnimation = void 0;

/**
 * MDCTabScrollerHorizontalEdges represents the left and right edges of the
 * scroll content. These values vary depending on how scrolling in RTL is
 * implemented by the browser. One value is always 0 and one value is always
 * the max scrollable value as either a positive or negative integer.
 * @typedef {{left: number, right: number}}
 */
var MDCTabScrollerHorizontalEdges = void 0;

/**
 * Adapter for MDC Tab Scroller.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabScrollerAdapter = function () {
  function MDCTabScrollerAdapter() {
    _classCallCheck(this, MDCTabScrollerAdapter);
  }

  _createClass(MDCTabScrollerAdapter, [{
    key: "addClass",

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */
    value: function addClass(className) {}

    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Adds the given className to the scroll area element.
     * @param {string} className The className to add
     */

  }, {
    key: "addScrollAreaClass",
    value: function addScrollAreaClass(className) {}

    /**
     * Returns whether the event target matches given className.
     * @param {EventTarget} evtTarget The event target
     * @param {string} selector The selector to check
     * @return {boolean}
     */

  }, {
    key: "eventTargetMatchesSelector",
    value: function eventTargetMatchesSelector(evtTarget, selector) {}

    /**
     * Sets a style property of the area element to the passed value.
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setScrollAreaStyleProperty",
    value: function setScrollAreaStyleProperty(propName, value) {}

    /**
     * Sets a style property of the content element to the passed value.
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setScrollContentStyleProperty",
    value: function setScrollContentStyleProperty(propName, value) {}

    /**
     * Returns the scroll content element's computed style value of the given css property `propertyName`.
     * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
     * @param {string} propertyName
     * @return {string}
     */

  }, {
    key: "getScrollContentStyleValue",
    value: function getScrollContentStyleValue(propertyName) {}

    /**
     * Sets the scrollLeft value of the scroll area element to the passed value.
     * @param {number} scrollLeft The new scrollLeft value
     */

  }, {
    key: "setScrollAreaScrollLeft",
    value: function setScrollAreaScrollLeft(scrollLeft) {}

    /**
     * Returns the scrollLeft value of the scroll area element.
     * @return {number}
     */

  }, {
    key: "getScrollAreaScrollLeft",
    value: function getScrollAreaScrollLeft() {}

    /**
     * Returns the offsetWidth of the scroll content element.
     * @return {number}
     */

  }, {
    key: "getScrollContentOffsetWidth",
    value: function getScrollContentOffsetWidth() {}

    /**
     * Returns the offsetWitdth of the scroll area element.
     * @return {number}
     */

  }, {
    key: "getScrollAreaOffsetWidth",
    value: function getScrollAreaOffsetWidth() {}

    /**
     * Returns the bounding client rect of the scroll area element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeScrollAreaClientRect",
    value: function computeScrollAreaClientRect() {}

    /**
     * Returns the bounding client rect of the scroll content element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeScrollContentClientRect",
    value: function computeScrollContentClientRect() {}

    /**
     * Returns the height of the browser's horizontal scrollbars (in px).
     * @return {number}
     */

  }, {
    key: "computeHorizontalScrollbarHeight",
    value: function computeHorizontalScrollbarHeight() {}
  }]);

  return MDCTabScrollerAdapter;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=mdc.tabBar.js.map