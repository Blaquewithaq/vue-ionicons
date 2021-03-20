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
    name: "aperture-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"aperture-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M250.54 129.17l-67.8-67.8A209.65 209.65 0 0 0 86.32 136h161.4a4 4 0 0 0 2.82-6.83zM167.72 168H67.63a207.34 207.34 0 0 0-16.15 125.9l119.06-119.07a4 4 0 0 0-2.82-6.83zM344 167.72V67.56a207.82 207.82 0 0 0-125.89-16.08l119.06 119.06a4 4 0 0 0 6.83-2.82zM460.52 218.1L341.46 337.17a4 4 0 0 0 2.82 6.83h100.09a207.34 207.34 0 0 0 16.15-125.9zM382.83 250.54l67.83-67.82A209.08 209.08 0 0 0 376 86.2v161.52a4 4 0 0 0 6.83 2.82zM221.68 341.77a8 8 0 0 0 5.54 2.23h59.66a8 8 0 0 0 5.7-2.39l49.18-50a8 8 0 0 0 2.3-5.62l-.06-60.81a8 8 0 0 0-2.38-5.69l-50-49.25a8 8 0 0 0-5.63-2.3l-60.84.06a8 8 0 0 0-5.69 2.38l-49.25 50a8 8 0 0 0-2.3 5.63l.06 60.78a8 8 0 0 0 2.45 5.76zM261.46 382.83l67.8 67.8A209.65 209.65 0 0 0 425.68 376h-161.4a4 4 0 0 0-2.82 6.83zM168 344.28v100.16a207.82 207.82 0 0 0 125.89 16.08L174.83 341.46a4 4 0 0 0-6.83 2.82zM129.17 261.46l-67.83 67.83A209.1 209.1 0 0 0 136 425.8V264.28a4 4 0 0 0-6.83-2.82z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"aperture-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M250.54 129.17l-67.8-67.8A209.65 209.65 0 0 0 86.32 136h161.4a4 4 0 0 0 2.82-6.83zM167.72 168H67.63a207.34 207.34 0 0 0-16.15 125.9l119.06-119.07a4 4 0 0 0-2.82-6.83zM344 167.72V67.56a207.82 207.82 0 0 0-125.89-16.08l119.06 119.06a4 4 0 0 0 6.83-2.82zM460.52 218.1L341.46 337.17a4 4 0 0 0 2.82 6.83h100.09a207.34 207.34 0 0 0 16.15-125.9zM382.83 250.54l67.83-67.82A209.08 209.08 0 0 0 376 86.2v161.52a4 4 0 0 0 6.83 2.82zM221.68 341.77a8 8 0 0 0 5.54 2.23h59.66a8 8 0 0 0 5.7-2.39l49.18-50a8 8 0 0 0 2.3-5.62l-.06-60.81a8 8 0 0 0-2.38-5.69l-50-49.25a8 8 0 0 0-5.63-2.3l-60.84.06a8 8 0 0 0-5.69 2.38l-49.25 50a8 8 0 0 0-2.3 5.63l.06 60.78a8 8 0 0 0 2.45 5.76zM261.46 382.83l67.8 67.8A209.65 209.65 0 0 0 425.68 376h-161.4a4 4 0 0 0-2.82 6.83zM168 344.28v100.16a207.82 207.82 0 0 0 125.89 16.08L174.83 341.46a4 4 0 0 0-6.83 2.82zM129.17 261.46l-67.83 67.83A209.1 209.1 0 0 0 136 425.8V264.28a4 4 0 0 0-6.83-2.82z"}})])])};
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
      component.__file = "aperture.vue";

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
    

    
    var aperture = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return aperture;

})));
