<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="albums-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="64" y="176" width="384" height="256" rx="28.87" ry="28.87" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M144 80h224M112 128h288"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="albums-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="64" y="176" width="384" height="256" rx="28.87" ry="28.87" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M144 80h224M112 128h288"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "albums-outline-icon",
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

