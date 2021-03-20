(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueIonicons = factory());
}(this, (function () { 'use strict';

  var A_ROTATE = 'rotate';
  var A_BEAT = 'beat';
  var A_SHAKE = 'shake';
  var IoniconsMixin = {
    computed: {
      ionClass: function ionClass() {
        var addClass = '';

        if (this.animate === A_ROTATE) {
          addClass = 'ion-rotate ';
        } else if (this.animate === A_BEAT) {
          addClass = 'ion-beat ';
        } else if (this.animate === A_SHAKE) {
          addClass = 'ion-shake ';
        }

        return "".concat(this.rootClass, " ").concat(addClass);
      }
    },
    props: {
      title: {
        type: String,
        "default": ''
      },
      rootClass: {
        type: String,
        "default": ''
      },
      w: {
        type: String,
        "default": '1em'
      },
      h: {
        type: String,
        "default": '1em'
      },
      animate: {
        type: String,
        "default": ''
      }
    }
  };

  //
  var script = {
    name: "logo-no-smoking-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : null;
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-no-smoking-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M360 256h16v48h-16zM112 304h129.6l-48-48H112v48z"}}),_c('path',{attrs:{"d":"M364.5 60.1a8.79 8.79 0 0 1-1-.6 218.79 218.79 0 0 0-34.4-14.8l-5.4-1.8A223.2 223.2 0 0 0 256 32C132.3 32 32 132.3 32 256a223.71 223.71 0 0 0 115.4 195.8c.4.2.7.5 1.1.7a218.79 218.79 0 0 0 34.4 14.8l5.4 1.8A222.7 222.7 0 0 0 256 480c123.7 0 224-100.3 224-224A223.76 223.76 0 0 0 364.5 60.1zM256 426.4a161.85 161.85 0 0 1-27.2-2.4 170.14 170.14 0 0 1-28.5-7.3c-1.9-.6-3.8-1.2-5.6-1.9a162.39 162.39 0 0 1-19-8.6 170.33 170.33 0 0 1-90.1-150.3c0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6a162.79 162.79 0 0 1 27.2 2.4 170.14 170.14 0 0 1 28.5 7.3c1.8.6 3.7 1.2 5.6 1.9a162 162 0 0 1 18 8.1 170.25 170.25 0 0 1 91.2 150.8c-.1 37.2-12.5 71.3-32.7 99.3z"}}),_c('path',{attrs:{"d":"M352 256h-34l34 34v-34zM384 256h16v48h-16zM360.1 212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9a8 8 0 0 0 .4-8.2 8.26 8.26 0 0 0-7-4.3 53.67 53.67 0 0 1-18.3-3.9c-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38a66.58 66.58 0 0 0 12 3.6c-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2z"}}),_c('path',{attrs:{"d":"M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3a8 8 0 0 0 .1 7.9 8.06 8.06 0 0 0 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 13.5 6.9 41.4h16z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-no-smoking-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M360 256h16v48h-16zM112 304h129.6l-48-48H112v48z"}}),_c('path',{attrs:{"d":"M364.5 60.1a8.79 8.79 0 0 1-1-.6 218.79 218.79 0 0 0-34.4-14.8l-5.4-1.8A223.2 223.2 0 0 0 256 32C132.3 32 32 132.3 32 256a223.71 223.71 0 0 0 115.4 195.8c.4.2.7.5 1.1.7a218.79 218.79 0 0 0 34.4 14.8l5.4 1.8A222.7 222.7 0 0 0 256 480c123.7 0 224-100.3 224-224A223.76 223.76 0 0 0 364.5 60.1zM256 426.4a161.85 161.85 0 0 1-27.2-2.4 170.14 170.14 0 0 1-28.5-7.3c-1.9-.6-3.8-1.2-5.6-1.9a162.39 162.39 0 0 1-19-8.6 170.33 170.33 0 0 1-90.1-150.3c0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6a162.79 162.79 0 0 1 27.2 2.4 170.14 170.14 0 0 1 28.5 7.3c1.8.6 3.7 1.2 5.6 1.9a162 162 0 0 1 18 8.1 170.25 170.25 0 0 1 91.2 150.8c-.1 37.2-12.5 71.3-32.7 99.3z"}}),_c('path',{attrs:{"d":"M352 256h-34l34 34v-34zM384 256h16v48h-16zM360.1 212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9a8 8 0 0 0 .4-8.2 8.26 8.26 0 0 0-7-4.3 53.67 53.67 0 0 1-18.3-3.9c-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38a66.58 66.58 0 0 0 12 3.6c-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2z"}}),_c('path',{attrs:{"d":"M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3a8 8 0 0 0 .1 7.9 8.06 8.06 0 0 0 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 13.5 6.9 41.4h16z"}})])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "logo-no-smoking.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var logoNoSmoking = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoNoSmoking;

})));
