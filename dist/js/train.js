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
    name: "train-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"train-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('ellipse',{attrs:{"cx":"256","cy":"304","rx":"32.05","ry":"31.94","transform":"rotate(-45 256.001 304)"}}),_c('path',{attrs:{"d":"M352 32h-15a10 10 0 0 1-7.87-3.78A31.94 31.94 0 0 0 304 16h-96a32 32 0 0 0-26.11 13.52A6 6 0 0 1 177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0 0 73.77 19.73 16 16 0 0 0 6.46 0A753 753 0 0 0 333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 0 0-64-64zm-168 96h144a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8zm76.18 239.87a64 64 0 1 1 59.69-59.69 64.07 64.07 0 0 1-59.69 59.69z"}}),_c('path',{attrs:{"d":"M395.31 468.69L347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 0 0-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 0 0-23.16-.56l-48 48a16 16 0 1 0 22.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"train-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('ellipse',{attrs:{"cx":"256","cy":"304","rx":"32.05","ry":"31.94","transform":"rotate(-45 256.001 304)"}}),_c('path',{attrs:{"d":"M352 32h-15a10 10 0 0 1-7.87-3.78A31.94 31.94 0 0 0 304 16h-96a32 32 0 0 0-26.11 13.52A6 6 0 0 1 177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0 0 73.77 19.73 16 16 0 0 0 6.46 0A753 753 0 0 0 333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 0 0-64-64zm-168 96h144a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8zm76.18 239.87a64 64 0 1 1 59.69-59.69 64.07 64.07 0 0 1-59.69 59.69z"}}),_c('path',{attrs:{"d":"M395.31 468.69L347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 0 0-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 0 0-23.16-.56l-48 48a16 16 0 1 0 22.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62z"}})])])};
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
      component.__file = "train.vue";

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
    

    
    var train = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return train;

})));
