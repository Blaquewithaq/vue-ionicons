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
    name: "balloon-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"balloon-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M391 307.27c32.75-46.35 46.59-101.63 39-155.68A175.82 175.82 0 0 0 231.38 2c-96 13.49-163.14 102.58-149.65 198.58 7.57 53.89 36.12 103.16 80.37 138.74 24.58 19.68 52.31 33.5 78.62 39.68a8 8 0 0 1 6 9.22l-4.87 26.38a16.29 16.29 0 0 0 1.48 10.57 16 16 0 0 0 14.2 8.61 15.21 15.21 0 0 0 2.23-.16l17.81-2.5a2 2 0 0 1 2.09 1.14c16.72 36.31 45.46 63.85 82.15 78.36a16 16 0 0 0 21-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57 118.57 0 0 1-59.3-51.88 2 2 0 0 1 1.45-3l7.4-1a16.54 16.54 0 0 0 10.08-5.23 16 16 0 0 0 2.39-17.8l-12.06-24.23a8 8 0 0 1 3.26-10.55c23.59-13.17 46.45-34 64.65-59.73zm-154.9 16.78a16 16 0 0 1-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16 16 0 1 1 30.12-10.8c14.5 40.44 47.27 65.77 73.1 76a16 16 0 0 1-5.89 30.88z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"balloon-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M391 307.27c32.75-46.35 46.59-101.63 39-155.68A175.82 175.82 0 0 0 231.38 2c-96 13.49-163.14 102.58-149.65 198.58 7.57 53.89 36.12 103.16 80.37 138.74 24.58 19.68 52.31 33.5 78.62 39.68a8 8 0 0 1 6 9.22l-4.87 26.38a16.29 16.29 0 0 0 1.48 10.57 16 16 0 0 0 14.2 8.61 15.21 15.21 0 0 0 2.23-.16l17.81-2.5a2 2 0 0 1 2.09 1.14c16.72 36.31 45.46 63.85 82.15 78.36a16 16 0 0 0 21-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57 118.57 0 0 1-59.3-51.88 2 2 0 0 1 1.45-3l7.4-1a16.54 16.54 0 0 0 10.08-5.23 16 16 0 0 0 2.39-17.8l-12.06-24.23a8 8 0 0 1 3.26-10.55c23.59-13.17 46.45-34 64.65-59.73zm-154.9 16.78a16 16 0 0 1-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16 16 0 1 1 30.12-10.8c14.5 40.44 47.27 65.77 73.1 76a16 16 0 0 1-5.89 30.88z"}})])])};
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
      component.__file = "balloon.vue";

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
    

    
    var balloon = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return balloon;

})));
