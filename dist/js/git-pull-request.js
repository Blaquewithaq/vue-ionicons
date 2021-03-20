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
    name: "git-pull-request-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"git-pull-request-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M192 96a64 64 0 1 0-96 55.39v209.22a64 64 0 1 0 64 0V151.39A64 64 0 0 0 192 96zm-64-32a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM416 360.61V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 304 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM384 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"git-pull-request-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M192 96a64 64 0 1 0-96 55.39v209.22a64 64 0 1 0 64 0V151.39A64 64 0 0 0 192 96zm-64-32a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM416 360.61V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 304 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM384 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"}})])])};
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
      component.__file = "git-pull-request.vue";

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
    

    
    var gitPullRequest = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return gitPullRequest;

})));
