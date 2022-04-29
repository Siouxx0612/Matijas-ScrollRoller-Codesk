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

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d'); // canvas.width = window.innerWidth
// canvas.height = window.innerHeight

canvas.width = 1400;
canvas.height = 576; //create gravity to accelerate velocity on axis-y

var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  // our Player starting position
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    }; //Players velocity

    this.velocity = {
      x: 0,
      y: 5
    }; //Our Players size

    this.width = 30;
    this.height = 50;
  } //Method to define our Player and create our object size


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red'; //Where is our Player and how big it is

      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    } //Update our players property over time

  }, {
    key: "update",
    value: function update() {
      //separate how our player looks like from that we are updating
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; // check velocity, add gravity, if we are above the bottom then stop velocity ( this.velocity.y = 0 )
      //monitor our players start y position and then we add our players height for monitoring bottom of our player now.
      //we know velocity is been added to our player over time so we need to make sure that were adding on the players the velocity on the y-axis, 
      //and we want to say if the bottim of our player plus
      //its velocity is less than the bottom of our canvas right here then we want to keep adding gravity onto it, 
      //but the second that our player passes the bottom of the screen we want to set its
      //velocity equal to zero.

      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; //as soon as our player croses that line
      else this.velocity.y = 0;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      //Its the same
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      //draws rectangle like we did with our Player. Create our platform size
      // c.fillStyle = 'blue'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      //Replace our initial box with an image. 
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var BackgroundObject = /*#__PURE__*/function () {
  function BackgroundObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, BackgroundObject);

    this.position = {
      x: x,
      //Its the same
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(BackgroundObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return BackgroundObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player(); // const platform = new Platform()
//create multiple platforms, and create one platfor in that array

var platforms = [new Platform({
  x: -1,
  y: 470,
  image: platformImage
}), new Platform({
  x: platformImage.width - 3,
  y: 470,
  image: platformImage
})];
var backgroundObjects = [new BackgroundObject({
  x: -1,
  y: -1,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new BackgroundObject({
  x: -1,
  y: -1,
  image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var howFarScrollOffset = 0; //Function, animation loop, to get our Player to move and where we have our changes over time

function animate() {
  //using recursive loop to call animate over and over and over again
  requestAnimationFrame(animate); //get our context and maintain shape of the rectangle. Its gonna clear our canvas, take everything off it.
  // c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  backgroundObjects.forEach(function (backgroundObject) {
    backgroundObject.draw();
  }); //loop trough array and select one individual platform in that array. platform, arbitrarily named platform but it makes sence 

  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update(); //Check if the keys are true or false for movement Left or Right

  if (keys.right.pressed && player.position.x < 600) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      howFarScrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      backgroundObjects.forEach(function (backgroundObject) {
        backgroundObject.position.x -= 2;
      });
    } else if (keys.left.pressed) {
      howFarScrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      backgroundObjects.forEach(function (backgroundObject) {
        backgroundObject.position.x += 2;
      });
    }
  } // console.log(howFarScrollOffset)
  //rectangular coalision detection
  //check if our players y position plus height, so the bottom of the player whether or not the bottom of the player
  //is less than the top of our platform


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  var winMsg = document.querySelector("h1");

  if (howFarScrollOffset > 1000) {
    winMsg.innerText = "YOU WON";
  }
}

animate(); //EventListener for our keys on pres down for Player movment

window.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      console.log('LEFT');
      keys.left.pressed = true;
      break;

    case 83:
      console.log('DOWN');
      break;

    case 68:
      console.log('RIGHT');
      keys.right.pressed = true;
      break;

    case 87:
      console.log('UP');
      player.velocity.y -= 20;
      break;

    case 32:
      console.log('JUMP');
      player.velocity.y -= 20;
      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      console.log('LEFT');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('DOWN');
      break;

    case 68:
      console.log('RIGHT');
      keys.right.pressed = false;
      break;

    case 87:
      console.log('UP');
      player.velocity.y = 0;
      break;

    case 32:
      console.log('JUMP');
      player.velocity.y = 0;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map