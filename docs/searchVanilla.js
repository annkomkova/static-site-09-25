/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascripts/searchData.js":
/*!***************************************!*\
  !*** ./src/javascripts/searchData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   articles: () => (/* binding */ articles)
/* harmony export */ });
var articles = [{
  title: 'Монстера',
  description: 'Тропическое растение с крупными листьями',
  url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/monstera.html'
}, {
  title: 'Кактус',
  description: 'Пустынное растение без частого полива',
  url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/cactus.html'
}, {
  title: 'Сансевиерия',
  description: 'Теневыносливый суккулент, не требующий частого полива',
  url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/sansevieria.html'
}, {
  title: 'Орихидея',
  description: 'Красивое цветущее растение, растущее во мху',
  url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/orchidea.html'
}, {
  title: 'Алоэ',
  description: 'Суккулент, не требующий частого полива, с лекарственными свойствами',
  url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/aloe.html'
}];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/javascripts/searchVanilla.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _searchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchData.js */ "./src/javascripts/searchData.js");

initSearch(_searchData_js__WEBPACK_IMPORTED_MODULE_0__.articles);
function initSearch(articles) {
  var input = document.querySelector('.A_SearchInput');
  var button = document.querySelector('.A_SearchButton');
  input.addEventListener('input', function () {
    hadleSearchInput(articles, input, button);
  });
  button.addEventListener('click', function () {
    hadleSearchClick(articles, input, button);
  });
}
function hadleSearchClick(articles, input, button) {
  var value = input.value.toLowerCase();
  var result = articles.find(function (article) {
    return article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value);
  });
  console.log(window.location);

  //!!!! для теста на локалхосте
  // window.location.href =
  //   'http://localhost:8080/' + `search.html?q=${encodeURIComponent(value)}`

  //для работы на github.pages
  window.location.href = 'https://annkomkova.github.io/static-site-09-25/' + "search.html?q=".concat(encodeURIComponent(value));
  if (result) {
    // window.location.href = result.url
    // window.location.href = `search.html?q=${encodeURIComponent(value)}`
  }
}
function toggleButton(button, isActive) {
  button.disabled = !isActive;
}
function hadleSearchInput(articles, input, button) {
  var value = input.value.toLowerCase();
  var dropdown = document.querySelector('.C_Dropdown');
  var results = articles.filter(function (article) {
    return article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value);
  });
  if (results > 0) {
    dropdown.style.display = 'none';
  }
  if (value.length < 3) {
    dropdown.style.display = 'none';
    toggleButton(button, false);
  } else {
    toggleButton(button, true);
    renderDropdown(results, dropdown, value);
  }
}
function renderDropdown(results, dropdown, value) {
  dropdown.innerHTML = '';
  dropdown.style.display = 'flex';
  results.forEach(function (result) {
    var item = document.createElement('a');
    item.classList.add('M_SearchResult');
    item.href = result.url;
    var header = document.createElement('h5');
    header.classList.add('A_SearchResultHeader');
    header.innerHTML = hightlight(result.title, value);
    var description = document.createElement('p');
    description.classList.add('A_SearchResultDescription');
    description.innerHTML = hightlight(result.description, value);
    item.appendChild(header);
    item.appendChild(description);
    dropdown.appendChild(item);
  });
}
function hightlight(text, value) {
  var regex = new RegExp("".concat(value), 'gi');
  var formatted = text.replace(regex, "<span class=\"Q_Hightlight\">".concat(value, "</span>"));
  return formatted;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZHMwOS8uL3NyYy9qYXZhc2NyaXB0cy9zZWFyY2hEYXRhLmpzIiwid2VicGFjazovL2IyNGRzMDkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYjI0ZHMwOS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYjI0ZHMwOS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2IyNGRzMDkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iMjRkczA5Ly4vc3JjL2phdmFzY3JpcHRzL3NlYXJjaFZhbmlsbGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFydGljbGVzID0gW1xuICB7XG4gICAgdGl0bGU6ICfQnNC+0L3RgdGC0LXRgNCwJyxcbiAgICBkZXNjcmlwdGlvbjogJ9Ci0YDQvtC/0LjRh9C10YHQutC+0LUg0YDQsNGB0YLQtdC90LjQtSDRgSDQutGA0YPQv9C90YvQvNC4INC70LjRgdGC0YzRj9C80LgnLFxuICAgIHVybDogJ2h0dHBzOi8vYW5ua29ta292YS5naXRodWIuaW8vc3RhdGljLXNpdGUtMDktMjUvcGFnZXMvYXJ0aWNsZXMvbW9uc3RlcmEuaHRtbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0JrQsNC60YLRg9GBJyxcbiAgICBkZXNjcmlwdGlvbjogJ9Cf0YPRgdGC0YvQvdC90L7QtSDRgNCw0YHRgtC10L3QuNC1INCx0LXQtyDRh9Cw0YHRgtC+0LPQviDQv9C+0LvQuNCy0LAnLFxuICAgIHVybDogJ2h0dHBzOi8vYW5ua29ta292YS5naXRodWIuaW8vc3RhdGljLXNpdGUtMDktMjUvcGFnZXMvYXJ0aWNsZXMvY2FjdHVzLmh0bWwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ch0LDQvdGB0LXQstC40LXRgNC40Y8nLFxuICAgIGRlc2NyaXB0aW9uOiAn0KLQtdC90LXQstGL0L3QvtGB0LvQuNCy0YvQuSDRgdGD0LrQutGD0LvQtdC90YIsINC90LUg0YLRgNC10LHRg9GO0YnQuNC5INGH0LDRgdGC0L7Qs9C+INC/0L7Qu9C40LLQsCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9hbm5rb21rb3ZhLmdpdGh1Yi5pby9zdGF0aWMtc2l0ZS0wOS0yNS9wYWdlcy9hcnRpY2xlcy9zYW5zZXZpZXJpYS5odG1sJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQntGA0LjRhdC40LTQtdGPJyxcbiAgICBkZXNjcmlwdGlvbjogJ9Ca0YDQsNGB0LjQstC+0LUg0YbQstC10YLRg9GJ0LXQtSDRgNCw0YHRgtC10L3QuNC1LCDRgNCw0YHRgtGD0YnQtdC1INCy0L4g0LzRhdGDJyxcbiAgICB1cmw6ICdodHRwczovL2FubmtvbWtvdmEuZ2l0aHViLmlvL3N0YXRpYy1zaXRlLTA5LTI1L3BhZ2VzL2FydGljbGVzL29yY2hpZGVhLmh0bWwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CQ0LvQvtGNJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICfQodGD0LrQutGD0LvQtdC90YIsINC90LUg0YLRgNC10LHRg9GO0YnQuNC5INGH0LDRgdGC0L7Qs9C+INC/0L7Qu9C40LLQsCwg0YEg0LvQtdC60LDRgNGB0YLQstC10L3QvdGL0LzQuCDRgdCy0L7QudGB0YLQstCw0LzQuCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9hbm5rb21rb3ZhLmdpdGh1Yi5pby9zdGF0aWMtc2l0ZS0wOS0yNS9wYWdlcy9hcnRpY2xlcy9hbG9lLmh0bWwnXG4gIH1cbl1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXJ0aWNsZXMgfSBmcm9tICcuL3NlYXJjaERhdGEuanMnXG5cbmluaXRTZWFyY2goYXJ0aWNsZXMpXG5cbmZ1bmN0aW9uIGluaXRTZWFyY2goYXJ0aWNsZXMpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQV9TZWFyY2hJbnB1dCcpXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX1NlYXJjaEJ1dHRvbicpXG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaGFkbGVTZWFyY2hJbnB1dChhcnRpY2xlcywgaW5wdXQsIGJ1dHRvbilcbiAgfSlcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGFkbGVTZWFyY2hDbGljayhhcnRpY2xlcywgaW5wdXQsIGJ1dHRvbilcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFkbGVTZWFyY2hDbGljayhhcnRpY2xlcywgaW5wdXQsIGJ1dHRvbikge1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKClcblxuICBjb25zdCByZXN1bHQgPSBhcnRpY2xlcy5maW5kKFxuICAgIChhcnRpY2xlKSA9PlxuICAgICAgYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSB8fFxuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKVxuICApXG5cbiAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKVxuXG4gIC8vISEhISDQtNC70Y8g0YLQtdGB0YLQsCDQvdCwINC70L7QutCw0LvRhdC+0YHRgtC1XG4gIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID1cbiAgLy8gICAnaHR0cDovL2xvY2FsaG9zdDo4MDgwLycgKyBgc2VhcmNoLmh0bWw/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YFxuXG4gIC8v0LTQu9GPINGA0LDQsdC+0YLRiyDQvdCwIGdpdGh1Yi5wYWdlc1xuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XG4gICAgJ2h0dHBzOi8vYW5ua29ta292YS5naXRodWIuaW8vc3RhdGljLXNpdGUtMDktMjUvJyArXG4gICAgYHNlYXJjaC5odG1sP3E9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWBcblxuICBpZiAocmVzdWx0KSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXN1bHQudXJsXG4gICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgc2VhcmNoLmh0bWw/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJ1dHRvbihidXR0b24sIGlzQWN0aXZlKSB7XG4gIGJ1dHRvbi5kaXNhYmxlZCA9ICFpc0FjdGl2ZVxufVxuXG5mdW5jdGlvbiBoYWRsZVNlYXJjaElucHV0KGFydGljbGVzLCBpbnB1dCwgYnV0dG9uKSB7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DX0Ryb3Bkb3duJylcblxuICBjb25zdCByZXN1bHRzID0gYXJ0aWNsZXMuZmlsdGVyKFxuICAgIChhcnRpY2xlKSA9PlxuICAgICAgYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSB8fFxuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKVxuICApXG5cbiAgaWYgKHJlc3VsdHMgPiAwKSB7XG4gICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdG9nZ2xlQnV0dG9uKGJ1dHRvbiwgZmFsc2UpXG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlQnV0dG9uKGJ1dHRvbiwgdHJ1ZSlcbiAgICByZW5kZXJEcm9wZG93bihyZXN1bHRzLCBkcm9wZG93biwgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRHJvcGRvd24ocmVzdWx0cywgZHJvcGRvd24sIHZhbHVlKSB7XG4gIGRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG4gIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcblxuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ01fU2VhcmNoUmVzdWx0JylcbiAgICBpdGVtLmhyZWYgPSByZXN1bHQudXJsXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ0FfU2VhcmNoUmVzdWx0SGVhZGVyJylcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gaGlnaHRsaWdodChyZXN1bHQudGl0bGUsIHZhbHVlKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdBX1NlYXJjaFJlc3VsdERlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBoaWdodGxpZ2h0KHJlc3VsdC5kZXNjcmlwdGlvbiwgdmFsdWUpXG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoaXRlbSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGlnaHRsaWdodCh0ZXh0LCB2YWx1ZSkge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7dmFsdWV9YCwgJ2dpJylcblxuICBjb25zdCBmb3JtYXR0ZWQgPSB0ZXh0LnJlcGxhY2UoXG4gICAgcmVnZXgsXG4gICAgYDxzcGFuIGNsYXNzPVwiUV9IaWdodGxpZ2h0XCI+JHt2YWx1ZX08L3NwYW4+YFxuICApXG5cbiAgcmV0dXJuIGZvcm1hdHRlZFxufVxuIl0sIm5hbWVzIjpbImFydGljbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsImluaXRTZWFyY2giLCJpbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYWRsZVNlYXJjaElucHV0IiwiaGFkbGVTZWFyY2hDbGljayIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJyZXN1bHQiLCJmaW5kIiwiYXJ0aWNsZSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvZ2dsZUJ1dHRvbiIsImlzQWN0aXZlIiwiZGlzYWJsZWQiLCJkcm9wZG93biIsInJlc3VsdHMiLCJmaWx0ZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJsZW5ndGgiLCJyZW5kZXJEcm9wZG93biIsImlubmVySFRNTCIsImZvckVhY2giLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhlYWRlciIsImhpZ2h0bGlnaHQiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJyZWdleCIsIlJlZ0V4cCIsImZvcm1hdHRlZCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9