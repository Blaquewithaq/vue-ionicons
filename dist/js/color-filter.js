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
    name: "color-filter-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"color-filter-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M253.72 202.53a4 4 0 0 0 4.56 0 151.88 151.88 0 0 1 128.44-20.41 4 4 0 0 0 5.15-4C388.8 105.86 329 48 256 48s-132.8 57.86-135.87 130.15a4 4 0 0 0 5.15 4 151.88 151.88 0 0 1 128.44 20.41zM405.31 212.56a152.53 152.53 0 0 1-83.08 108.23 4 4 0 0 0-2.28 3.69c0 1.17.05 2.34.05 3.52a151.58 151.58 0 0 1-47.15 109.94 4 4 0 0 0 .64 6.31A135.24 135.24 0 0 0 344 464c72.07 0 134.1-60.28 136-132.34a136.07 136.07 0 0 0-68.76-121.87 4 4 0 0 0-5.93 2.77z"}}),_c('path',{attrs:{"d":"M390.57 203.67a4 4 0 0 0-2.69-4.4 135.84 135.84 0 0 0-114.4 12.49 4 4 0 0 0-.64 6.29 151.92 151.92 0 0 1 44.47 81.4 4 4 0 0 0 5.94 2.72 136.29 136.29 0 0 0 67.32-98.5zM192 328c0-1.18 0-2.35.05-3.52a4 4 0 0 0-2.28-3.69 152.53 152.53 0 0 1-83.08-108.23 4 4 0 0 0-5.88-2.77 136.07 136.07 0 0 0-68.76 121.87C34 403.72 96 464 168.05 464a135.24 135.24 0 0 0 70.46-19.75 4 4 0 0 0 .64-6.31A151.58 151.58 0 0 1 192 328z"}}),_c('path',{attrs:{"d":"M168 192a135.34 135.34 0 0 0-43.88 7.27 4 4 0 0 0-2.69 4.4 136.29 136.29 0 0 0 67.32 98.5 4 4 0 0 0 5.94-2.72 151.92 151.92 0 0 1 44.47-81.4 4 4 0 0 0-.64-6.29A135.18 135.18 0 0 0 168 192zM256 336a151.44 151.44 0 0 1-42.72-6.12 4 4 0 0 0-5.15 4 135.69 135.69 0 0 0 45.18 95.4 4 4 0 0 0 5.38 0 135.69 135.69 0 0 0 45.18-95.4 4 4 0 0 0-5.15-4A151.44 151.44 0 0 1 256 336zM302.57 308.33a135.94 135.94 0 0 0-43.87-81.58 4.06 4.06 0 0 0-5.4 0 135.94 135.94 0 0 0-43.87 81.58 4 4 0 0 0 2.69 4.4 136.06 136.06 0 0 0 87.76 0 4 4 0 0 0 2.69-4.4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"color-filter-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M253.72 202.53a4 4 0 0 0 4.56 0 151.88 151.88 0 0 1 128.44-20.41 4 4 0 0 0 5.15-4C388.8 105.86 329 48 256 48s-132.8 57.86-135.87 130.15a4 4 0 0 0 5.15 4 151.88 151.88 0 0 1 128.44 20.41zM405.31 212.56a152.53 152.53 0 0 1-83.08 108.23 4 4 0 0 0-2.28 3.69c0 1.17.05 2.34.05 3.52a151.58 151.58 0 0 1-47.15 109.94 4 4 0 0 0 .64 6.31A135.24 135.24 0 0 0 344 464c72.07 0 134.1-60.28 136-132.34a136.07 136.07 0 0 0-68.76-121.87 4 4 0 0 0-5.93 2.77z"}}),_c('path',{attrs:{"d":"M390.57 203.67a4 4 0 0 0-2.69-4.4 135.84 135.84 0 0 0-114.4 12.49 4 4 0 0 0-.64 6.29 151.92 151.92 0 0 1 44.47 81.4 4 4 0 0 0 5.94 2.72 136.29 136.29 0 0 0 67.32-98.5zM192 328c0-1.18 0-2.35.05-3.52a4 4 0 0 0-2.28-3.69 152.53 152.53 0 0 1-83.08-108.23 4 4 0 0 0-5.88-2.77 136.07 136.07 0 0 0-68.76 121.87C34 403.72 96 464 168.05 464a135.24 135.24 0 0 0 70.46-19.75 4 4 0 0 0 .64-6.31A151.58 151.58 0 0 1 192 328z"}}),_c('path',{attrs:{"d":"M168 192a135.34 135.34 0 0 0-43.88 7.27 4 4 0 0 0-2.69 4.4 136.29 136.29 0 0 0 67.32 98.5 4 4 0 0 0 5.94-2.72 151.92 151.92 0 0 1 44.47-81.4 4 4 0 0 0-.64-6.29A135.18 135.18 0 0 0 168 192zM256 336a151.44 151.44 0 0 1-42.72-6.12 4 4 0 0 0-5.15 4 135.69 135.69 0 0 0 45.18 95.4 4 4 0 0 0 5.38 0 135.69 135.69 0 0 0 45.18-95.4 4 4 0 0 0-5.15-4A151.44 151.44 0 0 1 256 336zM302.57 308.33a135.94 135.94 0 0 0-43.87-81.58 4.06 4.06 0 0 0-5.4 0 135.94 135.94 0 0 0-43.87 81.58 4 4 0 0 0 2.69 4.4 136.06 136.06 0 0 0 87.76 0 4 4 0 0 0 2.69-4.4z"}})])])};
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
      component.__file = "color-filter.vue";

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
    

    
    var colorFilter = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return colorFilter;

})));
