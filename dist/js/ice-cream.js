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
    name: "ice-cream-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ice-cream-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 0 0-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0 1 66.27-78.82 8 8 0 0 0 6.62-6.83 104 104 0 0 1 206.22 0 8 8 0 0 0 6.62 6.83A80 80 0 0 1 352 272a74.33 74.33 0 0 1-47.45-17.41 7.93 7.93 0 0 0-9.92-.14A62.89 62.89 0 0 1 256 268a80.47 80.47 0 0 1-21.8-3.18 8 8 0 0 0-10.2 7.69V312a40 40 0 0 1-41 40z"}}),_c('path',{attrs:{"d":"M263.39 299.7a8 8 0 0 0-7.39 7.91V312a72.11 72.11 0 0 1-50.69 68.76 8 8 0 0 0-4.91 10.78l40.91 94.8A16 16 0 0 0 256 496a16 16 0 0 0 14.69-9.7l73.78-172.15a8 8 0 0 0-6.2-11.07 106.31 106.31 0 0 1-35.9-11.59 8 8 0 0 0-7.13-.2 95 95 0 0 1-31.85 8.41z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ice-cream-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 0 0-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0 1 66.27-78.82 8 8 0 0 0 6.62-6.83 104 104 0 0 1 206.22 0 8 8 0 0 0 6.62 6.83A80 80 0 0 1 352 272a74.33 74.33 0 0 1-47.45-17.41 7.93 7.93 0 0 0-9.92-.14A62.89 62.89 0 0 1 256 268a80.47 80.47 0 0 1-21.8-3.18 8 8 0 0 0-10.2 7.69V312a40 40 0 0 1-41 40z"}}),_c('path',{attrs:{"d":"M263.39 299.7a8 8 0 0 0-7.39 7.91V312a72.11 72.11 0 0 1-50.69 68.76 8 8 0 0 0-4.91 10.78l40.91 94.8A16 16 0 0 0 256 496a16 16 0 0 0 14.69-9.7l73.78-172.15a8 8 0 0 0-6.2-11.07 106.31 106.31 0 0 1-35.9-11.59 8 8 0 0 0-7.13-.2 95 95 0 0 1-31.85 8.41z"}})])])};
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
      component.__file = "ice-cream.vue";

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
    

    
    var iceCream = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iceCream;

})));
