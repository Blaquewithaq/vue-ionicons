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
    name: "bug-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"bug-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M480 304.13v-32h-80V215.2c29.42-27.95 32-64.76 32-103.2V96h-32v16c0 28-1.86 48.15-9.9 63.84C368 128 324.32 112 256 112c-39.8 0-75.19 7.06-100.43 24.32-14.9 10.19-25.2 24.91-32.7 39.72C114 160.57 112 140.82 112 112V96H80v16c0 37.44 2.59 73.36 32 101.2v58.93H32v32l80-.13c0 19 3.7 53.09 10.39 69.69C96.6 396.76 80 422.31 80 464v16h32v-16c0-27.66 9.1-44.71 26.17-61.32C160 448 177 464 240 464V176h32v288c65 0 80-16 101.83-61.32C390.9 419.29 400 436.35 400 464v16h32v-16c0-41.68-16.6-67.23-42.39-90.31C396.3 357.09 400 323 400 304z"}}),_c('path',{attrs:{"d":"M256 32c-48.06 0-96 0-96 84 26.12-14 59.35-20 96-20 24.09 0 46.09 2.65 65.39 8 10.75 3 24.66 8.71 30.61 12 0-84-47.94-84-96-84z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"bug-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M480 304.13v-32h-80V215.2c29.42-27.95 32-64.76 32-103.2V96h-32v16c0 28-1.86 48.15-9.9 63.84C368 128 324.32 112 256 112c-39.8 0-75.19 7.06-100.43 24.32-14.9 10.19-25.2 24.91-32.7 39.72C114 160.57 112 140.82 112 112V96H80v16c0 37.44 2.59 73.36 32 101.2v58.93H32v32l80-.13c0 19 3.7 53.09 10.39 69.69C96.6 396.76 80 422.31 80 464v16h32v-16c0-27.66 9.1-44.71 26.17-61.32C160 448 177 464 240 464V176h32v288c65 0 80-16 101.83-61.32C390.9 419.29 400 436.35 400 464v16h32v-16c0-41.68-16.6-67.23-42.39-90.31C396.3 357.09 400 323 400 304z"}}),_c('path',{attrs:{"d":"M256 32c-48.06 0-96 0-96 84 26.12-14 59.35-20 96-20 24.09 0 46.09 2.65 65.39 8 10.75 3 24.66 8.71 30.61 12 0-84-47.94-84-96-84z"}})])])};
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
      component.__file = "bug-sharp.vue";

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
    

    
    var bugSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return bugSharp;

})));
