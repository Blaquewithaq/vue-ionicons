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
    name: "tennisball-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"tennisball-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M448 256a192.55 192.55 0 0 0 32-2.68A224 224 0 0 0 258.68 32 192.55 192.55 0 0 0 256 64c0 105.87 86.13 192 192 192zM253.35 480c.94-5.67 1.65-11.4 2.09-17.18.37-4.88.56-9.86.56-14.79 0-105.87-86.13-192-192-192a192.55 192.55 0 0 0-32 2.68A224 224 0 0 0 253.35 480z"}}),_c('path',{attrs:{"d":"M289.61 222.39A222.53 222.53 0 0 1 224 64a226.07 226.07 0 0 1 2-30A224.1 224.1 0 0 0 34 226a226.07 226.07 0 0 1 30-2 222.53 222.53 0 0 1 158.39 65.61A222.53 222.53 0 0 1 288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 0 0 478 286a226.07 226.07 0 0 1-30 2 222.53 222.53 0 0 1-158.39-65.61z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"tennisball-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M448 256a192.55 192.55 0 0 0 32-2.68A224 224 0 0 0 258.68 32 192.55 192.55 0 0 0 256 64c0 105.87 86.13 192 192 192zM253.35 480c.94-5.67 1.65-11.4 2.09-17.18.37-4.88.56-9.86.56-14.79 0-105.87-86.13-192-192-192a192.55 192.55 0 0 0-32 2.68A224 224 0 0 0 253.35 480z"}}),_c('path',{attrs:{"d":"M289.61 222.39A222.53 222.53 0 0 1 224 64a226.07 226.07 0 0 1 2-30A224.1 224.1 0 0 0 34 226a226.07 226.07 0 0 1 30-2 222.53 222.53 0 0 1 158.39 65.61A222.53 222.53 0 0 1 288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 0 0 478 286a226.07 226.07 0 0 1-30 2 222.53 222.53 0 0 1-158.39-65.61z"}})])])};
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
      component.__file = "tennisball.vue";

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
    

    
    var tennisball = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return tennisball;

})));
