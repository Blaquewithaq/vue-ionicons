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
    name: "help-buoy-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"help-buoy-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm-64 224a64 64 0 1 1 64 64 64 64 0 0 1-64-64zm237.24-62.29L342.91 199a104.86 104.86 0 0 0-29.86-29.86l5.24-86.33a185 185 0 0 1 111 111zm-303.35-67.82a183.44 183.44 0 0 1 67.82-43.13l5.29 86.33A104.86 104.86 0 0 0 169.09 199l-86.33-5.24a183.44 183.44 0 0 1 43.13-67.87zm-43.13 192.4l86.33-5.24A104.86 104.86 0 0 0 199 342.91l-5.24 86.33a185 185 0 0 1-111-110.95zm303.35 67.82a183.44 183.44 0 0 1-67.82 43.13l-5.24-86.33a104.86 104.86 0 0 0 29.86-29.86l86.33 5.24a183.44 183.44 0 0 1-43.13 67.82z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"help-buoy-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm-64 224a64 64 0 1 1 64 64 64 64 0 0 1-64-64zm237.24-62.29L342.91 199a104.86 104.86 0 0 0-29.86-29.86l5.24-86.33a185 185 0 0 1 111 111zm-303.35-67.82a183.44 183.44 0 0 1 67.82-43.13l5.29 86.33A104.86 104.86 0 0 0 169.09 199l-86.33-5.24a183.44 183.44 0 0 1 43.13-67.87zm-43.13 192.4l86.33-5.24A104.86 104.86 0 0 0 199 342.91l-5.24 86.33a185 185 0 0 1-111-110.95zm303.35 67.82a183.44 183.44 0 0 1-67.82 43.13l-5.24-86.33a104.86 104.86 0 0 0 29.86-29.86l86.33 5.24a183.44 183.44 0 0 1-43.13 67.82z"}})])])};
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
      component.__file = "help-buoy-sharp.vue";

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
    

    
    var helpBuoySharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return helpBuoySharp;

})));
