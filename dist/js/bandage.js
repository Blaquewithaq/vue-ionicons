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
    name: "bandage-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"bandage-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63zM137.21 295.6a47.81 47.81 0 0 1-9.43-13.38L69 341a72.2 72.2 0 0 0 0 102 72.37 72.37 0 0 0 102 0l58.77-58.76a47.81 47.81 0 0 1-13.38-9.43zM392 48a71.55 71.55 0 0 0-51 21l-55.92 55.91a48.05 48.05 0 0 1 13.36 9.45l79.19 79.19a48.05 48.05 0 0 1 9.45 13.36L443 171a72 72 0 0 0-51-123z","data-fill":"none"}}),_c('path',{attrs:{"d":"M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63zm-56.49 110.31a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zm48 48a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zm0-96a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zm48 48a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zM465.61 46.39a104.38 104.38 0 0 0-147.25 0l-69.76 69.89a4 4 0 0 0 4.2 6.58 35.74 35.74 0 0 1 11.69-2.54 47.7 47.7 0 0 1 33.94 14.06l79.19 79.19a47.7 47.7 0 0 1 14.06 33.94 35.68 35.68 0 0 1-2.54 11.69 4 4 0 0 0 6.58 4.2l69.89-69.76a104.38 104.38 0 0 0 0-147.25z"}}),_c('path',{attrs:{"d":"M254.34 386.83a47.91 47.91 0 0 1-33.94-14l-79.19-79.23a47.81 47.81 0 0 1-9.43-13.38c-4.59-9.7-1.39-25 2.48-36.9a4 4 0 0 0-6.64-4l-77.23 77.04a104.12 104.12 0 0 0 147.25 147.25l72.75-72.88a4 4 0 0 0-4.21-6.58c-4.18 1.58-8.4 2.68-11.84 2.68z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"bandage-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63zM137.21 295.6a47.81 47.81 0 0 1-9.43-13.38L69 341a72.2 72.2 0 0 0 0 102 72.37 72.37 0 0 0 102 0l58.77-58.76a47.81 47.81 0 0 1-13.38-9.43zM392 48a71.55 71.55 0 0 0-51 21l-55.92 55.91a48.05 48.05 0 0 1 13.36 9.45l79.19 79.19a48.05 48.05 0 0 1 9.45 13.36L443 171a72 72 0 0 0-51-123z","data-fill":"none"}}),_c('path',{attrs:{"d":"M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63zm-56.49 110.31a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zm48 48a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zm0-96a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zm48 48a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62zM465.61 46.39a104.38 104.38 0 0 0-147.25 0l-69.76 69.89a4 4 0 0 0 4.2 6.58 35.74 35.74 0 0 1 11.69-2.54 47.7 47.7 0 0 1 33.94 14.06l79.19 79.19a47.7 47.7 0 0 1 14.06 33.94 35.68 35.68 0 0 1-2.54 11.69 4 4 0 0 0 6.58 4.2l69.89-69.76a104.38 104.38 0 0 0 0-147.25z"}}),_c('path',{attrs:{"d":"M254.34 386.83a47.91 47.91 0 0 1-33.94-14l-79.19-79.23a47.81 47.81 0 0 1-9.43-13.38c-4.59-9.7-1.39-25 2.48-36.9a4 4 0 0 0-6.64-4l-77.23 77.04a104.12 104.12 0 0 0 147.25 147.25l72.75-72.88a4 4 0 0 0-4.21-6.58c-4.18 1.58-8.4 2.68-11.84 2.68z"}})])])};
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
      component.__file = "bandage.vue";

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
    

    
    var bandage = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return bandage;

})));
