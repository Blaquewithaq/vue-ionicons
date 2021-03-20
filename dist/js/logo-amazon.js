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
    name: "logo-amazon-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-amazon-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M48.48 378.73a300.52 300.52 0 0 0 152.89 95.92 262.57 262.57 0 0 0 159.3-17.25 225.52 225.52 0 0 0 66.79-47 6.36 6.36 0 0 0-2-8.53 11.76 11.76 0 0 0-8-.05 401.92 401.92 0 0 1-116.55 39.34 358.13 358.13 0 0 1-127.29-8.83 446.73 446.73 0 0 1-119.1-60.49 5 5 0 0 0-6.06 6.9z"}}),_c('path',{attrs:{"d":"M387.15 388.44a168.11 168.11 0 0 1 48.94-2.23l.67.13a10 10 0 0 1 7.37 12.05A204.71 204.71 0 0 1 429 444.47a2.55 2.55 0 0 0 1.66 3.18 2.51 2.51 0 0 0 2.23-.37A83.31 83.31 0 0 0 464 382.86a12.44 12.44 0 0 0-10.22-13.22A95.75 95.75 0 0 0 384.91 384a2.55 2.55 0 0 0-.57 3.55 2.52 2.52 0 0 0 2.81.89zM304.24 324.92a164 164 0 0 1-28.92 25.3A135.16 135.16 0 0 1 208.63 369a99.49 99.49 0 0 1-57.49-19.85 97.25 97.25 0 0 1-27.36-100.28 112.35 112.35 0 0 1 65.3-69.06 367.67 367.67 0 0 1 104.7-15.55V127A37.82 37.82 0 0 0 261 94.72a59.9 59.9 0 0 0-31.17 4.08 48.89 48.89 0 0 0-27.13 34.67 12 12 0 0 1-12.58 6.72l-50.9-4.5a11.38 11.38 0 0 1-8.38-10.16 103.66 103.66 0 0 1 36.61-63.45A143.86 143.86 0 0 1 257.85 32a146.24 146.24 0 0 1 84.27 27.67 86.82 86.82 0 0 1 30.7 70.22V258.8a84.46 84.46 0 0 0 8 31.28l15.87 23.23a13 13 0 0 1 0 11.23l-46.99 39.71a12.5 12.5 0 0 1-12.68-.44 244.84 244.84 0 0 1-32.78-38.89zm-10.6-116.83a257.68 257.68 0 0 0-44 2.89A63 63 0 0 0 208 242.54a63 63 0 0 0 3.07 54 40.6 40.6 0 0 0 47.11 12.19 78.61 78.61 0 0 0 35.46-55.58v-45.06"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-amazon-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M48.48 378.73a300.52 300.52 0 0 0 152.89 95.92 262.57 262.57 0 0 0 159.3-17.25 225.52 225.52 0 0 0 66.79-47 6.36 6.36 0 0 0-2-8.53 11.76 11.76 0 0 0-8-.05 401.92 401.92 0 0 1-116.55 39.34 358.13 358.13 0 0 1-127.29-8.83 446.73 446.73 0 0 1-119.1-60.49 5 5 0 0 0-6.06 6.9z"}}),_c('path',{attrs:{"d":"M387.15 388.44a168.11 168.11 0 0 1 48.94-2.23l.67.13a10 10 0 0 1 7.37 12.05A204.71 204.71 0 0 1 429 444.47a2.55 2.55 0 0 0 1.66 3.18 2.51 2.51 0 0 0 2.23-.37A83.31 83.31 0 0 0 464 382.86a12.44 12.44 0 0 0-10.22-13.22A95.75 95.75 0 0 0 384.91 384a2.55 2.55 0 0 0-.57 3.55 2.52 2.52 0 0 0 2.81.89zM304.24 324.92a164 164 0 0 1-28.92 25.3A135.16 135.16 0 0 1 208.63 369a99.49 99.49 0 0 1-57.49-19.85 97.25 97.25 0 0 1-27.36-100.28 112.35 112.35 0 0 1 65.3-69.06 367.67 367.67 0 0 1 104.7-15.55V127A37.82 37.82 0 0 0 261 94.72a59.9 59.9 0 0 0-31.17 4.08 48.89 48.89 0 0 0-27.13 34.67 12 12 0 0 1-12.58 6.72l-50.9-4.5a11.38 11.38 0 0 1-8.38-10.16 103.66 103.66 0 0 1 36.61-63.45A143.86 143.86 0 0 1 257.85 32a146.24 146.24 0 0 1 84.27 27.67 86.82 86.82 0 0 1 30.7 70.22V258.8a84.46 84.46 0 0 0 8 31.28l15.87 23.23a13 13 0 0 1 0 11.23l-46.99 39.71a12.5 12.5 0 0 1-12.68-.44 244.84 244.84 0 0 1-32.78-38.89zm-10.6-116.83a257.68 257.68 0 0 0-44 2.89A63 63 0 0 0 208 242.54a63 63 0 0 0 3.07 54 40.6 40.6 0 0 0 47.11 12.19 78.61 78.61 0 0 0 35.46-55.58v-45.06"}})])])};
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
      component.__file = "logo-amazon.vue";

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
    

    
    var logoAmazon = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoAmazon;

})));
