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
    name: "extension-puzzle-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"extension-puzzle-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M345.14 480H256v-45.71a31.3 31.3 0 0 0-9.59-22.65c-7.67-7.56-18.83-11.81-30.57-11.64a44.38 44.38 0 0 0-28.45 10.67c-5.2 4.6-11.39 12.56-11.39 24.42V480H87.62A55.68 55.68 0 0 1 32 424.38V336h45.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0 0 12.2-29.92C114.7 273.89 97.26 256 76.91 256H32v-89.34a53.77 53.77 0 0 1 16.53-39A55.88 55.88 0 0 1 87.62 112h63.24V97.52A65.53 65.53 0 0 1 217.54 32c35.49.62 64.36 30.38 64.36 66.33V112h63.24A54.28 54.28 0 0 1 400 166.86v63.24h13.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H400v63.24c0 30.67-24.61 55.62-54.86 55.62z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"extension-puzzle-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M345.14 480H256v-45.71a31.3 31.3 0 0 0-9.59-22.65c-7.67-7.56-18.83-11.81-30.57-11.64a44.38 44.38 0 0 0-28.45 10.67c-5.2 4.6-11.39 12.56-11.39 24.42V480H87.62A55.68 55.68 0 0 1 32 424.38V336h45.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0 0 12.2-29.92C114.7 273.89 97.26 256 76.91 256H32v-89.34a53.77 53.77 0 0 1 16.53-39A55.88 55.88 0 0 1 87.62 112h63.24V97.52A65.53 65.53 0 0 1 217.54 32c35.49.62 64.36 30.38 64.36 66.33V112h63.24A54.28 54.28 0 0 1 400 166.86v63.24h13.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H400v63.24c0 30.67-24.61 55.62-54.86 55.62z"}})])])};
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
      component.__file = "extension-puzzle-sharp.vue";

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
    

    
    var extensionPuzzleSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return extensionPuzzleSharp;

})));
