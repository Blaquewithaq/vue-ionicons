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
    name: "walk-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"walk-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 0 1-10.16-37.17V142h15.73A40.36 40.36 0 0 1 259 182.32v162.52","stroke":"#000","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}}),_c('path',{attrs:{"data-fill":"none","stroke":"#000","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32","d":"M128.18 291.5v-74.77l64.95-65.1"}}),_c('path',{attrs:{"d":"M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z"}}),_c('circle',{attrs:{"cx":"259.02","cy":"67.21","r":"37.38","stroke":"#000","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"16"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"walk-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 0 1-10.16-37.17V142h15.73A40.36 40.36 0 0 1 259 182.32v162.52","stroke":"#000","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}}),_c('path',{attrs:{"data-fill":"none","stroke":"#000","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32","d":"M128.18 291.5v-74.77l64.95-65.1"}}),_c('path',{attrs:{"d":"M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z"}}),_c('circle',{attrs:{"cx":"259.02","cy":"67.21","r":"37.38","stroke":"#000","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"16"}})])])};
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
      component.__file = "walk-sharp.vue";

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
    

    
    var walkSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return walkSharp;

})));
