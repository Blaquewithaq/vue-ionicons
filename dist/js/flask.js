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
    name: "flask-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"flask-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M452.32 365L327.4 167.12a48.07 48.07 0 0 1-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 64h16v77.48a47.92 47.92 0 0 1-7.41 25.63L59.68 365a74 74 0 0 0-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 0 0-2.5-75.79zM211.66 184.2A79.94 79.94 0 0 0 224 141.48V68a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v73.48a79.94 79.94 0 0 0 12.35 42.72l57.8 91.53a8 8 0 0 1-6.78 12.27H160.63a8 8 0 0 1-6.77-12.27z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"flask-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M452.32 365L327.4 167.12a48.07 48.07 0 0 1-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 64h16v77.48a47.92 47.92 0 0 1-7.41 25.63L59.68 365a74 74 0 0 0-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 0 0-2.5-75.79zM211.66 184.2A79.94 79.94 0 0 0 224 141.48V68a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v73.48a79.94 79.94 0 0 0 12.35 42.72l57.8 91.53a8 8 0 0 1-6.78 12.27H160.63a8 8 0 0 1-6.77-12.27z"}})])])};
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
      component.__file = "flask.vue";

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
    

    
    var flask = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return flask;

})));
