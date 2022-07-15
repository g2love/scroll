/**
 * Created by g2love on 2022/7/13.
 */
$(document).ready(function () {
    function myScrollAnimate(DIV,ANIMATE){
        if(!ANIMATE){
            ANIMATE="fadeInUp";
        }
		function addAnimateScroll(){
			var xRollTop = $(window).scrollTop();//当前滚动条距顶部的高度
            var ViewportHeight=window.visualViewport.height;//可视化窗口的高度
            $(DIV).each(function(index,element){
                var _ani= $(element).attr('data-animate');//获取当前盒子的动画
                if(_ani){
                    ANIMATE=_ani;
                }
                var thisBoxPos=$(element).offset().top;//距离顶部的距离
                var _thisBoxHeight=$(element).outerHeight();//盒子的高度
                var _BoxInScreenPos=thisBoxPos-ViewportHeight;  //盒子出现在窗口时顶部距离页面顶部的height
                var _BoxOutScreenPos=thisBoxPos+_thisBoxHeight;
                if(xRollTop>_BoxInScreenPos&&xRollTop<_BoxOutScreenPos&&!(/animated/.test($(element).attr('class')))){
                    //盒子出现在窗口
                    $(element).addClass('animated').addClass(ANIMATE);
                }else if(xRollTop>_BoxOutScreenPos||xRollTop<_BoxInScreenPos){
                    //盒子消失在窗口
                    $(element).removeClass('animated').removeClass(ANIMATE);
                }
            })
		}
        $(window).scroll(function () {
            addAnimateScroll()
        })
		$(window).load(function(){
			addAnimateScroll()
		})
    }
    myScrollAnimate('.scroll-div');
});