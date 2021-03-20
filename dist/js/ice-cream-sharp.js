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
    name: "ice-cream-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ice-cream-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M359.72 112.37a104 104 0 0 0-207.44 0A80.12 80.12 0 0 0 80 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 0 1 1.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0 0 41-40v-47.84a2 2 0 0 1 2.72-1.86A83.47 83.47 0 0 0 256 268a63.18 63.18 0 0 0 42.24-16.59 2 2 0 0 1 2.74 0A74.63 74.63 0 0 0 352 272a80 80 0 0 0 7.72-159.63z"}}),_c('path',{attrs:{"d":"M256 300v12a72.1 72.1 0 0 1-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 0 1-49.18-14.36A93.75 93.75 0 0 1 256 300z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ice-cream-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M359.72 112.37a104 104 0 0 0-207.44 0A80.12 80.12 0 0 0 80 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 0 1 1.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0 0 41-40v-47.84a2 2 0 0 1 2.72-1.86A83.47 83.47 0 0 0 256 268a63.18 63.18 0 0 0 42.24-16.59 2 2 0 0 1 2.74 0A74.63 74.63 0 0 0 352 272a80 80 0 0 0 7.72-159.63z"}}),_c('path',{attrs:{"d":"M256 300v12a72.1 72.1 0 0 1-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 0 1-49.18-14.36A93.75 93.75 0 0 1 256 300z"}})])])};
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
      component.__file = "ice-cream-sharp.vue";

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
    

    
    var iceCreamSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iceCreamSharp;

})));
