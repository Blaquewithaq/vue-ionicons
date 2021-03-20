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
    name: "flower-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"flower-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('circle',{attrs:{"cx":"256","cy":"256","r":"48"}}),_c('path',{attrs:{"d":"M475.93 303.91a67.49 67.49 0 0 0-44.34-115.53 5.2 5.2 0 0 1-4.58-3.21 5.21 5.21 0 0 1 1-5.51A67.83 67.83 0 0 0 378 66.33h-.25A67.13 67.13 0 0 0 332.35 84a5.21 5.21 0 0 1-5.52 1 5.23 5.23 0 0 1-3.22-4.58 67.68 67.68 0 0 0-135.23 0 5.2 5.2 0 0 1-3.21 4.58 5.21 5.21 0 0 1-5.52-1 67.11 67.11 0 0 0-45.44-17.69H134a67.91 67.91 0 0 0-50 113.34 5.21 5.21 0 0 1 1 5.51 5.2 5.2 0 0 1-4.58 3.21 67.71 67.71 0 0 0 0 135.23 5.23 5.23 0 0 1 4.58 3.23 5.22 5.22 0 0 1-1 5.52 67.54 67.54 0 0 0 50.08 113h.25A67.38 67.38 0 0 0 179.65 428a5.21 5.21 0 0 1 5.51-1 5.2 5.2 0 0 1 3.21 4.58 67.71 67.71 0 0 0 135.23 0 5.23 5.23 0 0 1 3.22-4.58 5.21 5.21 0 0 1 5.51 1 67.38 67.38 0 0 0 45.29 17.42h.25a67.48 67.48 0 0 0 50.08-113 5.22 5.22 0 0 1-1-5.52 5.23 5.23 0 0 1 4.58-3.22 67.31 67.31 0 0 0 44.4-19.77zM256 336a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"flower-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('circle',{attrs:{"cx":"256","cy":"256","r":"48"}}),_c('path',{attrs:{"d":"M475.93 303.91a67.49 67.49 0 0 0-44.34-115.53 5.2 5.2 0 0 1-4.58-3.21 5.21 5.21 0 0 1 1-5.51A67.83 67.83 0 0 0 378 66.33h-.25A67.13 67.13 0 0 0 332.35 84a5.21 5.21 0 0 1-5.52 1 5.23 5.23 0 0 1-3.22-4.58 67.68 67.68 0 0 0-135.23 0 5.2 5.2 0 0 1-3.21 4.58 5.21 5.21 0 0 1-5.52-1 67.11 67.11 0 0 0-45.44-17.69H134a67.91 67.91 0 0 0-50 113.34 5.21 5.21 0 0 1 1 5.51 5.2 5.2 0 0 1-4.58 3.21 67.71 67.71 0 0 0 0 135.23 5.23 5.23 0 0 1 4.58 3.23 5.22 5.22 0 0 1-1 5.52 67.54 67.54 0 0 0 50.08 113h.25A67.38 67.38 0 0 0 179.65 428a5.21 5.21 0 0 1 5.51-1 5.2 5.2 0 0 1 3.21 4.58 67.71 67.71 0 0 0 135.23 0 5.23 5.23 0 0 1 3.22-4.58 5.21 5.21 0 0 1 5.51 1 67.38 67.38 0 0 0 45.29 17.42h.25a67.48 67.48 0 0 0 50.08-113 5.22 5.22 0 0 1-1-5.52 5.23 5.23 0 0 1 4.58-3.22 67.31 67.31 0 0 0 44.4-19.77zM256 336a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80z"}})])])};
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
      component.__file = "flower.vue";

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
    

    
    var flower = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return flower;

})));
