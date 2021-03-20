<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="wine-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96zM256 272v160" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 432H160"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M112 160h288"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="wine-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96zM256 272v160" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 432H160"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M112 160h288"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "wine-outline-icon",
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

