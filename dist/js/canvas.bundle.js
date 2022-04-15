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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/aquiris.png":
/*!*****************************!*\
  !*** ./src/img/aquiris.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79260806153558eb2d17cd322d0595b5.png");

/***/ }),

/***/ "./src/img/backgroundImage.png":
/*!*************************************!*\
  !*** ./src/img/backgroundImage.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f01eeb4c01454380ff1babf6f2b5f350.png");

/***/ }),

/***/ "./src/img/casa1.png":
/*!***************************!*\
  !*** ./src/img/casa1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8e27a25a61e9ebb241c042feda26e62d.png");

/***/ }),

/***/ "./src/img/casa2.png":
/*!***************************!*\
  !*** ./src/img/casa2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "533009bef42b28bc1575cef5d182b4a6.png");

/***/ }),

/***/ "./src/img/casa3.png":
/*!***************************!*\
  !*** ./src/img/casa3.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b057a370d29c8ffc6c57ee2e1387bb52.png");

/***/ }),

/***/ "./src/img/ground.png":
/*!****************************!*\
  !*** ./src/img/ground.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfd0d354c18aafa7d2e8fb273efd3dd5.png");

/***/ }),

/***/ "./src/img/pucrs.png":
/*!***************************!*\
  !*** ./src/img/pucrs.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aaedd493f9caf79f3460d67b12784cd9.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_ground_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/ground.png */ "./src/img/ground.png");
/* harmony import */ var _img_backgroundImage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/backgroundImage.png */ "./src/img/backgroundImage.png");
/* harmony import */ var _img_casa1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/casa1.png */ "./src/img/casa1.png");
/* harmony import */ var _img_casa2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/casa2.png */ "./src/img/casa2.png");
/* harmony import */ var _img_casa3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/casa3.png */ "./src/img/casa3.png");
/* harmony import */ var _img_pucrs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/pucrs.png */ "./src/img/pucrs.png");
/* harmony import */ var _img_aquiris_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/aquiris.png */ "./src/img/aquiris.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 530;
var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Ground = /*#__PURE__*/function () {
  function Ground(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Ground);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Ground, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y); //c.fillStyle = 'blue'
      //c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }]);

  return Ground;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(url) {
  var image = new Image();
  image.src = url;
  return image;
}

var player = new Player();
var groundImage = createImage(_img_ground_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var gounds = [new Ground({
  x: 0,
  y: 500,
  image: groundImage
}), new Ground({
  x: groundImage.width,
  y: 500,
  image: groundImage
}), new Ground({
  x: 2 * groundImage.width + 60,
  y: 500,
  image: groundImage
}), new Ground({
  x: 3 * groundImage.width + 200,
  y: 500,
  image: groundImage
}), new Ground({
  x: 4 * groundImage.width + 320,
  y: 500,
  image: groundImage
}), new Ground({
  x: 5 * groundImage.width + 400,
  y: 500,
  image: groundImage
}), new Ground({
  x: 6 * groundImage.width + 400,
  y: 500,
  image: groundImage
}), new Ground({
  x: 7 * groundImage.width + 400,
  y: 500,
  image: groundImage
})];
var background = new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_img_backgroundImage_png__WEBPACK_IMPORTED_MODULE_1__["default"])
});
var generricObjects = [new GenericObject({
  x: 2 * createImage(_img_casa1_png__WEBPACK_IMPORTED_MODULE_2__["default"]).height,
  y: createImage(_img_casa1_png__WEBPACK_IMPORTED_MODULE_2__["default"]).height - 60,
  image: createImage(_img_casa1_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new GenericObject({
  x: 3.3 * createImage(_img_casa2_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width,
  y: 510 - createImage(_img_casa2_png__WEBPACK_IMPORTED_MODULE_3__["default"]).height,
  image: createImage(_img_casa2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new GenericObject({
  x: 5 * createImage(_img_casa3_png__WEBPACK_IMPORTED_MODULE_4__["default"]).width,
  y: 510 - createImage(_img_casa3_png__WEBPACK_IMPORTED_MODULE_4__["default"]).height,
  image: createImage(_img_casa3_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new GenericObject({
  x: 3 * createImage(_img_pucrs_png__WEBPACK_IMPORTED_MODULE_5__["default"]).width,
  y: 510 - createImage(_img_pucrs_png__WEBPACK_IMPORTED_MODULE_5__["default"]).height,
  image: createImage(_img_pucrs_png__WEBPACK_IMPORTED_MODULE_5__["default"])
}), new GenericObject({
  x: 6.5 * createImage(_img_aquiris_png__WEBPACK_IMPORTED_MODULE_6__["default"]).width,
  y: 510 - createImage(_img_aquiris_png__WEBPACK_IMPORTED_MODULE_6__["default"]).height,
  image: createImage(_img_aquiris_png__WEBPACK_IMPORTED_MODULE_6__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrolScreem = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.draw();
  generricObjects.forEach(function (generricObjects) {
    generricObjects.draw();
  });
  gounds.forEach(function (ground) {
    ground.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (scrolScreem <= 6300) {
      if (keys.right.pressed) {
        gounds.forEach(function (ground) {
          ground.position.x -= 5;
          scrolScreem += 1;
        });
        generricObjects.forEach(function (genericObject) {
          genericObject.position.x -= 3;
        });
      }

      if (keys.left.pressed) {
        if (scrolScreem >= 5) {
          gounds.forEach(function (ground) {
            ground.position.x += 5;
            scrolScreem -= 1;
          });
          generricObjects.forEach(function (genericObject) {
            genericObject.position.x += 3;
          });
        }
      }
    }
  }

  console.log(scrolScreem);

  if (scrolScreem >= 6000) {
    console.log('Ganhou!');
  }

  if (player.position.y > canvas.height) {
    alert("Você caiu!\nVai chegar atrasado!\n\nReinicia a página para tentar novamente!");
  } // ground collision detection


  gounds.forEach(function (ground) {
    if (player.position.y + player.height <= ground.position.y && player.position.y + player.height + player.velocity.y >= ground.position.y && player.position.x + player.height >= ground.position.x && player.position.x <= ground.position.x + ground.width) {
      player.velocity.y = 0;
    }
  });
}

animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  // a keycode 65 ,s keycode 83, d keycode 68, w keycode 87
  // space 32
  switch (keyCode) {
    case 65:
      console.log('esquerda');
      keys.left.pressed = true;
      break;

    case 83:
      console.log('baixo');
      break;

    case 68:
      console.log('direita');
      keys.right.pressed = true;
      break;

    case 87:
      console.log('cima');
      player.velocity.y -= 10;
      break;

    case 32:
      console.log('barra');
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  // a keycode 65
  // s keycode 83
  // d keycode 68
  // w keycode 87
  // space 32
  switch (keyCode) {
    case 65:
      console.log('esquerda');
      keys.left.pressed = false;
      break;

    case 68:
      console.log('direita');
      keys.right.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map