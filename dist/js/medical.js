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
    name: "medical-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"medical-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M272 464h-32a32 32 0 0 1-32-32l.05-85.82a4 4 0 0 0-6-3.47l-74.34 43.06a31.48 31.48 0 0 1-43-11.52l-16.5-28.64-.06-.1a31.65 31.65 0 0 1 11.56-42.8l74.61-43.25a4 4 0 0 0 0-6.92l-74.54-43.21a31.41 31.41 0 0 1-11.55-43l16.44-28.55a31.48 31.48 0 0 1 19.27-14.74 31.14 31.14 0 0 1 23.8 3.2l74.31 43a4 4 0 0 0 6-3.47L208 80a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v85.72a4 4 0 0 0 6 3.47l74.34-43.06a31.51 31.51 0 0 1 43 11.52l16.49 28.64.06.09a31.52 31.52 0 0 1-11.64 42.86l-74.53 43.2a4 4 0 0 0 0 6.92l74.53 43.2a31.42 31.42 0 0 1 11.56 43l-16.44 28.55a31.48 31.48 0 0 1-19.27 14.74 31.14 31.14 0 0 1-23.8-3.2l-74.31-43a4 4 0 0 0-6 3.46L304 432a32 32 0 0 1-32 32zm-93.56-197.48zm0-21zm155.1-.08zm0 0z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"medical-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M272 464h-32a32 32 0 0 1-32-32l.05-85.82a4 4 0 0 0-6-3.47l-74.34 43.06a31.48 31.48 0 0 1-43-11.52l-16.5-28.64-.06-.1a31.65 31.65 0 0 1 11.56-42.8l74.61-43.25a4 4 0 0 0 0-6.92l-74.54-43.21a31.41 31.41 0 0 1-11.55-43l16.44-28.55a31.48 31.48 0 0 1 19.27-14.74 31.14 31.14 0 0 1 23.8 3.2l74.31 43a4 4 0 0 0 6-3.47L208 80a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v85.72a4 4 0 0 0 6 3.47l74.34-43.06a31.51 31.51 0 0 1 43 11.52l16.49 28.64.06.09a31.52 31.52 0 0 1-11.64 42.86l-74.53 43.2a4 4 0 0 0 0 6.92l74.53 43.2a31.42 31.42 0 0 1 11.56 43l-16.44 28.55a31.48 31.48 0 0 1-19.27 14.74 31.14 31.14 0 0 1-23.8-3.2l-74.31-43a4 4 0 0 0-6 3.46L304 432a32 32 0 0 1-32 32zm-93.56-197.48zm0-21zm155.1-.08zm0 0z"}})])])};
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
      component.__file = "medical.vue";

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
    

    
    var medical = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return medical;

})));
