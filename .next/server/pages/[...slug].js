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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[...slug].jsx");
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

/***/ "./pages/[...slug].jsx":
/*!*****************************!*\
  !*** ./pages/[...slug].jsx ***!
  \*****************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_content_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page.content.json */ "./page.content.json");
var _page_content_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../page.content.json */ "./page.content.json", 1);


var _jsxFileName = "D:\\programs\\projects\\routing-pages-task-kidso\\kidso-task\\pages\\[...slug].jsx";


function Page({
  page
}) {
  if (!page) {
    return null;
  }

  const pageValue = Object.values(page)[0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: pageValue.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "og:title",
        content: pageValue.meta.meta_title
      }, "title", false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: pageValue.meta.meta_description
      }, "description", false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: pageValue.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: pageValue.content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
async function getStaticPaths() {
  const paths = _page_content_json__WEBPACK_IMPORTED_MODULE_2__.page.map(p => {
    const slug = Object.values(p)[0].url.split('/').slice(1);
    return {
      params: {
        slug
      }
    };
  });
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = _page_content_json__WEBPACK_IMPORTED_MODULE_2__.page.find(page => Object.values(page)[0].url === currentPath) || {
    notfound: true
  };
  return {
    props: {
      page
    }
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvWy4uLnNsdWddLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQYWdlIiwicGFnZSIsInBhZ2VWYWx1ZSIsIk9iamVjdCIsInZhbHVlcyIsInRpdGxlIiwibWV0YSIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwiX19odG1sIiwiY29udGVudCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJtYXAiLCJwIiwic2x1ZyIsInVybCIsInNwbGl0Iiwic2xpY2UiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY3VycmVudFBhdGgiLCJqb2luIiwiZmluZCIsIm5vdGZvdW5kIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFDQztBQUFELENBQWQsRUFBc0I7QUFDbkMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxXQUFPLElBQVA7QUFDRDs7QUFDRCxRQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxJQUFkLEVBQW9CLENBQXBCLENBQWxCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFDLFNBQVMsQ0FBQ0c7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUVILFNBQVMsQ0FBQ0ksSUFBVixDQUFlQztBQUE5QyxTQUE4RCxPQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUwsU0FBUyxDQUFDSSxJQUFWLENBQWVFO0FBQWpELFNBQXVFLGFBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUEsZ0JBQUtOLFNBQVMsQ0FBQ0c7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFLLDZCQUF1QixFQUFFO0FBQUNJLGNBQU0sRUFBRVAsU0FBUyxDQUFDUTtBQUFuQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQSxrQkFESjtBQVdEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxLQUFLLEdBQUdGLCtDQUFPLENBQUNULElBQVIsQ0FBYVksR0FBYixDQUFpQkMsQ0FBQyxJQUFJO0FBQ2xDLFVBQU1DLElBQUksR0FBR1osTUFBTSxDQUFDQyxNQUFQLENBQWNVLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JFLEdBQXBCLENBQXdCQyxLQUF4QixDQUE4QixHQUE5QixFQUFtQ0MsS0FBbkMsQ0FBeUMsQ0FBekMsQ0FBYjtBQUNBLFdBQU87QUFBQ0MsWUFBTSxFQUFFO0FBQUNKO0FBQUQ7QUFBVCxLQUFQO0FBQ0QsR0FIYSxDQUFkO0FBSUEsU0FBTztBQUFDSCxTQUFEO0FBQVFRLFlBQVEsRUFBRTtBQUFsQixHQUFQO0FBQ0Q7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUNGO0FBQUQsQ0FBOUIsRUFBd0M7QUFDN0MsUUFBTUcsV0FBVyxHQUFJLElBQUdILE1BQU0sQ0FBQ0osSUFBUCxDQUFZUSxJQUFaLENBQWlCLEdBQWpCLENBQXNCLEVBQTlDO0FBQ0EsUUFBTXRCLElBQUksR0FBR1MsK0NBQU8sQ0FBQ1QsSUFBUixDQUFhdUIsSUFBYixDQUFrQnZCLElBQUksSUFBSUUsTUFBTSxDQUFDQyxNQUFQLENBQWNILElBQWQsRUFBb0IsQ0FBcEIsRUFBdUJlLEdBQXZCLEtBQStCTSxXQUF6RCxLQUF5RTtBQUFDRyxZQUFRLEVBQUU7QUFBWCxHQUF0RjtBQUNBLFNBQU87QUFBQ0MsU0FBSyxFQUFFO0FBQUN6QjtBQUFEO0FBQVIsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDakNELHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1suLi5zbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvWy4uLnNsdWddLmpzeFwiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL3BhZ2UuY29udGVudC5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe3BhZ2V9KSB7XHJcbiAgaWYgKCFwYWdlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3QgcGFnZVZhbHVlID0gT2JqZWN0LnZhbHVlcyhwYWdlKVswXVxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+e3BhZ2VWYWx1ZS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVZhbHVlLm1ldGEubWV0YV90aXRsZX0ga2V5PVwidGl0bGVcIi8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlVmFsdWUubWV0YS5tZXRhX2Rlc2NyaXB0aW9ufSBrZXk9XCJkZXNjcmlwdGlvblwiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgxPntwYWdlVmFsdWUudGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwYWdlVmFsdWUuY29udGVudH19PjwvZGl2PlxyXG4gICAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBjb250ZW50LnBhZ2UubWFwKHAgPT4ge1xyXG4gICAgY29uc3Qgc2x1ZyA9IE9iamVjdC52YWx1ZXMocClbMF0udXJsLnNwbGl0KCcvJykuc2xpY2UoMSk7XHJcbiAgICByZXR1cm4ge3BhcmFtczoge3NsdWd9fTtcclxuICB9KTtcclxuICByZXR1cm4ge3BhdGhzLCBmYWxsYmFjazogZmFsc2V9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICBjb25zdCBjdXJyZW50UGF0aCA9IGAvJHtwYXJhbXMuc2x1Zy5qb2luKCcvJyl9YDtcclxuICBjb25zdCBwYWdlID0gY29udGVudC5wYWdlLmZpbmQocGFnZSA9PiBPYmplY3QudmFsdWVzKHBhZ2UpWzBdLnVybCA9PT0gY3VycmVudFBhdGgpIHx8IHtub3Rmb3VuZDogdHJ1ZX07XHJcbiAgcmV0dXJuIHtwcm9wczoge3BhZ2V9fTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==