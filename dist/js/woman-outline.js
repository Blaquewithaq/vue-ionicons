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
    name: "woman-outline-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"woman-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M208 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24","data-fill":"none","stroke":"#000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),_c('path',{attrs:{"d":"M256 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V368M183 274a23.73 23.73 0 0 1-29.84 16.18h0a23.72 23.72 0 0 1-16.17-29.84l25-84.28A44.85 44.85 0 0 1 205 144h102a44.85 44.85 0 0 1 43 32.08l25 84.28a23.72 23.72 0 0 1-16.17 29.84h0a23.73 23.73 0 0 1-29.78-16.2","fill":"none","stroke":"#000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),_c('circle',{attrs:{"cx":"256","cy":"56","r":"40","fill":"none","stroke":"#000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),_c('path',{attrs:{"fill":"none","stroke":"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32","d":"M208 192l-48 160h192l-48-160"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"woman-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M208 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24","data-fill":"none","stroke":"#000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),_c('path',{attrs:{"d":"M256 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V368M183 274a23.73 23.73 0 0 1-29.84 16.18h0a23.72 23.72 0 0 1-16.17-29.84l25-84.28A44.85 44.85 0 0 1 205 144h102a44.85 44.85 0 0 1 43 32.08l25 84.28a23.72 23.72 0 0 1-16.17 29.84h0a23.73 23.73 0 0 1-29.78-16.2","fill":"none","stroke":"#000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),_c('circle',{attrs:{"cx":"256","cy":"56","r":"40","fill":"none","stroke":"#000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),_c('path',{attrs:{"fill":"none","stroke":"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32","d":"M208 192l-48 160h192l-48-160"}})])])};
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
      component.__file = "woman-outline.vue";

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
    

    
    var womanOutline = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return womanOutline;

})));
