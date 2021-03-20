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
    name: "wifi-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"wifi-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M346.65 304.3a136 136 0 0 0-180.71 0 21 21 0 1 0 27.91 31.38 94 94 0 0 1 124.89 0 21 21 0 0 0 27.91-31.4z"}}),_c('path',{attrs:{"d":"M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92 21 21 0 1 0 28.68 30.67 180.28 180.28 0 0 1 246.24 0 21 21 0 1 0 28.68-30.67 221.47 221.47 0 0 0-151.8-59.92z"}}),_c('path',{attrs:{"d":"M462 175.86a309 309 0 0 0-411.44 0 21 21 0 1 0 28 31.29 267 267 0 0 1 355.43 0 21 21 0 0 0 28-31.31z"}}),_c('circle',{attrs:{"cx":"256.28","cy":"393.41","r":"32"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"wifi-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M346.65 304.3a136 136 0 0 0-180.71 0 21 21 0 1 0 27.91 31.38 94 94 0 0 1 124.89 0 21 21 0 0 0 27.91-31.4z"}}),_c('path',{attrs:{"d":"M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92 21 21 0 1 0 28.68 30.67 180.28 180.28 0 0 1 246.24 0 21 21 0 1 0 28.68-30.67 221.47 221.47 0 0 0-151.8-59.92z"}}),_c('path',{attrs:{"d":"M462 175.86a309 309 0 0 0-411.44 0 21 21 0 1 0 28 31.29 267 267 0 0 1 355.43 0 21 21 0 0 0 28-31.31z"}}),_c('circle',{attrs:{"cx":"256.28","cy":"393.41","r":"32"}})])])};
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
      component.__file = "wifi.vue";

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
    

    
    var wifi = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return wifi;

})));
