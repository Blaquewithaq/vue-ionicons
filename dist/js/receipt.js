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
    name: "receipt-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"receipt-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M483.82 32.45a16.28 16.28 0 0 0-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 0 0-14.31 0l-25.11 12.41L359 33.7a16 16 0 0 0-14.36 0L320 46.07l-24.45-12.34a16 16 0 0 0-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 0 0-14.33 0L192 46.1l-24.84-12.41a16 16 0 0 0-19.36 3.94 16.25 16.25 0 0 0-3.8 10.65V288l.05.05H336a32 32 0 0 1 32 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0 0 52-52V48a16 16 0 0 0-12.18-15.55zM416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 240zm0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 160z"}}),_c('path',{attrs:{"d":"M336 424v-88a16 16 0 0 0-16-16H48a32.1 32.1 0 0 0-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 0 0 2.85-6.81C351.07 463.7 336 451 336 424z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"receipt-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M483.82 32.45a16.28 16.28 0 0 0-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 0 0-14.31 0l-25.11 12.41L359 33.7a16 16 0 0 0-14.36 0L320 46.07l-24.45-12.34a16 16 0 0 0-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 0 0-14.33 0L192 46.1l-24.84-12.41a16 16 0 0 0-19.36 3.94 16.25 16.25 0 0 0-3.8 10.65V288l.05.05H336a32 32 0 0 1 32 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0 0 52-52V48a16 16 0 0 0-12.18-15.55zM416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 240zm0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 160z"}}),_c('path',{attrs:{"d":"M336 424v-88a16 16 0 0 0-16-16H48a32.1 32.1 0 0 0-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 0 0 2.85-6.81C351.07 463.7 336 451 336 424z"}})])])};
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
      component.__file = "receipt.vue";

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
    

    
    var receipt = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return receipt;

})));
