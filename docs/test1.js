/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/results/result_bad.svg":
/*!*******************************************!*\
  !*** ./src/images/results/result_bad.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/98d269d50b291f94a07b.svg";

/***/ }),

/***/ "./src/images/results/result_good.svg":
/*!********************************************!*\
  !*** ./src/images/results/result_good.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9939a5cd06aa41fd0baa.svg";

/***/ }),

/***/ "./src/images/results/result_ok.svg":
/*!******************************************!*\
  !*** ./src/images/results/result_ok.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3095aca50eeb671b9cda.svg";

/***/ }),

/***/ "./src/javascripts/tests.js":
/*!**********************************!*\
  !*** ./src/javascripts/tests.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseAnswer: () => (/* binding */ chooseAnswer),
/* harmony export */   initTest: () => (/* binding */ initTest)
/* harmony export */ });
var currentStage = 0;
var resultCount = 0;
var checkboxes = document.querySelectorAll('input[type=checkbox]');
function initTest(stages) {
  var numberOfQuestion = document.querySelector('.A_NumberOfQuestion');
  var question = document.querySelector('.A_TestQuestion');
  var answers = document.querySelectorAll('.A_TestAnswerText');
  numberOfQuestion.innerHTML = "".concat(currentStage + 1, "/").concat(stages.length);
  question.innerHTML = stages[currentStage].question;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text;
  }
  for (var j = 0; j < checkboxes.length; j++) {
    checkboxes[j].dataset.count = stages[currentStage].answers[j].count;
  }
}
function chooseAnswer(stages, resultTable) {
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count);
        setTimeout(function () {
          updateStage(stages, resultTable);
          checkbox.checked = false;
        }, 300);
      }
    });
  });
}
function updateStage(stages, resultTable) {
  if (currentStage + 1 < stages.length) {
    currentStage++;
    initTest(stages);
  } else {
    showResult(resultTable);
  }
}
function showResult(resultTable) {
  var allTest = document.querySelector('.O_Test');
  allTest.innerHTML = '';
  var resultWrapper = document.createElement('div');
  resultWrapper.classList.add('W_ResultTest');
  var finalCount = document.createElement('p');
  finalCount.classList.add('A_FinalCount');
  finalCount.innerText = "\u0438\u0442\u043E\u0433\u043E: ".concat(resultCount);
  var resultHeader = document.createElement('h2');
  resultHeader.classList.add('A_ResultHeader');
  var resultText = document.createElement('p');
  resultText.classList.add('A_ResultText');
  var resultImg = document.createElement('img');
  resultImg.classList.add('A_ResultImg');
  resultWrapper.appendChild(finalCount);
  resultWrapper.appendChild(resultHeader);
  resultWrapper.appendChild(resultText);
  resultWrapper.appendChild(resultImg);
  allTest.appendChild(resultWrapper);
  switch (resultCount) {
    case 0:
      resultHeader.innerText = resultTable[2].header;
      resultText.innerText = resultTable[2].paragraph;
      resultImg.src = resultTable[2].image;
      break;
    case 1:
      resultHeader.innerText = resultTable[2].header;
      resultText.innerText = resultTable[2].paragraph;
      resultImg.src = resultTable[2].image;
      break;
    case 2:
      resultHeader.innerText = resultTable[1].header;
      resultText.innerText = resultTable[1].paragraph;
      resultImg.src = resultTable[1].image;
      break;
    case 3:
      resultHeader.innerText = resultTable[1].header;
      resultText.innerText = resultTable[1].paragraph;
      resultImg.src = resultTable[1].image;
      break;
    case 4:
      resultHeader.innerText = resultTable[0].header;
      resultText.innerText = resultTable[0].paragraph;
      resultImg.src = resultTable[0].image;
      break;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/pages/tests/test1.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascripts_tests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../javascripts/tests.js */ "./src/javascripts/tests.js");
/* harmony import */ var _images_results_result_good_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/results/result_good.svg */ "./src/images/results/result_good.svg");
/* harmony import */ var _images_results_result_ok_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/results/result_ok.svg */ "./src/images/results/result_ok.svg");
/* harmony import */ var _images_results_result_bad_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/results/result_bad.svg */ "./src/images/results/result_bad.svg");




