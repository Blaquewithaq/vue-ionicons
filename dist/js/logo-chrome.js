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
    name: "logo-chrome-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-chrome-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M188.8 255.93a67.2 67.2 0 1 0 67.2-67.18 67.38 67.38 0 0 0-67.2 67.18z"}}),_c('path',{attrs:{"d":"M476.75 217.79v.05a206.63 206.63 0 0 0-7-28.84h-.11a202.16 202.16 0 0 1 7.07 29 203.5 203.5 0 0 0-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 0 1-12.31 44.73L231 478.45a2.44 2.44 0 0 1 0 .27v.28-.26a224 224 0 0 0 25 1.26c6.84 0 13.61-.39 20.3-1a222.91 222.91 0 0 0 29.78-4.74C405.68 451.52 480 362.4 480 255.94a225.25 225.25 0 0 0-3.25-38.15z"}}),_c('path',{attrs:{"d":"M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 0 0 207.4 474.55v-.05l77.69-134.6a84.13 84.13 0 0 1-29.09 5.6z"}}),_c('path',{attrs:{"d":"M91.29 104.57l77.35 133.25A89.19 89.19 0 0 1 256 166h205.17a246.51 246.51 0 0 0-25.78-43.94l.12.08A245.26 245.26 0 0 1 461.17 166h.17a245.91 245.91 0 0 0-25.66-44 2.63 2.63 0 0 1-.35-.26 223.93 223.93 0 0 0-344.19-17.4l.14.24z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-chrome-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M188.8 255.93a67.2 67.2 0 1 0 67.2-67.18 67.38 67.38 0 0 0-67.2 67.18z"}}),_c('path',{attrs:{"d":"M476.75 217.79v.05a206.63 206.63 0 0 0-7-28.84h-.11a202.16 202.16 0 0 1 7.07 29 203.5 203.5 0 0 0-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 0 1-12.31 44.73L231 478.45a2.44 2.44 0 0 1 0 .27v.28-.26a224 224 0 0 0 25 1.26c6.84 0 13.61-.39 20.3-1a222.91 222.91 0 0 0 29.78-4.74C405.68 451.52 480 362.4 480 255.94a225.25 225.25 0 0 0-3.25-38.15z"}}),_c('path',{attrs:{"d":"M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 0 0 207.4 474.55v-.05l77.69-134.6a84.13 84.13 0 0 1-29.09 5.6z"}}),_c('path',{attrs:{"d":"M91.29 104.57l77.35 133.25A89.19 89.19 0 0 1 256 166h205.17a246.51 246.51 0 0 0-25.78-43.94l.12.08A245.26 245.26 0 0 1 461.17 166h.17a245.91 245.91 0 0 0-25.66-44 2.63 2.63 0 0 1-.35-.26 223.93 223.93 0 0 0-344.19-17.4l.14.24z"}})])])};
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
      component.__file = "logo-chrome.vue";

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
    

    
    var logoChrome = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoChrome;

})));
