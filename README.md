# scroll
1、引入jQuery
<script src="js/jquery-1.8.3.min.js"></script>
2、引入animate.css
<link rel="stylesheet" href="css/animate.css"/>
3、引入scroll.js
<script src="js/scroll.js"></script>
4、页面使用
$(document).ready(function () {
    myScrollAnimate('.scroll-div');
})
# 需要给你所使用的div加上 data-animate属性，值为animate.css中的动画，也可以是你自己写的动画
# <div class="scroll-div" data-animate="fadeInDown"></div>
