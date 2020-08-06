//(function (doc, win) {
//var docEl = doc.documentElement,
//  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//  recalc = function () {
//    var clientWidth = docEl.clientWidth;
//    if (!clientWidth) return;
////    docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'; /*iphone6 原设置*/
//    docEl.style.fontSize = (clientWidth / 32) + 'px';        /*苏尘设置*/
//  };
//if (!doc.addEventListener) return;
//win.addEventListener(resizeEvt, recalc, false);
//doc.addEventListener('DOMContentLoaded', recalc, false);
//})(document, window);
//
//
//
//var timee = null;
//function dataAlert(tet){
//  clearInterval(timee);
//  $('.datealert').html(tet)
//  $('.datealert').show();
//  timee = setInterval(function(){
//      $('.datealert').hide();
//  },1000)
//}


new function (){
   var _self = this;
   _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/32;return p<0.5?0.5:p;};
   _self.changePage = function(){
       document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()+"px !important");
   }
   _self.changePage();
   window.addEventListener("resize",function(){_self.changePage();},false);
};




