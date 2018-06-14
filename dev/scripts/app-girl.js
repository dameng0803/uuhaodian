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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<main>    <nav class=\"nav1\">        <ul>            <li class=\"active\"><i>精选</i></li>            <li><i>女装</i></li>            <li><i>男装</i></li>            <li><i>鞋品</i></li>            <li><i>箱包</i></li>            <li><i>男婴</i></li>            <li><i>美妆</i></li>            <li><i>内衣</i></li>        </ul>    </nav>    <div class=\"banner\">        <img src=\"https://img.alicdn.com/imgextra/i2/2508158775/TB2rskJubSYBuNjSspiXXXNzpXa_!!2508158775.jpg\" alt=\"\">    </div>    <div class=\"nav2\">        <ul>            <li>                <i>                    <span class=\"icon\">&#xe63b;</span>                </i>                <b>疯抢榜</b>            </li>            <li>                <i>                    <span class=\"icon\">&#xe654;</span>                </i>                <b>9.9包邮</b>            </li>            <li>                <i>                    <span class=\"icon\">&#xe604;</span>                </i>                <b>咚咚抢</b>            </li>            <li>                <i>                    <span class=\"icon\">&#xe612;</span>                </i>                <b>小编力荐</b>            </li>        </ul>    </div>    <div class=\"nav3\">        <img src=\"https://img.alicdn.com/imgextra/i1/2053469401/TB2.t33uuySBuNjy1zdXXXPxFXa-2053469401.png\" alt=\"\">    </div>    <div class=\"shop-wrap\">        <div class=\"title-wrap\">            <i>咚咚抢</i>            <span>21:00 正在抢购</span>        </div>        <div class=\"shop-list\">            <ul>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i1/13464087/TB2YJR2dOOYBuNjSsD4XXbSkFXa_!!13464087.jpg_240x240.jpg\" alt=\"\">                    <span>[法颂]男士自然..</span>                    <span>￥38 券后</span>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i1/13464087/TB2YJR2dOOYBuNjSsD4XXbSkFXa_!!13464087.jpg_240x240.jpg\" alt=\"\">                    <span>[法颂]男士自然..</span>                    <span>￥38 券后</span>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i1/13464087/TB2YJR2dOOYBuNjSsD4XXbSkFXa_!!13464087.jpg_240x240.jpg\" alt=\"\">                    <span>[法颂]男士自然..</span>                    <span>￥38 券后</span>                </li>            </ul>        </div>    </div>    <div class=\"nav4\">        <div class=\"nav-title\">            <span>领券优惠直播 </span>            <i>62829</i>        </div>        <div class=\"good-list\" id=\"scrollarea\">            <ul id=\"postlist\">                <li>                    <img src=\"https://img.alicdn.com/imgextra/i3/2218777066/TB2TXd4uA9WBuNjSspeXXaz5VXa_!!2218777066.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">老城南 麻辣素菜火锅麻辣素菜火锅</i>                    <b><span>￥18.8</span><i>销量 11418</i></b>                </li>                <!-- <li>                    <img src=\"https://img.alicdn.com/imgextra/i2/1699459360/TB25p_3rN9YBuNjy0FfXXXIsVXa_!!1699459360.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">三只松鼠 三只松鼠零食</i>                    <b><span>￥29.8</span><i>销量 11418</i></b>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i3/2218777066/TB2TXd4uA9WBuNjSspeXXaz5VXa_!!2218777066.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">老城南 麻辣素菜火锅</i>                    <b><span>￥18.8</span><i>销量 11418</i></b>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i2/1699459360/TB25p_3rN9YBuNjy0FfXXXIsVXa_!!1699459360.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">三只松鼠 三只松鼠零食</i>                    <b><span>￥29.8</span><i>销量 11418</i></b>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i3/2218777066/TB2TXd4uA9WBuNjSspeXXaz5VXa_!!2218777066.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">老城南 麻辣素菜火锅</i>                    <b><span>￥18.8</span><i>销量 11418</i></b>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i2/1699459360/TB25p_3rN9YBuNjy0FfXXXIsVXa_!!1699459360.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">三只松鼠 三只松鼠零食</i>                    <b><span>￥29.8</span><i>销量 11418</i></b>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i3/2218777066/TB2TXd4uA9WBuNjSspeXXaz5VXa_!!2218777066.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">老城南 麻辣素菜火锅</i>                    <b><span>￥18.8</span><i>销量 11418</i></b>                </li>                <li>                    <img src=\"https://img.alicdn.com/imgextra/i2/1699459360/TB25p_3rN9YBuNjy0FfXXXIsVXa_!!1699459360.jpg_310x310.jpg\" alt=\"\">                    <i class=\"i1\">三只松鼠 三只松鼠零食</i>                    <b><span>￥29.8</span><i>销量 11418</i></b>                </li> -->            </ul>            <div class=\"foot\">                <img src=\"/images/arrow.png\"/>                <span>上拉加载更多...</span>            </div>        </div>    </div></main>"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

