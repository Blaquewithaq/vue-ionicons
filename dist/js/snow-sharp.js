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
    name: "snow-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"snow-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M447.88 313.27l19.25-10.64-21.28-38.51-19.25 10.64a133.42 133.42 0 0 0-38.54 32.1L300 256l88.07-50.86a133.42 133.42 0 0 0 38.54 32.1l19.25 10.64 21.28-38.51-19.25-10.64a89.27 89.27 0 0 1-20.93-16L480 152.05 458 114l-53 30.58a89.07 89.07 0 0 1-3.42-26.15l.41-22-44-.82-.41 22a133.62 133.62 0 0 0 8.49 49.39L278 217.89V116.18a133.52 133.52 0 0 0 47.06-17.33L343.9 87.5l-22.71-37.69-18.84 11.35A89.5 89.5 0 0 1 278 71.27V16h-44v55.27a89.5 89.5 0 0 1-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.52 133.52 0 0 0 234 116.18v101.71L145.93 167a133.62 133.62 0 0 0 8.53-49.43l-.41-22-44 .82.41 22a89.07 89.07 0 0 1-3.42 26.15L54 114l-22 38.1 53.05 30.64a89.27 89.27 0 0 1-20.93 16l-19.25 10.63 21.28 38.51 19.25-10.64a133.42 133.42 0 0 0 38.54-32.1L212 256l-88.07 50.86a133.42 133.42 0 0 0-38.54-32.1l-19.24-10.64-21.28 38.51 19.25 10.64a89.27 89.27 0 0 1 20.93 16L32 360l22 38.1 53.05-30.63a89.07 89.07 0 0 1 3.42 26.15l-.41 22 44 .82.41-22a133.62 133.62 0 0 0-8.54-49.44L234 294.11v101.71a133.52 133.52 0 0 0-47.06 17.33L168.1 424.5l22.71 37.69 18.84-11.35A89.5 89.5 0 0 1 234 440.73V496h44v-55.27a89.5 89.5 0 0 1 24.35 10.11l18.84 11.35 22.71-37.69-18.84-11.35A133.52 133.52 0 0 0 278 395.82V294.11L366.07 345a133.62 133.62 0 0 0-8.53 49.43l.41 22 44-.82-.41-22a89.07 89.07 0 0 1 3.46-26.19l53 30.63L480 360l-53-30.69a89.27 89.27 0 0 1 20.88-16.04z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"snow-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M447.88 313.27l19.25-10.64-21.28-38.51-19.25 10.64a133.42 133.42 0 0 0-38.54 32.1L300 256l88.07-50.86a133.42 133.42 0 0 0 38.54 32.1l19.25 10.64 21.28-38.51-19.25-10.64a89.27 89.27 0 0 1-20.93-16L480 152.05 458 114l-53 30.58a89.07 89.07 0 0 1-3.42-26.15l.41-22-44-.82-.41 22a133.62 133.62 0 0 0 8.49 49.39L278 217.89V116.18a133.52 133.52 0 0 0 47.06-17.33L343.9 87.5l-22.71-37.69-18.84 11.35A89.5 89.5 0 0 1 278 71.27V16h-44v55.27a89.5 89.5 0 0 1-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.52 133.52 0 0 0 234 116.18v101.71L145.93 167a133.62 133.62 0 0 0 8.53-49.43l-.41-22-44 .82.41 22a89.07 89.07 0 0 1-3.42 26.15L54 114l-22 38.1 53.05 30.64a89.27 89.27 0 0 1-20.93 16l-19.25 10.63 21.28 38.51 19.25-10.64a133.42 133.42 0 0 0 38.54-32.1L212 256l-88.07 50.86a133.42 133.42 0 0 0-38.54-32.1l-19.24-10.64-21.28 38.51 19.25 10.64a89.27 89.27 0 0 1 20.93 16L32 360l22 38.1 53.05-30.63a89.07 89.07 0 0 1 3.42 26.15l-.41 22 44 .82.41-22a133.62 133.62 0 0 0-8.54-49.44L234 294.11v101.71a133.52 133.52 0 0 0-47.06 17.33L168.1 424.5l22.71 37.69 18.84-11.35A89.5 89.5 0 0 1 234 440.73V496h44v-55.27a89.5 89.5 0 0 1 24.35 10.11l18.84 11.35 22.71-37.69-18.84-11.35A133.52 133.52 0 0 0 278 395.82V294.11L366.07 345a133.62 133.62 0 0 0-8.53 49.43l.41 22 44-.82-.41-22a89.07 89.07 0 0 1 3.46-26.19l53 30.63L480 360l-53-30.69a89.27 89.27 0 0 1 20.88-16.04z"}})])])};
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
      component.__file = "snow-sharp.vue";

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
    

    
    var snowSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return snowSharp;

})));
