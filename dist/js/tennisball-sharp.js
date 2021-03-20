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
    name: "tennisball-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"tennisball-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M246.4 480a181 181 0 0 0 3.22-22.86c.35-4.61.53-9.31.53-14 0-100-81.34-181.32-181.32-181.32A181.72 181.72 0 0 0 32 265.61 224.2 224.2 0 0 0 246.4 480z"}}),_c('path',{attrs:{"d":"M284.63 227.37A222.73 222.73 0 0 1 219 68.83a227.09 227.09 0 0 1 2.62-34.42A224.41 224.41 0 0 0 34.41 221.58 227.09 227.09 0 0 1 68.83 219a222.73 222.73 0 0 1 158.54 65.67A222.73 222.73 0 0 1 293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 0 0 187.24-187.18 227.09 227.09 0 0 1-34.42 2.58 222.73 222.73 0 0 1-158.54-65.63z"}}),_c('path',{attrs:{"d":"M443.17 250.15a181.72 181.72 0 0 0 36.83-3.76A224.2 224.2 0 0 0 265.61 32a181.72 181.72 0 0 0-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"tennisball-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M246.4 480a181 181 0 0 0 3.22-22.86c.35-4.61.53-9.31.53-14 0-100-81.34-181.32-181.32-181.32A181.72 181.72 0 0 0 32 265.61 224.2 224.2 0 0 0 246.4 480z"}}),_c('path',{attrs:{"d":"M284.63 227.37A222.73 222.73 0 0 1 219 68.83a227.09 227.09 0 0 1 2.62-34.42A224.41 224.41 0 0 0 34.41 221.58 227.09 227.09 0 0 1 68.83 219a222.73 222.73 0 0 1 158.54 65.67A222.73 222.73 0 0 1 293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 0 0 187.24-187.18 227.09 227.09 0 0 1-34.42 2.58 222.73 222.73 0 0 1-158.54-65.63z"}}),_c('path',{attrs:{"d":"M443.17 250.15a181.72 181.72 0 0 0 36.83-3.76A224.2 224.2 0 0 0 265.61 32a181.72 181.72 0 0 0-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32z"}})])])};
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
      component.__file = "tennisball-sharp.vue";

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
    

    
    var tennisballSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return tennisballSharp;

})));
