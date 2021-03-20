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
    name: "male-female-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"male-female-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M426 16h-74a22 22 0 0 0 0 44h20.89l-37.1 37.09A157.68 157.68 0 0 0 216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 0 0 0 44h28v36a22 22 0 0 0 44 0v-36h28a22 22 0 0 0 0-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 0 0-14-64.92l44-44V112a22 22 0 0 0 44 0V38a22 22 0 0 0-22-22zM216 314a114 114 0 1 1 114-114 114.13 114.13 0 0 1-114 114z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"male-female-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M426 16h-74a22 22 0 0 0 0 44h20.89l-37.1 37.09A157.68 157.68 0 0 0 216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 0 0 0 44h28v36a22 22 0 0 0 44 0v-36h28a22 22 0 0 0 0-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 0 0-14-64.92l44-44V112a22 22 0 0 0 44 0V38a22 22 0 0 0-22-22zM216 314a114 114 0 1 1 114-114 114.13 114.13 0 0 1-114 114z"}})])])};
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
      component.__file = "male-female.vue";

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
    

    
    var maleFemale = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return maleFemale;

})));
