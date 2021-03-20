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
    name: "heart-dislike-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"heart-dislike-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M32 64.45l389.47 389.94 22.84-22.47L54.85 42 32 64.45zM62.67 192.91c-.56 55.63 19.77 106.94 62.16 156.88 40.25 47.42 94.56 79.67 137.47 108.21l9 6 9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.62 114.62 0 0 0-9.07 43.63zM417.83 349.79c42.39-49.94 62.72-101.25 62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26 0-80.35 28-97.23 48.17-16.88-20.2-49-48.17-97.23-48.17A108.24 108.24 0 0 0 142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"heart-dislike-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M32 64.45l389.47 389.94 22.84-22.47L54.85 42 32 64.45zM62.67 192.91c-.56 55.63 19.77 106.94 62.16 156.88 40.25 47.42 94.56 79.67 137.47 108.21l9 6 9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.62 114.62 0 0 0-9.07 43.63zM417.83 349.79c42.39-49.94 62.72-101.25 62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26 0-80.35 28-97.23 48.17-16.88-20.2-49-48.17-97.23-48.17A108.24 108.24 0 0 0 142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69z"}})])])};
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
      component.__file = "heart-dislike-sharp.vue";

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
    

    
    var heartDislikeSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return heartDislikeSharp;

})));
