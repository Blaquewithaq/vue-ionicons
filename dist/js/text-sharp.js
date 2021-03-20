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
    name: "text-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"text-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M404.42 170c-41.23 0-78.07 24.06-93.85 61.3L304 246.52l40.33 17.18 6.56-15.22c8.9-21 29.91-34.55 53.53-34.55 34.55 0 57.76 23.27 57.76 57.91v2.3c-22.12.59-48.65 2.05-72.27 4.84-54.52 6.43-87.06 36.23-87.06 79.72 0 23.16 8.72 44 24.56 58.59C342.28 431 362.55 438 384.51 438c30.86 0 57.5-7.33 77.67-22.64V438H506V271.84C506 212.83 463.28 170 404.42 170zm-19.91 225.07c-17.46 0-37.85-9.84-37.85-36.37 0-10.65 3.82-18.11 12.38-24.19 8.34-5.92 21.12-10.15 36-11.9 21.78-2.57 46.31-3.95 67-4.52-2.16 51.49-27.57 76.98-77.53 76.98zM93.25 325.87h125.5L260.94 438H308L155 48 4 438h47.06zM156 160.71L202.25 282h-92.5z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"text-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M404.42 170c-41.23 0-78.07 24.06-93.85 61.3L304 246.52l40.33 17.18 6.56-15.22c8.9-21 29.91-34.55 53.53-34.55 34.55 0 57.76 23.27 57.76 57.91v2.3c-22.12.59-48.65 2.05-72.27 4.84-54.52 6.43-87.06 36.23-87.06 79.72 0 23.16 8.72 44 24.56 58.59C342.28 431 362.55 438 384.51 438c30.86 0 57.5-7.33 77.67-22.64V438H506V271.84C506 212.83 463.28 170 404.42 170zm-19.91 225.07c-17.46 0-37.85-9.84-37.85-36.37 0-10.65 3.82-18.11 12.38-24.19 8.34-5.92 21.12-10.15 36-11.9 21.78-2.57 46.31-3.95 67-4.52-2.16 51.49-27.57 76.98-77.53 76.98zM93.25 325.87h125.5L260.94 438H308L155 48 4 438h47.06zM156 160.71L202.25 282h-92.5z"}})])])};
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
      component.__file = "text-sharp.vue";

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
    

    
    var textSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return textSharp;

})));
