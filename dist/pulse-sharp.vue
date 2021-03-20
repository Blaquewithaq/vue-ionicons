<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="pulse-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M426 266a54.07 54.07 0 0 0-49.3 32h-24.84l-27-81a22 22 0 0 0-42 .92l-37.2 130.2-48-281.74a22 22 0 0 0-43-1.72L94.82 298H32v44h80a22 22 0 0 0 21.34-16.66L171.69 172l46.61 273.62A22 22 0 0 0 238.76 464H240a22 22 0 0 0 21.15-16l44.47-149.62 9.51 28.62A22 22 0 0 0 336 342h40.7a54 54 0 1 0 49.3-76z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="pulse-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M426 266a54.07 54.07 0 0 0-49.3 32h-24.84l-27-81a22 22 0 0 0-42 .92l-37.2 130.2-48-281.74a22 22 0 0 0-43-1.72L94.82 298H32v44h80a22 22 0 0 0 21.34-16.66L171.69 172l46.61 273.62A22 22 0 0 0 238.76 464H240a22 22 0 0 0 21.15-16l44.47-149.62 9.51 28.62A22 22 0 0 0 336 342h40.7a54 54 0 1 0 49.3-76z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "pulse-sharp-icon",
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

