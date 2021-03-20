<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="mic-off-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"/><path d="M368 192v48a111.74 111.74 0 0 1-2.93 25.45L390.65 291a143.07 143.07 0 0 0 9.35-51v-48zM272 432v-48.89a143.11 143.11 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32zM336 236.37V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34"/><path d="M176 211.63V239a80.89 80.89 0 0 0 23.45 56.9 78.55 78.55 0 0 0 81 20.21z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="mic-off-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"/><path d="M368 192v48a111.74 111.74 0 0 1-2.93 25.45L390.65 291a143.07 143.07 0 0 0 9.35-51v-48zM272 432v-48.89a143.11 143.11 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32zM336 236.37V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34"/><path d="M176 211.63V239a80.89 80.89 0 0 0 23.45 56.9 78.55 78.55 0 0 0 81 20.21z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "mic-off-sharp-icon",
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

