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
    name: "business-outline-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"business-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"data-fill":"none","stroke":"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32","d":"M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32zM320 192h112a32 32 0 0 1 32 32v256h0-160 0V208a16 16 0 0 1 16-16z"}}),_c('path',{attrs:{"d":"M98.08 431.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 191.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 191.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM258.08 431.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM258.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM258.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79z"}}),_c('ellipse',{attrs:{"cx":"256","cy":"176","rx":"15.95","ry":"16.03","transform":"rotate(-45 255.99 175.996)"}}),_c('path',{attrs:{"d":"M258.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM400 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM400 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM400 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM336 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM336 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM336 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"business-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"data-fill":"none","stroke":"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32","d":"M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32zM320 192h112a32 32 0 0 1 32 32v256h0-160 0V208a16 16 0 0 1 16-16z"}}),_c('path',{attrs:{"d":"M98.08 431.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 191.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM98.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 191.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM178.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM258.08 431.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM258.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM258.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79z"}}),_c('ellipse',{attrs:{"cx":"256","cy":"176","rx":"15.95","ry":"16.03","transform":"rotate(-45 255.99 175.996)"}}),_c('path',{attrs:{"d":"M258.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79zM400 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM400 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM400 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM336 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM336 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM336 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16z"}})])])};
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
      component.__file = "business-outline.vue";

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
    

    
    var businessOutline = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return businessOutline;

})));
