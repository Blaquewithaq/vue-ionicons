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
    name: "pizza-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"pizza-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44 37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18z"}}),_c('ellipse',{attrs:{"cx":"320.48","cy":"207.99","rx":"31.97","ry":"32.03","transform":"rotate(-44.98 320.503 207.996)","data-fill":"none"}}),_c('ellipse',{attrs:{"cx":"192.48","cy":"191.99","rx":"31.97","ry":"32.03","transform":"rotate(-44.98 192.49 191.992)","fill":"none"}}),_c('ellipse',{attrs:{"cx":"256.48","cy":"319.99","rx":"31.97","ry":"32.03","transform":"rotate(-44.98 256.505 320)","fill":"none"}}),_c('path',{attrs:{"d":"M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 0 0-153.7 28.9c-.25.1-9.24 4.23-19 8.71 7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84-19.92-8.24zm-185.25 53.22a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34zm64 128a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34zm64-112a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"pizza-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44 37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18z"}}),_c('ellipse',{attrs:{"cx":"320.48","cy":"207.99","rx":"31.97","ry":"32.03","transform":"rotate(-44.98 320.503 207.996)","data-fill":"none"}}),_c('ellipse',{attrs:{"cx":"192.48","cy":"191.99","rx":"31.97","ry":"32.03","transform":"rotate(-44.98 192.49 191.992)","fill":"none"}}),_c('ellipse',{attrs:{"cx":"256.48","cy":"319.99","rx":"31.97","ry":"32.03","transform":"rotate(-44.98 256.505 320)","fill":"none"}}),_c('path',{attrs:{"d":"M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 0 0-153.7 28.9c-.25.1-9.24 4.23-19 8.71 7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84-19.92-8.24zm-185.25 53.22a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34zm64 128a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34zm64-112a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34z"}})])])};
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
      component.__file = "pizza-sharp.vue";

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
    

    
    var pizzaSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return pizzaSharp;

})));
