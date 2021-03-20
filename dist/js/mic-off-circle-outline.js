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
    name: "mic-off-circle-outline-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"mic-off-circle-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z"}}),_c('path',{attrs:{"d":"M352 369a15.93 15.93 0 0 1-11.84-5.24l-192-210a16 16 0 0 1 23.68-21.52l192 210A16 16 0 0 1 352 369zM352 248.22v-23.8a16.3 16.3 0 0 0-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.35 43.35 0 0 1-3.07 15.91 4 4 0 0 0 .76 4.16l19.19 21.1a2 2 0 0 0 3.19-.3A77.12 77.12 0 0 0 352 248.22zM304 240v-64a48.14 48.14 0 0 0-48-48 48.08 48.08 0 0 0-41 23.1 4 4 0 0 0 .47 4.77l84.42 92.86a2 2 0 0 0 3.46-1A47.84 47.84 0 0 0 304 240zM246.57 285.2l-36.46-40.11a1 1 0 0 0-1.74.8 48.26 48.26 0 0 0 37.25 41 1 1 0 0 0 .95-1.69z"}}),_c('path',{attrs:{"d":"M287.55 352H272v-17.74a100.33 100.33 0 0 0 12.53-3.06 2 2 0 0 0 .89-3.26l-21.07-23.19a3.94 3.94 0 0 0-3.29-1.29c-1.69.15-3.39.24-5.06.24-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 0 0-15.61-16.4A15.91 15.91 0 0 0 160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.71 103.71 0 0 0 240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 384h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"mic-off-circle-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z"}}),_c('path',{attrs:{"d":"M352 369a15.93 15.93 0 0 1-11.84-5.24l-192-210a16 16 0 0 1 23.68-21.52l192 210A16 16 0 0 1 352 369zM352 248.22v-23.8a16.3 16.3 0 0 0-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.35 43.35 0 0 1-3.07 15.91 4 4 0 0 0 .76 4.16l19.19 21.1a2 2 0 0 0 3.19-.3A77.12 77.12 0 0 0 352 248.22zM304 240v-64a48.14 48.14 0 0 0-48-48 48.08 48.08 0 0 0-41 23.1 4 4 0 0 0 .47 4.77l84.42 92.86a2 2 0 0 0 3.46-1A47.84 47.84 0 0 0 304 240zM246.57 285.2l-36.46-40.11a1 1 0 0 0-1.74.8 48.26 48.26 0 0 0 37.25 41 1 1 0 0 0 .95-1.69z"}}),_c('path',{attrs:{"d":"M287.55 352H272v-17.74a100.33 100.33 0 0 0 12.53-3.06 2 2 0 0 0 .89-3.26l-21.07-23.19a3.94 3.94 0 0 0-3.29-1.29c-1.69.15-3.39.24-5.06.24-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 0 0-15.61-16.4A15.91 15.91 0 0 0 160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.71 103.71 0 0 0 240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 384h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23z"}})])])};
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
      component.__file = "mic-off-circle-outline.vue";

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
    

    
    var micOffCircleOutline = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return micOffCircleOutline;

})));
