<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="wifi-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M332.69 320a115 115 0 0 0-152.8 0M393.74 259a201.26 201.26 0 0 0-274.92 0M448 191.52a288 288 0 0 0-383.44 0" data-fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="42"/><path d="M300.67 384L256 433l-44.34-49a56.73 56.73 0 0 1 88.92 0z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="wifi-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M332.69 320a115 115 0 0 0-152.8 0M393.74 259a201.26 201.26 0 0 0-274.92 0M448 191.52a288 288 0 0 0-383.44 0" data-fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="42"/><path d="M300.67 384L256 433l-44.34-49a56.73 56.73 0 0 1 88.92 0z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "wifi-sharp-icon",
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

