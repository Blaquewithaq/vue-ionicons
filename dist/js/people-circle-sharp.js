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
    name: "people-circle-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"people-circle-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm69.3 96.17a72.5 72.5 0 1 1-72.6 72.5 72.55 72.55 0 0 1 72.6-72.5zm-155.1 26.36a59.32 59.32 0 1 1-59.4 59.32 59.35 59.35 0 0 1 59.4-59.32zm-75.85 155c24.5-13.29 55.87-19.94 75.85-19.94 15 0 34.32 3 53.33 10.2a133.05 133.05 0 0 0-34 27.11c-13.19 15-20.76 32.92-20.76 50.83v15a177.06 177.06 0 0 1-74.42-83.15zM256 432a175.12 175.12 0 0 1-59.4-10.33v-27.05c0-52.59 85.75-79.09 128.7-79.09 23 0 58.38 7.63 86.21 22.81A176.14 176.14 0 0 1 256 432z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"people-circle-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm69.3 96.17a72.5 72.5 0 1 1-72.6 72.5 72.55 72.55 0 0 1 72.6-72.5zm-155.1 26.36a59.32 59.32 0 1 1-59.4 59.32 59.35 59.35 0 0 1 59.4-59.32zm-75.85 155c24.5-13.29 55.87-19.94 75.85-19.94 15 0 34.32 3 53.33 10.2a133.05 133.05 0 0 0-34 27.11c-13.19 15-20.76 32.92-20.76 50.83v15a177.06 177.06 0 0 1-74.42-83.15zM256 432a175.12 175.12 0 0 1-59.4-10.33v-27.05c0-52.59 85.75-79.09 128.7-79.09 23 0 58.38 7.63 86.21 22.81A176.14 176.14 0 0 1 256 432z"}})])])};
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
      component.__file = "people-circle-sharp.vue";

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
    

    
    var peopleCircleSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return peopleCircleSharp;

})));
