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
    name: "at-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"at-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M407.6 115.78c-32.07-35-79.47-53.51-137.09-53.51-51 0-100.69 19.8-139.82 55.76s-63.13 83.84-67.63 134.83c-4.55 51.67 11.41 100.29 44.94 136.9 33.37 36.44 80.07 56.51 131.49 56.51 32.52 0 53.61-2.36 85.48-15.75l14.75-6.2-12.4-29.5-14.75 6.18c-27.15 11.4-43.78 13.25-73.08 13.25-42.34 0-80.65-16.38-107.89-46.12-27.4-29.92-40.42-69.86-36.66-112.48 7.84-89 86.6-161.4 175.57-161.4 48.4 0 87.65 14.91 113.49 43.13 24.61 26.87 35.6 63.92 31.79 107.15-3.29 37.35-17.76 55.74-29.32 64.6-11 8.44-22 10.18-28 9.11-17.68-3.13-26.87-20.46-24.59-46.29l9.93-109.12L311.9 160l-2 22.29a79.69 79.69 0 0 0-57.32-24c-23.8 0-46.54 10.07-64 28.37-16.77 17.53-27.23 41.05-29.45 66.22-2.45 27.87 5.75 54.34 22.51 72.64a76.14 76.14 0 0 0 56.88 24.77A93 93 0 0 0 310 318a60 60 0 0 0 42.88 31.81c16.89 3 36.73-2.69 53.08-15.21 30.19-23.13 39.36-60.19 41.74-87.2 4.52-51.7-9.7-98.4-40.1-131.62zm-126.34 186a62.19 62.19 0 0 1-42.81 16.53 43.94 43.94 0 0 1-33.28-14.38c-10.71-11.7-15.9-29.27-14.23-48.22 3.23-36.68 30.29-65.4 61.61-65.4a48.16 48.16 0 0 1 35.88 15.82c10.87 11.87 16.2 28.87 14.63 46.73-1.78 20.28-9.33 37.14-21.8 48.88z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"at-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M407.6 115.78c-32.07-35-79.47-53.51-137.09-53.51-51 0-100.69 19.8-139.82 55.76s-63.13 83.84-67.63 134.83c-4.55 51.67 11.41 100.29 44.94 136.9 33.37 36.44 80.07 56.51 131.49 56.51 32.52 0 53.61-2.36 85.48-15.75l14.75-6.2-12.4-29.5-14.75 6.18c-27.15 11.4-43.78 13.25-73.08 13.25-42.34 0-80.65-16.38-107.89-46.12-27.4-29.92-40.42-69.86-36.66-112.48 7.84-89 86.6-161.4 175.57-161.4 48.4 0 87.65 14.91 113.49 43.13 24.61 26.87 35.6 63.92 31.79 107.15-3.29 37.35-17.76 55.74-29.32 64.6-11 8.44-22 10.18-28 9.11-17.68-3.13-26.87-20.46-24.59-46.29l9.93-109.12L311.9 160l-2 22.29a79.69 79.69 0 0 0-57.32-24c-23.8 0-46.54 10.07-64 28.37-16.77 17.53-27.23 41.05-29.45 66.22-2.45 27.87 5.75 54.34 22.51 72.64a76.14 76.14 0 0 0 56.88 24.77A93 93 0 0 0 310 318a60 60 0 0 0 42.88 31.81c16.89 3 36.73-2.69 53.08-15.21 30.19-23.13 39.36-60.19 41.74-87.2 4.52-51.7-9.7-98.4-40.1-131.62zm-126.34 186a62.19 62.19 0 0 1-42.81 16.53 43.94 43.94 0 0 1-33.28-14.38c-10.71-11.7-15.9-29.27-14.23-48.22 3.23-36.68 30.29-65.4 61.61-65.4a48.16 48.16 0 0 1 35.88 15.82c10.87 11.87 16.2 28.87 14.63 46.73-1.78 20.28-9.33 37.14-21.8 48.88z"}})])])};
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
      component.__file = "at-sharp.vue";

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
    

    
    var atSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return atSharp;

})));
