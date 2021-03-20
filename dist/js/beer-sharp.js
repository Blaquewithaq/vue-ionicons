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
    name: "beer-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"beer-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M448 208h-80v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.67a56 56 0 0 0-67.51 77.51c-1 .86-1.91 1.74-2.83 2.66A63.56 63.56 0 0 0 48 176.26a62.65 62.65 0 0 0 20.77 46.54A65 65 0 0 0 80 231v249a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-48h80a16 16 0 0 0 16-16V224a16 16 0 0 0-16-16zM176 432h-32V240h32zm64 0h-32V240h32zm64 0h-32V240h32zm16-240c-8.33 0-20.55-5.18-26.69-11.31l-4.68-4.69H148.79L145 186.53c-5.81 16-18.83 20.41-28.73 21.29a34.08 34.08 0 0 1-25.91-8.67 31 31 0 0 1-10.32-23 31.8 31.8 0 0 1 9.33-22.71c.16-.17.33-.32.5-.49A31.78 31.78 0 0 1 112 144c.09 0 9.12.34 16.4 5.8l12.8 9.6 19.2-25.6-12.8-9.6A63.69 63.69 0 0 0 112 112a64.79 64.79 0 0 0-14 1.55 24 24 0 0 1 41.4-23.68l.23.35.4.46a35.78 35.78 0 0 1 5 8.94l5.62 15 30-11.24-5.62-15a68.2 68.2 0 0 0-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38 55.45 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142l-3 15.72 31.43 6 3-15.72a111.78 111.78 0 0 0 1.96-19.43 32 32 0 0 1-6 63.43zm112 208h-64V240h64z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"beer-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M448 208h-80v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.67a56 56 0 0 0-67.51 77.51c-1 .86-1.91 1.74-2.83 2.66A63.56 63.56 0 0 0 48 176.26a62.65 62.65 0 0 0 20.77 46.54A65 65 0 0 0 80 231v249a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-48h80a16 16 0 0 0 16-16V224a16 16 0 0 0-16-16zM176 432h-32V240h32zm64 0h-32V240h32zm64 0h-32V240h32zm16-240c-8.33 0-20.55-5.18-26.69-11.31l-4.68-4.69H148.79L145 186.53c-5.81 16-18.83 20.41-28.73 21.29a34.08 34.08 0 0 1-25.91-8.67 31 31 0 0 1-10.32-23 31.8 31.8 0 0 1 9.33-22.71c.16-.17.33-.32.5-.49A31.78 31.78 0 0 1 112 144c.09 0 9.12.34 16.4 5.8l12.8 9.6 19.2-25.6-12.8-9.6A63.69 63.69 0 0 0 112 112a64.79 64.79 0 0 0-14 1.55 24 24 0 0 1 41.4-23.68l.23.35.4.46a35.78 35.78 0 0 1 5 8.94l5.62 15 30-11.24-5.62-15a68.2 68.2 0 0 0-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38 55.45 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142l-3 15.72 31.43 6 3-15.72a111.78 111.78 0 0 0 1.96-19.43 32 32 0 0 1-6 63.43zm112 208h-64V240h64z"}})])])};
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
      component.__file = "beer-sharp.vue";

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
    

    
    var beerSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return beerSharp;

})));
