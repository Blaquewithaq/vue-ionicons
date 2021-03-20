<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-microsoft-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M31.87 30.58H244.7v212.81H31.87zM266.89 30.58H479.7v212.81H266.89zM31.87 265.61H244.7v212.8H31.87zM266.89 265.61H479.7v212.8H266.89z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="logo-microsoft-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M31.87 30.58H244.7v212.81H31.87zM266.89 30.58H479.7v212.81H266.89zM31.87 265.61H244.7v212.8H31.87zM266.89 265.61H479.7v212.8H266.89z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-microsoft-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

