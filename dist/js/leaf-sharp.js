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
    name: "leaf-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"leaf-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M150.38 253.68l21.94-23.3 11.65 11c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15 32 63.33c-.1 2.56-2.42 63.57 14.22 147.77 17.58 89 50.24 155.85 97.07 198.63 38 34.69 87.62 53.9 136.93 53.9a185.88 185.88 0 0 0 27.78-2.07c41.72-6.32 76.43-27.27 96-57.75-89.5-23.28-165.95-67.55-242-139.16z"}}),_c('path',{attrs:{"d":"M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.49 158.49 0 0 1-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583.43 583.43 0 0 0 58.55 12l15.82 2.44 4.86-31.63z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"leaf-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M150.38 253.68l21.94-23.3 11.65 11c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15 32 63.33c-.1 2.56-2.42 63.57 14.22 147.77 17.58 89 50.24 155.85 97.07 198.63 38 34.69 87.62 53.9 136.93 53.9a185.88 185.88 0 0 0 27.78-2.07c41.72-6.32 76.43-27.27 96-57.75-89.5-23.28-165.95-67.55-242-139.16z"}}),_c('path',{attrs:{"d":"M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.49 158.49 0 0 1-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583.43 583.43 0 0 0 58.55 12l15.82 2.44 4.86-31.63z"}})])])};
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
      component.__file = "leaf-sharp.vue";

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
    

    
    var leafSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return leafSharp;

})));
