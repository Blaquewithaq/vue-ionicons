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
    name: "heart-dislike-circle-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"heart-dislike-circle-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm23.3 299.19c-4.41 3.2-9.16 6.55-14.31 10a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5v-.64a4 4 0 0 1 6.82-2.72l120.95 120.2a4 4 0 0 1-.46 6.07zm68 16.12a16 16 0 0 1-22.62 0l-176-176a16 16 0 0 1 22.62-22.62l176 176a16 16 0 0 1 .01 22.62zm-14.1-65.62a3.92 3.92 0 0 1-6 .37l-124-123.21A4 4 0 0 1 206 168h1.55c20.4 0 35 10.64 44.11 20.42a5.93 5.93 0 0 0 8.7 0c9.11-9.78 23.71-20.42 44.11-20.42 30.31 0 55.22 25.27 55.53 56.33.26 25.93-8.52 49.97-26.8 73.36z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"heart-dislike-circle-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm23.3 299.19c-4.41 3.2-9.16 6.55-14.31 10a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5v-.64a4 4 0 0 1 6.82-2.72l120.95 120.2a4 4 0 0 1-.46 6.07zm68 16.12a16 16 0 0 1-22.62 0l-176-176a16 16 0 0 1 22.62-22.62l176 176a16 16 0 0 1 .01 22.62zm-14.1-65.62a3.92 3.92 0 0 1-6 .37l-124-123.21A4 4 0 0 1 206 168h1.55c20.4 0 35 10.64 44.11 20.42a5.93 5.93 0 0 0 8.7 0c9.11-9.78 23.71-20.42 44.11-20.42 30.31 0 55.22 25.27 55.53 56.33.26 25.93-8.52 49.97-26.8 73.36z"}})])])};
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
      component.__file = "heart-dislike-circle.vue";

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
    

    
    var heartDislikeCircle = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return heartDislikeCircle;

})));
