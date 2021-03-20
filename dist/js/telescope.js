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
    name: "telescope-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"telescope-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M107.56 250a16 16 0 0 0-21.85-5.86L36 272.81a39.71 39.71 0 0 0-18.8 24.91 40.9 40.9 0 0 0 4.55 30.35l4.36 7.54a40 40 0 0 0 54.62 14.62l49.67-28.63a16 16 0 0 0 5.87-21.86z"}}),_c('path',{attrs:{"d":"M382.84 440.8L288.72 254a2 2 0 0 1 .79-2.63l8.3-4.79a16 16 0 0 0 5.86-21.86l-47.53-82.33a16 16 0 0 0-21.86-5.87l-86.38 49.8a39.73 39.73 0 0 0-18.65 24.28 34.82 34.82 0 0 0-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28 9.59 16.75 19.24 33.88 26.34 38.15 4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1 0 29.05 13.42l93.68-202.65a7.94 7.94 0 0 1 3.26-3.57l19.21-11.08a2 2 0 0 1 2.78.84l93.21 185a16 16 0 0 0 28.58-14.4zM490.21 115.74L444.09 36a40.08 40.08 0 0 0-54.63-14.62l-93.34 53.78a39.69 39.69 0 0 0-18.65 24.28 32.76 32.76 0 0 0-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89 13.58 23.73 28.91 50.48 36.93 56.27a40.18 40.18 0 0 0 23.18 7.37 39.77 39.77 0 0 0 19.92-5.34L476 171.07a39.72 39.72 0 0 0 18.79-24.84 41 41 0 0 0-4.58-30.49z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"telescope-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M107.56 250a16 16 0 0 0-21.85-5.86L36 272.81a39.71 39.71 0 0 0-18.8 24.91 40.9 40.9 0 0 0 4.55 30.35l4.36 7.54a40 40 0 0 0 54.62 14.62l49.67-28.63a16 16 0 0 0 5.87-21.86z"}}),_c('path',{attrs:{"d":"M382.84 440.8L288.72 254a2 2 0 0 1 .79-2.63l8.3-4.79a16 16 0 0 0 5.86-21.86l-47.53-82.33a16 16 0 0 0-21.86-5.87l-86.38 49.8a39.73 39.73 0 0 0-18.65 24.28 34.82 34.82 0 0 0-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28 9.59 16.75 19.24 33.88 26.34 38.15 4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1 0 29.05 13.42l93.68-202.65a7.94 7.94 0 0 1 3.26-3.57l19.21-11.08a2 2 0 0 1 2.78.84l93.21 185a16 16 0 0 0 28.58-14.4zM490.21 115.74L444.09 36a40.08 40.08 0 0 0-54.63-14.62l-93.34 53.78a39.69 39.69 0 0 0-18.65 24.28 32.76 32.76 0 0 0-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89 13.58 23.73 28.91 50.48 36.93 56.27a40.18 40.18 0 0 0 23.18 7.37 39.77 39.77 0 0 0 19.92-5.34L476 171.07a39.72 39.72 0 0 0 18.79-24.84 41 41 0 0 0-4.58-30.49z"}})])])};
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
      component.__file = "telescope.vue";

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
    

    
    var telescope = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return telescope;

})));