var stages = [{
  question: 'Какое растение, согласно народной медицине, следует использовать для заживления ран?',
  answers: [{
    text: 'ромашка',
    count: 0
  }, {
    text: 'брусника',
    count: 0
  }, {
    text: 'алоэ',
    count: 1
  }]
}, {
  question: 'Какое растение обладает противовоспалительным действием?',
  answers: [{
    text: 'ромашка',
    count: 0
  }, {
    text: 'аир',
    count: 0
  }, {
    text: 'девятисил',
    count: 1
  }]
}, {
  question: 'Какое растение обладает сильно выраженными бактерицидными свойствами в отношении многих возбудителей болезней, особенно стафилококков и стрептококков?',
  answers: [{
    text: 'зверобой',
    count: 0
  }, {
    text: 'календула',
    count: 1
  }, {
    text: 'каллизия',
    count: 0
  }]
}, {
  question: 'Какое растение растение является традиционным средством от кашля?',
  answers: [{
    text: 'мать-и-мачеха',
    count: 1
  }, {
    text: 'ромашка',
    count: 0
  }, {
    text: 'шиповник',
    count: 0
  }]
}];
var resultTable = [{
  header: 'Ого, кажется, вы отлично знакомы с лекарственными растениями!',
  paragraph: 'Попробуйте другие наши тесты, чтобы проверить себя!',
  image: "".concat(_images_results_result_good_svg__WEBPACK_IMPORTED_MODULE_1__)
}, {
  header: 'Отличный результат! Но нюансы лучше повторить',
  paragraph: 'Попробуйте другие наши тесты, чтобы проверить себя!',
  image: "".concat(_images_results_result_ok_svg__WEBPACK_IMPORTED_MODULE_2__)
}, {
  header: 'Кажется, вы почти не знакомы с этой темой',
  paragraph: 'Попробуйте ещё раз позднее',
  image: "".concat(_images_results_result_bad_svg__WEBPACK_IMPORTED_MODULE_3__)
}];
(0,_javascripts_tests_js__WEBPACK_IMPORTED_MODULE_0__.initTest)(stages);
(0,_javascripts_tests_js__WEBPACK_IMPORTED_MODULE_0__.chooseAnswer)(stages, resultTable);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO0lBQ0VILElBQUksRUFBRSxXQUFXO0lBQ2pCRyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRUgsSUFBSSxFQUFFLFVBQVU7SUFDaEJHLEtBQUssRUFBRTtFQUNULENBQUM7QUFFTCxDQUFDLEVBQ0Q7RUFDRVQsUUFBUSxFQUNOLG1FQUFtRTtFQUNyRUMsT0FBTyxFQUFFLENBQ1A7SUFDRUssSUFBSSxFQUFFLGVBQWU7SUFDckJHLEtBQUssRUFBRTtFQUNULENBQUMsRUFDRDtJQUNFSCxJQUFJLEVBQUUsU0FBUztJQUNmRyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRUgsSUFBSSxFQUFFLFVBQVU7SUFDaEJHLEtBQUssRUFBRTtFQUNULENBQUM7QUFFTCxDQUFDLENBQ0Y7QUFFRCxJQUFNRSxXQUFXLEdBQUcsQ0FDbEI7RUFDRW9CLE1BQU0sRUFBRSwrREFBK0Q7RUFDdkVDLFNBQVMsRUFBRSxxREFBcUQ7RUFDaEVFLEtBQUssS0FBQS9CLE1BQUEsQ0FBS2dDLDREQUFPO0FBQ25CLENBQUMsRUFDRDtFQUNFSixNQUFNLEVBQUUsK0NBQStDO0VBQ3ZEQyxTQUFTLEVBQUUscURBQXFEO0VBQ2hFRSxLQUFLLEtBQUEvQixNQUFBLENBQUtpQywwREFBSztBQUNqQixDQUFDLEVBQ0Q7RUFDRUwsTUFBTSxFQUFFLDJDQUEyQztFQUNuREMsU0FBUyxFQUFFLDRCQUE0QjtFQUN2Q0UsS0FBSyxLQUFBL0IsTUFBQSxDQUFLa0MsMkRBQU07QUFDbEIsQ0FBQyxDQUNGO0FBRUR6QywrREFBUSxDQUFDQyxNQUFNLENBQUM7QUFDaEJhLG1FQUFZLENBQUNiLE1BQU0sRUFBRWMsV0FBVyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMjRkczA5Ly4vc3JjL2phdmFzY3JpcHRzL3Rlc3RzLmpzIiwid2VicGFjazovL2IyNGRzMDkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYjI0ZHMwOS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYjI0ZHMwOS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2IyNGRzMDkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iMjRkczA5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYjI0ZHMwOS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iMjRkczA5Ly4vc3JjL3BhZ2VzL3Rlc3RzL3Rlc3QxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJyZW50U3RhZ2UgPSAwXG5sZXQgcmVzdWx0Q291bnQgPSAwXG5jb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKVxuXG5mdW5jdGlvbiBpbml0VGVzdChzdGFnZXMpIHtcbiAgY29uc3QgbnVtYmVyT2ZRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX051bWJlck9mUXVlc3Rpb24nKVxuICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX1Rlc3RRdWVzdGlvbicpXG4gIGNvbnN0IGFuc3dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQV9UZXN0QW5zd2VyVGV4dCcpXG5cbiAgbnVtYmVyT2ZRdWVzdGlvbi5pbm5lckhUTUwgPSBgJHtjdXJyZW50U3RhZ2UgKyAxfS8ke3N0YWdlcy5sZW5ndGh9YFxuXG4gIHF1ZXN0aW9uLmlubmVySFRNTCA9IHN0YWdlc1tjdXJyZW50U3RhZ2VdLnF1ZXN0aW9uXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgYW5zd2Vyc1tpXS5pbm5lckhUTUwgPSBzdGFnZXNbY3VycmVudFN0YWdlXS5hbnN3ZXJzW2ldLnRleHRcbiAgfVxuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgY2hlY2tib3hlcy5sZW5ndGg7IGorKykge1xuICAgIGNoZWNrYm94ZXNbal0uZGF0YXNldC5jb3VudCA9IHN0YWdlc1tjdXJyZW50U3RhZ2VdLmFuc3dlcnNbal0uY291bnRcbiAgfVxufVxuXG5mdW5jdGlvbiBjaG9vc2VBbnN3ZXIoc3RhZ2VzLCByZXN1bHRUYWJsZSkge1xuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgcmVzdWx0Q291bnQgKz0gTnVtYmVyKGNoZWNrYm94LmRhdGFzZXQuY291bnQpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdXBkYXRlU3RhZ2Uoc3RhZ2VzLCByZXN1bHRUYWJsZSlcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YWdlKHN0YWdlcywgcmVzdWx0VGFibGUpIHtcbiAgaWYgKGN1cnJlbnRTdGFnZSArIDEgPCBzdGFnZXMubGVuZ3RoKSB7XG4gICAgY3VycmVudFN0YWdlKytcbiAgICBpbml0VGVzdChzdGFnZXMpXG4gIH0gZWxzZSB7XG4gICAgc2hvd1Jlc3VsdChyZXN1bHRUYWJsZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93UmVzdWx0KHJlc3VsdFRhYmxlKSB7XG4gIGNvbnN0IGFsbFRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuT19UZXN0JylcbiAgYWxsVGVzdC5pbm5lckhUTUwgPSAnJ1xuXG4gIGNvbnN0IHJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByZXN1bHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ1dfUmVzdWx0VGVzdCcpXG5cbiAgY29uc3QgZmluYWxDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBmaW5hbENvdW50LmNsYXNzTGlzdC5hZGQoJ0FfRmluYWxDb3VudCcpXG4gIGZpbmFsQ291bnQuaW5uZXJUZXh0ID0gYNC40YLQvtCz0L46ICR7cmVzdWx0Q291bnR9YFxuXG4gIGNvbnN0IHJlc3VsdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgcmVzdWx0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ0FfUmVzdWx0SGVhZGVyJylcblxuICBjb25zdCByZXN1bHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZCgnQV9SZXN1bHRUZXh0JylcblxuICBjb25zdCByZXN1bHRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICByZXN1bHRJbWcuY2xhc3NMaXN0LmFkZCgnQV9SZXN1bHRJbWcnKVxuXG4gIHJlc3VsdFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmluYWxDb3VudClcbiAgcmVzdWx0V3JhcHBlci5hcHBlbmRDaGlsZChyZXN1bHRIZWFkZXIpXG4gIHJlc3VsdFdyYXBwZXIuYXBwZW5kQ2hpbGQocmVzdWx0VGV4dClcbiAgcmVzdWx0V3JhcHBlci5hcHBlbmRDaGlsZChyZXN1bHRJbWcpXG5cbiAgYWxsVGVzdC5hcHBlbmRDaGlsZChyZXN1bHRXcmFwcGVyKVxuXG4gIHN3aXRjaCAocmVzdWx0Q291bnQpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXN1bHRIZWFkZXIuaW5uZXJUZXh0ID0gcmVzdWx0VGFibGVbMl0uaGVhZGVyXG4gICAgICByZXN1bHRUZXh0LmlubmVyVGV4dCA9IHJlc3VsdFRhYmxlWzJdLnBhcmFncmFwaFxuICAgICAgcmVzdWx0SW1nLnNyYyA9IHJlc3VsdFRhYmxlWzJdLmltYWdlXG4gICAgICBicmVha1xuICAgIGNhc2UgMTpcbiAgICAgIHJlc3VsdEhlYWRlci5pbm5lclRleHQgPSByZXN1bHRUYWJsZVsyXS5oZWFkZXJcbiAgICAgIHJlc3VsdFRleHQuaW5uZXJUZXh0ID0gcmVzdWx0VGFibGVbMl0ucGFyYWdyYXBoXG4gICAgICByZXN1bHRJbWcuc3JjID0gcmVzdWx0VGFibGVbMl0uaW1hZ2VcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAyOlxuICAgICAgcmVzdWx0SGVhZGVyLmlubmVyVGV4dCA9IHJlc3VsdFRhYmxlWzFdLmhlYWRlclxuICAgICAgcmVzdWx0VGV4dC5pbm5lclRleHQgPSByZXN1bHRUYWJsZVsxXS5wYXJhZ3JhcGhcbiAgICAgIHJlc3VsdEltZy5zcmMgPSByZXN1bHRUYWJsZVsxXS5pbWFnZVxuICAgICAgYnJlYWtcbiAgICBjYXNlIDM6XG4gICAgICByZXN1bHRIZWFkZXIuaW5uZXJUZXh0ID0gcmVzdWx0VGFibGVbMV0uaGVhZGVyXG4gICAgICByZXN1bHRUZXh0LmlubmVyVGV4dCA9IHJlc3VsdFRhYmxlWzFdLnBhcmFncmFwaFxuICAgICAgcmVzdWx0SW1nLnNyYyA9IHJlc3VsdFRhYmxlWzFdLmltYWdlXG4gICAgICBicmVha1xuICAgIGNhc2UgNDpcbiAgICAgIHJlc3VsdEhlYWRlci5pbm5lclRleHQgPSByZXN1bHRUYWJsZVswXS5oZWFkZXJcbiAgICAgIHJlc3VsdFRleHQuaW5uZXJUZXh0ID0gcmVzdWx0VGFibGVbMF0ucGFyYWdyYXBoXG4gICAgICByZXN1bHRJbWcuc3JjID0gcmVzdWx0VGFibGVbMF0uaW1hZ2VcbiAgICAgIGJyZWFrXG4gIH1cbn1cblxuZXhwb3J0IHsgaW5pdFRlc3QsIGNob29zZUFuc3dlciB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgaW5pdFRlc3QsIGNob29zZUFuc3dlciB9IGZyb20gJy4uLy4uL2phdmFzY3JpcHRzL3Rlc3RzLmpzJ1xuXG5pbXBvcnQgaW1nR29vZCBmcm9tICcuLi8uLi9pbWFnZXMvcmVzdWx0cy9yZXN1bHRfZ29vZC5zdmcnXG5pbXBvcnQgaW1nT2sgZnJvbSAnLi4vLi4vaW1hZ2VzL3Jlc3VsdHMvcmVzdWx0X29rLnN2ZydcbmltcG9ydCBpbWdCYWQgZnJvbSAnLi4vLi4vaW1hZ2VzL3Jlc3VsdHMvcmVzdWx0X2JhZC5zdmcnXG5cbmNvbnN0IHN0YWdlcyA9IFtcbiAge1xuICAgIHF1ZXN0aW9uOlxuICAgICAgJ9Ca0LDQutC+0LUg0YDQsNGB0YLQtdC90LjQtSwg0YHQvtCz0LvQsNGB0L3QviDQvdCw0YDQvtC00L3QvtC5INC80LXQtNC40YbQuNC90LUsINGB0LvQtdC00YPQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0LfQsNC20LjQstC70LXQvdC40Y8g0YDQsNC9PycsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn0YDQvtC80LDRiNC60LAnLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9Cx0YDRg9GB0L3QuNC60LAnLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9Cw0LvQvtGNJyxcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogJ9Ca0LDQutC+0LUg0YDQsNGB0YLQtdC90LjQtSDQvtCx0LvQsNC00LDQtdGCINC/0YDQvtGC0LjQstC+0LLQvtGB0L/QsNC70LjRgtC10LvRjNC90YvQvCDQtNC10LnRgdGC0LLQuNC10Lw/JyxcbiAgICBhbnN3ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfRgNC+0LzQsNGI0LrQsCcsXG4gICAgICAgIGNvdW50OiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn0LDQuNGAJyxcbiAgICAgICAgY291bnQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfQtNC10LLRj9GC0LjRgdC40LsnLFxuICAgICAgICBjb3VudDogMVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOlxuICAgICAgJ9Ca0LDQutC+0LUg0YDQsNGB0YLQtdC90LjQtSDQvtCx0LvQsNC00LDQtdGCINGB0LjQu9GM0L3QviDQstGL0YDQsNC20LXQvdC90YvQvNC4INCx0LDQutGC0LXRgNC40YbQuNC00L3Ri9C80Lgg0YHQstC+0LnRgdGC0LLQsNC80Lgg0LIg0L7RgtC90L7RiNC10L3QuNC4INC80L3QvtCz0LjRhSDQstC+0LfQsdGD0LTQuNGC0LXQu9C10Lkg0LHQvtC70LXQt9C90LXQuSwg0L7RgdC+0LHQtdC90L3QviDRgdGC0LDRhNC40LvQvtC60L7QutC60L7QsiDQuCDRgdGC0YDQtdC/0YLQvtC60L7QutC60L7Qsj8nLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9C30LLQtdGA0L7QsdC+0LknLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9C60LDQu9C10L3QtNGD0LvQsCcsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn0LrQsNC70LvQuNC30LjRjycsXG4gICAgICAgIGNvdW50OiAwXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246XG4gICAgICAn0JrQsNC60L7QtSDRgNCw0YHRgtC10L3QuNC1INGA0LDRgdGC0LXQvdC40LUg0Y/QstC70Y/QtdGC0YHRjyDRgtGA0LDQtNC40YbQuNC+0L3QvdGL0Lwg0YHRgNC10LTRgdGC0LLQvtC8INC+0YIg0LrQsNGI0LvRjz8nLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9C80LDRgtGMLdC4LdC80LDRh9C10YXQsCcsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn0YDQvtC80LDRiNC60LAnLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9GI0LjQv9C+0LLQvdC40LonLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5jb25zdCByZXN1bHRUYWJsZSA9IFtcbiAge1xuICAgIGhlYWRlcjogJ9Ce0LPQviwg0LrQsNC20LXRgtGB0Y8sINCy0Ysg0L7RgtC70LjRh9C90L4g0LfQvdCw0LrQvtC80Ysg0YEg0LvQtdC60LDRgNGB0YLQstC10L3QvdGL0LzQuCDRgNCw0YHRgtC10L3QuNGP0LzQuCEnLFxuICAgIHBhcmFncmFwaDogJ9Cf0L7Qv9GA0L7QsdGD0LnRgtC1INC00YDRg9Cz0LjQtSDQvdCw0YjQuCDRgtC10YHRgtGLLCDRh9GC0L7QsdGLINC/0YDQvtCy0LXRgNC40YLRjCDRgdC10LHRjyEnLFxuICAgIGltYWdlOiBgJHtpbWdHb29kfWBcbiAgfSxcbiAge1xuICAgIGhlYWRlcjogJ9Ce0YLQu9C40YfQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCISDQndC+INC90Y7QsNC90YHRiyDQu9GD0YfRiNC1INC/0L7QstGC0L7RgNC40YLRjCcsXG4gICAgcGFyYWdyYXBoOiAn0J/QvtC/0YDQvtCx0YPQudGC0LUg0LTRgNGD0LPQuNC1INC90LDRiNC4INGC0LXRgdGC0YssINGH0YLQvtCx0Ysg0L/RgNC+0LLQtdGA0LjRgtGMINGB0LXQsdGPIScsXG4gICAgaW1hZ2U6IGAke2ltZ09rfWBcbiAgfSxcbiAge1xuICAgIGhlYWRlcjogJ9Ca0LDQttC10YLRgdGPLCDQstGLINC/0L7Rh9GC0Lgg0L3QtSDQt9C90LDQutC+0LzRiyDRgSDRjdGC0L7QuSDRgtC10LzQvtC5JyxcbiAgICBwYXJhZ3JhcGg6ICfQn9C+0L/RgNC+0LHRg9C50YLQtSDQtdGJ0ZEg0YDQsNC3INC/0L7Qt9C00L3QtdC1JyxcbiAgICBpbWFnZTogYCR7aW1nQmFkfWBcbiAgfVxuXVxuXG5pbml0VGVzdChzdGFnZXMpXG5jaG9vc2VBbnN3ZXIoc3RhZ2VzLCByZXN1bHRUYWJsZSlcbiJdLCJuYW1lcyI6WyJjdXJyZW50U3RhZ2UiLCJyZXN1bHRDb3VudCIsImNoZWNrYm94ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbml0VGVzdCIsInN0YWdlcyIsIm51bWJlck9mUXVlc3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiaW5uZXJIVE1MIiwiY29uY2F0IiwibGVuZ3RoIiwiaSIsInRleHQiLCJqIiwiZGF0YXNldCIsImNvdW50IiwiY2hvb3NlQW5zd2VyIiwicmVzdWx0VGFibGUiLCJmb3JFYWNoIiwiY2hlY2tib3giLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsIk51bWJlciIsInNldFRpbWVvdXQiLCJ1cGRhdGVTdGFnZSIsInNob3dSZXN1bHQiLCJhbGxUZXN0IiwicmVzdWx0V3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmaW5hbENvdW50IiwiaW5uZXJUZXh0IiwicmVzdWx0SGVhZGVyIiwicmVzdWx0VGV4dCIsInJlc3VsdEltZyIsImFwcGVuZENoaWxkIiwiaGVhZGVyIiwicGFyYWdyYXBoIiwic3JjIiwiaW1hZ2UiLCJpbWdHb29kIiwiaW1nT2siLCJpbWdCYWQiXSwic291cmNlUm9vdCI6IiJ9