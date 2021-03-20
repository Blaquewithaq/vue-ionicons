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
    name: "snow-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"snow-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M461 349l-34-19.64a89.53 89.53 0 0 1 20.94-16 22 22 0 0 0-21.28-38.51 133.62 133.62 0 0 0-38.55 32.1L300 256l88.09-50.86a133.46 133.46 0 0 0 38.55 32.1 22 22 0 1 0 21.28-38.51 89.74 89.74 0 0 1-20.94-16l34-19.64A22 22 0 1 0 439 125l-34 19.63a89.74 89.74 0 0 1-3.42-26.15A22 22 0 0 0 380 96h-.41a22 22 0 0 0-22 21.59 133.61 133.61 0 0 0 8.5 49.41L278 217.89V116.18a133.5 133.5 0 0 0 47.07-17.33 22 22 0 0 0-22.71-37.69A89.56 89.56 0 0 1 278 71.27V38a22 22 0 0 0-44 0v33.27a89.56 89.56 0 0 1-24.36-10.11 22 22 0 1 0-22.71 37.69A133.5 133.5 0 0 0 234 116.18v101.71L145.91 167a133.61 133.61 0 0 0 8.52-49.43 22 22 0 0 0-22-21.59H132a22 22 0 0 0-21.59 22.41 89.74 89.74 0 0 1-3.41 26.19L73 125a22 22 0 1 0-22 38.1l34 19.64a89.74 89.74 0 0 1-20.94 16 22 22 0 1 0 21.28 38.51 133.62 133.62 0 0 0 38.55-32.1L212 256l-88.09 50.86a133.62 133.62 0 0 0-38.55-32.1 22 22 0 1 0-21.28 38.51 89.74 89.74 0 0 1 20.94 16L51 349a22 22 0 1 0 22 38.1l34-19.63a89.74 89.74 0 0 1 3.42 26.15A22 22 0 0 0 132 416h.41a22 22 0 0 0 22-21.59 133.61 133.61 0 0 0-8.5-49.41L234 294.11v101.71a133.5 133.5 0 0 0-47.07 17.33 22 22 0 1 0 22.71 37.69A89.56 89.56 0 0 1 234 440.73V474a22 22 0 0 0 44 0v-33.27a89.56 89.56 0 0 1 24.36 10.11 22 22 0 0 0 22.71-37.69A133.5 133.5 0 0 0 278 395.82V294.11L366.09 345a133.61 133.61 0 0 0-8.52 49.43 22 22 0 0 0 22 21.59h.43a22 22 0 0 0 21.59-22.41 89.74 89.74 0 0 1 3.41-26.19l34 19.63A22 22 0 1 0 461 349z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"snow-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M461 349l-34-19.64a89.53 89.53 0 0 1 20.94-16 22 22 0 0 0-21.28-38.51 133.62 133.62 0 0 0-38.55 32.1L300 256l88.09-50.86a133.46 133.46 0 0 0 38.55 32.1 22 22 0 1 0 21.28-38.51 89.74 89.74 0 0 1-20.94-16l34-19.64A22 22 0 1 0 439 125l-34 19.63a89.74 89.74 0 0 1-3.42-26.15A22 22 0 0 0 380 96h-.41a22 22 0 0 0-22 21.59 133.61 133.61 0 0 0 8.5 49.41L278 217.89V116.18a133.5 133.5 0 0 0 47.07-17.33 22 22 0 0 0-22.71-37.69A89.56 89.56 0 0 1 278 71.27V38a22 22 0 0 0-44 0v33.27a89.56 89.56 0 0 1-24.36-10.11 22 22 0 1 0-22.71 37.69A133.5 133.5 0 0 0 234 116.18v101.71L145.91 167a133.61 133.61 0 0 0 8.52-49.43 22 22 0 0 0-22-21.59H132a22 22 0 0 0-21.59 22.41 89.74 89.74 0 0 1-3.41 26.19L73 125a22 22 0 1 0-22 38.1l34 19.64a89.74 89.74 0 0 1-20.94 16 22 22 0 1 0 21.28 38.51 133.62 133.62 0 0 0 38.55-32.1L212 256l-88.09 50.86a133.62 133.62 0 0 0-38.55-32.1 22 22 0 1 0-21.28 38.51 89.74 89.74 0 0 1 20.94 16L51 349a22 22 0 1 0 22 38.1l34-19.63a89.74 89.74 0 0 1 3.42 26.15A22 22 0 0 0 132 416h.41a22 22 0 0 0 22-21.59 133.61 133.61 0 0 0-8.5-49.41L234 294.11v101.71a133.5 133.5 0 0 0-47.07 17.33 22 22 0 1 0 22.71 37.69A89.56 89.56 0 0 1 234 440.73V474a22 22 0 0 0 44 0v-33.27a89.56 89.56 0 0 1 24.36 10.11 22 22 0 0 0 22.71-37.69A133.5 133.5 0 0 0 278 395.82V294.11L366.09 345a133.61 133.61 0 0 0-8.52 49.43 22 22 0 0 0 22 21.59h.43a22 22 0 0 0 21.59-22.41 89.74 89.74 0 0 1 3.41-26.19l34 19.63A22 22 0 1 0 461 349z"}})])])};
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
      component.__file = "snow.vue";

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
    

    
    var snow = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return snow;

})));
