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
    name: "paw-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"paw-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.46 46.46 0 0 0-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61-10.37 24.9-11.56 51.68-3.18 71.64 5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.53 46.53 0 0 0 17 3.2c27.5 0 55.6-23.15 70-57.65 10.24-24.87 11.37-51.63 2.98-71.6zM381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48-18.07 10.86-36.74 22.08-44.8 44.16a66.93 66.93 0 0 0-4.65 25c0 35.95 28 65.2 62.4 65.2 17.75 0 36.64-6.15 56.63-12.66 19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 0 0-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19zM150 188.85c11.9 14.93 27 23.15 42.52 23.15a42.88 42.88 0 0 0 6.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11 212.12 56.21 197 48 181.49 48a42.88 42.88 0 0 0-6.33.47c-32.37 4.76-52.54 44.26-45.92 90 2.76 19.2 10.16 37.09 20.76 50.38zM313.16 211.53a42.88 42.88 0 0 0 6.33.47c15.53 0 30.62-8.22 42.52-23.15 10.59-13.29 17.95-31.18 20.75-50.4 6.62-45.72-13.55-85.22-45.92-90a42.88 42.88 0 0 0-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44-6.62 45.72 13.55 85.22 45.92 89.98zM111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48 8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 0 0-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0 0 16.97-3.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"paw-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.46 46.46 0 0 0-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61-10.37 24.9-11.56 51.68-3.18 71.64 5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.53 46.53 0 0 0 17 3.2c27.5 0 55.6-23.15 70-57.65 10.24-24.87 11.37-51.63 2.98-71.6zM381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48-18.07 10.86-36.74 22.08-44.8 44.16a66.93 66.93 0 0 0-4.65 25c0 35.95 28 65.2 62.4 65.2 17.75 0 36.64-6.15 56.63-12.66 19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 0 0-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19zM150 188.85c11.9 14.93 27 23.15 42.52 23.15a42.88 42.88 0 0 0 6.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11 212.12 56.21 197 48 181.49 48a42.88 42.88 0 0 0-6.33.47c-32.37 4.76-52.54 44.26-45.92 90 2.76 19.2 10.16 37.09 20.76 50.38zM313.16 211.53a42.88 42.88 0 0 0 6.33.47c15.53 0 30.62-8.22 42.52-23.15 10.59-13.29 17.95-31.18 20.75-50.4 6.62-45.72-13.55-85.22-45.92-90a42.88 42.88 0 0 0-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44-6.62 45.72 13.55 85.22 45.92 89.98zM111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48 8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 0 0-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0 0 16.97-3.2z"}})])])};
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
      component.__file = "paw.vue";

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
    

    
    var paw = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return paw;

})));
