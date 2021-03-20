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
    name: "trail-sign-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"trail-sign-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M491.31 324.69L432 265.37a31.8 31.8 0 0 0-22.63-9.37H272v-32h144a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H272V48a16 16 0 0 0-32 0v16H102.63A31.8 31.8 0 0 0 80 73.37l-59.31 59.32a16 16 0 0 0 0 22.62L80 214.63a31.8 31.8 0 0 0 22.63 9.37H240v32H96a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h144v48a16 16 0 0 0 32 0v-48h137.37a31.8 31.8 0 0 0 22.63-9.37l59.31-59.32a16 16 0 0 0 0-22.62z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"trail-sign-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M491.31 324.69L432 265.37a31.8 31.8 0 0 0-22.63-9.37H272v-32h144a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H272V48a16 16 0 0 0-32 0v16H102.63A31.8 31.8 0 0 0 80 73.37l-59.31 59.32a16 16 0 0 0 0 22.62L80 214.63a31.8 31.8 0 0 0 22.63 9.37H240v32H96a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h144v48a16 16 0 0 0 32 0v-48h137.37a31.8 31.8 0 0 0 22.63-9.37l59.31-59.32a16 16 0 0 0 0-22.62z"}})])])};
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
      component.__file = "trail-sign.vue";

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
    

    
    var trailSign = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return trailSign;

})));
