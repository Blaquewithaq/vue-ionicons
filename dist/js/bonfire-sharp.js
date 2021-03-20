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
    name: "bonfire-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"bonfire-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M199.89 336l-15.25-5.62a100.35 100.35 0 0 1-32-23.08c-13.93-14.9-29.29-40.71-23.38-79.11 5.2-33.73 44.2-74.21 69.34-97.87 27.24-25.62 66-65.85 64.15-99.15L262 16h15.18C328.53 16 384 53.62 384 114.41c0 45.57-22 77.61-68.91 106.9-8 5-16.44 9.66-25.42 14.53-30.63 16.62-75.29 49.83-85.73 85.32zM181.19 113.59C201 95 218.91 78.15 227.62 59.79q-2.76-1.68-5.7-3.09c-11.87-5.69-26.1-8.34-44.76-8.34h-16.94l.56 16.49c.47 14.06-6.06 22.51-14.33 33.21C137.8 109.26 128 121.94 128 141c0 10.23 1.29 18.76 4.2 26.36q3.5-5.31 7.61-10.63c12.19-15.73 27.05-29.68 41.38-43.14z"}}),_c('path',{attrs:{"d":"M330.34 239.85c-9.31 5.9-19 11.14-29.25 16.71-32.65 17.69-63.48 34.44-73.23 67.44l-.6 2a110.5 110.5 0 0 0 45.87 10c29.66 0 57.45-11.13 78.24-31.36A107.38 107.38 0 0 0 384 227a92.39 92.39 0 0 0-5.59-31c-11.35 16.18-27.14 30.58-48.07 43.85zM268.72 360h-25.44a4 4 0 0 0-3.92 3.22l-25.36 128a4 4 0 0 0 3.92 4.78h76.26a4 4 0 0 0 3.92-4.78l-25.41-128a4 4 0 0 0-3.97-3.22zM325.68 354.32l-11.36 11.36a4 4 0 0 0-.5 5.05l59.47 89.21a4 4 0 0 0 6.16.61l41.1-41.1a4 4 0 0 0-.61-6.16l-89.21-59.47a4 4 0 0 0-5.05.5zM388 336a4 4 0 0 0-4 4v8.61a4 4 0 0 0 3.34 3.95l88 14.66a4 4 0 0 0 4.66-3.94V340a4 4 0 0 0-4-4zM186.32 354.32l11.36 11.36a4 4 0 0 1 .5 5.05l-59.47 89.21a4 4 0 0 1-6.16.61l-41.1-41.1a4 4 0 0 1 .61-6.16l89.21-59.47a4 4 0 0 1 5.05.5zM124 336H36a4 4 0 0 0-4 4v23.28a4 4 0 0 0 4.66 3.94l88-14.66a4 4 0 0 0 3.34-3.95V340a4 4 0 0 0-4-4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"bonfire-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M199.89 336l-15.25-5.62a100.35 100.35 0 0 1-32-23.08c-13.93-14.9-29.29-40.71-23.38-79.11 5.2-33.73 44.2-74.21 69.34-97.87 27.24-25.62 66-65.85 64.15-99.15L262 16h15.18C328.53 16 384 53.62 384 114.41c0 45.57-22 77.61-68.91 106.9-8 5-16.44 9.66-25.42 14.53-30.63 16.62-75.29 49.83-85.73 85.32zM181.19 113.59C201 95 218.91 78.15 227.62 59.79q-2.76-1.68-5.7-3.09c-11.87-5.69-26.1-8.34-44.76-8.34h-16.94l.56 16.49c.47 14.06-6.06 22.51-14.33 33.21C137.8 109.26 128 121.94 128 141c0 10.23 1.29 18.76 4.2 26.36q3.5-5.31 7.61-10.63c12.19-15.73 27.05-29.68 41.38-43.14z"}}),_c('path',{attrs:{"d":"M330.34 239.85c-9.31 5.9-19 11.14-29.25 16.71-32.65 17.69-63.48 34.44-73.23 67.44l-.6 2a110.5 110.5 0 0 0 45.87 10c29.66 0 57.45-11.13 78.24-31.36A107.38 107.38 0 0 0 384 227a92.39 92.39 0 0 0-5.59-31c-11.35 16.18-27.14 30.58-48.07 43.85zM268.72 360h-25.44a4 4 0 0 0-3.92 3.22l-25.36 128a4 4 0 0 0 3.92 4.78h76.26a4 4 0 0 0 3.92-4.78l-25.41-128a4 4 0 0 0-3.97-3.22zM325.68 354.32l-11.36 11.36a4 4 0 0 0-.5 5.05l59.47 89.21a4 4 0 0 0 6.16.61l41.1-41.1a4 4 0 0 0-.61-6.16l-89.21-59.47a4 4 0 0 0-5.05.5zM388 336a4 4 0 0 0-4 4v8.61a4 4 0 0 0 3.34 3.95l88 14.66a4 4 0 0 0 4.66-3.94V340a4 4 0 0 0-4-4zM186.32 354.32l11.36 11.36a4 4 0 0 1 .5 5.05l-59.47 89.21a4 4 0 0 1-6.16.61l-41.1-41.1a4 4 0 0 1 .61-6.16l89.21-59.47a4 4 0 0 1 5.05.5zM124 336H36a4 4 0 0 0-4 4v23.28a4 4 0 0 0 4.66 3.94l88-14.66a4 4 0 0 0 3.34-3.95V340a4 4 0 0 0-4-4z"}})])])};
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
      component.__file = "bonfire-sharp.vue";

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
    

    
    var bonfireSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return bonfireSharp;

})));
