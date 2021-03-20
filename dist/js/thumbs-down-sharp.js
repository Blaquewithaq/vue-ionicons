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
    name: "thumbs-down-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"thumbs-down-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M56 320l156.05 12-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 0 0 4.4-1.72l129-202.34a8 8 0 0 1 6.81-3.81H496V64H378.39a48 48 0 0 1-15.18-2.46l-76.3-25.43a80 80 0 0 0-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40z"}}),_c('path',{attrs:{"d":"M378.45 273.93A15.84 15.84 0 0 1 386 272a15.93 15.93 0 0 0-7.51 1.91zM337.86 343.22l-.13.22a2.53 2.53 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62z","data-fill":"none"}}),_c('path',{attrs:{"d":"M372.66 279.16l-1 2a16.29 16.29 0 0 1 6.77-7.26 16.48 16.48 0 0 0-5.77 5.26z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"thumbs-down-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M56 320l156.05 12-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 0 0 4.4-1.72l129-202.34a8 8 0 0 1 6.81-3.81H496V64H378.39a48 48 0 0 1-15.18-2.46l-76.3-25.43a80 80 0 0 0-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40z"}}),_c('path',{attrs:{"d":"M378.45 273.93A15.84 15.84 0 0 1 386 272a15.93 15.93 0 0 0-7.51 1.91zM337.86 343.22l-.13.22a2.53 2.53 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62z","data-fill":"none"}}),_c('path',{attrs:{"d":"M372.66 279.16l-1 2a16.29 16.29 0 0 1 6.77-7.26 16.48 16.48 0 0 0-5.77 5.26z"}})])])};
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
      component.__file = "thumbs-down-sharp.vue";

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
    

    
    var thumbsDownSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return thumbsDownSharp;

})));
