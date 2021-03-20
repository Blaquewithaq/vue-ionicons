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
    name: "radio-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"radio-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('circle',{attrs:{"cx":"256","cy":"256","r":"36"}}),_c('path',{attrs:{"d":"M190.24 341.77a22 22 0 0 1-16.46-7.38 118 118 0 0 1 0-156.76 22 22 0 1 1 32.87 29.24 74 74 0 0 0 0 98.29 22 22 0 0 1-16.43 36.61zM321.76 341.77a22 22 0 0 1-16.43-36.61 74 74 0 0 0 0-98.29 22 22 0 1 1 32.87-29.24 118 118 0 0 1 0 156.76 22 22 0 0 1-16.44 7.38z"}}),_c('path',{attrs:{"d":"M139.29 392.72a21.92 21.92 0 0 1-16.08-7 190 190 0 0 1 0-259.49 22 22 0 1 1 32.13 30.06 146 146 0 0 0 0 199.38 22 22 0 0 1-16.06 37zM372.71 392.72a22 22 0 0 1-16.06-37 146 146 0 0 0 0-199.38 22 22 0 1 1 32.13-30.06 190 190 0 0 1 0 259.49 21.92 21.92 0 0 1-16.07 6.95z"}}),_c('path',{attrs:{"d":"M429 438a22 22 0 0 1-16.39-36.67 218.34 218.34 0 0 0 0-290.66 22 22 0 0 1 32.78-29.34 262.34 262.34 0 0 1 0 349.34A22 22 0 0 1 429 438zM83 438a21.94 21.94 0 0 1-16.41-7.33 262.34 262.34 0 0 1 0-349.34 22 22 0 0 1 32.78 29.34 218.34 218.34 0 0 0 0 290.66A22 22 0 0 1 83 438z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"radio-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('circle',{attrs:{"cx":"256","cy":"256","r":"36"}}),_c('path',{attrs:{"d":"M190.24 341.77a22 22 0 0 1-16.46-7.38 118 118 0 0 1 0-156.76 22 22 0 1 1 32.87 29.24 74 74 0 0 0 0 98.29 22 22 0 0 1-16.43 36.61zM321.76 341.77a22 22 0 0 1-16.43-36.61 74 74 0 0 0 0-98.29 22 22 0 1 1 32.87-29.24 118 118 0 0 1 0 156.76 22 22 0 0 1-16.44 7.38z"}}),_c('path',{attrs:{"d":"M139.29 392.72a21.92 21.92 0 0 1-16.08-7 190 190 0 0 1 0-259.49 22 22 0 1 1 32.13 30.06 146 146 0 0 0 0 199.38 22 22 0 0 1-16.06 37zM372.71 392.72a22 22 0 0 1-16.06-37 146 146 0 0 0 0-199.38 22 22 0 1 1 32.13-30.06 190 190 0 0 1 0 259.49 21.92 21.92 0 0 1-16.07 6.95z"}}),_c('path',{attrs:{"d":"M429 438a22 22 0 0 1-16.39-36.67 218.34 218.34 0 0 0 0-290.66 22 22 0 0 1 32.78-29.34 262.34 262.34 0 0 1 0 349.34A22 22 0 0 1 429 438zM83 438a21.94 21.94 0 0 1-16.41-7.33 262.34 262.34 0 0 1 0-349.34 22 22 0 0 1 32.78 29.34 218.34 218.34 0 0 0 0 290.66A22 22 0 0 1 83 438z"}})])])};
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
      component.__file = "radio.vue";

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
    

    
    var radio = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return radio;

})));
