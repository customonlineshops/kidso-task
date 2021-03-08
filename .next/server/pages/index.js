module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./page.content.json":
/*!***************************!*\
  !*** ./page.content.json ***!
  \***************************/
/*! exports provided: page, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"page\":[{\"/content/chesto-zadavani-vaprosi.html\":{\"page_id\":\"1245\",\"system_id\":1,\"url\":\"/content/chesto-zadavani-vaprosi.html\",\"language\":\"bg\",\"meta\":{\"meta_title\":\"Често задавани въпроси\",\"meta_description\":\"Често задавани въпроси за Kidso.bg\"},\"title\":\"Често задавани въпроси\",\"footer_menu\":1,\"content\":\"<p><strong>Поръчка</strong></p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Как мога да поръчам?</li>\\r\\n</ul>\\r\\n<p>Вие можете да поръчате лесно и удобно през нашия онлайн магазин <strong>kidso.bg</strong>.  Щом намерите продукта, който Ви интересува го добавете в количката.  След това завършете поръчката, като попълните Ваша ел. поща, адрес за доставка, телефон и начин на плащане.</p>\\r\\n<p>Ще получите на електронната си поща подробности за Вашата поръчка и номер на товарителница, по който можете да проследите пратката си.</p>\\r\\n<p>Възможно е да поръчате и по телефона.  Обадете се на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви помогне в избора и поръчката.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Защо да купя онлайн?</li>\\r\\n</ul>\\r\\n<p>Пестите време.  Можете много лесно и бързо да сравнявате характеристики и цени на продукти.  В електронната си поща имате пълна история на Вашите покупки и лесно можете да поръчвате отново, продукти, които са Ви необходими и харесвате.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Каква информация предоставям при поръчка онлайн?</li>\\r\\n</ul>\\r\\n<p>Необходими са ни Вашето име и фамилия, адрес за доставка, електронна поща и телефон.  Уверете се, че тези данни са попълнени точно и вярно – това ще Ви гарантира навременна доставка от нашите партньори – куриери.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Мога ли да откажа поръчка?</li>\\r\\n</ul>\\r\\n<p>Вие можете да откажете поръчката си по всяко време.  Препоръчваме Ви да го направите възможно най-бързо.  Обадете се на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви помогне.  Ако поръчката Ви е вече на път, трябва да се свържете с куриерската фирма.  При отказ на поръчка е възможно да Ви бъде начислена такса за връщане на пратката.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Поръчката ми налична ли е?</li>\\r\\n</ul>\\r\\n<p>Всички продукти, които виждате на <strong>kidso.bg</strong> са налични.  Така гарантираме, че избраното от Вас ще бъде доставено бързо и точно.</p>\\r\\n<p> </p>\\r\\n<p>Имам въпроси относно продукти, които искам да поръчам.  Как да постъпя?</p>\\r\\n<p>Обадете се на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви отговори.  Можете и да ни пишете на <a href=\\\"mailto:info@kidso.bg\\\">info@kidso.bg</a>.</p>\\r\\n<p> <br /><strong>Доставка<br /></strong> </p>\\r\\n<ul >\\r\\n<li>Колко е стандартния срок на доставка?</li>\\r\\n</ul>\\r\\n<p>Ние доставяме между 1 и 2 работни дни.  Възможно е доставката Ви да пристигне и по-бързо.  Това най-често се случва в големите градове.</p>\\r\\n<p>При големи кампании или празници са възможни забавяния на куриерската услуга.  За тези случаи ние ще Ви уведомим предварително.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Какви документи получавам с пратката си?</li>\\r\\n</ul>\\r\\n<p>Заедно с поръчаните от Вас стоки получавате от <strong>kidso.bg</strong> Протокол (опис) на поръчаните от Вас стоки, товарителница, ваучер за връщане, фактура (когато сте поискали такава), касова бележка (без случаите на ППП – пощенски паричен превод и, гаранционна карта (когато това е приложимо).</p>\\r\\n<p>Препоръчваме Ви да запазите тези документи – те ще са Ви необходими в случай, че решите да връщате стоки на <strong>kidso.bg</strong> или имате гаранционна рекламация.  Товарителницата, фактурата или касовата бележка е документът, който удостоверява датата на започване да тече гаранционния срок.</p>\\r\\n<p> <br /><strong>Връщане<br /></strong><strong> </strong></p>\\r\\n<ul >\\r\\n<li>Мога ли да върна продукт?</li>\\r\\n</ul>\\r\\n<p>Да.  Вие можете да върнете продукт в рамките на 30 (тридесет) дни от датата на получаването.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Какви са изискванията за връщане на продукт?</li>\\r\\n</ul>\\r\\n<p>За да върнете продукт той не трябва да е ремонтиран, да няма следи от употреба, трябва да е в оригиналната си опаковка, всички оригинални аксесоари да бъдат налични.  Ако продуктът е бил придружен с подарък, то е необходимо да се върне и подаръка.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Има ли продукти, които не могат да се връщат?</li>\\r\\n</ul>\\r\\n<p>Няма право на връщане за бельо, хранителните, козметичните и санитарни продукти като добавки, пелени, мокри кърпички, продукти за интимна женска хигиена и други продукти, които, губят свойствата и ефективността си след разопаковане.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Безплатно ли е връщането?</li>\\r\\n</ul>\\r\\n<p>Ако върнете продукт и го замените с друг (връщане със замяна) куриерските разходи по връщането са за сметка на <strong>kidso.bg</strong>.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Кога връщането не е безплатно?</li>\\r\\n</ul>\\r\\n<p>При връщане без замяна за нов продукт, когато Ви връщаме заплатената сума - куриерските разходи се заплащат от клиента.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Как се връща продукт?</li>\\r\\n</ul>\\r\\n<p>Връщането се осъществява в няколко лесни стъпки:</p>\\r\\n<ol>\\r\\n<li>Върнете продукта в оригиналната опаковка;<br /> </li>\\r\\n<li>Попълнете бланката за връщане – попълнете точно личните си данни, банковата си сметка, както и номер на Вашата поръчка;<br /> </li>\\r\\n<li>Обадете се на Спиди, за да заявите връщане;<br /> </li>\\r\\n<li>Дайте информация на куриера за номера на ваучера за връщане, за размера на пратката и приблизителното и тегло;<br /> </li>\\r\\n<li>Кажете на куриера, че връщането е за сметка на „всичко за децата“. По този начин ще използвате нашите по-ниски цени за куриер при връщането си;</li>\\r\\n</ol>\\r\\n<p> </p>\\r\\n<p>Използвайте указанията на „Бланка за връщане на продукт“, която сте получили заедно с продукта.  Заедно с „Бланка за връщане на продукт“ сте получили и „Ваучер за връщане“.  Него трябва да предоставите на куриера.</p>\\r\\n<p>Ако  имате затруднения можете да свържете с нас на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви помогне.</p>\\r\\n<p><strong><br />Плащания</strong></p>\\r\\n<ul >\\r\\n<li>Какви начини на плащане приемате?</li>\\r\\n</ul>\\r\\n<p>Можете да платите на куриера в брой, можете да платите с банков превод, можете да платите и с кредитна или дебитна карта или чрез Pay Pal.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Как правя плащане в брой?</li>\\r\\n</ul>\\r\\n<p>Плащанията в брой са директно на куриера при доставката.  Те са наложен платеж или пощенски паричен превод;</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Как мога да платя по банка?</li>\\r\\n</ul>\\r\\n<p>Вие можете да преведете дължимата сума по банкова сметка <span >BG17BPBI79421022941701</span>.  Всички срокове започват да текат след получаването на Вашия банков превод при нас.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>С какви карти работите?</li>\\r\\n</ul>\\r\\n<p>Вие можете да платите със всички по-популярни банкови карти – <strong>Maestro, Visa, Visa Electron, Master Card, Diners Club, Discover</strong>.</p>\\r\\n<p><strong><br />Връщания на пари<br /></strong> </p>\\r\\n<ul >\\r\\n<li>Възстановявате ли цялата сума?</li>\\r\\n</ul>\\r\\n<p>При връщане със замяна ще можете да използвате цялата сума за пазаруване.  При връщане без замяна ще възстановим сумата Ви, като приспаднем разходите за куриер по връщането.  При възстановяване на суми чрез системата Easy Pay комисионните по превода са за Ваша сметка.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Как получавам сумата си?</li>\\r\\n</ul>\\r\\n<p>Можете да получите сумата си по банкова сметка или чрез Easy Pay.  При възстановяване на сумата по банков път всички такси и комисионни са за сметка на <strong>kidso.bg</strong>.</p>\\r\\n<p>При възстановяване на сумата чрез Easy Pay се прилага следната тарифа за сметка на получателя:</p>\\r\\n<p> </p>\\r\\n<table cellspacing=\\\"10\\\" cellpadding=\\\"10\\\" border=\\\"1\\\" width=\\\"100%\\\">\\r\\n<tbody>\\r\\n<tr>\\r\\n<td colspan=\\\"2\\\" align=\\\"center\\\">\\r\\n<p>Tарифа за извършване на преводи чрез EasyРay</p>\\r\\n</td>\\r\\n</tr>\\r\\n<tr>\\r\\n<td>\\r\\n<p>Размер на превода</p>\\r\\n</td>\\r\\n<td>\\r\\n<p>Такса за превода</p>\\r\\n</td>\\r\\n</tr>\\r\\n<tr>\\r\\n<td>\\r\\n<p>5.01 - 50лв.</p>\\r\\n</td>\\r\\n<td>\\r\\n<p>0.61 лв.</p>\\r\\n</td>\\r\\n</tr>\\r\\n<tr>\\r\\n<td>\\r\\n<p>50.01 - 100лв.</p>\\r\\n</td>\\r\\n<td>\\r\\n<p>1.10 лв.</p>\\r\\n</td>\\r\\n</tr>\\r\\n<tr>\\r\\n<td>\\r\\n<p>100.01 - 250лв.</p>\\r\\n</td>\\r\\n<td>\\r\\n<p>2.72 лв.</p>\\r\\n</td>\\r\\n</tr>\\r\\n<tr>\\r\\n<td>\\r\\n<p>250.01 - 500лв.</p>\\r\\n</td>\\r\\n<td>\\r\\n<p>3.77 лв.</p>\\r\\n</td>\\r\\n</tr>\\r\\n<tr>\\r\\n<td>\\r\\n<p>500.01 - 1000лв.</p>\\r\\n</td>\\r\\n<td>\\r\\n<p>4.84 лв.</p>\\r\\n</td>\\r\\n</tr>\\r\\n</tbody>\\r\\n</table>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>В какъв срок получавам сумата си?</li>\\r\\n</ul>\\r\\n<p>Срокът за връщане на пари е <strong>14 дни</strong> от датата на получаване на върнатата пратка при нас.</p>\\r\\n<p><strong><br />Регистрация<br /><br /></strong></p>\\r\\n<ul >\\r\\n<li>Защо да се регистрирам?</li>\\r\\n</ul>\\r\\n<p>Ако имате профил при нас, ще пазарувате по-лесно и бързо.  Няма да е нужно всеки път да въвеждате Вашия адрес.</p>\\r\\n<p>Можете да получавате актуална информация от нас за нашите най-добри предложения и нови продукти.</p>\\r\\n<p> </p>\\r\\n<ul >\\r\\n<li>Защо да предоставям рождената дата и възрастта на детето/децата ми?</li>\\r\\n</ul>\\r\\n<p>Ще можем да Ви формулираме по-точна и адекватни предложения, съобразени с пола и възрастта на Вашето дете.</p>\\r\\n<p>Когато знаем рождения ден на Вашето дете, можем да Ви направим специални предложения по този повод.</p>\",\"date_created\":\"2020-09-11 22:01:34\",\"date_updated\":\"2020-12-11 11:54:40\"}},{\"/content/zamyana-na-stoka.html\":{\"page_id\":\"1246\",\"system_id\":1,\"url\":\"/content/zamyana-na-stoka.html\",\"language\":\"bg\",\"meta\":{\"meta_title\":\"Замяна на стока\",\"meta_description\":\"Замяна на стока\"},\"title\":\"Замяна на стока\",\"footer_menu\":1,\"content\":\"<p>Вие можете да замените закупен от вас продукт в рамките на <strong>30 календарни дни</strong>. </p>\\r\\n<p class=\\\"page-cms-row text-align-mobile\\\"><img src=\\\"https://kidso.bg/img/cms/footer-pages/calendar.svg\\\" alt=\\\"30 календарни дни\\\" height=\\\"80\\\" /></p>\\r\\n<p>При замяна за нов продукт, който е на стойност по-голяма или равна на първоначалната, разходите за куриера по връщането са за сметка <strong>kidso.bg</strong>.</p>\\r\\n<p>Условия, на които продукта трябва да отговаря, за да се замени в горния срок:</p>\\r\\n<ul >\\r\\n<li>Да не е ремонтиран;</li>\\r\\n<li>Да няма следи от употреба (одрасквания, износване, удари и др.);</li>\\r\\n<li>Опаковката да не е увредена;</li>\\r\\n<li>Всички оригинални аксесоари да бъдат налични;</li>\\r\\n<li>Ако продуктът е бил придружен с подарък, то е необходимо да се върне и подаръка;</li>\\r\\n</ul>\\r\\n<p>Няма право на замяна за бельо, хранителните, козметичните и санитарни продукти като добавки, пелени, мокри кърпички, продукти за интимна женска хигиена и други продукти, които, губят свойствата и ефективността си след разопаковане.</p>\\r\\n<p>Ако продуктът отговаря на горните условия, връщането е лесно - използвайте указанията на „Бланка за връщане на продукт“, която сте получили заедно с продукта.</p>\\r\\n<p>Заедно с „Бланка за връщане на продукт“ сте получили и „Ваучер за връщане“ на Спиди, в който е важен номера на ваучера, започващ с RV...</p>\\r\\n<p><a><img src=\\\"https://kidso.bg/img/cms/images/return_form_vaucher_speedy.gif\\\" alt=\\\"Примерен ваучер\\\" width=\\\"310\\\" /> </a></p>\\r\\n<div id=\\\"return_form_vaucher\\\" class=\\\"modal fade\\\">\\r\\n<div class=\\\"modal-dialog\\\">\\r\\n<div class=\\\"modal-content\\\">\\r\\n<div class=\\\"modal-header\\\"><button type=\\\"button\\\" class=\\\"close\\\"><span>×</span></button></div>\\r\\n<div class=\\\"modal-body\\\"><img src=\\\"https://kidso.bg/img/cms/images/return_form_vaucher_speedy.gif\\\" alt=\\\"Примерен ваучер\\\" class=\\\"img-responsive\\\" /></div>\\r\\n</div>\\r\\n</div>\\r\\n</div>\\r\\n<p>На гърба на бланката ще можете да опишете желаната от Вас замяна.</p>\\r\\n<p><a><img src=\\\"https://kidso.bg/img/cms/images/return_form_blanka.gif\\\" alt=\\\"\\\" width=\\\"310\\\" /> </a></p>\\r\\n<div id=\\\"exchange_form_vaucher\\\" class=\\\"modal fade\\\">\\r\\n<div class=\\\"modal-dialog\\\">\\r\\n<div class=\\\"modal-content\\\">\\r\\n<div class=\\\"modal-header\\\"><button type=\\\"button\\\" class=\\\"close\\\"><span>×</span></button></div>\\r\\n<div class=\\\"modal-body\\\"><img src=\\\"https://kidso.bg/img/cms/images/return_form_blanka.gif\\\" alt=\\\"\\\" class=\\\"img-responsive\\\" /></div>\\r\\n</div>\\r\\n</div>\\r\\n</div>\\r\\n<p><a href=\\\"https://kidso.bg/pdf/bg/return_form_25_11_2019.pdf\\\" target=\\\"_blank\\\">Изтегли бланка за връщане на продукт с ваучер на Спиди.</a></p>\",\"date_created\":\"2020-09-11 22:01:34\",\"date_updated\":\"2020-12-11 11:54:40\"}}]}");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page.content */ "./page.content.json");
var _page_content__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../page.content */ "./page.content.json", 1);


var _jsxFileName = "D:\\programs\\projects\\routing-pages-task-kidso\\kidso-task\\pages\\index.jsx";


function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Kidso task"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Some Home Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUU5QixzQkFDSTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREo7QUFRRCxDOzs7Ozs7Ozs7OztBQ2JELHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgY29udGVudCBmcm9tICcuLi9wYWdlLmNvbnRlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPktpZHNvIHRhc2s8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aDE+U29tZSBIb21lIFBhZ2U8L2gxPlxyXG4gICAgICA8Lz5cclxuICApO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9