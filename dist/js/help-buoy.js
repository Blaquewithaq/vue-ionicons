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
    name: "help-buoy-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"help-buoy-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61zM192.13 260.18a64 64 0 1 1 59.69 59.69 64.07 64.07 0 0 1-59.69-59.69zm240-66.64l-96.37 5.84a4.06 4.06 0 0 1-3.44-1.59 96 96 0 0 0-18.07-18.07 4.06 4.06 0 0 1-1.59-3.44l5.84-96.37a4 4 0 0 1 5.42-3.51A193 193 0 0 1 435.6 188.12a4 4 0 0 1-3.51 5.42zM193.54 79.91l5.84 96.37a4.06 4.06 0 0 1-1.59 3.44 96 96 0 0 0-18.07 18.07 4.06 4.06 0 0 1-3.44 1.59l-96.37-5.84a4 4 0 0 1-3.51-5.42A193 193 0 0 1 188.12 76.4a4 4 0 0 1 5.42 3.51zM79.91 318.46l96.37-5.84a4.06 4.06 0 0 1 3.44 1.59 96 96 0 0 0 18.07 18.07 4.06 4.06 0 0 1 1.59 3.44l-5.84 96.37a4 4 0 0 1-5.42 3.51A193 193 0 0 1 76.4 323.88a4 4 0 0 1 3.51-5.42zm238.55 113.63l-5.84-96.37a4.06 4.06 0 0 1 1.59-3.44 96 96 0 0 0 18.07-18.07 4.06 4.06 0 0 1 3.44-1.59l96.37 5.84a4 4 0 0 1 3.51 5.42A193 193 0 0 1 323.88 435.6a4 4 0 0 1-5.42-3.51z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"help-buoy-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61zM192.13 260.18a64 64 0 1 1 59.69 59.69 64.07 64.07 0 0 1-59.69-59.69zm240-66.64l-96.37 5.84a4.06 4.06 0 0 1-3.44-1.59 96 96 0 0 0-18.07-18.07 4.06 4.06 0 0 1-1.59-3.44l5.84-96.37a4 4 0 0 1 5.42-3.51A193 193 0 0 1 435.6 188.12a4 4 0 0 1-3.51 5.42zM193.54 79.91l5.84 96.37a4.06 4.06 0 0 1-1.59 3.44 96 96 0 0 0-18.07 18.07 4.06 4.06 0 0 1-3.44 1.59l-96.37-5.84a4 4 0 0 1-3.51-5.42A193 193 0 0 1 188.12 76.4a4 4 0 0 1 5.42 3.51zM79.91 318.46l96.37-5.84a4.06 4.06 0 0 1 3.44 1.59 96 96 0 0 0 18.07 18.07 4.06 4.06 0 0 1 1.59 3.44l-5.84 96.37a4 4 0 0 1-5.42 3.51A193 193 0 0 1 76.4 323.88a4 4 0 0 1 3.51-5.42zm238.55 113.63l-5.84-96.37a4.06 4.06 0 0 1 1.59-3.44 96 96 0 0 0 18.07-18.07 4.06 4.06 0 0 1 3.44-1.59l96.37 5.84a4 4 0 0 1 3.51 5.42A193 193 0 0 1 323.88 435.6a4 4 0 0 1-5.42-3.51z"}})])])};
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
      component.__file = "help-buoy.vue";

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
    

    
    var helpBuoy = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return helpBuoy;

})));
