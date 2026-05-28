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
/*!*****************************************!*\
  !*** ./src/javascripts/searchModule.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _searchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchData.js */ "./src/javascripts/searchData.js");

initSearchPage(_searchData_js__WEBPACK_IMPORTED_MODULE_0__.articles);
function initSearchPage(articles) {
  var input = document.querySelector('.A_SearchInput');
  var button = document.querySelector('.A_SearchButton');
  var params = new URLSearchParams(window.location.search);
  var query = params.get('q') || '';
  input.value = query;
  if (query.length > 3) {
    renderResults(query, articles);
  }
  input.addEventListener('input', function () {
    var value = input.value.toLowerCase();
    renderResults(value, articles);
    var url = "search.html?q=".concat(encodeURIComponent(value));
    history.replaceState(null, '', url);
  });
}
function renderResults(value, articles) {
  var container = document.querySelector('.C_SearchResults');
  container.innerHTML = '';
  var results = articles.filter(function (article) {
    return article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value);
  });
  if (results == 0) {
    container.innerHTML = "<p>\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</p>";
    return;
  }
  results.forEach(function (item) {
    var card = document.createElement('a');
    card.classList.add('O_IndexSectionCard');
    card.href = item.url;
    var header = document.createElement('h3');
    header.classList.add('A_IndexH3');
    header.innerHTML = hightlight(item.title, value);
    var description = document.createElement('h3');
    description.classList.add('A_CardDescription');
    description.innerHTML = hightlight(item.description, value);
    card.appendChild(header);
    card.appendChild(description);
    container.appendChild(card);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUksSUFBSSxDQUFDO0VBRTFDLElBQU00QixTQUFTLEdBQUdILElBQUksQ0FBQ0ksT0FBTyxDQUM1QkgsS0FBSyxrQ0FBQXJCLE1BQUEsQ0FDeUJMLEtBQUssWUFDckMsQ0FBQztFQUVELE9BQU80QixTQUFTO0FBQ2xCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMjRkczA5Ly4vc3JjL2phdmFzY3JpcHRzL3NlYXJjaERhdGEuanMiLCJ3ZWJwYWNrOi8vYjI0ZHMwOS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iMjRkczA5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iMjRkczA5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYjI0ZHMwOS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2IyNGRzMDkvLi9zcmMvamF2YXNjcmlwdHMvc2VhcmNoTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhcnRpY2xlcyA9IFtcbiAge1xuICAgIHRpdGxlOiAn0JzQvtC90YHRgtC10YDQsCcsXG4gICAgZGVzY3JpcHRpb246ICfQotGA0L7Qv9C40YfQtdGB0LrQvtC1INGA0LDRgdGC0LXQvdC40LUg0YEg0LrRgNGD0L/QvdGL0LzQuCDQu9C40YHRgtGM0Y/QvNC4JyxcbiAgICB1cmw6ICdodHRwczovL2FubmtvbWtvdmEuZ2l0aHViLmlvL3N0YXRpYy1zaXRlLTA5LTI1L3BhZ2VzL2FydGljbGVzL21vbnN0ZXJhLmh0bWwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ca0LDQutGC0YPRgScsXG4gICAgZGVzY3JpcHRpb246ICfQn9GD0YHRgtGL0L3QvdC+0LUg0YDQsNGB0YLQtdC90LjQtSDQsdC10Lcg0YfQsNGB0YLQvtCz0L4g0L/QvtC70LjQstCwJyxcbiAgICB1cmw6ICdodHRwczovL2FubmtvbWtvdmEuZ2l0aHViLmlvL3N0YXRpYy1zaXRlLTA5LTI1L3BhZ2VzL2FydGljbGVzL2NhY3R1cy5odG1sJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQodCw0L3RgdC10LLQuNC10YDQuNGPJyxcbiAgICBkZXNjcmlwdGlvbjogJ9Ci0LXQvdC10LLRi9C90L7RgdC70LjQstGL0Lkg0YHRg9C60LrRg9C70LXQvdGCLCDQvdC1INGC0YDQtdCx0YPRjtGJ0LjQuSDRh9Cw0YHRgtC+0LPQviDQv9C+0LvQuNCy0LAnLFxuICAgIHVybDogJ2h0dHBzOi8vYW5ua29ta292YS5naXRodWIuaW8vc3RhdGljLXNpdGUtMDktMjUvcGFnZXMvYXJ0aWNsZXMvc2Fuc2V2aWVyaWEuaHRtbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0J7RgNC40YXQuNC00LXRjycsXG4gICAgZGVzY3JpcHRpb246ICfQmtGA0LDRgdC40LLQvtC1INGG0LLQtdGC0YPRidC10LUg0YDQsNGB0YLQtdC90LjQtSwg0YDQsNGB0YLRg9GJ0LXQtSDQstC+INC80YXRgycsXG4gICAgdXJsOiAnaHR0cHM6Ly9hbm5rb21rb3ZhLmdpdGh1Yi5pby9zdGF0aWMtc2l0ZS0wOS0yNS9wYWdlcy9hcnRpY2xlcy9vcmNoaWRlYS5odG1sJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQkNC70L7RjScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAn0KHRg9C60LrRg9C70LXQvdGCLCDQvdC1INGC0YDQtdCx0YPRjtGJ0LjQuSDRh9Cw0YHRgtC+0LPQviDQv9C+0LvQuNCy0LAsINGBINC70LXQutCw0YDRgdGC0LLQtdC90L3Ri9C80Lgg0YHQstC+0LnRgdGC0LLQsNC80LgnLFxuICAgIHVybDogJ2h0dHBzOi8vYW5ua29ta292YS5naXRodWIuaW8vc3RhdGljLXNpdGUtMDktMjUvcGFnZXMvYXJ0aWNsZXMvYWxvZS5odG1sJ1xuICB9XG5dXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFydGljbGVzIH0gZnJvbSAnLi9zZWFyY2hEYXRhLmpzJ1xuXG5pbml0U2VhcmNoUGFnZShhcnRpY2xlcylcblxuZnVuY3Rpb24gaW5pdFNlYXJjaFBhZ2UoYXJ0aWNsZXMpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQV9TZWFyY2hJbnB1dCcpXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX1NlYXJjaEJ1dHRvbicpXG5cbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICBjb25zdCBxdWVyeSA9IHBhcmFtcy5nZXQoJ3EnKSB8fCAnJ1xuXG4gIGlucHV0LnZhbHVlID0gcXVlcnlcblxuICBpZiAocXVlcnkubGVuZ3RoID4gMykge1xuICAgIHJlbmRlclJlc3VsdHMocXVlcnksIGFydGljbGVzKVxuICB9XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgcmVuZGVyUmVzdWx0cyh2YWx1ZSwgYXJ0aWNsZXMpXG5cbiAgICBjb25zdCB1cmwgPSBgc2VhcmNoLmh0bWw/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YFxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsICcnLCB1cmwpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclJlc3VsdHModmFsdWUsIGFydGljbGVzKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DX1NlYXJjaFJlc3VsdHMnKVxuXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gIGNvbnN0IHJlc3VsdHMgPSBhcnRpY2xlcy5maWx0ZXIoXG4gICAgKGFydGljbGUpID0+XG4gICAgICBhcnRpY2xlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIHx8XG4gICAgICBhcnRpY2xlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpXG4gIClcblxuICBpZiAocmVzdWx0cyA9PSAwKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8cD7QndC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3QvjwvcD5gXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXN1bHRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdPX0luZGV4U2VjdGlvbkNhcmQnKVxuICAgIGNhcmQuaHJlZiA9IGl0ZW0udXJsXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ0FfSW5kZXhIMycpXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGhpZ2h0bGlnaHQoaXRlbS50aXRsZSwgdmFsdWUpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdBX0NhcmREZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gaGlnaHRsaWdodChpdGVtLmRlc2NyaXB0aW9uLCB2YWx1ZSlcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGlnaHRsaWdodCh0ZXh0LCB2YWx1ZSkge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7dmFsdWV9YCwgJ2dpJylcblxuICBjb25zdCBmb3JtYXR0ZWQgPSB0ZXh0LnJlcGxhY2UoXG4gICAgcmVnZXgsXG4gICAgYDxzcGFuIGNsYXNzPVwiUV9IaWdodGxpZ2h0XCI+JHt2YWx1ZX08L3NwYW4+YFxuICApXG5cbiAgcmV0dXJuIGZvcm1hdHRlZFxufVxuIl0sIm5hbWVzIjpbImFydGljbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsImluaXRTZWFyY2hQYWdlIiwiaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInF1ZXJ5IiwiZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJyZW5kZXJSZXN1bHRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvTG93ZXJDYXNlIiwiY29uY2F0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImNvbnRhaW5lciIsImlubmVySFRNTCIsInJlc3VsdHMiLCJmaWx0ZXIiLCJhcnRpY2xlIiwiaW5jbHVkZXMiLCJmb3JFYWNoIiwiaXRlbSIsImNhcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaHJlZiIsImhlYWRlciIsImhpZ2h0bGlnaHQiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJyZWdleCIsIlJlZ0V4cCIsImZvcm1hdHRlZCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9