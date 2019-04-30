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
		exports["tabScroller"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["tabScroller"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
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
//# sourceMappingURL=mdc.tabScroller.js.map