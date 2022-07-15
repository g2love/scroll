# scroll

1、引入jQuery

`<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>`

2、引入animate.css

`<link type="text/css" rel="stylesheet" href="css/animate.css"/>`


3、引入scroll.js

`<script type="text/javascript" src="js/scroll.js"></script>`

4、页面使用

`$(document).ready(function () {
    myScrollAnimate('.scroll-div');
})`

给div加上 data-animate属性，值为animate.css中的动画，也可以是你自己写的动画

`<div class="scroll-div" data-animate="fadeInDown"></div>`
