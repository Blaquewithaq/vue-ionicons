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
    name: "radio-sharp-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"radio-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('ellipse',{attrs:{"cx":"256","cy":"256","rx":"36","ry":"35.99"}}),_c('path',{attrs:{"d":"M188.4 350.8l-14.62-16.44a117.91 117.91 0 0 1 0-156.71l14.62-16.43 32.87 29.24-14.62 16.43a73.93 73.93 0 0 0 0 98.25l14.62 16.44zM323.6 350.8l-32.89-29.22 14.62-16.44a73.93 73.93 0 0 0 0-98.25l-14.62-16.43 32.87-29.24 14.62 16.43a117.91 117.91 0 0 1 0 156.71z"}}),_c('path',{attrs:{"d":"M138.24 401.76l-15-16.06a189.85 189.85 0 0 1 0-259.4l15-16.07 32.14 30.05-15 16.06a145.88 145.88 0 0 0 0 199.32l15 16.06zM373.76 401.76l-32.14-30 15-16.06a145.88 145.88 0 0 0 0-199.32l-15-16.06 32.14-30 15 16.07a189.85 189.85 0 0 1 0 259.4z"}}),_c('path',{attrs:{"d":"M430.73 447l-32.79-29.33 14.66-16.39a218.2 218.2 0 0 0 0-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 0 1 0 349.22zM81.27 447L66.6 430.61a262.18 262.18 0 0 1 0-349.22L81.28 65l32.79 29.34-14.68 16.38a218.2 218.2 0 0 0 0 290.56l14.66 16.39z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"radio-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('ellipse',{attrs:{"cx":"256","cy":"256","rx":"36","ry":"35.99"}}),_c('path',{attrs:{"d":"M188.4 350.8l-14.62-16.44a117.91 117.91 0 0 1 0-156.71l14.62-16.43 32.87 29.24-14.62 16.43a73.93 73.93 0 0 0 0 98.25l14.62 16.44zM323.6 350.8l-32.89-29.22 14.62-16.44a73.93 73.93 0 0 0 0-98.25l-14.62-16.43 32.87-29.24 14.62 16.43a117.91 117.91 0 0 1 0 156.71z"}}),_c('path',{attrs:{"d":"M138.24 401.76l-15-16.06a189.85 189.85 0 0 1 0-259.4l15-16.07 32.14 30.05-15 16.06a145.88 145.88 0 0 0 0 199.32l15 16.06zM373.76 401.76l-32.14-30 15-16.06a145.88 145.88 0 0 0 0-199.32l-15-16.06 32.14-30 15 16.07a189.85 189.85 0 0 1 0 259.4z"}}),_c('path',{attrs:{"d":"M430.73 447l-32.79-29.33 14.66-16.39a218.2 218.2 0 0 0 0-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 0 1 0 349.22zM81.27 447L66.6 430.61a262.18 262.18 0 0 1 0-349.22L81.28 65l32.79 29.34-14.68 16.38a218.2 218.2 0 0 0 0 290.56l14.66 16.39z"}})])])};
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
      component.__file = "radio-sharp.vue";

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
    

    
    var radioSharp = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return radioSharp;

})));