//用于从接口获得后端数据

const model = {
    find:(cb)=>{
        fetch('/uuhaodian/index.php?r=class/index&type=2')
        .then(response => response.json())
        .then(result =>{
            cb(result)
            //console.log(result)
        })
    }
}

module.exports  = model

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<header>    <a href=\"##\" class=\"main-title\">优优好店</a>        <div class=\"search\">            <form action=\"\">                <span class=\"icon\">&#xe627;</span>                <input type=\"text\" placeholder=\"换季护肤\">            </form>        </div>        <div class=\"sort\">            <span class=\"icon\">&#xe682;</span>        </div></header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const indexController = {
    navAction() {
        const pagelist = ['index.html', 'girl.html']
        $('.nav1 ul li').on('click', function() {
                location.hash = pagelist[$(this).index()]
                $(this).addClass('active').siblings().removeClass('active')
                    // console.log(1);
                    // location.href = pagelist[$(this).index()]
            })
            //console.log(location.pathname.substr(1))
            // let pathname = location.pathname.substr(1);
            // console.log(pathname)
            // let curIndex = pagelist.indexOf(pathname)
            // console.log(curIndex)
            // curIndex = curIndex > 0 ? curIndex : 0

        // $('.nav1 ul li').eq(curIndex).addClass('active').siblings().removeClass('active')
    }
}

module.exports = indexController

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<main>    <nav class=\"nav1\">        <ul>            <li class=\"active\"><i>精选</i></li>            <li><i>女装</i></li>            <li><i>男装</i></li>            <li><i>鞋品</i></li>            <li><i>箱包</i></li>            <li><i>男婴</i></li>            <li><i>美妆</i></li>            <li><i>内衣</i></li>        </ul>    </nav>    <div class=\"classify-item\">        <ul id=\"classify-good\">            <!-- <li>                <img src=\"https://img.alicdn.com/imgextra/i2/2053469401/TB2A7ERuL9TBuNjy1zbXXXpepXa-2053469401.png_310x310.jpg\" alt=\"\">                <b>连衣裙</b>            </li> -->        </ul>    </div>    <nav class=\"classify-nav\">        <ul>            <li class=\"active\">人气</li>            <li>最新</li>            <li>销量</li>            <li>价格</li>        </ul>    </nav>    <div class=\"girl-list\">        <ul id=\"girllist\">            <li>                <img src=\"https://img.alicdn.com/imgextra/i3/2218777066/TB2TXd4uA9WBuNjSspeXXaz5VXa_!!2218777066.jpg_310x310.jpg\" alt=\"\">                <i class=\"i1\">老城南 麻辣素菜火锅麻辣素菜火锅</i>                <b><span>￥18.8</span><i>销量 11418</i></b>            </li>        </ul>    </div></main>"

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const model = __webpack_require__(1)

const girllistTpl = __webpack_require__(7)

const girllistTpl2 = __webpack_require__(8)

const girlController = {
    async render() {
        let result = await model.find()
        let data = result.data[0];
        let girl1 = template.render(girllistTpl, data);
        let girl2 = template.render(girllistTpl2, data);
        return girl1, girl2;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (girlController);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "{{each sub_class}}<li>    <img src=\"{{$value.icon}}\" alt=\"\">    <b>{{$value.name}}</b></li>{{/each}}"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "{{each sub_class}}<li>    <img src=\"{{$value.icon}}\" alt=\"\">    <i class=\"i1\">{{$value.name}}</i>    <b><span>￥88.8</span><i>销量 11418</i></b></li>{{/each}}"

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_girl__ = __webpack_require__(6);
const indexTpl = __webpack_require__(2)
const headerTpl = __webpack_require__(3)
const homeTpl = __webpack_require__(0)
const girlTpl = __webpack_require__(5)



const indexController = __webpack_require__(4)

$('#root').html(indexTpl)
$('.container').html(headerTpl + girlTpl)

// girlController.render((html)=>{
//     $('#root main').html(html)
// })

// girlController.getgirlList((html, html2) => {
//     //console.log(html);
//     document.querySelector('#classify-good').innerHTML = html;
//     document.querySelector('#girllist').innerHTML = html2;

// })





// $('#root main').html(girlController.render())

indexController.navAction()
    // document.getElementById('root').innerHTML = indexTpl;
    // document.querySelector('.container').innerHTML = headerTpl+homeTpl;

/***/ })
/******/ ]);