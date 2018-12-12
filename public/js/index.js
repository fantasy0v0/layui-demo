/**
  项目JS主入口
  以依赖layui的layer和form模块为例
**/
layui.define(['jquery', 'element', 'layer'], function (exports) {
  var layer = layui.layer;
  var $ = layui.$;
  var element = layui.element;

  const className = 'layui-layout-custom-shrink';
  var layApp = $('#LAY_app');

  function toggleMenu() {
    if (layApp.hasClass(className)) {
      layApp.removeClass(className);
    } else {
      layApp.addClass(className);
    }
  }

  $('#LAY_app_flexible').click(function () {
    toggleMenu();
    layer.msg('Hello World');
  });

  $('.layui-side .layui-nav-item > a').on('click', function () {
    if (layApp.hasClass(className)) {
      toggleMenu();
    }
    return true;
  });

  element.on('nav(layadmin-layout-side-menu)', function(elem){
    console.log(elem); //得到当前点击的DOM对象
  });

  exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});