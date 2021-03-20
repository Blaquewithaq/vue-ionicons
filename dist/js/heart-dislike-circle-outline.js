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
    name: "heart-dislike-circle-outline-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"heart-dislike-circle-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z","data-fill":"none","stroke":"#000","stroke-miterlimit":"10","stroke-width":"32"}}),_c('path',{attrs:{"d":"M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37-.31-31.06-25.22-56.33-55.53-56.33-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 0 1-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 0 0-2.75 6.84l124 123.21a3.92 3.92 0 0 0 5.95-.36zM158.84 221a4 4 0 0 0-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5 9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0 0 18 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 0 0 .46-6.07zM336 368a15.92 15.92 0 0 1-11.31-4.69l-176-176a16 16 0 0 1 22.62-22.62l176 176A16 16 0 0 1 336 368z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"heart-dislike-circle-outline-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z","data-fill":"none","stroke":"#000","stroke-miterlimit":"10","stroke-width":"32"}}),_c('path',{attrs:{"d":"M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37-.31-31.06-25.22-56.33-55.53-56.33-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 0 1-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 0 0-2.75 6.84l124 123.21a3.92 3.92 0 0 0 5.95-.36zM158.84 221a4 4 0 0 0-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5 9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0 0 18 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 0 0 .46-6.07zM336 368a15.92 15.92 0 0 1-11.31-4.69l-176-176a16 16 0 0 1 22.62-22.62l176 176A16 16 0 0 1 336 368z"}})])])};
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
      component.__file = "heart-dislike-circle-outline.vue";

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
    

    
    var heartDislikeCircleOutline = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return heartDislikeCircleOutline;

})));
